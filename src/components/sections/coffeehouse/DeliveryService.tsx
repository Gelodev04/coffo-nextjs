import CoffeeSwiper from "@/components/shared/CoffeeSwiper";
import { CheckSolid } from "@/components/svg/CheckSolid";
import { OrderNow } from "@/components/ui/buttons/OrderNow";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import React from "react";

export default function DeliveryService() {
  const steps = [
    {
      title: "You place the order",
      description:
        "Simply browse our menu, select your favorite coffee, and place your order online or in-store. It's quick and easy!",
    },
    {
      title: "We grind fresh coffee",
      description:
        "Once we receive your order, our expert baristas grind freshly sourced coffee beans to ensure the best flavor and aroma.",
    },
    {
      title: "We pack your order",
      description:
        "After grinding, we carefully prepare and pack your coffee order with the utmost care to ensure it reaches you in perfect condition.",
    },
    {
      title: "Delivered to you on time",
      description:
        "Your order is then delivered quickly and on time, so you can enjoy your freshly brewed coffee at home, in the office, or wherever you are.",
    },
  ];
  

  return (
    <section className="flex flex-col items-center py-7 px-5 pb-14 ">
      <Divider margin="my-8" color="#2b231e" />

      {/* Text Section */}
      <div className="space-y-5 mb-5 max-w-lg text-center">
        <h1 className="font-playfair font-semibold text-main text-[36px] md:text-[42px] lg:text-[46px] leading-tight">
          Delivery Service
        </h1>
        <p className="text-secondary mt-3">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee, and we understand them.
        </p>
      </div>

      {/* Image & Steps Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-x-10 lg:mt-14">
        {/* Image */}
        <div className="max-w-[400px] w-full">
          <Image
            className="w-full h-auto mt-5 object-cover"
            src="/images/vhgv.png"
            alt="delivery guy"
            width={500}
            height={500}
          />
        </div>

        {/* Steps List */}
        <ul className="mt-14 space-y-8 max-w-lg lg:mt-0">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <CheckSolid />
              <div className="flex-1">
                <h3 className="font-bold text-secondary text-[20px] md:text-[22px] leading-tight font-playfair">
                  {step.title}
                </h3>
                <p className="text-lightsecondary text-[15px] md:text-[16px] mt-1">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
