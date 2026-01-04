import React from "react";

const Personal = () => {
  return (
    <div className="flex items-center justify-center flex-col border-t-2 border-amber-50">
      <div className="w-1/2   ">
        <h1 className="text-5xl font-serif py-10  tracking-tighter font-extrabold ">
          Books i read a lot.
        </h1>
        <div className="books flex flex-col gap-10  ">
          <div className="book1  flex items-center justify-center gap-10">
            <div className="left">
              <img
                className="w-full"
                src="https://yaronschoen.com/img/books/basiceconomics.jpg"
                alt="book1"
              />
            </div>
            <div className="right">
              <h2 className="text-2xl font-bold ">Basic Economics</h2>
              <div className="about flex items-center  gap-2">
                <p className="font-light text-center  text-[13px] px-4 rounded bg-white text-black">
                  Read 2 times and still reading and learning
                </p>
                <p className="text-xs font-bold text-zinc-300/50">
                  by Thomas Sowell
                </p>
              </div>
              <p className="w-[70%]">
                Even if you're well-versed in economics, this book is worth
                reading. Sowell has a rare talent for explaining even the basics
                in a way that always offers something new to learn.
              </p>
            </div>
          </div>
          <div className="book1 flex items-center justify-center gap-10">
            <div className="left">
              <img
                className="w-full"
                src="https://yaronschoen.com/img/books/basiceconomics.jpg"
                alt="book1"
              />
            </div>
            <div className="right">
              <h2 className="text-2xl font-bold ">Basic Economics</h2>
              <div className="about flex items-center  gap-2">
                <p className="font-light text-center  text-[13px] px-4 rounded bg-white text-black">
                  Read 2 times and still reading and learning
                </p>
                <p className="text-xs font-bold text-zinc-300/50">
                  by Thomas Sowell
                </p>
              </div>
              <p className="w-[70%]">
                Even if you're well-versed in economics, this book is worth
                reading. Sowell has a rare talent for explaining even the basics
                in a way that always offers something new to learn.
              </p>
            </div>
          </div>
          <div className="book1 flex items-center justify-center gap-10">
            <div className="left">
              <img
                className="w-full"
                src="https://yaronschoen.com/img/books/basiceconomics.jpg"
                alt="book1"
              />
            </div>
            <div className="right">
              <h2 className="text-2xl font-bold ">Basic Economics</h2>
              <div className="about flex items-center  gap-2">
                <p className="font-light text-center  text-[13px] px-4 rounded bg-white text-black">
                  Read 2 times and still reading and learning
                </p>
                <p className="text-xs font-bold text-zinc-300/50">
                  by Thomas Sowell
                </p>
              </div>
              <p className="w-[70%]">
                Even if you're well-versed in economics, this book is worth
                reading. Sowell has a rare talent for explaining even the basics
                in a way that always offers something new to learn.
              </p>
            </div>
          </div>
        </div>
        <div className="collectons">
            <h3 className="py-10 font-bold text-xl cursor-pointer transition-all duration-1000 hover:text-yellow-300 underline" >View Collections</h3>
        </div>
      </div>
    </div>
  );
};

export default Personal;
