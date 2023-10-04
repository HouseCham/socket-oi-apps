class Socket {
    constructor(io) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => { 
            // Listen event
            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit('message-from-server', data);
            });
        });
    }
}

module.exports = Socket;