import { useEffect, useState } from "react";


const UseApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fethApi = () => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuestaJson => {
                setLoading(true);
                setData(respuestaJson.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fethApi();
    }, [url])

    return {loading, data}
};

export default UseApi;
