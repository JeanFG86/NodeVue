import axios from "axios";

describe("API", () => {
    it("Should return boards via api", async () => {
        const response = await axios({
            url: "http://localhost:3000/boards",
            method: "get",
        });
        const boards = response.data;
        expect(boards).toHaveLength(1);
        const [board] = boards;
        expect(board.name).toBe("Project 1");
        expect(board.idBoard).toBe(1);
    });

    it("Should return a board via api", async () => {
        const response = await axios({
            url: "http://localhost:3000/boards/1",
            method: "get",
        });
        const board = response.data;
        expect(board.name).toBe("Project 1");
        expect(board.idBoard).toBe(1);
    });

    it("Should return columns of a board via api", async () => {
        const response = await axios({
            url: "http://localhost:3000/boards/1/columns",
            method: "get",
        });
        const columns = response.data;
        expect(columns).toHaveLength(3);
        const [column1, column2, column3] = columns;
        expect(column1.name).toBe("Column A");
        expect(column1.idColumn).toBe(1);
        expect(column2.name).toBe("Column B");
        expect(column3.name).toBe("Column C");
    });

    it("Should save a column via api", async () => {
        const responseSave = await axios({
            url: "http://localhost:3000/boards/1/columns",
            method: "post",
            data: {
                idBoard: 1,
                name: "Todo",
                hasEstimative: true,
            },
        });
        const idColumn = responseSave.data;
        const responseGet = await axios({
            url: `http://localhost:3000/boards/1/columns/${idColumn}`,
            method: "get",
        });
        const column = responseGet.data;
        expect(column.name).toBe("Todo");
        await axios({
            url: `http://localhost:3000/boards/1/columns/${idColumn}`,
            method: "delete",
        });
    });

    it("Should return cards of a column via api", async () => {
        const response = await axios({
            url: "http://localhost:3000/boards/1/columns/1/cards",
            method: "get",
        });
        const cards = response.data;
        expect(cards).toHaveLength(3);
        const [card1, card2, card3] = cards;
        expect(card1.title).toBe("Activity 1");
        expect(card2.title).toBe("Activity 2");
        expect(card3.title).toBe("Activity 3");
    });
});
