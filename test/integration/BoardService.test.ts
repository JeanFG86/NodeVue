import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import BoardService from "../../src/service/BoardService";

describe("BoardService", () => {
    it("Should list cards", async () => {
        const connection = new PgPromiseConnection();
        const boardRepository = new BoardRepositoryDatabase(connection);
        const boardService = new BoardService(boardRepository);
        const boards = await boardService.getBoards();
        expect(boards).toHaveLength(1);
        const [board] = boards;
        expect(board.name).toBe("Project 1");
    });
});
