import React from "react";
import AddToCart from "./AddToCart";

export default function ProductCard({ e }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-72 p-5 flex flex-col items-center text-center">
      {/* Product Image */}
      <img
        className="w-40 h-40 object-contain mb-4 rounded-lg"
        src={e.image}
        alt={e.title}
      />

      {/* Product Title */}
      <h2 className="text-lg font-semibold text-gray-900 truncate w-60">
        {e.title}
      </h2>

      {/* Price */}
      <h3 className="text-xl font-bold text-yellow-600 mt-2">${e.price}</h3>

      {/* Add to Cart Button */}
      <button className="mt-4 px-4 py-2 w-full bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
        Add to Cart
      </button>
    </div>
  );
}
