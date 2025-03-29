import React from "react";
import { MoveRight } from "lucide-react";
export const DynamicButton = ({text}: {text: string}) => {
  return (
    <button className="uppercase text-tertiary font-semibold  flex items-center gap-1 cursor-pointer">
      <span className="tracking-widest">{text}</span>
      <MoveRight size={20}/>
    </button>
  );
};
