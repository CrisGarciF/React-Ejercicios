import React from 'react';

const CrudTableRow = ({el, setDataToEdit, deleteData}) => {
    let {name, status, id} = el;

    return (
        <tr>
            <td> {name} </td>
            <td> {status} </td>
            <td>
                <button onClick={() => setDataToEdit(el)}>editar</button>
                <button onClick={() => deleteData(id)}>eliminar</button>
            </td>
        </tr>
    );
}
 
export default CrudTableRow;