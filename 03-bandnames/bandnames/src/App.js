
import React, { useEffect, useState } from "react";
import AddBand from "./components/AddBand";
import BandList from "./components/BandList";
import io from "socket.io-client";

/**
 * Function to connect to Socket Server
 * @returns {SocketIOClient.Socket} SocketIOClient.Socket
 */
const connectSocketServer = () => {
  return io.connect('http://localhost:8080', {
    // to specify the type of transport/connection to the server
    transports: ['websocket']
  });
};

/**
 * Main component
 */
function App() {
  const [socket] = useState(connectSocketServer());
  const [isOnline, setIsOnline] = useState(false);
  const [bandList, setBandList] = useState([]);

  /**
   * Function to increment the votes of a band
   * @param {number} id 
   */
  const handleVoteBtnClick = (id) => {
    socket.emit('vote-band', id);
  };
  /**
   * Function to delete a band by its id
   * @param {number} id 
   */
  const handleDeleteBand = (id) => {
    socket.emit('delete-band', id);
  };
  /**
   * Function to change the name of a band
   * @param {string} newBandName 
   * @param {number} id 
   */
  const handleBandNameChange = (id, newBandName) => {
    socket.emit('update-band-name', id, newBandName);
  };
  /**
   * Function to add a new band to the list
   * @param {string} bandName 
   */
  const handleAddNewBand = (bandName) => {
    socket.emit('add-band', bandName);
  };

  useEffect(() => {
    setIsOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on('connect', () => {
      setIsOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setIsOnline(false);
    });
  }, [socket]);

  useEffect(() => {
    socket.on('current-band-list', (bands) => {
      setBandList(bands);
    });
  }, [socket]);

  return (
    <div className="container">
      {/* Service Status */}
      <div className="alert">
        <p>
          Service status:
          {
            isOnline
              ? <span className="text-success"> ONLINE</span>
              : <span className="text-danger"> OFFLINE</span>
          }
        </p>
      </div>

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        {/* Band Chart */}
        <div className="col-8">
          <BandList
            data={bandList}
            handleVoteBtnClick={handleVoteBtnClick}
            handleDeleteBand={handleDeleteBand}
            handleBandNameChange={handleBandNameChange}
          />
        </div>
        {/* Band Add */}
        <div className="col-4">
          <AddBand 
            handleAddNewBand={handleAddNewBand}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
