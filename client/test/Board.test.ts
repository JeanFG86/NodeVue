import Board from "../src/entities/Board";

test("Should make a board", function () {
  const board = new Board("Projeto 1");
  expect(board.columns).toHaveLength(0);
  expect(board.name).toBe("Projeto 1");
});
