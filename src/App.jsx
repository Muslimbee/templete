import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import AboutUs from './pages/about us/AboutUs'
import Service from './pages/Service/Service'
import ContactUs from './pages/contact us/ContactUs'
import Projects from './pages/projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
