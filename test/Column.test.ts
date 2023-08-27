import Column from "../src/Column";

describe("Must create a column", () => {
    it("Must create a column", () => {
        const column = new Column("Coluna A", true);
        expect(column.name).toBe("Coluna A");
        expect(column.hasEstimative).toBeTruthy();
    });
});
