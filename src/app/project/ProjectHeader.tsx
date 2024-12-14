import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";
import Image from "next/image";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectHeader({ project }: { project: Project }) {
  return (
    <header className="mb-8">
      <div className="mx-auto mb-8 max-w-3xl">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={500}
          quality={100}
          priority
          className="w-full rounded-xl object-contain"
        />
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="">
          <h1 className="mb-1 text-3xl font-extrabold sm:text-4xl">{project.title}</h1>

          <p className="text-muted-foreground">{project.subtitle}</p>

          <ul className="mt-8 flex flex-wrap gap-4">
            {project.tags.map((tag, i) => (
              <li key={i}>
                <Badge className="select-none">{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-16">
          <ProjectLinks project={project} />
        </div>
      </div>
    </header>
  );
}
