import Board from "../../domain/entity/Board";
import BoardRepository from "../../domain/repository/BoardRepository";

export default class BoardRepositoryMemory implements BoardRepository {
    boards: Board[];

    constructor() {
        this.boards = [new Board("Project 1")];
    }

    async findAll(): Promise<Board[]> {
        return this.boards;
    }
}
