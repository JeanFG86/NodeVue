import Board from "../src/entities/Board";

test("Should make a board", function () {
  const board = new Board(1, "Projeto 1");
  expect(board.columns).toHaveLength(0);
  expect(board.name).toBe("Projeto 1");
});

test("Should make a board with 3 columns", function () {
  const board = new Board(1, "Projeto 1");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  expect(board.columns).toHaveLength(3);
  expect(board.getEstimative()).toBe(0);
});

test("Should make a board with 3 columns and cards", function () {
  const board = new Board(1, "Projeto 1");
  board.addColumn("Todo", true);
  board.addColumn("Doing", true);
  board.addColumn("Done", false);
  board.addCard("Todo", "Atividade 1", 3);
  board.addCard("Todo", "Atividade 2", 2);
  board.addCard("Todo", "Atividade 3", 1);
  expect(board.getEstimative()).toBe(6);
});
