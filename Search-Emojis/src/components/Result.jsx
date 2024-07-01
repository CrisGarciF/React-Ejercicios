import { searchEmoji } from "../helpers/searchEmoji.js";
import Itemn from "./Itemn.jsx";

const Result = ( {valueEmoji, darkMode} ) => {
    const arrayEmojis = searchEmoji(valueEmoji);

    return (
        <section className="container results">
            {
                arrayEmojis && arrayEmojis.map(item => (
                    <Itemn  key={item.title}  title={item.title} emoji={item.symbol} darkMode={darkMode} />
                ))
            }
        </section>
    )
};

export default Result;
