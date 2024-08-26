import styles from '../css/CardCharaters.module.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const CardCharters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const AxiosCharacters = async () => {
            try {
                const response = await axios.get('https://dragonball-api.com/api/characters?limit=100')
                setCharacters(response.data.items)
            } catch (error) {
                console.log('Error:', error);
            }
        }

        AxiosCharacters()
    }, [])

    return (
            <ul className={styles.card} >
                {characters.map((character) => (
                    <li key={character.id} className={styles.cardCharters} >
                        <img src={character.image} alt={character.name} className={styles.characterImg} />
                        <h3> {character.name} </h3>
                        <p> {character.race} </p>
                        <span> {character.affiliation} </span>
                    </li>
                ))}
            </ul>
    )
};

export default CardCharters;