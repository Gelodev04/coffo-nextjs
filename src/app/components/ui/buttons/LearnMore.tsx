import React from "react";
import { MoveRight } from "lucide-react";
export const LearnMore = () => {
  return (
    <button className="uppercase text-tertiary font-semibold  flex items-center gap-1">
      <span className="tracking-widest">Learn More</span>
      <MoveRight size={20}/>
    </button>
  );
};
