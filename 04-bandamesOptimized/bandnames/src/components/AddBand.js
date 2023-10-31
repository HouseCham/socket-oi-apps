import React, { useState } from 'react'

/**
 * Component to add a new band
 */
const AddBand = ({ handleAddNewBand }) => {

  const [bandName, setBandName] = useState('');

  const handleAddBand = () => {
    if (bandName.trim().length === 0) return;
    handleAddNewBand(bandName);
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
}

export default AddBand