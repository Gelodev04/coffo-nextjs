import Divider from "@/components/ui/Divider";
import { url } from "inspector";
import React from "react";

export default function Header() {
  return (
    <section className="px-5 bg-center bg-cover bg-no-repeat py-16" style={{backgroundImage: "url('/images/bgedfg.png')"}}>
      <header className="flex flex-col items-center">
        <Divider color="#2b231e" margin=""/>
        <div className="text-center mt-4 space-y-5 max-w-[400px]">
          <h1 className="text-main font-playfair font-semibold text-[46px]">About us</h1>
          <p className="text-secondary">
            There are people who can’t start their day without having a freshly
            brewed cup of coffee and we understand them.
          </p>
        </div>
      </header>
    </section>
  );
}
