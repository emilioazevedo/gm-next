"use client";

import Image from "next/image";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="sticky top-0 z-[9999] w-full bg-white/5 backdrop-blur-lg transition-all duration-300">
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


