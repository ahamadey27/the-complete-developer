const express = require('express'); //load express package into file 
const server = express(); //instantiate application 
const port = 3000; //constant for the port to use 

server.get('/hello', function (req, res){
    res.send('First Program String');
});

server.listen(port, function () {
    console.log('listening on ' + port);
});