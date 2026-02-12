import React from "react";
const HomePage = () => {
  return (
    <div>
      <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
        <header>
          <h1 className="text-center text-5xl underline hover:cursor-pointer ">
            Code Blogs
          </h1>
        </header>
          <h2 className="font-bold text-center text-4xl">Work in progress...</h2>
        <section className="md:grid md:grid-cols-2 flex justify-center items-center flex-col gap-10">
          {/* <h1></h1> */}
          {/* <h2 className="font-bold text-4xl">This in Javascript</h2> */}
        </section>
      </section>
    </div>
  );
};

export default HomePage;
