import Card from "../../src/domain/entity/Card";

describe("Card", () => {
    it("Should create a card", () => {
        const card = new Card(1, 1, "Atividade 1", 3);
        expect(card.title).toBe("Atividade 1");
        expect(card.estimative).toBe(3);
    });

    it("Should not create a card without title", () => {
        expect(() => new Card(1, 1, "", 3)).toThrow(
            new Error("Title is required")
        );
    });

    it("Should not create a card with negative estimative", () => {
        expect(() => new Card(1, 1, "Atividade 1", -3)).toThrow(
            new Error("Estimative must be positive")
        );
    });
});
