import { About } from "@/components/About";

export default function Home() {
  return (
    <>
      <About />

      <div id="projects" className="h-[500px]">
        Projects
      </div>

      <div id="contact" className="h-[500px]">
        Contact
      </div>
    </>
  );
}
