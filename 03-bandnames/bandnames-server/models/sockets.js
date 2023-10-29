const BandList = require('./band-list');

/**
 * Class to build socket configuration
 */
class Sockets {

    constructor( io ) {
        this.io = io;
        this.bandList = new BandList();
        this.socketEvents();
    }
    /**
     * Function to manage different socket events
     */
    socketEvents() {
        // On client connection
        this.io.on('connection', ( socket ) => {
            console.log('Client connected');
            // Emit to the client the list of bands
            socket.emit('curent-band-list', this.bandList.getBandList());
        });
    }
}


module.exports = Sockets;