"use client";

import { Project } from "@/types";
import { ChevronRight } from "lucide-react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function ProjectCard({
  project,
  index,
  targetScale,
  progress,
}: {
  project: Project;
  index: number;
  targetScale: number;
  progress: MotionValue<number>;
}) {
  const containerRef = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, [index * 0.5, 1], [1, targetScale]);

  return (
    <li ref={containerRef} className="sticky top-24 mx-auto">
      <motion.div
        className="relative flex h-[500px] origin-top flex-col justify-center rounded-xl border-2 border-l-8 border-primary bg-background p-4 shadow-md md:h-[600px]"
        style={{ scale, top: `calc(${index * 20}px)` }}
      >
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.subtitle}</p>
        </div>

        <div className="grid place-items-center md:grid-cols-2 md:gap-8">
          <div className="relative hidden h-96 w-full max-w-lg overflow-hidden rounded-xl border shadow-sm md:block">
            <motion.div style={{ scale: imageScale }} className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* <div className="w-full rounded-b-xl rounded-t-xl bg-muted sm:absolute sm:bottom-0 sm:rounded-t-none sm:border-t-2 sm:border-dashed sm:border-primary"> */}
          <div className="">
            <div className="space-y-2 p-4 py-0 lg:p-8 lg:py-0">
              <p className="whitespace-pre-line leading-snug">{project.description}</p>
              <ul className="flex flex-wrap gap-2 md:gap-4">
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
      </motion.div>
    </li>
    // <li
    //   ref={containerRef}
    //   className="sticky top-0 mx-auto flex h-[calc(100vh-4rem)] items-center justify-center"
    // >
    //   <motion.div
    //     className="relative flex min-h-[50%] origin-top flex-col justify-center rounded-xl border-2 border-l-8 border-primary bg-background p-4 shadow-md"
    //     style={{ scale, top: `calc( ${index * 25}px)` }}
    //   >
    //     <div className="mb-8 text-center">
    //       <h3 className="text-xl font-bold">{project.title}</h3>
    //       <p className="text-sm text-muted-foreground">{project.subtitle}</p>
    //     </div>

    //     <div className="grid place-items-center sm:grid-cols-2">
    //       <div className="relative hidden max-w-lg overflow-hidden rounded-xl border sm:block">
    //         <motion.div style={{ scale: imageScale }}>
    //           <Image
    //             src={project.image}
    //             alt={project.title}
    //             width={1020}
    //             height={770}
    //             quality={100}
    //           />
    //         </motion.div>
    //       </div>

    //       {/* <div className="w-full rounded-b-xl rounded-t-xl bg-muted sm:absolute sm:bottom-0 sm:rounded-t-none sm:border-t-2 sm:border-dashed sm:border-primary"> */}
    //       <div className="">
    //         <div className="space-y-2 p-4 py-0 md:p-8 md:py-0">
    //           <p className="whitespace-pre-line leading-snug">{project.description}</p>
    //           <ul className="flex flex-wrap gap-2 sm:gap-4">
    //             {project.tags.map((tag, i) => (
    //               <li key={i}>
    //                 <Badge className="select-none">{tag}</Badge>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         <div className="flex items-center justify-end p-2">
    //           <Button asChild variant={`link`}>
    //             <Link href={`/project/${project.slug}`}>
    //               Learn more <ChevronRight className="size-4" />
    //             </Link>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </motion.div>
    // </li>
  );
}
