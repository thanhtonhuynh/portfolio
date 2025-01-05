"use client";

import { navItems } from "@/data/nav-links";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useRef, useState } from "react";

type Position = { left: number; width: number; opacity: number };

export function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="hidden text-sm font-semibold sm:block">
      <ul
        onMouseLeave={() => {
          setPosition((prev) => ({ ...prev, opacity: 0 }));
        }}
        className="relative flex rounded-full border-2 border-primary p-1"
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
  title,
  setPosition,
}: {
  href: string;
  title: string;
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
      <Link href={href}>{title}</Link>
    </li>
  );
}

function Cursor({ position }: { position: { left: number; width: number; opacity: number } }) {
  return <motion.li animate={position} className="absolute z-0 h-8 rounded-full bg-foreground" />;
}
