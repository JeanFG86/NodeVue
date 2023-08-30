import Card from "../../src/entity/Card";

describe("Card", () => {
    it("Should create a card", () => {
        const card = new Card("Atividade 1", 3);
        expect(card.title).toBe("Atividade 1");
        expect(card.estimative).toBe(3);
    });

    it("Should not create a card without title", () => {
        expect(() => new Card("", 3)).toThrow(new Error("Title is required"));
    });

    it("Should not create a card with negative estimative", () => {
        expect(() => new Card("Atividade 1", -3)).toThrow(
            new Error("Estimative must be positive")
        );
    });
});
