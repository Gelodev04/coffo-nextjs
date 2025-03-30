
interface DividerProps {
  color: string,
  margin?: string
}

export default function Divider({ color, margin }: DividerProps) {
  return (
    <div className={`flex items-center w-[120px] ${margin ? margin : ""}`}>
      <div style={{ backgroundColor: color }} className="flex-1 h-px"></div>
      <div style={{ backgroundColor: color }} className="w-3 h-3 rotate-45"></div>
      <div style={{ backgroundColor: color }} className="flex-1 h-px"></div>
    </div>
  );
}
