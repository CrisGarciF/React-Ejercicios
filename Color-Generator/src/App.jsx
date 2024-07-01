import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import DisplayColors from './components/DisplayColors';

function App() {
  const [list, setList] = useState(new Values("#802FDE").all(5));



  return (
    <div className='App'>
      <FormColor  setList={setList} />
      <DisplayColors list={list} />
    </div>
  )
}

export default App
