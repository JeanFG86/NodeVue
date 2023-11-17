import DomainEvent from "../events/DomainEvent";
import BaseEntity from "./BaseEntity";
import Card from "./Card";
import Column from "./Column";

export default class Board extends BaseEntity {
  selectedColumn?: Column;
  selectedCard?: Card;
  columns: Column[];

  constructor(readonly idBoard: number, readonly name: string) {
    super();
    this.columns = [];
  }

  addColumn(columnName: string, hasEstimative: boolean) {
    this.columns.push(new Column(columnName, hasEstimative));
    this.publish(
      new DomainEvent("addColumn", {
        idBoard: this.idBoard,
        name: columnName,
        hasEstimative,
      })
    );
  }

  addCard(columnName: string, cardTitle: string, cardEstimative: number) {
    const column = this.columns.find(
      (column: any) => column.name === columnName
    );
    if (!column) throw new Error("Column not found");
    column.addCard(new Card(cardTitle, cardEstimative));
  }

  increaseEstimative(card: Card) {
    card.increaseEstimative();
  }

  selectCard(column: Column, card: Card) {
    this.selectedColumn = column;
    this.selectedCard = card;
  }

  resetCard() {
    this.selectedColumn = undefined;
    this.selectedCard = undefined;
  }

  moveCard(column: Column) {
    console.log(`${this.selectedCard?.idCard}`);
    if (!this.selectedColumn || !this.selectedCard || !this.selectedCard.idCard)
      return;
    if (this.selectedColumn === column) return;
    console.log("teta");
    this.selectedColumn.deleteCard(this.selectedCard.idCard);
  }

  getEstimative() {
    return this.columns.reduce((total: number, column: Column) => {
      total += column.getEstimative();
      return total;
    }, 0);
  }
}
