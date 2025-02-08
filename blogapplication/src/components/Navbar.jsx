import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/blogs", link: "Blogs" },
    { path: "/contact", link: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 text-white bg-black shadow-lg">
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          Blog <span className="text-orange-500">Nest</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden gap-8 text-lg md:flex">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold underline underline-offset-4"
                    : "text-white hover:text-orange-500 transition-all"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social Icons + Login Button */}
        <div className="items-center hidden gap-4 lg:flex">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook size={25} />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble size={25}/>
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter size={25}/>
          </a>
          <button className="px-6 py-2 font-medium text-white transition-all duration-200 ease-in bg-orange-500 rounded hover:text-orange-600">
            Log in
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="cursor-pointer">
            {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute left-0 right-0 flex flex-col items-center py-4 space-y-4 text-white bg-black md:hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold underline underline-offset-4"
                    : "text-white hover:text-orange-500 transition-all"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
