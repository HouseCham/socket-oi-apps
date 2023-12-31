import React, { useEffect, useState } from 'react'

/**
 * Component to list all bands
 */
const BandList = ({ data, handleVoteBtnClick, handleDeleteBand, handleBandNameChange }) => {

    const [bands, setBands] = useState(data);

    useEffect(() => {
        setBands(data);
    }, [data]);
    /**
     * Function to handle band name change
     * @param {React.ChangeEvent<HTMLInputElement>} event 
     * @param {number} id 
     */
    const handleBandNameOnChange = (event, id) => {
        const newBandName = event.target.value;
        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = newBandName;
            }
            return band;
        }));
    };
    /**
     * Function to handle when bandname input loses focus
     * @param {number} id 
     * @param {string} bandName 
     */
    const handleBandOnBlur = (id, bandName) => {
        // TODO: send information to websocket server
        handleBandNameChange(id, bandName);
    };

    /**
     * Functional component to render table rows
     */
    const createRows = () => {
        return (
            <>
                {
                    bands.map(band => (
                        <tr key={band.id}>
                            <td>
                                <button type='button' className="btn btn-primary" onClick={ () => handleVoteBtnClick(band.id) }>
                                    +1
                                </button>
                            </td>
                            <td>
                                <input 
                                    className='form-control' 
                                    value={band.name}
                                    onChange={ (event) => handleBandNameOnChange(event, band.id)}
                                    onBlur={ () => handleBandOnBlur(band.id, band.name)}
                                />
                            </td>
                            <td><h3>{band.votes}</h3></td>
                            <td>
                                <button type='button' className="btn btn-danger" onClick={() => handleDeleteBand(band.id) }>
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </>
        );
    }

    return (
        <>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {createRows()}
                </tbody>
            </table>
        </>
    )
}

export default BandList