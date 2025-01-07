"use client";

import { projects } from "@/data/projects";
import { useScroll } from "motion/react";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 20%", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative mb-4 flex scroll-m-16 flex-col gap-8 p-4 md:p-8"
      ref={ref}
    >
      <h2 className="space-y-2 text-left md:text-center">
        <p className="text-3xl font-extrabold md:text-5xl">Projects</p>
        <p className="text-lg font-bold text-muted-foreground md:text-xl">
          Here are some of the projects that I have worked on.
        </p>
      </h2>

      <ul className="">
        {projects.map((project, i) => {
          // <li
          //   key={i}
          //   className="sticky top-0 mx-auto flex h-[calc(100vh-4rem)] items-center justify-center"
          // >
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
          // </li>
        })}
      </ul>
    </section>
  );
}
