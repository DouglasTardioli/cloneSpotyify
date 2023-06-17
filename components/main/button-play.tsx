import { Play } from "lucide-react";

export function ButtonPlay() {
  return (
    <button className={`
    w-14 h-14 flex items-center justify-center pl-0.5 
    rounded-full bg-green-400 text-black
    ml-auto mr-8 shadow-md
    invisible group-hover:visible
    `}>
    <Play />
  </button>
  )
}