"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      toggleMenu(); // Close the menu if it's open
    }
  };

  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center text-white px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="font-bold text-2xl">
        <Link href="/">Snap URL</Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <ul className={`absolute md:static bg-purple-700 md:bg-transparent left-0 top-16 w-full md:w-auto md:flex md:items-center md:gap-6 transition-all duration-300 ease-in ${isOpen ? "block" : "hidden"} md:block`}>
        <li><Link href="/" onClick={handleLinkClick} className="block py-2 px-4 md:px-0">Home</Link></li>
        <li><Link href="/about" onClick={handleLinkClick} className="block py-2 px-4 md:px-0">About</Link></li>
        <li><Link href="/shorten" onClick={handleLinkClick} className="block py-2 px-4 md:px-0">Shorten</Link></li>
        <li><Link href="/contact" onClick={handleLinkClick} className="block py-2 px-4 md:px-0">Contact Us</Link></li>

        {/* Buttons */}
        <li className="flex flex-col md:flex-row gap-3 px-4 md:px-0">
          <Link href="/shorten" onClick={handleLinkClick}>
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-600 transition">
              Try Now
            </button>
          </Link>
          <Link href="https://github.com/pratikk5/snap-url" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
            <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold hover:bg-purple-600 transition">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
