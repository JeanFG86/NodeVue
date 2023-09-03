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
        expect(column2.name).toBe("Column B");
        expect(column3.name).toBe("Column C");
    });
});
