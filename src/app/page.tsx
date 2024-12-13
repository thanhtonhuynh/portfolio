import { About } from "@/components/About";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <About />

      <Skills />

      <div id="projects" className="h-[500px]">
        Projects
      </div>

      <div id="contact" className="h-[500px]">
        Contact
      </div>
    </>
  );
}
