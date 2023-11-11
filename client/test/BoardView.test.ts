import { mount } from "@vue/test-utils";
//@ts-ignore
import BoardViewVue from "../src/views/BoardView.vue";
import BoardService from "../src/services/BoardService";
import Board from "../src/entities/Board";

function sleep() {
  return new Promise((resolve, reject) => {
    setImmediate(() => {
      resolve(true);
    });
  });
}

test("Should test board view", async function () {
  const boardService: BoardService = {
    async getBoard(idBoard: number) {
      const board = new Board(1, "Projeto 1");
      board.addColumn("Todo", true);
      board.addColumn("Doing", true);
      board.addColumn("Done", false);
      board.addCard("Todo", "Atividade 1", 3);
      board.addCard("Todo", "Atividade 2", 2);
      board.addCard("Todo", "Atividade 3", 1);
      return board;
    },
  };
  const wrapper = mount(BoardViewVue, {
    global: {
      provide: {
        boardService,
      },
    },
  });
  await sleep();
  expect(wrapper.get("#estimative").text()).toBe("6");
});
