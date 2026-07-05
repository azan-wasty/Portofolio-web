import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* scroll-mt-20 ensures that when we navigate, 
         the content doesn't get hidden behind the sticky navbar.
      */}
      <div id="home" className="scroll-mt-20"><Hero /></div>
      <div id="about" className="scroll-mt-20"><About /></div>
      <div id="skills" className="scroll-mt-20"><Skills /></div>
      <div id="projects" className="scroll-mt-20"><Projects /></div>
      <div id="contact" className="scroll-mt-20"><Contact /></div>
    </main>
  );
}