import React, { useEffect } from 'react'
import Navbar from './components/utils/Navbar'
import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import Appointment from './components/Appointment'
import Service from './components/Service'
import Contact from './components/Contact'
import About from './components/About'
import Error from './components/Error'
import Lenis from 'lenis'
import JoinUs from './components/utils/JoinUs'
import Footer from './components/utils/Footer'
import HomeRef from './components/utils/HomeRef'

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
     
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

  }, [])

  return (
    <div className='w-full bg-white overflow-x-hidden '>
    
      <Navbar />
      <div className='sm:mt-[11.5vh] mt-[8.5vh]'></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<HomeRef />} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book-appointment' element={<Appointment />} />
        <Route path='/careers' element={<JoinUs />} />

        <Route path='*' element={<Error/>} />
      </Routes>
      <div className='mb-[20.5vh] bg-red-500'></div>
      <Footer />
    </div>
  )
}

export default App
