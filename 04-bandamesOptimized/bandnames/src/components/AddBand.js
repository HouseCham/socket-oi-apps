import React, { useState, useContext } from 'react';
import { SocketContext } from '../context/SocketContext';

/**
 * Component to add a new band
 */
const AddBand = () => {
  const [bandName, setBandName] = useState('');
  const { socket } = useContext(SocketContext);
  /**
   * Function to handle add band button click
   */
  const handleAddBand = () => {
    if (bandName.trim().length === 0) return;
    socket.emit('add-band', bandName);
    setBandName('');
  };
  return (
    <>
      <h3>Agregar banda</h3>
      <form>
        <input
          type="text"
          placeholder="Nombre de la banda"
          className='form-control'
          value={bandName}
          onChange={(event) => setBandName(event.target.value)}
        />
        <button
          type='button'
          className='btn btn-primary'
          onClick={handleAddBand}
        >
          Agregar
        </button>
      </form>
    </>
  )
};

export default AddBand;