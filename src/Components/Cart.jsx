import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img2 from "../assets/favsecImages/image2.png";

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
          <div className="w-full flex justify-around px-10 mt-2">
            <h2 className="text-md font-normal text-gray-500 w-26">
              Product Details
            </h2>
            <div className="w-60  flex justify-between ">
              <h2 className="text-md font-normal text-gray-500">Price</h2>
              <h2 className="text-md font-normal text-gray-500">Quantity</h2>
              <h2 className="text-md font-normal text-gray-500 ">Total</h2>
            </div>
          </div>
          <div className="border-b-[2px] border-[#ECECEC] border-t-[2px] mt-5 h-28 flex items-center gap-20 cursor-pointer">
            <div className="w-64  h-full p-2 flex justify-around  gap-2">
              <div className="w-24 h-24 p-3 bg-[#fffaf4] overflow-hidden rounded-lg">
                <img className="" src={img2} alt="" />
              </div>
              <div>
                <h1 className="font-medium text-md">Choclate Brownie</h1>
                <h2 className="flex gap-2 items-center">
                  Color :<span className="text-sm font-medium">White</span>
                </h2>
                <h2 className="flex gap-2 items-center">
                  Size :<span className="text-sm font-medium">L</span>
                </h2>
              </div>
            </div>
            <div className="w-[25vw]  flex items-center justify-around">
              <h1 className="text-xl font-medium text-[#F83D8E] w-6 ">$4.49</h1>
              <div className="px-5 py-2 border-2 border-gray-400 bg-transparent rounded-full">
                -3+
              </div>
              <h1 className="text-lg font-medium">13</h1>
              <h1 className="border-[1px] border-[#F83D8E] px-2 py-1 rounded-full">
                <i class="ri-close-large-line text-[#F83D8E] text-xl font-bold"></i>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[30%] h-[75%] bg-gray-100 rounded-xl shadow-2xl p-2">
            <h1 className="text-xl font-medium text-center">Order Summary</h1>
            <div className="w-full h-12 border-t-2 border-b-2 border-gray-300 mt-2 flex justify-around items-center ">
              <h1 className="text-lg font-medium">Apply Coupons</h1>
              <button className="px-2 py-1 bg-[#3d195a] text-md text-white rounded-3xl">Apply</button>
            </div>
            <div className="h-40 border-b-[1px] border-gray-300 p-2">
              <h1 className="text-lg font-medium ">Product Details:</h1>
              <div className="flex justify-between px-5 mt-5">
                <h3 className="text-md text-gray-400">Sub Total</h3>
                <h3 className="text-lg font-medium">$63.45</h3>
              </div>
              <div className="flex justify-between px-5 mt-5">
                <h3 className="text-md text-gray-400">Shipping</h3>
                <h3 className="text-lg font-medium">$20</h3>
              </div>
            </div>
            <div className="h-24 border-b-[2px] border-gray-300 p-3 flex flex-col justify-center">
             <div className="flex justify-between">
              <h1 className="text-lg font-medium">Grand Total</h1>
              <h2 className="text-lg text-[#F83D8E]">$89</h2>
             </div>
             <button className="px-14 py-2 text-center bg-[#F83D8E] text-white rounded-3xl mt-3">Procced To Checkout</button>
            </div>
            <div className="flex gap-2 items-center mt-2 p-2">
            <i className="text-xl ri-shield-flash-line"></i>
            <h2 className="text-md text-gray-500">Safe and Secure Payments,Easy Returns,<br />100% Authentic Products</h2>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
