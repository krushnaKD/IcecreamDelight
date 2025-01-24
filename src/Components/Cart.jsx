import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Cart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
        <Navbar/>
      <div className="w-full h-[35vh] bg-gradient-to-br from-[rgba(239,215,239,1)] via-[rgba(245,249,252,1)] via-[rgba(248,234,225,1)] to-[rgba(234,248,249,1)] flex  flex-col items-center justify-center gap-3 mb-10">
        <h1 className="font-title text-5xl">Shopping Cart</h1>
        <div className="px-6 py-3  bg-[#ffff] rounded-3xl flex gap-2 cursor-pointer">
            <h2 className="text-lg hover:text-[#F83D8E] ">Home</h2>
            <span className="text-xl">/</span>
            <h2 className="text-lg hover:text-[#F83D8E] ">Cart</h2>
        </div>
      </div>
      <div className="w-[80%] h-[80vh] flex items-start  justify-center gap-10  bg-red-300  mb-40">
        <div className="w-[60%] h-[100%] bg-gray-300">
 
        </div>
        <div className="w-[30%] h-[70%] bg-gray-500">

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
