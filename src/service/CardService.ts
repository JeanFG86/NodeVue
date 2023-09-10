import pgp from "pg-promise";
import Card from "../domain/entity/Card";
import CardRepository from "../domain/repository/CardRepository";
export default class CardService {
    constructor(readonly cardsRepository: CardRepository) {}

    async getCards(idColumn: number) {
        const cards = this.cardsRepository.findAllByIdColumn(idColumn);
        return cards;
    }
}
