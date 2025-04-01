"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Coffee House",
      href: "/coffeehouse",
    },
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Our Team",
      href: "/team",
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Blog 1", href: "/" },
        { name: "Blog 2", href: "/" },
      ],
    },
    {
      name: "Contact Us",
      dropdown: [
        { name: "Contact 1", href: "/" },
        { name: "Contact 2", href: "/" },
      ],
    },
  ];

  return (
    <header className="bg-white lg:bg-transparent w-full transition-all duration-300 font-dm text-main lg:absolute">
      <nav className="flex items-center justify-between px-4 py-2 lg:py-8 max-w-[1250px] mx-auto">
        <div className="z-50 lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
        </div>

        {/* Logo */}
        <Link href="/" className="flex-1 flex justify-center lg:justify-normal">
          <Image
            src="/images/logo.png"
            alt="coffo logo"
            width={130}
            height={130}
          />
        </Link>

        <div className="w-6 lg:hidden"></div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-5 font-bold cursor-pointer items-center relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative"
              onMouseEnter={() => item.dropdown && setHoverDropdown(item.name)}
              onMouseLeave={() => setHoverDropdown(null)}
            >
              {item.dropdown ? (
                <>
                  <button className="flex items-center gap-1 tracking-widest hover:text-red-500 transition-all duration-100 ease-out">
                    {item.name}
                    <ArrowDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        hoverDropdown === item.name ? "-rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full mt-2 w-[150px] bg-white shadow-md rounded-md overflow-hidden transition-all duration-200 ${
                      hoverDropdown === item.name
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <ul className="flex flex-col py-2 border-t-2 border-t-red-500">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name} className="">
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 mx-2 hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-out text-lightsecondary text-sm"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href || "/"}
                  className="text-main tracking-widest hover:text-red-500 transition-all duration-100 ease-out"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          <button className="outline text-main py-1 px-4 cursor-pointer hover:bg-main outline-main hover:text-white duration-150 ease-in-out ml-5">
            Buy Now
          </button>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden h-screen transition-all duration-300 ${
          isOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 text-lg font-semibold">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className="flex items-center gap-2 w-full border-b border-gray-200 py-4 text-[16px] tracking-widest px-3 hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-out cursor-pointer"
                >
                  {item.name}
                  <ArrowDown
                    size={20}
                    className={`transition-transform duration-200 ${
                      openDropdown === item.name ? "-rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                <div
                  className={`transition-all duration-200 overflow-hidden text-[16px] tracking-widest ${
                    openDropdown === item.name ? "max-h-40 py-2" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col pl-7 space-y-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="hover:text-red-500 duration-100 ease-out text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[16px] px-3 tracking-widest border-b border-gray-200 py-4 hover:bg-gray-200 hover:text-red-500 transition-all duration-100 ease-out"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
