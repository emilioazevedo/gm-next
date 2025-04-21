import React, { useState } from "react";

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex items-center">
      {/* Hamburger Icon - Only visible on mobile */}
      <button 
        className="block md:hidden p-2 focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="w-6 flex flex-col justify-between h-5">
          <span className={`bg-gray-700 h-0.5 w-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`bg-gray-700 h-0.5 w-full transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`bg-gray-700 h-0.5 w-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-center space-x-8 text-lg items-center">
        <li>
          <a href="/about" className="text-gray-700 hover:text-blue-700">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-gray-700 hover:text-blue-700">
            Contact Us
          </a>
        </li>
        <li>
          <a href="/trial" className="text-gray-700 hover:text-blue-700">
            Start free trial
          </a>
        </li>
        <li>
          <a href="/login" className="text-blue-400 hover:text-blue-900">
            Login
          </a>
        </li>
        <li>
          <a href="/demo">
            <button className="demo-button">
              <span>Request a Demo</span>
            </button>
          </a>
        </li>
      </ul>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden">
          <div className="h-full flex flex-col p-5 pt-16">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <a 
                  href="/about" 
                  className="block py-2 text-gray-700 hover:text-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="block py-2 text-gray-700 hover:text-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/trial" 
                  className="block py-2 text-gray-700 hover:text-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start free trial
                </a>
              </li>
              <li>
                <a 
                  href="/login" 
                  className="block py-2 text-blue-400 hover:text-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="/demo"
                  className="block py-2 text-blue-400 hover:text-blue-900">
                    <span>Request a Demo</span>
                 
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
