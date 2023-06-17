import Image from "next/image";
import { ButtonPlay } from "./button-play";

export function CardAlbum() {
  return (
    <div>
       <a
          href="#"
          className={`
          bg-white/5 shadow-xl rounded 
          overflow-hidden flex gap-4 
          items-center hover:bg-white/10
          transition-colors group
          `}
        >
          <Image
            width={120}
            height={120}
            src="/album.jpg"
            alt="capa album red"
          />
          <strong>of Beauty and Rage</strong>
          <ButtonPlay />
          </a>
    </div>
  )
}