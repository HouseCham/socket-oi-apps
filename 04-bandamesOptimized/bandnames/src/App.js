
import React, { useEffect, useState } from "react";
import AddBand from "./components/AddBand";
import BandList from "./components/BandList";
import { useSocket } from "./hooks/useSocket";

/**
 * Main component
 */
function App() {
  const [bandList, setBandList] = useState([]);
  const { socket, isOnline } = useSocket('http://localhost:8080');
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
          <AddBand />
        </div>
      </div>
    </div>
  );
}

export default App;
