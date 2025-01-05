"use client";
import { motion, MotionConfig } from "motion/react";
import { useState } from "react";

export function NavbarMobile() {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
      }}
    >
      <motion.button
        initial={false}
        onClick={() => setActive(!active)}
        className="relative h-10 w-10 rounded-full bg-background transition-colors hover:bg-accent sm:hidden"
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
