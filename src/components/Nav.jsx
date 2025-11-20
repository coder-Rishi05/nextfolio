import React from "react";
import Image from "next/image";
import { FiMoon } from "react-icons/fi";

const Nav = () => {
  return (
    <header className="py-2  ">
      <nav className="max-w-6xl mx-auto w-full flex items-center justify-between px-42">
        {/* Logo */}
        <div className="flex  items-center">
          <img
            className="w-80 object-contain"
            src="/logo-removebg-preview.png"
            alt="logo"
          />
        </div>

        {/* Moon Icon */}
        <button className="flex cursor-pointer items-center">
          <FiMoon size={25} className="text-white" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
