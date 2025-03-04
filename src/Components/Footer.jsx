import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-10">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500">ShopEase</h2>
          <p className="text-gray-400 mt-2">Your one-step online shopping destination.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-500">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="/shop" className="hover:text-yellow-500">Shop</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-yellow-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-500"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-500"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-yellow-500"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
