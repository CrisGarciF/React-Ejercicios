import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import Result from './components/Result'

function App() {

  const [valueEmoji, setValuEmoji] = useState('fruit');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(current => !current);
  }

  return (
    <div className={`App ${darkMode?"darkbg":""}`}>
      <Header />
      <Form setValuEmoji={setValuEmoji} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Result  valueEmoji={valueEmoji}  darkMode={darkMode} />
      <Footer />
    </div>
  )
}

export default App
