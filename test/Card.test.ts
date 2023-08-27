import Card from "../src/Card";

describe("Must create a card", () => {
    it("Must create a card", () => {
        const card = new Card("Atividade 1", 3);
        expect(card.title).toBe("Atividade 1");
        expect(card.estimative).toBe(3);
    });
});
