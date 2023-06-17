import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from "lucide-react";

export function Options() {
  return(
    <div className="flex items-center gap-2">
      <Mic2 size={20} />
      <LayoutList size={20}/>
      <Laptop2 size={20}/>
      <div className="flex items-center gap-2">
      <Volume size={20}/>
      <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className=" bg-zinc-200 w-10 h-1 rounded-full"></div>
        </div>
      </div>
      <Maximize2 size={20} />
    </div>
  )
}