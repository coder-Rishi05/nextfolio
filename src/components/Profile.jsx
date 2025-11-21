import React from "react";

const Profile = () => {
  return (
    <div className="about w-full bg-yellow-400 flex item-end flex-col gap-10 ">
      <h1 className="fontSt text-7xl sm:px-10  tracking-tight lg:px-80 text-start font-extrabold  ">
        Welcome
      </h1>
      <div className="para py-10 w-full px-80 flex item-center flex-col justify-center ">
        <p className="text-lg py-2 font-normal font-mono">
          Hi, I'm ऋषिः ( ऋषभः • २. ) — a web designer a and developer. I create
          websites not just do the work but to make it an unforgatable
          experience.
        </p>
        <p className="text-lg py-2 font-normal font-mono">
          Currently i am in 3rd year of my collage and studying
          <span>BCA-III.</span>
          learning creative and Backend development.
        </p>

        <p className="text-lg py-2 font-normal font-mono">
          Outside of work, you’ll find me reading books like Power, Influence
          and other psychological and fictional.
        </p>

        <p className="text-lg py-2 font-normal font-mono">
          {" "}
          Welcome to my website, feel free to experience it....
        </p>
      </div>
    </div>
  );
};

export default Profile;
