
import Navbar from "./components/Navbar";
import Hero from "./components/sections/home/Hero";
import Explore from "./components/sections/home/Explore";
import AboutCoffee from "./components/sections/home/AboutCoffee";
import OurMenu from "./components/sections/home/OurMenu";
import Gallery from "./components/sections/home/Gallery";
import UniqueAtmosphere from "./components/sections/home/UniqueAtmosphere";
import CoffeeSpecial from "./components/sections/home/CoffeeSpecial";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" font-dm">
        <Hero />
        <AboutCoffee />
        <Explore />
        <OurMenu />
        <Gallery/>
        <UniqueAtmosphere/>
        <CoffeeSpecial/>
        
        <div className="h-screen"></div>
      </main>
    </>
  );
}
