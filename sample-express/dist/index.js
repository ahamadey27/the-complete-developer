import express from "express";
import { routeHello, routeAPINames } from "./routes.js";
const server = express();
const port = 3000;
server.get('/hello', (req, res) => {
    const response = routeHello();
    res.send(response);
});
server.get('/api/names', async (req, res) => {
    try {
        const response = await routeAPINames();
        res.send(response);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
server.listen(port, () => {
    console.log('listening on ' + port);
});
