import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FDF2E9]  py-10 px-8 text-[#1A1A1A] font-dm">
      <div className="">

        <h2 className="text-[30px] font-semibold ">Coffo</h2>
        <p className="  text-secondary my-2">
          There are people who can’t start their day without having a freshly brewed cup of coffee and we understand them.
        </p>

     
        <div className=" mt-10 space-y-3 text-sm">
          <h3 className="font-semibold uppercase ">Contact Us</h3>
          <p>555 Arabica Springs Rd, Crawford, TN 38554</p>
          <p>
            Call Us: <span className="font-semibold">800-275-8777</span>
          </p>
          <p>coffo@company.com</p>
        </div>

      
        <div className="mt-10 text-sm space-y-3">
          <h3 className="font-semibold uppercase ">Subscribe to Newsletter</h3>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your e-mail address"
              className="flex-1 p-2 py-4   focus:outline-none bg-white"
            />
            <button className="bg-red-500 text-white px-4 py-2  min-w-[150px]">
              Subscribe
            </button>
          </div>
          <p className="italic">
            Sign up with your email address to receive news and updates
          </p>
        </div>


        <p className="text-xs text-gray-500 text-center border-gray-300 mt-8 border-t pt-8">
          Copyright ©2025 Coffo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
