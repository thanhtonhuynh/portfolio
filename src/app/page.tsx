import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative flex h-full min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        <Image
          src="/ton.png"
          alt="Ton Huynh's photo"
          width={400}
          height={600}
          className="rounded-full border dark:bg-muted"
          priority
        />

        <div className="absolute left-24 top-1/4 -translate-y-1/4">
          <h1 className="flex flex-col space-y-2 text-6xl font-black">
            <span>Hello There,</span>
            <span>I'm Ton Huynh</span>
          </h1>
        </div>
      </div>

      <About />

      <Skills />

      <Projects />

      <Contact />
    </>
  );
}
