import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center border border-amber-50 gap-16">
      <motion.li
        whileHover={{ x: 100 }}
        className="list-none border-r-2  border-amber-50 px-4  py-4  "
      >
        <a className="font-normal uppercase text-lg" href="">
          Skills
        </a>
      </motion.li>
      <li className="list-none border-r-2 border-amber-50 px-4  py-4  ">
        <a
          whileHover={{ scale: 1.1 }}
          className="font-normal uppercase text-lg"
          href=""
        >
          Projects
        </a>
      </li>
      <li className="list-none border-r-2 border-amber-50 px-4  py-4  ">
        <Link className="font-normal uppercase text-lg" href={"/blog"}>
          Blogs
        </Link>
      </li>
      <li className="list-none border-r-2 border-amber-50 px-4  py-4  ">
        <a className="font-normal uppercase text-lg" href="">
          Contact
        </a>
      </li>
    </div>
  );
};

export default Navbar;
