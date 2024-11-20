import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              NEXUS
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Games</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Store</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">News</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 transition-colors">Contact</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User className="w-5 h-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Games</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Store</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">News</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}