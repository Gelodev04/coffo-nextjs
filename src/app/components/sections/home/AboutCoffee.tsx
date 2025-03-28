import Image from "next/image";
import React from "react";
import Divider from "../../Divider";
import { LearnMore } from "../../ui/buttons/LearnMore";

export default function AboutCoffee() {
  return (
    <section className="bg-white py-14 flex flex-col items-center text-center space-y-6">
      <figure className="relative">
        <Image
          className="w-[290px] object-cover"
          src="/images/about-girl.png"
          alt="A girl drinking coffee"
          width={290}
          height={290}
        />
        <Image
          className="absolute bottom-[-20px] left-[-50px] w-[160px]"
          src="/images/hero-flower.png"
          alt=""
          width={160}
          height={160}
          aria-hidden="true"
        />
      </figure>

      <div className="my-4">
        <Divider />
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

      <LearnMore />
    </section>
  );
}
