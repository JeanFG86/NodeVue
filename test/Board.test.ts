import Board from "../src/Board";

describe("must create a board", () => {
  it("must create a board", () => {
    const board = new Board("Project1");
    expect(board.name).toBe("Project1");
  });
});
