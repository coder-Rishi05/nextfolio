import React from "react";
import Image from "next/image";
import { FiMoon } from "react-icons/fi";

const Nav = () => {
  return (
    <header className="w-full py-2 px-4 sm:py-3 sm:px-6 md:px-10">
      <nav className="w-full flex items-center justify-between">
        {/* Logo */}
        <div className="w-20 sm:w-24 md:w-32 lg:w-40">
          <Image
            src="/logo-removebg-preview.png"
            alt="logo"
            width={200}
            height={80}
            className="object-contain w-full h-auto"
            priority
          />
        </div>

        {/* Moon Icon */}
        <button className="p-1.5 sm:p-2 rounded-md cursor-pointer hover:bg-gray-100 transition-colors">
          <FiMoon size={20} className="sm:w-6 sm:h-6 text-gray-900" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
