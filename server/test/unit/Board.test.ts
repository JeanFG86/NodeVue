import Board from "../../src/domain/entity/Board";

describe("Board", () => {
    it("Should create a board", () => {
        const board = new Board("Project1");
        expect(board.name).toBe("Project1");
    });

    it("Should not create a board without name", () => {
        expect(() => new Board("")).toThrow(new Error("Name is required"));
    });
});