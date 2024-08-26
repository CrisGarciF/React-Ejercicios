import './App.css'
import CardCharters from './components/CardCharters'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import CardPlanetas from './components/CardPlanetas'

function App() {
  return (
    <div>
      <h1>Dragon Ball Info</h1>
      <BrowserRouter> 
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<CardCharters />} />
          <Route path='/planetas' element={<CardPlanetas />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
