import pgp from "pg-promise";
import Board from "../entity/Board";
export default class BoardService {
    constructor() {}

    async getBoards() {
        const connection = pgp()(
            "postgres://postgres:123456@localhost:5432/app"
        );
        const boardsData = await connection.query(
            "select id_board, name from j.board",
            []
        );
        const boards: Board[] = [];
        for (const boardData of boardsData) {
            const cardsData = await connection.query(
                "select * from j.card join j.column using (id_column) where id_board = $1",
                [boardData.id_board]
            );
            let estimative = 0;
            for (const cardData of cardsData) {
                estimative += cardData.estimative;
            }
            const board = new Board(boardData.name);
            board.estimative = estimative;
            boards.push(board);
        }
        await connection.$pool.end();
        return boards;
    }
}
