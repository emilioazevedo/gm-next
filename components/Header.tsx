"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[9999] w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 backdrop-blur-lg shadow-md" // Translucent with blur when scrolled
          : "bg-white/50 backdrop-blur-lg shadow-md" // Solid white background when not scrolled
      }`}
    >
      <nav className="w-full">
        <div className="flex flex-row justify-between items-center py-4 w-full px-8">
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/assets/gridmonitor-logo.png"
                alt="Logo"
                width={240}
                height={51}
              />
            </a>
          </div>
          <ul className="flex justify-center space-x-12 text-lg items-center">
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
              <a
                href="/trial"
                className="text-gray-700 hover:text-blue-700"
              >
                Start free trial
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="text-blue-400 hover:text-blue-900"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/demo"
                className="text-white bg-gradient-to-r from-[#194f90] via-[#2481c0] to-[#194f90] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2"
              >
                Request a Demo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;


