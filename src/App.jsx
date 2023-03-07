import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Buy from './pages/Buy Now'
import Navbar from './component/Navbar'



const App = () => {
  const location = useLocation()
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-16 py-16 ">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/buynow' element={<Buy />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App