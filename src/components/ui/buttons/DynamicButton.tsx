import React from "react";
import { MoveRight } from "lucide-react";

interface DynamicButtonProps {
  text: string;
  margin?: string; 
}
export const DynamicButton: React.FC<DynamicButtonProps> = ({text, margin}) => {
  return (
    <button className={`uppercase text-tertiary font-semibold  flex items-center gap-1 cursor-pointer ${margin || ""}`}>
      <span className="tracking-widest">{text}</span>
      <MoveRight size={20}/>
    </button>
  );
};
