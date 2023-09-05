import Board from "../../src/entity/Board";

describe("Board", () => {
    it("Should create a board", () => {
        const board = new Board("Project1");
        board.estimative = 6;
        expect(board.name).toBe("Project1");
        expect(board.estimative).toBe(6);
    });

    it("Should not create a board without name", () => {
        expect(() => new Board("")).toThrow(new Error("Name is required"));
    });
});
