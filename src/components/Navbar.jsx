import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import logo from "../assets/image/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const isHomePage = location.pathname === "/";

  const handleLoginClick = () => {
    // Trigger login functionality
    console.log("Login button clicked");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-lg text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Astro Captain Logo" className="h-[50px]" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 items-center text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book-pandit"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Book Pandit
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/book-pooja"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Book Pooja
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/vastu-making"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Vastu Making
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kundali-matching"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Kundali Matching
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/prasad"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Prasad
            </NavLink>
          </li>
        </ul>

        {/* Login Button (Desktop) */}
        <button
          onClick={handleLoginClick}
          className="text-sm px-4 py-2 rounded-md border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all hidden md:block"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Navigation Links */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-yellow-400 via-white to-yellow-100 text-black flex flex-col p-6 z-50 shadow-lg md:hidden">
            {/* Header Section with Logo and Close Icon */}
            <div className="flex justify-between items-center mb-6">
              {/* Logo */}
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <img
                  src={logo}
                  alt="Astro Captain Logo"
                  className="h-[50px] drop-shadow-lg"
                />
              </Link>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-all"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <ul className="space-y-4 flex-1">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book-pandit"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Book Pandit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/book-pooja"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Book Pooja
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vastu-making"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Vastu Making
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kundali-matching"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Kundali Matching
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/prasad"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold block px-4 py-2 rounded-md transition-all ${
                      isActive
                        ? "bg-yellow-500 text-white shadow-md"
                        : "text-black hover:bg-yellow-100 hover:shadow"
                    }`
                  }
                >
                  Prasad
                </NavLink>
              </li>
            </ul>
            
            {/* Login Button (Mobile) */}
            <button
              onClick={handleLoginClick}
              className="text-sm px-4 py-2 rounded-md border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
