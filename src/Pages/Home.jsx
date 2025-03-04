import React from "react";
import ProductCard from "../Components/ProductCard";
import { useContext } from "react";
import noteContext from "../context/notecontext";

export default function Home() {
  let { products } = useContext(noteContext);

  return (
    <main className="pt-28 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome to Our <span className="text-yellow-500">E-commerce Store</span>
        </h1>
        <p className="text-lg text-gray-700 mt-2">
          Discover amazing products at the best prices!
        </p>
      </div>

      {/* Products Section */}
      {products ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 py-6">
          {products.map((e) => (
            <ProductCard key={e.id} e={e} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-2xl font-semibold text-gray-700 mt-10">
          Loading...
        </h1>
      )}
    </main>
  );
}
