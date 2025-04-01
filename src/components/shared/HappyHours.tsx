import React from "react";
import { OrderNow } from "../ui/buttons/OrderNow";

export default function HappyHours() {
  return (
    <div className="bg-[#fffaf7] flex flex-col items-center lg:flex-row  px-10 max-w-[500px] lg:max-w-[1000px] lg:py-20 lg:px-20 py-6 space-y-6 bg-no-repeat bg-cover justify-between" style={{backgroundImage: "url('/images/rthrth.png')"}}>
      <div className="text-center space-y-3 lg:text-start lg:w-3/4">
        <h1 className="text-[38px] font-playfair text-main font-semibold">
          Happy hours - get 25% off
        </h1>
        <p className="text-secondary">
          There are people who can’t start their day without having a freshly
          brewed cup of coffee and we understand them.
        </p>
      </div>
      <OrderNow />
    </div>
  );
}
