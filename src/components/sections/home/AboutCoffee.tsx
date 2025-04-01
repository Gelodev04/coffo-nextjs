import Image from "next/image";
import React from "react";
import Divider from "../../ui/Divider";
import { DynamicButton } from "../../ui/buttons/DynamicButton";
import DecorativeImage from "../../ui/DecorativeImage";

export default function AboutCoffee() {
  return (
    <section className="bg-white py-14  lg:h-screen px-5 bg-no-repeat bg-cover flex justify-center items-center" style={{backgroundImage: "url('/images/bg-darkleft.png')"}}>
      
      <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex lg:flex-row-reverse  space-y-6 relative gap-10">
        <DecorativeImage src="/images/about-girl.png" alt="Girl drinking coffee"/>
        <div className="flex flex-col items-center space-y-6 max-w-[550px] mx-auto lg:items-start">
          <div className="my-4">
            <Divider color="#2b231e" />
          </div>
          <article className="text-center lg:text-start">
            <h2 className="font-playfair text-main font-semibold text-[2.5rem] leading-tight mt-4 lg:text-[3.3rem] ">
              We use the highest quality coffee beans
            </h2>
            <p className="text-secondary mt-4">
              Our coffee shop uses only Ethiopian coffee. All commercially produced
              coffee originates from Ethiopia. We love Ethiopia for providing the
              world with coffee to grow, and we continue to love the flavor of that
              country’s coffee. The fruity acidity of this single-origin coffee is
              balanced by its sweet honey notes, creating soft, light notes with a
              light character.
            </p>
          </article>
          <DynamicButton text="Learn More" />
        </div>
      </div>
    </section>
  );
}
