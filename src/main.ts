import express from "express";
const app = express();
app.get("/boards", (req, res) => {
    const board = [{ name: "Projeto 1" }];
});
app.listen(3000);
