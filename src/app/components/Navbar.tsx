"use client";
import React from "react";
import Image from "next/image";
import { Spiral as Hamburger } from "hamburger-react";

export default function Navbar() {
  return (
    <header className="px-4 py-1 bg-white">
      <nav className="flex items-center justify-between w-full h-full">
        <Hamburger size={25} />
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
    </header>
  );
}
