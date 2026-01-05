// "use client"

import React, { useState } from "react";
import Image from "next/image";
import { FiMoon } from "react-icons/fi";
import { FiSunrise, FiSun } from "react-icons/fi";
import Navbar from "../components/navs/Navbar";

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <header className="w-full  py-2 px-4 sm:py-3 sm:px-6 md:px-10">
      <nav className="w-full flex  items-center justify-center">
        {/* Logo */}
        <div className="left w-1/2 h-1/2  ">
          {/* <div className="w-20 sm:w-24 bg-green-400 md:w-32 lg:w-40"> */}
          <div className="  w-60">
            <Image
              src="/logo-removebg-preview.png"
              alt="logo"
              width={200}
              height={80}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        {/* Moon Icon */}
        <button
          onClick={() => {
            setActive((val) => !val);
          }}
          className="check"
        >
          {active ? (
            <div className="p-1.5 sm:p-2 rounded-md cursor-pointer  transition-colors">
              <FiMoon
                size={20}
                className={`sm:w-6 sm:h-6 ${
                  active ? "text-red-900" : "text-white"
                }`}
              />
            </div>
          ) : (
            <div className="p-1.5 sm:p-2 rounded-md cursor-pointer  transition-colors">
              <FiSun
                size={20}
                className={`sm:w-6 sm:h-6 ${
                  active ? "text-gray-900" : "text-white"
                }`}
              />
            </div>
          )}
        </button>
      </nav>
      <Navbar />
    </header>
  );
};

export default Nav;
