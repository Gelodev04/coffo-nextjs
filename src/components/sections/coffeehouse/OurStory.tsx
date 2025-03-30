import { DynamicButton } from "@/components/ui/buttons/DynamicButton";
import Divider from "@/components/ui/Divider";
import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <section className="px-5 bg-white flex flex-col items-center py-14">
      <div className="relative max-w-[300px] mx-auto  flex justify-center items-center">
        {/* Background Image */}
        <Image
          className="z-0  "
          src="/images/gbr3.png"
          alt="background coffee"
          width={210}
          height={210}
        />

        {/* Foreground Image - Positioned on Top */}
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[300px]"
          src="/images/rvr-600x491.png"
          alt="cup of coffee and bartenders"
          width={500}
          height={500}
        />
      </div>

      <Divider color="#2b231e" margin="mt-10" />

      <div className="text-center space-y-5 mt-6 max-w-[420px]">
        <h1 className="font-playfair text-[38px] font-semibold text-main leading-tight">
          Our Story
        </h1>
        <p className="text-secondary">Our coffee bar uses only Ethiopian coffee. All commercially produced coffee originates from Ethiopia. We love Ethiopia for providing the world with coffee to grow, and we continue to love the flavor of that country’s coffee. The fruity acidity of this single origin coffee is balanced by its sweet honey notes, creating soft, light notes with a light character.</p>
      </div>

      <DynamicButton text="learn more" margin="mt-9"/>
    </section>
  );
}
