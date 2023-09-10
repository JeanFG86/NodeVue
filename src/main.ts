import express from "express";
import BoardService from "./service/BoardService";
import ColumnService from "./service/ColumnService";
import CardService from "./service/CardService";
import PgPromiseConnection from "./infra/database/PgPromiseConnection";
const app = express();

const connection = new PgPromiseConnection();

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
    const cardService = new CardService();
    const cards = await cardService.getCards(parseInt(req.params.idColumn));
    res.json(cards);
});
app.listen(3000);
