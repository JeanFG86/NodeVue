import Column from "../../src/domain/entity/Column";
import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import ColumnService from "../../src/service/ColumnService";

describe("ColumnService", () => {
    let connection: PgPromiseConnection;

    beforeAll(async () => {
        connection = new PgPromiseConnection();
    });

    afterAll(async () => {
        await connection.close();
    });

    it("Should list columns", async () => {
        const columnRepository = new ColumnRepositoryDatabase(connection);
        const columnService = new ColumnService(columnRepository);
        const columns = await columnService.getColumns(1);
        expect(columns).toHaveLength(3);
    });

    // it("Should save a column", async () => {
    //     const columnRepository = new ColumnRepositoryDatabase(connection);
    //     const columnService = new ColumnService(columnRepository);
    //     const output = await columnService.saveColumn(new Column("Todo", true));
    //     const column = await columnService.getColumn(output.idColumn);
    //     expect(column.name).toBe("Todo");
    // });
});
