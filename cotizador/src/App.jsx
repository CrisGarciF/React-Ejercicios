import { useState } from 'react';
import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import Result from './components/result';
import Mensaje from './components/Mensaje';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  let componente;
  if(total === 0){
    componente = <Mensaje />
  }else {
    componente = <Result total={total} cantidad={cantidad} plazo={plazo} />
  }

  return (
    <>
      <Header  title="Cotizador de Prestamos.." />
      <div className="container">
        <Form  
          cantidad={cantidad} 
          setCantidad={setCantidad} 
          plazo={plazo} 
          setPlazo={setPlazo} 
          setTotal={setTotal} 
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  )
}

export default App
