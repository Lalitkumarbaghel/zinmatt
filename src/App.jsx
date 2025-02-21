import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import './App.css'
import Header from './componets/header/Header'
import Homepage from './pages/Homepage'
import Courses from './pages/Courses'
import Blog from './pages/Blog/Blog'
import Gallery from './pages/Gallery/Gallery'
import ContactUs from './pages/ContactUs/Contactus'
import QualifiedIntern from './pages/QualifiedIntern/QualifiedIntern'
import Event from './pages/Event/Event'
import Footer from './componets/footer/footer'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="d-flex flex-column vh-100">
      <Header/>
        <Routes>
          <Route exact={true} path='/' element={<Homepage/>} />
          <Route exact={true} path='/courses' element={<Courses/>} />
          <Route exact={true} path='/gallery' element={<Gallery/>} />
          <Route exact={true} path='/our-qualified-intern' element={<QualifiedIntern/>} />
          <Route exact={true} path='/event' element={<Event/>} />
          <Route exact={true} path='/contact-us' element={<ContactUs/>} />
          <Route exact={true} path='/blog' element={<Blog/>} />
        </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
