const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Socket = require('./socket');

class ChatServer {
    constructor() {
        // Express app
        this.app = express();
        // Port
        this.port = process.env.PORT;
        // Http server
        this.server = http.createServer( this.app );
        // Socket server Config
        this.io = socketio( this.server, { /* Config */ } );
    }

    middlewares() {
        // Method to deploy the public directory
        this.app.use(express.static(path.resolve( __dirname, '../public')));
    }

    configSockets() {
        new Socket(this.io);
    }

    // Method to initialize the server
    execute() {
        // Initialize the middlewares
        this.middlewares();
        // Initialize the sockets
        this.configSockets();
        // Initialize the server
        this.server.listen( this.port, () => {
            console.log('Server running on port: ', this.port);
        });
    }
}

module.exports = ChatServer;