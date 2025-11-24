import React from "react";
import Image from "next/image";
import { FiMoon } from "react-icons/fi";

const Nav = () => {
  return (
    <header className="w-full py-3 px-5 bg-yellow-200">
      <nav className="w-full flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <div className="w-24 sm:w-32 lg:w-40">
          <Image
            src="/logo-removebg-preview.png"
            alt="logo"
            width={200}
            height={80}
            className="object-contain"
            priority
          />
        </div>

        {/* Moon Icon */}
        <button className="p-2 rounded-md cursor-pointer">
          <FiMoon size={25} className="text-gray-900" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
