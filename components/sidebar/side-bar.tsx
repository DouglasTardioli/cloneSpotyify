import { Home, Search, Library } from "lucide-react";
import { Balls } from "./balls";
import { PlaylistSideBar } from "./playlist-sidebar";

export function SideBar() {
  return (
    <div className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-4"> 
      <Balls/>
        <a href="/" className="flex gap-3 items-center text-lg text-zinc-300 hover:text-zinc-100">
          <Home />
          Home
        </a>
        <a
          href="/"
          className="flex gap-3 items-center text-lg font-semibold text-zinc-300 hover:text-zinc-100"
        >
          <Search />
          Search
        </a>
        <a
          href="/"
          className="flex gap-3 items-center text-lg font-semibold text-zinc-300 hover:text-zinc-100"
        >
          <Library />
          Your Library

        </a>
      </nav>
      <nav className="mt-10 pt-10 border-t border-zinc-800">
      <PlaylistSideBar />
      </nav>
    </div>
  );
}
