import React from "react";
import Divider from "../../ui/Divider";
import Image from "next/image";

export default function OurMenu() {
  const menuItems = [
    {
      name: "Croissant",
      price: "$5.3",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu1.png",
    },
    {
      name: "Puff bun",
      price: "$2.5",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu2.png",
    },
    {
      name: "Cheesecake",
      price: "$4.8",
      description:
        "Cake made with cream and soft cheese on cookie or pastry crust topped with a fruit sauce.",
      image: "/images/ourmenu3.png",
    },
    {
      name: "Banana cake",
      price: "$7.5",
      description:
        "Cake made with cream and soft cheese on cookie or pastry crust topped with a fruit sauce.",
      image: "/images/ourmenu4.png",
    },
    {
      name: "Chocolate brownie",
      price: "$5.2",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu5.png",
    },
    {
      name: "Cupcakes with cream",
      price: "$6.2",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu6.png",
    },
    {
      name: "Spanish ensaimada",
      price: "$7.1",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu7.png",
    },
    {
      name: "Cinnamon bun",
      price: "$7.2",
      description:
        "A product made of puff pastry in the form of a bagel, with or without filling.",
      image: "/images/ourmenu8.png",
    },
  ];

  return (
    <section className="bg-[#1f151e] py-14 flex flex-col items-center px-5">
      <Divider color="#ECC493" />
      <h1 className="text-white font-playfair text-[38px] font-semibold mt-4">
        Our menu
      </h1>
      <ul className="grid grid-cols-1 gap-14 mt-14">
        {menuItems.map((item, index) => (
          <li key={index} className="flex gap-5 w-[370px]">
            <Image
              className="size-[60px] mt-2"
              src={`${item.image}`}
              alt={item.name}
              width={100}
              height={100}
            />
            <div className="space-y-2">
              <h2 className="text-white font-playfair flex  items-center text-[1.3rem]">
                <span className=" ">{item.name}</span>
                <span className="flex-grow border-b border-dotted border-divideryellow mx-3"></span>
                <span className="text-divideryellow">{item.price}</span>
              </h2>

              <p className="text-[#C6C6C6] text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
