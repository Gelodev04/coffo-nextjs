import React from "react";
import { OrderNow } from "../ui/buttons/OrderNow";

export default function HappyHours() {
  return (
    <div className="bg-[#fffaf7] flex flex-col items-center px-10 max-w-[500px] py-6 space-y-6 bg-no-repeat bg-cover " style={{backgroundImage: "url('/images/rthrth.png')"}}>
      <div className="text-center space-y-3">
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
