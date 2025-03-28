import Image from "next/image";
import React from "react";
import Divider from "../../Divider";
import { OrderNow } from "../../ui/buttons/OrderNow";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center space-y-6 py-14"
      aria-labelledby="hero-title"
    >
      <figure className="relative ">
        <Image
          className="w-[330px]"
          src="/images/hero-section-image.png"
          alt="A steaming cup of coffee on a wooden table"
          width={500}
          height={500}
          priority
        />
        <Image
          className="absolute bottom-[-20px] right-[-20px] w-[160px] scale-x-[-1]"
          src="/images/hero-flower.png"
          alt=""
          width={100}
          height={100}
        />
        <figcaption className="sr-only">
          A steaming cup of coffee with a decorative flower in the bottom right.
        </figcaption>
      </figure>

      <Divider />

      <header className="text-center space-y-4">
        <h1
          id="hero-title"
          className="font-playfair text-[2.9rem] text-main font-bold leading-tight"
        >
          Relax & Enjoy <br /> Your Coffee
        </h1>
        <p className="text-secondary">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee, and we understand them.
        </p>
      </header>

      <OrderNow />
    </section>
  );
}
