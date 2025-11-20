import Profile from "../components/Profile";
import Nav from "../components/Nav.jsx";
export default function Home() {
  return (
    <div className=" w-full ">
      <Nav />
      <main className="w-full flex  px-40 ">
        <Profile />
      </main>
    </div>
  );
}
