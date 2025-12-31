import React from "react";

const Projects = () => {
  return (
    <div className=" w-full  bg-red-400 border-t-2 border-amber-50  h-screen flex items-center  flex-col  gap-8 py-12">
      <div className="w-1/2 pt-10 ">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl cursor-pointer   lg:text-7xl tracking-tight  font-extrabold">
          Projects
        </h1>
      </div>

      <div className="para w-1/2 px-4  sm:px-10 md:px-20 lg:px-40 xl:px-80 flex items-center flex-col justify-center max-w-4xl ">
        <p className="text-sm sm:text-base md:text-xl lg:text-[18px] py-2 font-normal font-mono leading-relaxed">
          Hi, I'm ऋषिः ( ऋषभः • २. ) — a web designer and developer. I create
          websites not just to do the work but to make it an unforgettable
          experience.
        </p>

        <p className="text-sm sm:text-base md:text-xl lg:text-2xl py-2 font-normal font-mono leading-relaxed">
          Currently I'm in the 3rd year of my college studying
          <span className="font-semibold"> BCA-III</span> and learning creative
          and backend development.
        </p>

        <p className="text-sm sm:text-base md:text-xl lg:text-2xl py-2 font-normal font-mono leading-relaxed">
          Outside of work, you'll find me reading books about power, influence,
          psychology, and fiction.
        </p>

        {/* <p className="text-sm sm:text-base text-start md:text-xl lg:text-2xl py-2 font-normal font-mono leading-relaxed">
          Welcome to my website — feel free to explore.
        </p> */}
      </div>
    </div>
  );
};

export default Projects;
