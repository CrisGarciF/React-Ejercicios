import { useState } from "react";
import Balance from "./Balance";
import FormAddSubs from "./FormAddSubs";
import DisplayItmes from "./DisplayItmes";

const MainControl = ({ count }) => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [subs, setSubs] = useState([]);
    const [editId, setIditId] = useState("");
    const [spent, setSpent] = useState(0);

    const eliminarItem = id => {
        const newLIst = subs.filter(item => item.id != id);
        setSubs(newLIst);
    }

    const editItem = id =>{
        setIditId(id);
        subs.map(item => {
            if(item.id === id){
                setType(item.type);
                setPrice(item.price);
            }
        })
    }

    return (
        <>
            <div className="main-form">
                <Balance  count={count} subs={subs} spent={spent} setSpent={setSpent} />
                <FormAddSubs 
                    setType={setType} 
                    setPrice={setPrice} 
                    type={type} 
                    price={price} 
                    setSubs={setSubs} subs={subs} 
                    editId={editId}
                    setIditId={setIditId}
                    spent={spent}
                    count={count}
                />
            </div>
            <DisplayItmes subs={subs} eliminarItem={eliminarItem} editItem={editItem} />
        </>
    )
};

export default MainControl;
