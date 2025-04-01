import React from "react";
import Divider from "../../ui/Divider";
import Image from "next/image";
import { DoubleQuotes } from "../../svg/DoubleQuotes";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "WEB DESIGNER",
      image: "/images/clients/client1.png",
      quote:
        "This coffee shop is my go-to place for inspiration. The cozy ambiance and rich aroma make it the perfect spot to work on my designs.",
    },
    {
      id: 2,
      name: "Mark Davidson",
      role: "BLOGGER",
      image: "/images/clients/client2.png",
      quote:
        "I love spending my mornings here! The coffee is exceptional, and the staff always make me feel at home. Highly recommended!",
    },
    {
      id: 3,
      name: "Anita May",
      role: "BLOGGER",
      image: "/images/clients/client3.png",
      quote:
        "A hidden gem! The Ethiopian coffee has such a distinct flavor, and the fresh bakery selection is a delight. Perfect for writing sessions!",
    },
  ];
  

  return (
    <section className="  px-5 flex flex-col items-center py-14 lg:pb-[8rem]">
      <Divider color="#2b231e" />
      <div className="text-center space-y-5 mt-6 max-w-[600px]">
        <h1 className="font-playfair text-[38px] font-semibold text-main leading-tight">
          Hear from our awesome <br /> clients
        </h1>
        <p className="text-secondary">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
      </div>

      <ul className="mt-14 flex flex-col gap-10 lg:flex-row">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.id}
            className="relative flex flex-col items-center bg-white py-8 gap-2 max-w-[400px] px-8 lg shadow"
          >
            <div className="absolute top-2 left-2 text-red-500">
              <DoubleQuotes />
            </div>
            <div className="absolute bottom-2 right-2 text-red-500 ">
              <DoubleQuotes flip={true} />
            </div>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={150}
              height={150}
              className="rounded-full size-[110px]"
            />

            <div className="text-center space-y-3">
              <p className="text-main">{testimonial.quote}</p>
              <h3 className="font-playfair  text-[18px] font-semibold text-main">
                {testimonial.name}
              </h3>
              <p className="text-sm tracking-widest font-semibold text-[#706357]">
                {testimonial.role}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
