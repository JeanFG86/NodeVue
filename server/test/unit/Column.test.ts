import Column from "../../src/domain/entity/Column";

describe("Column", () => {
    it("Must create a column", () => {
        const column = new Column(1, 1, "Coluna A", true);
        expect(column.name).toBe("Coluna A");
        expect(column.hasEstimative).toBeTruthy();
    });

    it("Should not create a card without name", () => {
        expect(() => new Column(1, 1, "", true)).toThrow(
            new Error("Name is required")
        );
    });
});
