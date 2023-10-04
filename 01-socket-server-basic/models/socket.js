class Socket {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => { 
            // Listen event: chat-message-client
            socket.on('chat-message-client', (data) => {
                console.log(data);
                this.io.emit('chat-message-server', data);
            });
        });
    }
}

module.exports = Socket;