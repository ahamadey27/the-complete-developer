import { routeHello, routeAPINames } from "./routes.js";
import express from "express";

const server = express(); //instantiate application 
//const express = require('express'); //load express package into file 
const port = 3000; //constant for the port to use 

server.get('/hello', function (req, res){
    const response = routeHello(req, res);
    res.send(response);
});

server.get("/api/names", async function (req, res) {
    let response;
    try {
        response = await routeAPINames(req, res);
    } catch (err) {
        console.log(err);
    }
    // send back the fetched response (or an error message)
    res.send(response);
});

server.listen(port, function () {
    console.log('listening on ' + port);
});