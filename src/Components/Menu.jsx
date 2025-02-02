import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoGrid, IoList } from "react-icons/io5";
import img1 from "../assets/favsecImages/image1.png"
import img2 from "../assets/favsecImages/image3.png"
import img3 from "../assets/favsecImages/image2.png"
import img4 from "../assets/Productimages/pineapple.png"
import img5 from "../assets/Productimages/Rasmalai.png"
import img6 from "../assets/Productimages/choco-pie.png"


const products = [
  { name: "Coconut Milk Chocolate Chip", price: "$5.99", image: img1 },
  { name: "Almond Joy Sundae", price: "$6.49", image: img2 },
  { name: "Berry Sorbet", price: "$4.89", image: img3 },
  { name: "Chocolate Fudge", price: "$5.99", image: img4 },
  { name: "Dairy Free Classic", price: "$6.49", image: img5 },
  { name: "Dairy Free Almond", price: "$4.89", image: img6 },
];

export default function Menu() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 p-2 border rounded"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        <div className="flex gap-2">
          <IoGrid className="text-xl cursor-pointer" />
          <IoList className="text-xl cursor-pointer" />
        </div>
      </div>
      
      <div className="flex gap-6">
        <div className="w-1/4">
          <h3 className="font-bold mb-2">Categories</h3>
          <ul className="mb-4">
            <li><input type="radio" name="category" /> Canned Ice Cream</li>
            <li><input type="radio" name="category" /> Frozen Yogurt</li>
            <li><input type="radio" name="category" /> Ice Cream Cakes</li>
          </ul>
          <h3 className="font-bold mb-2">Filter By Price</h3>
          <input type="range" min="5" max="50" className="w-full" />
        </div>
        
        <div className="w-3/4 grid grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg text-center">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain rounded" />
              <h4 className="mt-2 font-bold">{product.name}</h4>
              <p className="text-pink-600 text-lg font-semibold">{product.price}</p>
              <button className="mt-2 bg-pink-500 text-white p-2 rounded-3xl">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
