import SimgleItmem from "./SimgleItmem";

const DisplayItmes = ({ subs, eliminarItem, editItem}) => {
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item =>(
                    <SimgleItmem 
                        key={item.id} 
                        id={item.id} 
                        price={item.price} 
                        type={item.type} 
                        eliminarItem={eliminarItem}
                        editItem={editItem}
                    />
                ))
            }
        </>
    )
};

export default DisplayItmes;
