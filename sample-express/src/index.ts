import { routeHello, routeAPINames, routeWeather } from "../routes.js";
import express, { Request, response, Response } from "express";

const server = express();
const port = 3000;

server.get('/hello', (req: Request, res: Response) => {
    const response = routeHello();
    res.send(response);
});

server.get("/api/names",
    async function (_req: Request, res: Response): Promise<void> {
        let response: string;
        try {
            response = await routeAPINames();
        }
        catch(err) {
            console.log("Error");
        }
    }
);

server.get(
    "api/weather/:zipcode",
    function (req: Request, res: Response): void {
        const response = routeWeather ({zipcode: req.params.zipcode});
        res.send(response);
    }
);

server.listen(port, function (): void {
    console.log("Listening on " + port);
})