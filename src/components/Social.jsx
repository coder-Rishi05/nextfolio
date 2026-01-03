import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Social = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col border-t-2 border-amber-50 ">
      <div className="w-1/2  ">
        <h1 className="text-5xl tracking-tighter font-extrabold ">
          Stay In touch
        </h1>
      </div>
      <div className="flex py-10 flex-col items-start ">
        <p className="pt-4 pb-2 flex items-center gap-4 text-xl ">
          <span>
            <FaInstagram />
          </span>
          Social media never used cause not worth of my time, so...
        </p>
        <p className="py-3 flex items-center gap-4 text-xl">
          <MdOutlineMail />
          Email or message me if you want to chat about anything big or small,
          or...
        </p>
        <p className="py-3 flex items-center gap-4 text-xl">
          <FaLinkedinIn />
          if want to see my progress or want to connect on{" "}
          <span className=" underline cursor-pointer hover:text-green-400 transition-all duration-700 hover:scale-[1.05]">
            <a href="https://www.linkedin.com/in/rawatrishi3/" target="blank">
              {" "}
              LinkedIn
            </a>
          </span>
        </p>
        <p className="py-3 flex items-center gap-4 text-xl">
          <FaGithub />
          can follow on{" "}
          <span className="cursor-pointer hover:text-green-400 transition-all duration-500 hover:underline">
            <a href="https://github.com/coder-Rishi05" target="_blank">
              Github
            </a>
          </span>{" "}
          if want to create something together...{" "}
        </p>
      </div>
    </div>
  );
};

export default Social;
