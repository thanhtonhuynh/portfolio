import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="relative mb-4 flex min-h-screen flex-col rounded-3xl border">
      <h2 className="w-full space-y-2 rounded-t-3xl bg-muted p-16 text-4xl font-extrabold">
        <p>Projects</p>
        <p className="text-base font-bold text-muted-foreground">
          Here are some of the projects that I have worked on.
        </p>
      </h2>

      <div className="p-6">
        <ul className="grid grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <li key={i}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
