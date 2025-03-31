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
          description: "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna."
        },
        {
          title: "We grind coffee",
          description: "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna."
        },
        {
          title: "Pack the order",
          description: "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna."
        },
        {
          title: "Deliver on time",
          description: "Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna."
        }
      ];


  return (
    <section className="flex flex-col items-center py-7 px-5 pb-14 ">
      <Divider margin="my-8" color="#2b231e" />

      <div className="space-y-5 mb-5 ">
        <h1 className="font-playfair font-semibold text-main text-[46px] text-center leading-tight">
          Delivery Service
        </h1>
        <p className="text-center text-secondary mt-3">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
      </div>

      <div className="max-w-[350px] w-full">
          <Image
            className="w-full h-full mt-5 object-cover"
            src="/images/vhgv.png"
            alt="delivery guy"
            width={500}
            height={500}
          />
      </div>

      <ul className="mt-14 space-y-8">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3 max-w-[380px]">
           <CheckSolid/>
            <div className="flex-1">
              <h3 className="font-bold text-secondary text-[22px] leading-tight font-playfair">
                {step.title}
              </h3>
              <p className="text-lightsecondary text-[16px] mt-1">
                {step.description}
              </p>
            </div>
          </li>
        ))} 
      </ul>
    </section>
  );
}
