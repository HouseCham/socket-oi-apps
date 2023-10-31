const Band = require('./band');

/**
 * Class to represent a Band List
 */
class BandList {
    constructor() {
        this.bands = [
            new Band('Metallica'),
            new Band('Queen'),
            new Band('Héroes del Silencio'),
            new Band('Bon Jovi'),
            new Band('Blink 182')
        ];
    }
    /**
     * Function to add a new Band to the list
     * @param {string} name 
     * @returns 
     */
    addBand(name) {
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }
    /**
     * Function to delete a specific Band from the list by id
     * @param {number} id 
     */
    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
    }
    /**
     * Function to return the list of Bands
     * @returns {Band[]} List of Bands
     */
    getBandList() {
        return this.bands;
    }
    /**
     * Function to increase the votes of a specific Band by id
     * @param {number} id 
     */
    increaseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes++;
            }
            return band;
        });
    }
    /**
     * Function to decrease the votes of a specific Band by id
     * @param {number} id 
     */
    decreaseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id && band.votes > 0) {
                band.votes--;
            }
            return band;
        });
    }
    /**
     * Function to change the name of a specific Band by its id
     * @param {number} id 
     * @param {string} newName 
     */
    changeBandName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        });
    }
}

module.exports = BandList;