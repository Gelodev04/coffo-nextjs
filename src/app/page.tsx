import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/home/Hero";
import AboutCoffee from "./components/sections/home/AboutCoffee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 font-dm">
        <Hero />
        <AboutCoffee/>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
