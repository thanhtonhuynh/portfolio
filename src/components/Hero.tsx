import { MotionConfig } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative mb-4 flex h-full min-h-[calc(100vh-4rem)] scroll-m-20 flex-col items-center justify-center">
      <div className="flex flex-col items-center lg:flex-row lg:gap-4">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#e4e4e7,transparent_1px),linear-gradient(to_bottom,#e4e4e7,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

        <MotionConfig
          transition={{
            duration: 3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <motion.div
            className="relative p-4 md:p-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="mb-4 text-4xl font-black md:mb-8 md:text-6xl">Hello, I'm Ton Huynh.</h1>
            <p className="text-xl font-bold md:text-2xl">
              I'm a full-stack web developer with passion to create greate experiences.
            </p>
          </motion.div>

          <motion.div
            className="z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Image
              src="/ton.png"
              alt="Ton Huynh's photo"
              width={512}
              height={730}
              className="rounded-full"
              priority
            />
          </motion.div>
        </MotionConfig>
      </div>
    </section>
  );
}
