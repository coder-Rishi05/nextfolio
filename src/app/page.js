"use client";

import Profile from "../components/Profile";
import Nav from "../components/Nav.jsx";
import Social from "../components/Social.jsx";
import Projects from "../components/Projects";
import Personal from "../components/Personal";
import Footer from "../components/Footer";
import SKills from "../components/navs/Skills";

export default function Home() {
  return (
    <div className=" w-full">
      {/* <Nav /> */}
      <hr />
      <Profile />
      <SKills />
      <Projects />
      <Social />
      {/* <Personal /> */}
      <Footer />
    </div>
  );
}
