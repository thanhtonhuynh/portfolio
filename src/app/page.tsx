import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <About />

      <Skills />

      <Projects />

      <Contact />
    </>
  );
}
