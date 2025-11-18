import Image from "next/image";
import { FiMoon } from "react-icons/fi";
import Profile from "../components/Profile";
export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-900/70">
      <section className="w-full ">
        <header className="w-full py-20  ">
          <nav className="w-full max-w-lg mx-auto flex items-center gap-50 justify-between">
            <div className="w-1/2 rounded-full overflow-hidden ">
              <img
                className="w-120 scale-[1.5]  object-cover object-center "
                src="./logo-removebg-preview.png"
                alt=""
              />
            </div>

            <div className="w-1/2 h-full flex items-center justify-end right  ">
              <FiMoon size={"25"} className="text-end" />
            </div>
          </nav>
        </header>
      </section>
      <main className="w-full h-full flex  px-40 ">
        <Profile />
      </main>
    </div>
  );
}
