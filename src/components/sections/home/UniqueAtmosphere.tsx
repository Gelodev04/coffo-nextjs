import Image from "next/image";
import React from "react";
import Divider from "../../ui/Divider";
import { CheckSolid } from "../../svg/CheckSolid";
import DecorativeImage from "../../ui/DecorativeImage";

export default function UniqueAtmosphere() {
  const features = [
    {
      title: "Flavourous coffee",
      description:
        "Experience the rich aroma and deep flavors of our expertly brewed coffee, made from the finest Ethiopian coffee beans.",
    },
    {
      title: "Good music",
      description:
        "Enjoy a cozy ambiance with carefully curated music that enhances your coffee experience, whether you're working or relaxing.",
    },
    {
      title: "Fresh bakery",
      description:
        "Pair your coffee with our freshly baked pastries, crafted daily to bring you the perfect balance of taste and texture.",
    },
  ];
  

  return (
    <section className="flex flex-col items-center py-14 px-5 lg:flex-row max-w-[1100px] mx-auto lg:gap-[5rem]">
      <DecorativeImage
        src="/images/special-girl.png"
        alt="Girl Holding Coffee"
      />
      <div className="flex flex-col items-center text-center  lg:items-start lg:text-start lg:w-1/2 max-w-[600px]">
        <div className="my-8">
          <Divider color="#2b231e" />
        </div>
        <h1 className="font-playfair font-semibold text-main text-[38px] lg:text-[45px] ">
          Enjoying the unique atmosphere
        </h1>
        <p className=" text-secondary mt-3">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
        <ul className="space-y-7 mt-8 text-start">
          {features.map((feature, index) => (
            <li key={index} className="flex max-w-[500px] gap-3">
              <div>
                <CheckSolid />
              </div>
              <div className="space-y-1">
                <h2 className="text-[#414247] font-playfair text-[23px] font-semibold">
                  {feature.title}
                </h2>
                <p className="text-lightsecondary">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
