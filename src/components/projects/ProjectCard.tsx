import { Project } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-base">{project.subtitle}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={500}
          quality={100}
          className="w-full rounded-xl border"
        />

        <p className="whitespace-pre-line">{project.description}</p>

        <ul className="flex flex-wrap gap-4">
          {project.tags.map((tag, i) => (
            <li key={i}>
              <Badge className="select-none">{tag}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="justify-end">
        <Button asChild variant={`link`}>
          <Link href={`/projects/${project.slug}`}>
            Learn more <ChevronRight className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
