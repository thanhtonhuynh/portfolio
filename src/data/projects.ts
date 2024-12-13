import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ongba-management-system",
    title: "Ongba Management System",
    subtitle: "Full-stack restaurant employee management and sales reporting system",
    description:
      "Ongba Management System is a web application designed to help restaurant manage their sales data, and their employee hours and tips.\nDeveloped as a gift from the bottom of my heart to Ongba Vietnamese Eatery, a local restaurant, and also a family to me, that I worked at for over 6 years.",
    image: "/ongba-homepage.jpeg",
    tags: [
      "Website",
      "Next.js",
      "React",
      "MongoDB",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Shadcn/ui",
    ],
  },

  {
    slug: "techbuy",
    title: "Techbuy",
    subtitle: "Full-stack e-commerce storefront and admin dashboard",
    description:
      "Techbuy is a full-stack e-commerce storefront application that allows users to browse and purchase tech products. It also includes an admin dashboard for managing categories, products, and orders.\nDeveloped as a side project, Fall 2024.",
    image: "/techbuy-homepage.png",
    tags: [
      "Website",
      "Next.js",
      "React",
      "MongoDB",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "Shadcn/ui",
      "Stripe",
    ],
  },

  {
    slug: "collabhub",
    title: "CollabHub",
    subtitle: "Full-stack project management application",
    description:
      "CollabHub serves as a centralized platform for effective collaboration and project organization.\nDeveloped as a school project for SFU CMPT 372 Web II - Server-side Development, Spring 2024 .",
    image: "/collabhub.png",
    tags: ["Website", "PostgreSQL", "Express", "React", "TypeScript", "Sequelize", "SCSS"],
  },
];
