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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      title: "Good music",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
    {
      title: "Fresh bakery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    },
  ];

  return (
    <section className="flex flex-col items-center py-14 px-5">
      <DecorativeImage src="/images/special-girl.png" alt="Girl Holding Coffee"/>
      <div className="my-8">
        <Divider color="#2b231e" />
      </div>
      <h1 className="font-playfair font-semibold text-main text-[38px] text-center">
        Enjoying the unique atmosphere
      </h1>
      <p className="text-center text-secondary mt-3">
        There are people who can’t start their day without having a freshly
        brewed cup of coffee and we understand them.
      </p>
      <ul className="space-y-7 mt-8">
        {features.map((feature, index) => (
          <li key={index} className="flex w-[370px] gap-3">
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
    </section>
  );
}
