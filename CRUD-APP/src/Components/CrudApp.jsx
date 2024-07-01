import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
    {
        id:1,
        name:"Dragon",
        status:"Vivo",
    },
    {
        id:2,
        name:"Roger",
        status:"Muerto",
    },
    {
        id:3,
        name:"Zoro",
        status:"Vivo",
    },
    {
        id:4,
        name:"Rocks",
        status:"N/A",
    },
    {
        id:5,
        name:"Garp",
        status:"Vivo",
    },
];

const CrudApp = () => {
    const [db, setDb] = useState(initialDb);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map(el => el.id === data.id ? data : el)
        setDb(newData)
    };

    const deleteData = (id) => {
        let isDelete = window.confirm("¿Estas seguro de eliminar el registro con el id?")

        if(isDelete){
            let newData = db.filter(el => el.id !== id);
            setDb(newData)
        }else{
            return;
        }
    };

    return ( 
        <div>
          <h2>Crud App</h2> 
          <article className="grid-1-2">
          < CrudForm createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} /> 
          < CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
          </article>
        </div>
    );
}
 
export default CrudApp;