import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ProjectHeader } from "../ProjectHeader";

export default function Page() {
  const project = projects.find((project) => project.slug === "collabhub");
  if (!project) notFound();

  return (
    <section className="p-8">
      <ProjectHeader project={project} />

      <main className="">
        <p>{project.description}</p>
      </main>
    </section>
  );
}
