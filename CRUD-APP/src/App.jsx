import React from 'react';
import CrudApp from "./Components/CrudApp"
import CrudApi from './Components/CrudApi';
import SongSearch from './Components/SongSearch';
import SelectsAnidados from './Components/SelectsAnidados';
import ContactForm from './Components/ContactForm';
import Modals from './Components/Modals';

function App() {
  return (
    <>
      <h1>EJERCICIOS CON REACT</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsAnidados />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  )
}

export default App
