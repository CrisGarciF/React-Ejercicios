export const ApiNasa = async () => {
    const APIKEY = process.env.REACT_APP_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`
    const DataApi = await fetch(url)
    const dataNasa = await DataApi.json()
    
    return dataNasa;
}