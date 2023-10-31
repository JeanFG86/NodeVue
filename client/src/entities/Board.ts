import Column from "./Column";

export default class Board {
  columns: any;
  constructor(readonly name: string) {
    this.columns = [];
  }

  addColumn(columnName: string, hasEstimative: boolean) {
    this.columns.push(new Column(columnName, hasEstimative));
  }

  getEstimative() {
    return 0;
  }
}
