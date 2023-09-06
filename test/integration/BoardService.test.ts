import BoardService from "../../src/service/BoardService";

describe("BoardService", () => {
    it("Should list cards", async () => {
        const boardService = new BoardService();
        const boards = await boardService.getBoards();
        expect(boards).toHaveLength(1);
        const [board] = boards;
        expect(board.name).toBe("Project 1");
    });
});
