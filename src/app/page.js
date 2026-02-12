"use client";

import Profile from "../components/Profile";
import Nav from "../components/Nav.jsx";
import Social from "../components/Social.jsx";
import Projects from "../components/Projects";
import Personal from "../components/Personal";

export default function Home() {
  return (
    <div className=" w-full">
      <Nav />
      <hr />
      <Profile />
      <Projects />
      <Social />
      <Personal />
    </div>
  );
}
