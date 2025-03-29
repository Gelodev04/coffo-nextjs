import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/home/Hero";
import Explore from "./components/sections/home/AboutCoffee";
import CoffeeMenu from "./components/sections/home/Explore";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-5 font-dm">
        <Hero />
        <Explore/>
        <CoffeeMenu/>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
