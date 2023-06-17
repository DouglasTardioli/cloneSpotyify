import { CardAlbum } from "./card-album";
import { ButtonChevron } from "./button-chevron";
import { PlaylistCard } from "./playlist-card";

export function Main() {
  return (
    <div className="w-screen flex-col flex 1 bg-zinc-800 pt-4 p-8">
      <div>
        <ButtonChevron />
        <h1 className="text-4xl mt-8 font-semibold">Good Afternoon</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
        <CardAlbum />
      </div>
      <div>
        <div className="flex justify-between items-center">
        <h2 className="text-2xl mt-8 font-semibold">Made for Douglas Tardioli</h2>
        <a className="text-zinc-400 hover:text-zinc-50 mt-8 " href="#">Show all</a>
        </div>
        <div className="grid grid-cols-8 gap-4 mt-4"> 
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        </div>
      </div>
    </div>
  );
}
