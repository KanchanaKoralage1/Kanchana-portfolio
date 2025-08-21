import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


export default function Home() {
  return (
     <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-white dark:bg-black">
        
        <div className="absolute top-4 right-4 z-50">
        <ModeToggle />
        </div>

       <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid/>
        
        <RecentProjects/>
       </div>

      </main>

  );
}
