import { Button } from "@/components/ui/button";
import { Project } from "@/types";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <>
      {project.siteUrl && (
        <Button
          asChild
          variant={"link"}
          className="px-0 text-blue-600 underline hover:text-blue-400"
        >
          <Link href={project.siteUrl} target="_blank">
            <LinkIcon size={15} />
            View live site
          </Link>
        </Button>
      )}

      {project.repoUrl && (
        <Button
          asChild
          variant={"link"}
          className="px-0 text-blue-600 underline hover:text-blue-400"
        >
          <Link href={project.repoUrl} target="_blank">
            <LuGithub size={16} />
            View github repo
          </Link>
        </Button>
      )}
    </>
  );
}
