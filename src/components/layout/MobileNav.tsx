"use client";

import { navItems } from "@/data/nav-links";
import { socialItems } from "@/data/socials";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const containerVariants = {
  open: {
    width: "100vw",
    height: "100vh",
    top: "-12px",
    right: "-16px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: 40,
    height: 40,
    top: 0,
    right: 0,
    transition: { duration: 0.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] },
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.5,
      delay: 0.25 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },

  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.76, 0, 0.24, 1] },
  },
};

export function MobileNav() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  return (
    <div className="fixed right-4 h-10 sm:hidden">
      <motion.div
        className="absolute rounded-md bg-muted"
        variants={containerVariants}
        animate={active ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{active && <Nav active={active} setActive={setActive} />}</AnimatePresence>
      </motion.div>

      <MenuButton active={active} setActive={setActive} />
    </div>
  );
}

function Nav({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex h-full flex-col justify-between px-10 py-48">
      <ul className="flex flex-col gap-8">
        {navItems.map((navItem, i) => (
          <li
            key={i}
            className="perspective-origin-bottom perspective-[120px]"
            onClick={() => setActive(!active)}
          >
            <motion.div
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link href={navItem.href} className="text-4xl font-medium">
                {navItem.title}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 gap-4">
        {socialItems.map((social, i) => (
          <motion.li
            key={i}
            custom={i}
            variants={slideIn}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <Link href={social.url} className="flex w-fit items-center gap-2 font-medium">
              {social.icon} {social.type}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function MenuButton({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive(!active)}
        className={cn(
          "absolute right-0 size-10 rounded-md bg-background shadow-sm transition-colors duration-500",
        )}
        animate={active ? "open" : "closed"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}
