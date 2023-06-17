import Image from "next/image";
import { ButtonPlay } from "./button-play";

export function PlaylistCard() {
  return (
      <a href="#" className="bg-white/5  hover:bg-white/10 p-3 pb-5 rounded-md flex flex-col gap-2 hover:scale-105 transition-all">
      <div className=" group">
      <Image
      className="w-full relative"
            width={120}
            height={120}
            src="/album.jpg"
            alt="capa album red"
          />
          <span className="absolute bottom-28 left-28">
          <ButtonPlay />
          </span>
      </div>
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">Wallows, COIN, Girl in red and more</span>
    </a>
  )
}