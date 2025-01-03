"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const navItems = [
  { id: "about", href: "/#about", label: "ABOUT" },
  { id: "skills", href: "/#skills", label: "SKILLS" },
  { id: "projects", href: "/#projects", label: "PROJECTS" },
  { id: "contact", href: "/#contact", label: "CONTACT" },
];

type Position = { left: number; width: number; opacity: number };

export function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="hidden text-sm font-semibold md:block">
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }));
        }}
        className="relative flex rounded-full bg-muted p-1"
      >
        {navItems.map((navItem, i) => (
          <NavItem key={i} setPosition={setPosition} {...navItem} />
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
}

function NavItem({
  href,
  label,
  setPosition,
}: {
  href: string;
  label: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
      }}
      className="relative z-10 px-5 py-1.5 text-white mix-blend-difference"
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}

function Cursor({ position }: { position: { left: number; width: number; opacity: number } }) {
  return <motion.li animate={position} className="absolute z-0 h-8 rounded-full bg-background" />;
}
