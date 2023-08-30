import axios from "axios";

describe("API", () => {
    it("Should return boards via api", async () => {
        const response = await axios({
            url: "http://localhost:3000/boards",
            method: "get",
        });
        const boards = response.data;
        expect(boards).toHaveLength(1);
    });
});
