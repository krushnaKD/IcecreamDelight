import React from 'react'
import HeroSection from './Components/HeroSection'
import Cart from './Components/Cart'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductPage from './Components/ProductPage'
import Review from './Components/Review'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import Signupinfo from './RandomPages/Signupinfo'

const App = () => {
  return (
    <div className='w-full h-full '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path='/Menu' element={<Menu/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
