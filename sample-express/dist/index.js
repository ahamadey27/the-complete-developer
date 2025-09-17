import { routeHello, routeAPINames, routeWeather } from "../routes.js";
import express from "express";
const server = express();
const port = 3000;
server.get('/hello', (req, res) => {
    const response = routeHello();
    res.send(response);
});
server.get("/api/names", async function (_req, res) {
    let response;
    try {
        response = await routeAPINames();
    }
    catch (err) {
        console.log("Error");
    }
});
server.get("api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, function () {
    console.log("Listening on " + port);
});
