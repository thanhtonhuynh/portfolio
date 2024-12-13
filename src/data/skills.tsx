import { Skill } from "@/types";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill, RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiPostman,
  SiPrisma,
  SiReact,
  SiSequelize,
  SiTailwindcss,
} from "react-icons/si";

export const skillItems: Skill[] = [
  {
    title: "CSS",
    icon: <SiCss3 size={56} />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss size={64} />,
  },
  {
    title: "HTML",
    icon: <SiHtml5 size={56} />,
  },
  {
    title: "JavaScript",
    icon: <RiJavascriptFill size={64} />,
  },
  {
    title: "TypeScript",
    icon: <BiLogoTypescript size={64} />,
  },
  {
    title: "Node.js",
    icon: <RiNodejsLine size={56} />,
  },
  {
    title: "React",
    icon: <SiReact size={56} />,
  },
  {
    title: "Next.js",
    icon: <RiNextjsFill size={64} />,
  },
  {
    title: "Express",
    icon: <SiExpress size={56} />,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={56} />,
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql size={56} />,
  },
  {
    title: "MySQL",
    icon: <GrMysql size={56} />,
  },
  {
    title: "Prisma",
    icon: <SiPrisma size={56} />,
  },
  {
    title: "Sequelize",
    icon: <SiSequelize size={56} />,
  },
  {
    title: "Postman",
    icon: <SiPostman size={56} />,
  },
  {
    title: "Git",
    icon: <FaGitAlt size={64} />,
  },
  {
    title: "Docker",
    icon: <SiDocker size={64} />,
  },
];
