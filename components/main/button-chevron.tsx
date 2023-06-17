import { ChevronLeft, ChevronRight } from "lucide-react";

export function ButtonChevron() {
  return(
    <div className="flex items-center gap-4">
    <button className="rounded-full bg-black/40 p-1">
      <ChevronLeft />
    </button>
    <button className="rounded-full bg-black/40 p-1">
      <ChevronRight />
    </button>
  </div>
  )
}