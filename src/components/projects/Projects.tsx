import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative mb-4 flex scroll-m-16 flex-col gap-8 p-4 md:p-8">
      <h2 className="space-y-2 text-left md:text-center">
        <p className="text-3xl font-extrabold md:text-5xl">Projects</p>
        <p className="text-lg font-bold text-muted-foreground md:text-xl">
          Here are some of the projects that I have worked on.
        </p>
      </h2>

      <ul className="space-y-8">
        {projects.map((project, i) => (
          <li key={i} className="mx-auto flex max-w-5xl flex-col">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
