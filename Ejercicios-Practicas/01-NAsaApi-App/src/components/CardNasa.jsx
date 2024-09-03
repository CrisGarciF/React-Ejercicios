import { useEffect, useState } from "react"
import { ApiNasa } from "../helpers/ApiNasa"

export const CardNasa = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const respons = await ApiNasa()
            setData(respons)
        }

        fetchData()
    }, []) 
    
    

  return (
    <>
        <h1>Dato del Dia - Nasa</h1>
        {data && (
                <div className="card">
                    <h2>{data.title}</h2>
                    <img src={data.url} alt={data.title} />
                    <p>{data.explanation}</p>
                </div>
        )}
    </>
  )
}
