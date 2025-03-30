import React from "react";
import Divider from "../../ui/Divider";
import { DynamicButton } from "../../ui/buttons/DynamicButton";
import GoogleMapEmbed from "../../shared/GoogleMapEmbed";

export default function ShopHours() {
  const workingHours = [
    { day: "Monday", hours: "10:00AM - 07:00PM" },
    { day: "Tuesday", hours: "10:00AM - 07:00PM" },
    { day: "Wednesday", hours: "10:00AM - 07:00PM" },
    { day: "Thursday", hours: "10:00AM - 07:00PM" },
    { day: "Friday", hours: "10:00AM - 07:00PM" },
    { day: "Saturday", hours: "10:00AM - 07:00PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="bg-[#1f151e] py-14 flex flex-col items-center px-5">
      <Divider color="#ECC493" />
      <div className="text-center">
        <h1 className="text-white font-playfair text-[38px] font-semibold mt-4">
          Visit our coffee shops
        </h1>
        <p className="text-[#C6C6C6]">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
      </div>

      <DynamicButton text="contact us" margin="my-10" />

      <ul className="border border-divideryellow p-9 max-w-[400px] w-full space-y-7">
        <h3 className="text-[26px] font-playfair font-[600] text-white">
          Working Hours
        </h3>
        {workingHours.map((items, index) => {
          return (
            <li
              key={index}
              className="text-[#C6C6C6] flex items-center justify-between "
            >
              <span>{items.day}</span>
              <span className="flex-grow border-b border-dotted border-divideryellow mx-3"></span>
              <span>{items.hours}</span>
            </li>
          );
        })}
      </ul>

      <div className="w-full mt-10 max-w-[400px]">
        <GoogleMapEmbed />
      </div>
    </section>
  );
}
