import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import CardRepositoryDtabase from "../../src/infra/repository/CardRepositoryDatabase";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import BoardService from "../../src/service/BoardService";

describe("BoardService", () => {
    let connection: PgPromiseConnection;

    beforeAll(async () => {
        connection = new PgPromiseConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it("Should list cards", async () => {
        const boardRepository = new BoardRepositoryDatabase(connection);
        const columnRepository = new ColumnRepositoryDatabase(connection);
        const cardRepository = new CardRepositoryDtabase(connection);
        const boardService = new BoardService(
            boardRepository,
            columnRepository,
            cardRepository
        );
        const boards = await boardService.getBoards();
        expect(boards).toHaveLength(1);
        const [board] = boards;
        expect(board.name).toBe("Project 1");
    });

    it("Should return a card", async () => {
        const boardRepository = new BoardRepositoryDatabase(connection);
        const columnRepository = new ColumnRepositoryDatabase(connection);
        const cardRepository = new CardRepositoryDtabase(connection);
        const boardService = new BoardService(
            boardRepository,
            columnRepository,
            cardRepository
        );
        const board = await boardService.getBoard(1);
        expect(board.name).toBe("Project 1");
        expect(board.columns).toHaveLength(3);
        const [a, b, c] = board.columns;
        expect(a.name).toBe("Column A");
        expect(b.name).toBe("Column B");
        expect(c.name).toBe("Column C");
        expect(a.estimative).toBe(6);
        expect(b.estimative).toBe(0);
        expect(c.estimative).toBe(0);
        expect(board.estimative).toBe(6);
    });
});
