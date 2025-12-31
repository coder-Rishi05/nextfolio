import React from "react";

const Profile = () => {
  return (
    <section className="w-full min-h-screen border-b border-amber-200 flex flex-col items-center justify-center py-12">
      {/* Heading */}
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
        <h1 className="fontSt text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-center font-extrabold cursor-pointer">
          <span className="inline-block transition-transform duration-300 hover:scale-105 hover:text-white/80">
            Welcome
          </span>
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-4 text-center">
        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed">
          Hi, I'm ऋषिः ( ऋषभः • २. ) — a web designer and developer. I create
          websites not just to do the work but to make it an unforgettable
          experience.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed">
          Currently I'm in the 3rd year of my college studying
          <span className="font-semibold"> BCA-III</span> and learning creative
          and backend development.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed">
          Outside of work, you'll find me reading books about power, influence,
          psychology, and fiction.
        </p>
      </div>
    </section>
  );
};

export default Profile;
