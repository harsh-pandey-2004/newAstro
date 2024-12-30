import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

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
          <li>
            <Link
              to="/astro-page"
              className={`hover:text-yellow-500 ${
                isActive("/astro-page") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Astrologer
            </Link>
          </li>
          <li>
            <Link
              to="/book-pandit"
              className={`hover:text-yellow-500 ${
                isActive("/book-pandit") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Book Pandit
            </Link>
          </li>
          <li>
            <Link
              to="/book-pooja"
              className={`hover:text-yellow-500 ${
                isActive("/book-pooja") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Book Pooja
            </Link>
          </li>
          <li>
            <Link
              to="/prasad"
              className={`hover:text-yellow-500 ${
                isActive("/prasad") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Prasad
            </Link>
          </li>
          <li>
            <Link
              to="/astrocouncelor-page"
              className={`hover:text-yellow-500 ${
                isActive("/astrocouncelor-page")
                  ? "text-yellow-500 font-bold"
                  : ""
              }`}
            >
              AstroCounsellor
            </Link>
          </li>
          <li>
            <Link
              to="/free-matching"
              className={`hover:text-yellow-500 ${
                isActive("/free-matching") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Kundali
            </Link>
          </li>
          <li>
            <Link
              to="/vastu-making"
              className={`hover:text-yellow-500 ${
                isActive("/vastu-making") ? "text-yellow-500 font-bold" : ""
              }`}
            >
              Vastu Making
            </Link>
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
