import React from 'react'
import HeroSection from './Components/HeroSection'
import Cart from './Components/Cart'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='w-full h-full '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
