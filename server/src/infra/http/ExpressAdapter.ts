import express, { Request, Response } from "express";
import Http from "./Http";

export default class ExpressAdapter implements Http {
    app: any;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(function (req: any, res: any, next: any) {
            res.set("access-control-allow-origin", "*");
            res.set("access-control-allow-headers", "*");
            res.set("access-control-allow-methods", "*");
            next();
        });
    }

    route(method: string, url: string, callback: Function): void {
        this.app[method](url, async function (req: Request, res: Response) {
            const output = await callback(req.params, req.body);
            res.json(output);
        });
    }
    listen(port: number): void {
        this.app.listen(port);
    }
}
