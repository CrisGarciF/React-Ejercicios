import styles from '../css/Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className={styles.cardHome} >
            <div className={styles.cards}>
                <Link to="/planetas">
                    <img src="https://depor.com/resizer/Fn-HbiNl_RqZaA_w1XYmHVCQ9zk=/620x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/X5ZCLM27PBBB3LK7JIH3MJZUXI.png" alt="planetas" className={styles.homeImg} />
                    <h2 className={styles.title} >Planetas</h2>
                </Link>
            </div>
            <div className={styles.cards}>
                <Link to="/characters">
                    <img src="https://areajugones.sport.es/wp-content/uploads/2021/07/imagen-2021-07-31-092755.jpg" alt="personajes" className={styles.homeImg} />
                    <h2 className={styles.title} >Personajes</h2>
                </Link>
            </div>
        </section>
    )
};

export default Home;
