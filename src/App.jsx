import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import './App.css'
import Header from './componets/header/Header'
import Homepage from './pages/Homepage'
import Footer from './componets/footer/footer'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
      <Header/>
        <Routes>
          <Route exact={true} path='/' element={<Homepage/>} />
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
