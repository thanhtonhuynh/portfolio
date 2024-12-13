import { About } from "@/components/About";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <About />

      <Skills />

      <Projects />

      <div id="contact" className="h-[500px]">
        Contact
      </div>
    </>
  );
}
