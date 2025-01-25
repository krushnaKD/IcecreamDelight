import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img2 from "../assets/favsecImages/image2.png"

const Cart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <Navbar />
      <div className="w-full h-[35vh] bg-gradient-to-br from-[rgba(239,215,239,1)] via-[rgba(245,249,252,1)] via-[rgba(248,234,225,1)] to-[rgba(234,248,249,1)] flex  flex-col items-center justify-center gap-3 mb-10">
        <h1 className="font-title text-5xl">Shopping Cart</h1>
        <div className="px-6 py-3  bg-[#ffff] rounded-3xl flex gap-2 cursor-pointer">
          <h2 className="text-lg hover:text-[#F83D8E] ">Home</h2>
          <span className="text-xl">/</span>
          <h2 className="text-lg hover:text-[#F83D8E] ">Cart</h2>
        </div>
      </div>
      <div className="w-[80%] h-[80vh] flex items-start  justify-center gap-10    mb-40">
        <div className="w-[60%] h-[100%] bg-gray-30">
          <div className="w-full flex justify-between px-2">
            <h1 className="text-xl font-medium">Shopping Cart</h1>
            <h2 className="text-xl font-medium">(04 items)</h2>
          </div>
          <hr className="border-[1px] opacity-20 mt-5 border-gray-500  " />
          <div className="w-full flex justify-between px-10 mt-2">
            <h2 className="text-md font-normal text-gray-500">
              Product Details
            </h2>
            <h2 className="text-md font-normal text-gray-500">Price</h2>
            <h2 className="text-md font-normal text-gray-500">Quantity</h2>
            <h2 className="text-md font-normal text-gray-500">Total</h2>
          </div>
          <div className="border-b-2 border-gray-600 border-t-2 mt-5 h-28 flex items-center">
            <div className="w-64   h-full p-2 flex   gap-2">
              <div className="w-24 h-24 p-3 bg-[#fffaf4] overflow-hidden rounded-lg">
              <img className="" src={img2} alt="" />
              </div>
              <div>
                <h1 className="font-medium text-md">Choclate Brownie</h1>
                <h2 className="flex gap-2 items-center">Color :<span className="text-sm font-medium">White</span></h2>
                <h2 className="flex gap-2 items-center">Size :<span className="text-sm font-medium">L</span></h2> 
              </div>
            </div>
             <h1 className="text-xl font-medium text-[#F83D8E] w-6 ml-5">
              $4.49
             </h1>
          </div>
        </div>
        <div className="w-[30%] h-[70%] bg-gray-500"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
