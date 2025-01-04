import { Project } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative rounded-xl border-2 border-l-8 border-primary shadow-md">
      <Image
        src={project.image}
        alt={project.title}
        width={1020}
        height={770}
        quality={100}
        className="hidden w-full rounded-xl p-2 sm:block"
      />

      <div className="w-full rounded-b-xl rounded-t-xl bg-muted sm:absolute sm:bottom-0 sm:rounded-t-none sm:border-t-2 sm:border-dashed sm:border-primary">
        <div className="p-4 md:p-8 md:pb-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        <div className="space-y-2 p-4 py-0 md:p-8 md:py-0">
          <p className="whitespace-pre-line leading-snug">{project.description}</p>

          <ul className="flex flex-wrap gap-2 sm:gap-4">
            {project.tags.map((tag, i) => (
              <li key={i}>
                <Badge className="select-none">{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-end p-2">
          <Button asChild variant={`link`}>
            <Link href={`/project/${project.slug}`}>
              Learn more <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
