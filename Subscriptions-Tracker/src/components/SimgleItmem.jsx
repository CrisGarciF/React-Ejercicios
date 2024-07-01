import { monyFormat } from "../helpers";

const SimgleItmem = ({ price, type, id, eliminarItem, editItem }) => {

    const handleDelete = (e) =>{
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripcion a ${type}`);
        if(answer){
            eliminarItem(id);
        } 
    }

    const handleEdit = (e) =>{
        e.preventDefault();
        editItem(id);
    }

    const urlImg = `/src/images/${type}.png`;

    return (
        <div className="single-item">
            <img src={urlImg} alt={type} />
            <h3>Price: {monyFormat(Number(price))}</h3>
            <a href=""className="delete" onClick={handleDelete} >Borrar</a>
            <a href="" className="edit"  onClick={handleEdit} >Editar</a>
        </div>
    )
};

export default SimgleItmem;
