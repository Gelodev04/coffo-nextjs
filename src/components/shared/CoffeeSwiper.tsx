"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const CoffeeSwiper = () => {
  const images = [
    { img: "/images/swiperimg/img1.png", name: "Espresso" },
    { img: "/images/swiperimg/img2.png", name: "Cappuccino" },
    { img: "/images/swiperimg/img3.png", name: "Latte" },
    { img: "/images/swiperimg/img4.png", name: "Mocha" },
  ];

  return (
    <div className="relative flex flex-col items-center max-w-[380px] h-[370px] ">
      <div className="absolute  bottom-[1.5rem] ">
        <ArrowRight className="swiper-button-prev" color="#2b231e" size={20} />
        <ArrowLeft className="swiper-button-next" color="#2b231e" size={20} />
      </div>

      <Swiper
        navigation={{
            nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next",
        }}
        loop
        speed={1100} 
        modules={[Navigation]}
        className="w-full h-full "
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex  h-full justify-center items-center   "
          >
            <Image
              className=" size-[225px] mx-auto"
              src={img.img}
              alt="Coffee slide"
              width={200}
              height={200}
            />
            <p className="text-center font-playfair font-semibold text-[1.5rem] mt-4 text-main">
              {img.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-[#ecc393] w-[225px] h-[370px] absolute rounded-t-full "></div>
    </div>
  );
};

export default CoffeeSwiper;
