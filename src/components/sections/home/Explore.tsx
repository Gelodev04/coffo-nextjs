import React from "react";
import Divider from "../../ui/Divider";
import Image from "next/image";
import { DynamicButton } from "../../ui/buttons/DynamicButton";

export default function Explore() {
  const menu = [
    { name: "Brewed coffee", img: "/images/menuImg1.png" },
    { name: "Coffee beans", img: "/images/menuImg2.png" },
    { name: "Ground coffee", img: "/images/menuImg3.png" },
    { name: "Deserts", img: "/images/menuImg4.png" },
  ];

  return (
    <section className="flex flex-col items-center text-center space-y-4 py-14 px-5 lg:h-screen">
      <Divider color="#2b231e" />
      <h1 className="text-main text-[2.3rem] sm:text-[3rem] font-playfair font-semibold leading-tight">
        Explore our <br /> coffee shop
      </h1>
      <p className="text-secondary max-w-[600px] px-4">
        There are people who can’t start their day without having a freshly
        brewed cup of coffee and we understand them.
      </p>

      {/* Responsive Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-5 max-w-[1200px]">
        {menu.map((item, index) => (
          <li
            key={index}
            className="bg-white flex flex-col items-center space-y-3 py-10 px-10 max-w-[380px] shadow-lg justify-between "
          >
            <div className="flex flex-col items-center  h-full r">
              <Image src={item.img} alt={item.name} width={100} height={100} />
              <h2 className="text-main font-playfair text-[1.7rem] font-semibold">
                {item.name}
              </h2>
              <p className="text-lightsecondary">
                You can order our coffee in the online store or find our store in
                your city.
              </p>
            </div>
            <DynamicButton text="Explore" />
          </li>
        ))}
      </ul>
    </section>
  );
}
