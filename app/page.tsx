
import { Footer } from "@/components/footer/footer";
import { Main } from "@/components/main/main";
import { SideBar } from "@/components/sidebar/side-bar";



export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}
