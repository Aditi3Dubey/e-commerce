import React from "react";
import { Link, useLocation } from "react-router-dom";
import shop_logo from "../assests/shop_logo.png";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img className="invert w-16" src={shop_logo} alt="Shop Logo" />
          <span className="text-2xl font-bold tracking-wide text-yellow-500">ShopEase</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10 text-lg">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className={`relative px-3 py-2 transition duration-300 hover:text-yellow-400 ${
                  location.pathname === `/${item.toLowerCase()}` ? "text-yellow-400" : ""
                }`}
              >
                {item}
                {location.pathname === `/${item.toLowerCase()}` && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 rounded-md"></span>
                )}
              </Link>
            </li>
          ))}
          </ul>
      </div>
    </nav>
  );
}
