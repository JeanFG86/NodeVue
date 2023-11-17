import Card from "../../domain/entity/Card";
import CardRepository from "../../domain/repository/CardRepository";
import Connection from "../database/Connection";

export default class CardRepositoryDtabase implements CardRepository {
    constructor(readonly connection: Connection) {}

    async findAllByIdColumn(idColumn: number): Promise<Card[]> {
        const cardsData = await this.connection.query(
            "select id_column, id_card, title, estimative, color from j.card where id_column = $1 order by index",
            [idColumn]
        );
        const cards: Card[] = [];
        for (const cardData of cardsData) {
            cards.push(
                new Card(
                    cardData.id_column,
                    cardData.id_card,
                    cardData.title,
                    cardData.estimative,
                    cardData.color
                )
            );
        }
        return cards;
    }
}
