"use client";

import Profile from "../components/Profile";
import Nav from "../components/Nav.jsx";

import Projects from "../components/Projects";
export default function Home() {
  return (
    <div className=" w-full">
      <Nav />
      <Profile />
      <Projects />
    </div>
  );
}
