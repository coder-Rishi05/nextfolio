import React from "react";

const Profile = () => {
  return (
    <section className="w-full min-h-[90vh] border-b border-amber-200 flex flex-col items-center pt-28 pb-20">
      {/* Intro Label */}
      <div className="mb-6">
        <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-white/60">
          Web Designer & Developer
        </p>
      </div>

      {/* Main Heading */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
        <h1 className="fontSt text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-center font-extrabold">
          Welcome
        </h1>
      </div>

      {/* Statement */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6 text-center">
        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/90">
          Hi, I'm ऋषिः ( ऋषभः • २. ) — a web designer and developer. I create
          websites not just to function, but to feel calm, intentional, and
          unforgettable.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/80">
          Currently in my 3rd year pursuing
          <span className="font-semibold"> BCA-III</span>, exploring creative
          frontend and scalable backend development.
        </p>

        <p className="text-sm sm:text-base md:text-lg font-mono leading-relaxed text-white/70">
          Beyond code, I spend time reading about power, influence, psychology,
          and fiction — ideas that subtly shape how I think about design and
          systems.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-24">
        <p className="text-xs font-mono tracking-wide text-white/40 animate-pulse">
          ↓ Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default Profile;
