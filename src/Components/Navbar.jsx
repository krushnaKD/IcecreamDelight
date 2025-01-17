import React from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'


const Navbar = () => {
  return (
    <div className='w-full h-[10vh] p-10 flex items-center '>
        <div className='w-[30%]'>
            <img className='w-36' src={logo} alt="" />
        </div>
        <div className='w-[60%] flex  '>
            <ul className='w-full flex items-center justify-end gap-10 mr-20'>
                <li className='text-lg ml-5 hover:text-[#F83D8E] cursor-pointer'>Home</li>
                <li className='text-lg ml-5 hover:text-[#F83D8E] cursor-pointer'>Menu</li>
                <li className='text-lg ml-5 hover:text-[#F83D8E] cursor-pointer'>About Us</li>
                <li className='text-lg ml-5 hover:text-[#F83D8E] cursor-pointer'>Cart</li>
                <li><img className='w-4' src={search} alt="" /></li>
            </ul>
        </div>
        <button className='px-2 py-1 rounded-3xl text-white bg-[#F83D8E] '>Contact Us <i className="ml-1 ri-arrow-right-line"></i> </button>
    </div>
  )
}

export default Navbar
