import Column from "../../src/domain/Column";

describe("Column", () => {
    it("Must create a column", () => {
        const column = new Column("Coluna A", true);
        expect(column.name).toBe("Coluna A");
        expect(column.hasEstimative).toBeTruthy();
    });

    it("Should not create a card without name", () => {
        expect(() => new Column("", true)).toThrow(
            new Error("Name is required")
        );
    });
});
