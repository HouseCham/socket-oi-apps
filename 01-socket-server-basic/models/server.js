const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

class ChatServer {
    constructor() {
        // Express app
        this.app = express();
        // Port
        this.port = 3000;
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
        
    }

    // Method to initialize the server
    execute() {
        // Initialize the middlewares
        this.middlewares();
        // Initialize the server
        this.server.listen( this.port, () => {
            console.log('Server running on port: ', this.port);
        });
    }
}

module.exports = ChatServer;