import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center border border-amber-50 gap-16">
      <li className="list-none border-r-2  border-amber-50 px-4  py-4  ">
        <a className="font-normal uppercase text-lg" href="">
          Skills
        </a>
      </li>
      <li className="list-none border-r-2 border-amber-50 px-4  py-4  ">
        <a className="font-normal uppercase text-lg" href="">
          Projects
        </a>
      </li>
      <li className="list-none border-r-2 border-amber-50 px-4  py-4  ">
        <a className="font-normal uppercase text-lg" href="">
          Blogs
        </a>
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
