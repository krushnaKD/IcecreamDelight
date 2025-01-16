import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'


const Navbar = () => {
  return (
    <div className='w-full h-[10vh] p-10 flex items-center bg-red-300'>
        <div className='w-[30%]'>
            <img className='w-36' src={logo} alt="" />
        </div>
        <div className='w-[60%] flex '>
            <ul className='w-full flex items-center gap-10'>
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Cart</li>
                <li><img className='w-4' src={search} alt="" /></li>
            </ul>
        </div>
        <button className='px-2 py-1 rounded-3xl text-white bg-[#F83D8E] '>Contact Us <i className="ml-1 ri-arrow-right-line"></i> </button>
    </div>
  )
}

export default Navbar
