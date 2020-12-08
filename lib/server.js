"use strict";
exports.__esModule = true;
var path = require("path");
var sockjs = require("sockjs");
var http = require("http");
var node_static = require("node-static");
//set up sockets, todo: make global & set up in ./sockets.ts
var socketCounter = 0;
var sockjs_echo = sockjs.createServer({ sockjs_url: "./sockjs.min.js" });
sockjs_echo.on('connection', function (socket) {
    if (!socket)
        return;
    if (!socket.remoteAddress) { /* SockJS sometimes fails to be able to cache the IP, port, and address from connection request headers. */
        try {
            socket.destroy();
        }
        catch (e) { }
        return;
    }
    var socketid = '' + (++socketCounter), ip = socket.remoteAddress;
    socket.on('data', function (message) {
        if (!message)
            return;
        if (message.length > (100 * 1024)) {
            console.log("Dropping client message " + message.length / 1024 + " KB...");
            console.log(message.slice(0, 160));
            return;
        }
        var pipeIndex = message.indexOf('|');
        if (pipeIndex < 0 /* || pipeIndex === message.length - 1 */)
            return;
        console.log(message);
    });
    socket.once('close', function () {
        console.log('... exit ...');
    });
});
var static_directory = new node_static.Server(path.join(__dirname, './'));
var server = http.createServer();
server.addListener('request', function (req, res) {
    static_directory.serve(req, res);
});
server.addListener('upgrade', function (req, res) {
    res.end();
});
sockjs_echo.installHandlers(server, { prefix: '/sockets' });
console.log(' [*] Listening on 0.0.0.0:8000');
server.listen(8000, '0.0.0.0');
