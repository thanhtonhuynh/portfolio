import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const project = projects.find((project) => project.slug === params.slug);
  if (!project) notFound();

  return <div className="border">Page</div>;
}
