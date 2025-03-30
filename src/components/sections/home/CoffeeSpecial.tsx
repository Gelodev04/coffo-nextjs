import React from "react";
import Image from "next/image";
import DecorativeImage from "../../ui/DecorativeImage";
import Divider from "../../ui/Divider";
import { DynamicButton } from "../../ui/buttons/DynamicButton";
import HappyHours from "../../shared/HappyHours";
export default function CoffeeSpecial() {
  return (
    <section className="flex flex-col items-center px-5 bg-white py-14">
      <DecorativeImage src="/images/special-bg.png" alt="Coffee" />

      <div className="my-8">
        <Divider color="#2b231e" />
      </div>

      <div className="text-center space-y-5 mb-10">
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

      <div className="mt-10">
        <HappyHours />
      </div>
    </section>
  );
}
