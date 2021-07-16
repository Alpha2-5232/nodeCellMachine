const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set("port", process.env.port);
app.use("/static", express.static(__dirname + "/static"));

// Routing
app.get("/", function (request, response) {
    response.sendFile(path.join(__dirname + "/static/index.html"));
});

// Starts the server.
server.listen(process.env.port, function () {
    console.log("Starting server on port " + process.env.port);
});

// Add the WebSocket handlers
io.on("connection", function (socket) {});

setInterval(function () {
    io.sockets.emit("message", "hi!");
}, 1000);
