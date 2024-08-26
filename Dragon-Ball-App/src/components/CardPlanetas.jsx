import axios from "axios";
import { useEffect, useState } from "react";
import styles from '../css/CardPlanetas.module.css'

const CardPlanetas = () => {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const AxiosPlanents = async () => {
            try {
                const response = await axios.get('https://dragonball-api.com/api/planets?limit=20')
                setPlanets(response.data.items)
            } catch (error) {
                console.log('Error:', error);
            }
        }

        AxiosPlanents()
    }, [])

    return (
        <ul className={styles.card} >
            {planets.map((planet) => (
                <li key={planet.id} className={styles.cardPlanetas} >
                    <img src={planet.image} alt={planet.name} className={styles.planetaImg} />
                    <h3> {planet.name} </h3>
                </li>
            ))}
        </ul>
    )
};

export default CardPlanetas;
