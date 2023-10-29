import React from 'react'

/**
 * Component to add a new band
 */
const AddBand = () => {
  return (
    <>
        <h3>Agregar banda</h3>
        <form>
            <input
                type="text"
                placeholder="Nombre de la banda"
                className='form-control'
            />
        </form>
    </>
  )
}

export default AddBand