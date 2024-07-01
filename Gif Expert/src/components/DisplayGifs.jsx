import UseApi from "../hooks/useApi";
import ImageItemn from "./imageItemn";

const DisplayGifs = ( {category} ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=lJdgnNYTZ0o1O3hPfyTBXZh8aKUBwQPu&q=${category}&limit=10`;
    const { loading, data } = UseApi(url);

    return (
        <div className="container-gifs">
            {
                loading ?
                data.map(img => ( 
                    <ImageItemn  key={img.id} title={img.title} url={img.images.downsized_medium.url} /> 
                ))
                : ""
            }
        </div>
    )
};

export default DisplayGifs;
