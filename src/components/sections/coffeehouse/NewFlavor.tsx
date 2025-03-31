import React from "react";
import Image from "next/image";
import Divider from "@/components/ui/Divider";
import { DynamicButton } from "@/components/ui/buttons/DynamicButton";
import HappyHours from "@/components/shared/HappyHours";

export default function NewFlavor() {
  return (
    <section className="flex flex-col items-center py-14 px-5 pb-14 bg-white">

      <div className="relative max-w-[300px] mx-auto  flex justify-center items-center">
        <Image
          className="z-0  "
          src="/images/gbr3.png"
          alt="background coffee"
          width={210}
          height={210}
        />

        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[300px]"
          src="/images/efvfv.png"
          alt="cup of coffee and bartenders"
          width={500}
          height={500}
        />
      </div>

      <Divider margin="my-8" color="#2b231e" />

      <div className="space-y-5  max-w-[390px]">
        <h1 className="font-playfair font-semibold text-main text-[38px] text-center leading-tight">
          New stunning flavor
        </h1>
        <p className="text-center text-secondary mt-3">
          Our coffee bar uses only Ethiopian coffee. All commercially produced
          coffee originates from Ethiopia. The fruity acidity of this single
          origin coffee is balanced by its sweet honey notes, creating soft,
          light notes with a light character.
        </p>
      </div>

      <DynamicButton text="Go to Shop" margin="my-10"/>

      <HappyHours/>
    </section>
  );
}
