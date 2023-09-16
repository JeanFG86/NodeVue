import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import BoardService from "../../src/service/BoardService";

describe("BoardService", () => {
    let connection: PgPromiseConnection; // Declare a variável connection com o tipo apropriado

    beforeAll(async () => {
        connection = new PgPromiseConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it("Should list cards", async () => {
        const boardRepository = new BoardRepositoryDatabase(connection);
        const boardService = new BoardService(boardRepository);
        const boards = await boardService.getBoards();
        expect(boards).toHaveLength(1);
        const [board] = boards;
        expect(board.name).toBe("Project 1");
    });
});
