import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="relative container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/path/to/logo.png"
            alt="Astro Captain Logo"
            className="h-8"
          />
          <span
            className={`font-bold text-lg ${
              isScrolled ? "text-black" : "text-yellow-500"
            }`}
          >
            Astro Captain
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center text-sm">
          <li className="group relative">
            <a href="#" className="hover:text-yellow-500">
              Astrologer
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-black border border-gray-700 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Option 2
              </a>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Book Pandit
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Book Pooja
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Prasad
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Kundali
            </a>
          </li>
          <li className="group relative">
            <a href="#" className="hover:text-yellow-500">
              Astro-Counsel
            </a>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-black border border-gray-700 rounded shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Option 2
              </a>
            </div>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-500">
              Vastu Making
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
