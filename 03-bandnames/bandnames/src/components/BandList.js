import React from 'react'

/**
 * Component to list all bands
 */
const BandList = () => {
    /**
     * Function to render table rows
     */
    const createRows = () => {
        return (
            <>
                <td>
                    <button className="btn btn-primary">
                        +1
                    </button>
                </td>
                <td>
                    <input className='form-control' value={'Blink182'} />
                </td>
                <td><h3>15</h3></td>
                <td>
                    <button className="btn btn-danger">
                        Borrar
                    </button>
                </td>
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