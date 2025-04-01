import React from "react";
import Image from "next/image";
import DecorativeImage from "../../ui/DecorativeImage";
import Divider from "../../ui/Divider";
import { DynamicButton } from "../../ui/buttons/DynamicButton";
import HappyHours from "../../shared/HappyHours";
export default function CoffeeSpecial() {
  return (
    <section className="flex flex-col items-center  px-5 bg-white py-14">
      <div className="flex flex-col items-center justify-center lg:flex-row-reverse gap-10">
        <DecorativeImage src="/images/special-bg.png" alt="Coffee" />
        <div className="mt-8 flex flex-col items-center lg:w-1/2 lg:items-start">
          <Divider color="#2b231e" />
          <div className="text-center space-y-5 mb-10 mt-5 lg:text-start max-w-[600px]">
            <h1 className="font-playfair text-main text-[38px] font-semibold">
              Try our coffee specials
            </h1>
            <p className="text-secondary">
              Our coffee bar uses only Ethiopian coffee. All commercially produced
              coffee originates from Ethiopia. The fruity acidity of this single
              origin coffee is balanced by its sweet honey notes, creating soft,
              light notes with a light character.
            </p>
          </div>
        <DynamicButton text="go to shop" />
        </div>
      </div>

      <div className="mt-10">
        <HappyHours />
      </div>
    </section>
  );
}
