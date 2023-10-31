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
            // Emit to the client the list of bands
            socket.emit('current-band-list', this.bandList.getBandList());

            // Vote band
            socket.on('vote-band', (id) => {
                this.bandList.increaseVotes(id);
                // Emit to all clients the updated list of bands
                this.io.emit('current-band-list', this.bandList.getBandList());
            });
            // Delete band
            socket.on('delete-band', (id) => {
                this.bandList.removeBand(id);
                // Emit to all clients the updated list of bands
                this.io.emit('current-band-list', this.bandList.getBandList());
            });
            // Change band name
            socket.on('update-band-name', (id, name) => {
                this.bandList.changeBandName(id, name);
                // Emit to all clients the updated list of bands
                this.io.emit('current-band-list', this.bandList.getBandList());
            });
            // Add band
            socket.on('add-band', (name) => {
                this.bandList.addBand(name);
                // Emit to all clients the updated list of bands
                this.io.emit('current-band-list', this.bandList.getBandList());
            });
        });
    }
}


module.exports = Sockets;