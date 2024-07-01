import { useEffect } from "react";
import { monyFormat } from "../helpers";

const Balance = ( {count, subs, spent, setSpent} ) => {

    const updateBalance = () =>{
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        updateBalance();
    }, [subs])

    return (
        <div className="balance">
            <h3> Presupuesto: {monyFormat(count)} </h3>
            <h3> Disponible: {monyFormat(count - spent)} </h3>
            <h3> Gastado: {monyFormat(spent)} </h3>
        </div>
    )
};

export default Balance;
