import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, { Request, Response } from "express";

const server = express(); // instantiate application.. const express = require('express'); //load express package into file (JS note)
const port = 3000; // constant for the port to use

server.get('/hello', (req: Request, res: Response) => {
    const response = routeHello(); // call route handler for /hello endpoint
    res.send(response);
});

server.get("/api/names",
    async function (_req: Request, res: Response): Promise<void> {
        // This route will create an API endpoint page that will list usernames and IDs
        let response: string;
        try {
            // delegate to the async route function which uses fetch under the hood
            response = await routeAPINames();
        }
        catch(err) {
            // log any fetching/parsing errors
            console.log(err);
            response = "Error";
        }
        // send back the fetched response (or an error message)
        res.send(response);
    }
);

server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});

server.listen(port, function (): void {
    console.log('listening on ' + port);
})