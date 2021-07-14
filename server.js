const dotenv  = require('dotenv');
dotenv.config();
var http = require('http');
var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});

server.listen(process.env.PORT); //3 - listen for any incoming requests

console.log('Node.js web server at port ${process.env.PORT} is running..')