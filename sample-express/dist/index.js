import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express from "express";
const server = express(); // instantiate application.. const express = require('express'); //load express package into file (JS note)
const port = 3000; // constant for the port to use
server.get('/hello', (req, res) => {
    const response = routeHello(); // call route handler for /hello endpoint
    res.send(response);
});
server.get("/api/names", async function (_req, res) {
    // This route will create an API endpoint page that will list usernames and IDs
    let response;
    try {
        // delegate to the async route function which uses fetch under the hood
        response = await routeAPINames();
    }
    catch (err) {
        // log any fetching/parsing errors
        console.log(err);
        response = "Error";
    }
    // send back the fetched response (or an error message)
    res.send(response);
});
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
server.listen(port, function () {
    console.log('listening on ' + port);
});
