import express from "express";
import pgp from "pg-promise";
const app = express();

const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
app.get("/boards", async (req, res) => {
    const boards = await connection.query("select * from j.board", []);
    console.log(boards);
    res.json(boards);
});
app.listen(3000);
