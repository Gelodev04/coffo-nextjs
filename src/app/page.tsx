import Navbar from "../components/shared/Navbar";
import Hero from "../components/sections/home/Hero";
import Explore from "../components/sections/home/Explore";
import AboutCoffee from "../components/sections/home/AboutCoffee";
import OurMenu from "../components/sections/home/OurMenu";
import Gallery from "../components/sections/home/Gallery";
import UniqueAtmosphere from "../components/sections/home/UniqueAtmosphere";
import CoffeeSpecial from "../components/sections/home/CoffeeSpecial";
import Testimonials from "../components/sections/home/Testimonials";
import ShopHours from "../components/sections/home/ShopHours";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <>
      <main className=" font-dm overflow-hidden">
        <Hero />
        <AboutCoffee />
        <Explore />
        <OurMenu />
        <Gallery />
        <UniqueAtmosphere />
        <CoffeeSpecial />
        <Testimonials />
        <ShopHours />
      </main>
    </>
  );
}
