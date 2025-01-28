import { useState } from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import img1 from "../assets/favsecImages/image1.png";
import img2 from "../assets/favsecImages/image2.png";
import img3 from "../assets/favsecImages/image3.png";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className=" to-white min-h-screen">
      <div className="max-w-6xl  mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <img
          src={img1}
          alt="Classic Pistachio Gelato"
          className="rounded-lg shadow-md w-60 bg-[#fffaf4] ml-20 p-5"
        />

        <div>
          <h2 className="text-3xl font-bold">Classic Pistachio Gelato</h2>
          <div className="flex items-center space-x-2 mt-2">
            <FaStar className="text-yellow-400" />
            <span>(4.8/5)</span>
          </div>
          <p className="text-xl text-pink-600 mt-2">$6.29</p>
          <p className="text-gray-700 mt-4">
            A delicious pistachio-flavored gelato made with premium ingredients.
          </p>

          <div className="mt-4">
            <span className="font-semibold">Color:</span>
            <div className="flex space-x-2 mt-2">
              <span className="w-6 h-6 bg-green-500 rounded-full"></span>
              <span className="w-6 h-6 bg-brown-500 rounded-full"></span>
              <span className="w-6 h-6 bg-yellow-500 rounded-full"></span>
            </div>
          </div>

          <div className="mt-4">
            <span className="font-semibold">Size:</span>
            <div className="flex space-x-4 mt-2">
              <button className="border px-4 py-1 rounded-lg">S</button>
              <button className="border px-4 py-1 rounded-lg">M</button>
              <button className="border px-4 py-1 rounded-lg">L</button>
            </div>
          </div>

          <div className="mt-6 flex items-center space-x-4">
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="w-16 border px-2 py-1 rounded-lg text-center"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
              <FaShoppingCart /> <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Related <span className="text-pink-500">Products</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Strawberry Balsamic Gelato",
            "Chocolate Hazelnut Gelato",
            "Tiramisu Gelato",
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <img src={img2} alt={product} className="rounded-lg mx-auto" />

              <h3 className="text-lg font-bold mt-2">{product}</h3>
              <p className="text-pink-600">$6.49</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-2 flex items-center mx-auto">
                <FaShoppingCart className="mr-2" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white p-6 mt-10 text-center">
        <p>&copy; 2024 IcyTales. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;
