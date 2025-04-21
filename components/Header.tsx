"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";

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
          ? "bg-white/90 backdrop-blur-lg shadow-md" 
          : "bg-white/90 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto">
        <nav className="w-full">
          <div className="flex justify-between items-center py-4 px-4 md:px-8">
            <div className="flex items-center">
              <a href="/">
                <Image
                  src="/assets/gridmonitor-logo.png"
                  alt="GridMonitor"
                  width={180}
                  height={38}
                  className="max-h-12 sm:max-h-14"
                />
              </a>
            </div>
            <NavMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;


