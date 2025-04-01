import React from "react";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { DynamicButton } from "@/components/ui/buttons/DynamicButton";
import HappyHours from "@/components/shared/HappyHours";

export default function NewFlavor() {
  return (
    <section className="py-14 px-5 pb-14 bg-white flex flex-col items-center">
      <div className="lg:flex max-w-[1100px] mx-auto justify-between items-center lg:mb-20 w-full">
        <div className="relative  mx-auto  flex justify-center items-center">
          <Image
            className="z-0  lg:w-[300px]"
            src="/images/gbr3.png"
            alt="background coffee"
            width={210}
            height={210}
          />
          <Image
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[300px] lg:max-w-[400px]"
            src="/images/efvfv.png"
            alt="cup of coffee and bartenders"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <Divider margin="my-8 lg:my-0" color="#2b231e" />
          <div className="space-y-5  max-w-[390px] text-center lg:text-start lg:max-w-[500px]">
            <h1 className="font-playfair font-semibold text-main text-[38px]  leading-tight lg:text-[60px]">
              New stunning flavor
            </h1>
            <p className=" text-secondary mt-3 lg:text-lg">
              Our coffee bar uses only Ethiopian coffee. All commercially produced
              coffee originates from Ethiopia. The fruity acidity of this single
              origin coffee is balanced by its sweet honey notes, creating soft,
              light notes with a light character.
            </p>
          </div>
          <DynamicButton text="Go to Shop" margin="my-10" />
        </div>
      </div>

      <HappyHours />
    </section>
  );
}
