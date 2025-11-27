import React from "react";

const Profile = () => {
  return (
    <div className="about w-full flex items-center justify-center flex-col gap-8 py-12">
      <h1 className="fontSt text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center font-extrabold">
        <span className="inline-block transition-transform duration-300 transform hover:scale-105 hover:text-gray-800">
          Welcome
        </span>
      </h1>

      <div className="para w-full px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 flex items-center flex-col justify-center max-w-4xl text-center">
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl py-2 font-normal font-mono leading-relaxed">
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

        <p className="text-sm sm:text-base md:text-xl lg:text-2xl py-2 font-normal font-mono leading-relaxed">
          Welcome to my website — feel free to explore.
        </p>
      </div>
    </div>
  );
};

export default Profile;
