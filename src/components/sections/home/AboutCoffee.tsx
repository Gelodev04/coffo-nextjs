import Image from "next/image";
import React from "react";
import Divider from "../../ui/Divider";
import { DynamicButton } from "../../ui/buttons/DynamicButton";
import DecorativeImage from "../../ui/DecorativeImage";

export default function AboutCoffee() {
  return (
    <section className="bg-white py-14 flex flex-col items-center text-center space-y-6 relative px-5 bg-no-repeat bg-cover" style={{backgroundImage: "url('/images/bg-darkleft.png')"}}>
      
      <DecorativeImage src="/images/about-girl.png" alt="Girl drinking coffee"/>

      <div className="my-4">
        <Divider color="#2b231e" />
      </div>

      <article className="">
        <h2 className="font-playfair text-main font-semibold text-[2.5rem] leading-tight mt-4">
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
    </section>
  );
}
