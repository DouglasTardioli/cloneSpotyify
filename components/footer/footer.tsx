import Image from "next/image";
import { Player } from "./player";
import { Options } from "./options";

export function Footer() {
  return (
    <div  className="bg-zinc-900 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
      <div className="flex gap-2 items-center">
      <Image
            width={56}
            height={56}
            src="/album.jpg"
            alt="capa album red"
          />
        <div className="flex flex-col">
      <a href="#" className="font-normal ">Gravity Lies</a>
      <span className="text-xs text-zinc-400">Red</span>
        </div>
      </div>

      <Player />
      <div>
        <Options />
      </div>
    </div>
  )
}