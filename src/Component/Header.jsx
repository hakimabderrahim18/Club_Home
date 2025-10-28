import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-purpleCustom to-blueCustom shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white cursor-pointer">
          Cyber Nexus
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button className="text-white hover:text-blue-600 transition">Home</button>
          <button className="text-white hover:text-blue-600 transition">Team</button>
          <button className="text-white hover:text-blue-600 transition">Events</button>
          <button className="text-white hover:text-blue-600 transition">Blogs</button>
          <button className="text-white hover:text-blue-600 transition">Projects</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-md">
          <nav className="flex flex-col items-center space-y-3 py-4">
            <button className="text-gray-700 hover:text-blue-600 transition">Home</button>
            <button className="text-gray-700 hover:text-blue-600 transition">Team</button>
            <button className="text-gray-700 hover:text-blue-600 transition">Events</button>
            <button className="text-gray-700 hover:text-blue-600 transition">Blogs</button>
            <button className="text-gray-700 hover:text-blue-600 transition">Projects</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
