import { Facebook } from "@/components/svg/Facebook";
import { LinkedIn } from "@/components/svg/LinkedIn";
import { Twitter } from "@/components/svg/Twitter";
import Image from "next/image";
import React from "react";

export default function () {
  const team = [
    {
      img: "/images/team/baker-coffee-pastry.png",
      name: "Jefferey Norton",
      role: "senior barista",
    },
    {
      img: "/images/team/barista-bar-coffee.png",
      name: "Fred Goldman",
      role: "owner",
    },
    {
      img: "/images/team/kglrb.png",
      name: "Will Paterson",
      role: "waiter",
    },
    {
      img: "/images/team/krgj.png",
      name: "Allen Kalbo",
      role: "senior barista",
    },
    {
      img: "/images/team/waiter-coffee.png",
      name: "Anita Jones",
      role: "barista",
    },
    {
      img: "/images/team/rgnm.png",
      name: "Dan Paterson",
      role: "waiter",
    },
  ];

  return (
    <section className="py-16 px-5 flex flex-col items-center">
      <ul className="grid grid-cols-1 gap-16">
        {team.map((item, index) => (
          <li key={index}>
            <div className="relative max-w-[300px] max-h-[300px] w-full h-full">
              <Image
                className="w-full h-full object-cover"
                src={item.img}
                alt={item.name}
                width={300}
                height={300}
              />
              {/* Border dynamically follows image size */}
              <div className="absolute inset-4 -top-4 -left-4 border-2 border-[#aa937e] z-[-1]"></div>
            </div>

            <div className="text-center mt-3">
              <h2 className="font-playfair text-secondary font-semibold text-[1.4rem]">
                {item.name}
              </h2>
              <span className="uppercase text-[#706357] font-bold tracking-widest text-sm">
                {item.role}
              </span>
            </div>

            <div className="flex gap-5 items-center justify-center mt-4">
              <Facebook />
              <Twitter />
              <LinkedIn />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
