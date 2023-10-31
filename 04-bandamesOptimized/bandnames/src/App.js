
import React, { useContext } from "react";
import AddBand from "./components/AddBand";
import BandList from "./components/BandList";
import { SocketContext } from "./context/SocketContext";

/**
 * Main component
 */
function App() {
  const { isOnline } = useContext(SocketContext);

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
          <BandList />
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
