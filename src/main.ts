import express from "express";
import pgp from "pg-promise";
import Board from "./entity/Board";
import Column from "./entity/Column";
import Card from "./entity/Card";
const app = express();

const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
app.get("/boards", async (req, res) => {
    const boardsData = await connection.query("select name from j.board", []);
    const boards: Board[] = [];
    for (const boardData of boardsData) {
        boards.push(new Board(boardData.name));
    }
    console.log(boards);
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async (req, res) => {
    const columnsData = await connection.query(
        "select name, has_estimative from j.column where id_board = $1",
        [req.params.idBoard]
    );
    const columns: Column[] = [];
    for (const columnData of columnsData) {
        columns.push(new Column(columnData.name, columnData.has_estimative));
    }
    console.log(columns);
    res.json(columns);
});
app.get("/boards/:idBoard/columns/:idColumn/cards", async (req, res) => {
    const cardsData = await connection.query(
        "select title, estimative from j.card where id_column = $1",
        [req.params.idColumn]
    );
    const cards: Card[] = [];
    for (const cardData of cardsData) {
        cards.push(new Card(cardData.title, cardData.estimative));
    }
    console.log(cards);
    res.json(cards);
});
app.listen(3000);
