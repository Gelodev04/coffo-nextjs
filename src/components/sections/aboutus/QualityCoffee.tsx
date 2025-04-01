import Image from "next/image";
import React from "react";
import Divider from "@/components/ui/Divider";
import { StatsCard } from "@/components/shared/StatsCard";
import { DynamicButton } from "@/components/ui/buttons/DynamicButton";

export default function QualityCoffee() {
  return (
    <section
      className="bg-no-repeat bg-center bg-contain"
      style={{ backgroundImage: 'url("/images/evrvr-bfg.png")' }}
    >
      <div className="py-16 flex flex-col items-center px-5 lg:flex-row lg:justify-between max-w-[1100px] mx-auto lg:gap-3 ">
        <Image
          src="/images/jhbj-876x1024.png"
          alt="Bartenders"
          width={300}
          height={300}
          className="lg:w-[400px]"
        />
        <div className="flex flex-col items-center lg:items-start">
          <Divider color="#2b231e" margin="mt-10 " />
          <div className="text-center mt-5 max-w-[400px] space-y-5 mb-5 lg:text-start lg:max-w-[600px]">
            <h1 className="font-playfair text-[38px] font-semibold leading-tight text-main">
              Enjoy the best high <br /> quality coffee
            </h1>
            <p className="text-secondary">
              Our coffee bar uses only Ethiopian coffee. All commercially
              produced coffee originates from Ethiopia. We love Ethiopia for
              providing the world with coffee to grow, and we continue to love
              the flavor of that country’s coffee.
            </p>
          </div>

        <StatsCard />
        </div>
      </div>

      <div className="py-16 flex flex-col items-center px-5 lg:flex-row max-w-[1100px] mx-auto justify-evenly">
        <Image
          className="max-w-[270px] lg:max-w-[800px]"
          src="/images/gjhh-782x1024.png"
          alt="Man holding coffee beans"
          width={300}
          height={300}
        />


        <div className="flex flex-col items-center lg:items-start ">
          <Divider color="#2b231e" margin="mt-10 lg:mt-0" />
          <div className="text-center my-5 space-y-5 max-w-[350px] lg:text-start lg:max-w-[600px]">
            <h1 className="font-playfair text-[38px] font-semibold leading-tight text-main lg:text-[55px]">
              We use the highest quality coffee beans
            </h1>
            <p className="text-secondary lg:text-lg">
              Our coffee bar uses only Ethiopian coffee. All commercially produced
              coffee originates from Ethiopia. We love Ethiopia for providing the
              world with coffee to grow, and we continue to love the flavor of
              that country’s coffee. The fruity acidity of this single origin
              coffee is balanced by its sweet honey notes, creating soft, light
              notes with a light character.
            </p>
          </div>
          <DynamicButton text="Watch Video" />
        </div>

      </div>
    </section>
  );
}
