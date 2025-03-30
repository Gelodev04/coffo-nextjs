"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Coffee House",
      href: "/",
    },
    {
      name: "About Us",
      href: "/",
    },
    {
      name: "Our Team",
      href: "/",
    },
    {
      name: "Blog",
      dropdown: [
        {
          name: "Blog 1",
          href: "/",
        },
        {
          name: "Blog 2",
          href: "/",
        },
      ],
    },
    {
      name: "Contact Us",
      dropdown: [
        {
          name: "Contact 1",
          href: "/",
        },
        {
          name: "Contact 2",
          href: "/",
        },
      ],
    },
  ];

  return (
    <header className="bg-white w-full transition-all duration-300 font-dm text-main">
      <nav className="flex items-center justify-between px-4 py-2">
      
        <div className="z-50">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/logo.png"
            alt="coffo logo"
            width={110}
            height={110}
          />
        </div>

       
        <div className="w-6"></div>
      </nav>

    
      <div
        className={`overflow-hidden h-screen transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
         <nav className="flex flex-col px-5  text-lg font-semibold">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative ">
              
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                  className=" flex items-center gap-2 w-full border-b border-gray-200 py-4 text-[16px]  tracking-widest  px-3 hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-out cursor-pointer"
                >
                  {item.name}
                  <span>{openDropdown === item.name ? "▲" : "▼"}</span>
                </button>

               
                <div
                  className={`transition-all duration-200 overflow-hidden text-[16px]  tracking-widest ${
                    openDropdown === item.name ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link key={subItem.name} href={subItem.href} className="hover:text-red-500 duration-100 ease-out">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.name} href={item.href} className="text-[16px] px-3  tracking-widest border-b border-gray-200 py-4 hover:bg-gray-200 hover:text-red-500 transition-all  duration-100 ease-out ">
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
