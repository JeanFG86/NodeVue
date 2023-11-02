import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";

export default class BoardRepositoryMemory implements BoardRepository {
    boards: Board[];

    constructor() {
        this.boards = [new Board(1, "Project 1")];
    }
    get(idBoard: number): Promise<Board> {
        throw new Error("Method not implemented.");
    }

    async findAll(): Promise<Board[]> {
        return this.boards;
    }
}
