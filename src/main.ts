import express from "express";
import pgp from "pg-promise";
import Board from "./entity/Board";
import Column from "./entity/Column";
import Card from "./entity/Card";
import BoardService from "./service/BoardService";
import ColumnService from "./service/ColumnService";
const app = express();

const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
app.get("/boards", async (req, res) => {
    const boardService = new BoardService();
    const boards = await boardService.getBoards();
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async (req, res) => {
    const columnService = new ColumnService();
    const columns = await columnService.getColumns(
        parseInt(req.params.idBoard)
    );
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
