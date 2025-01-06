import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 flex h-16 flex-col items-center justify-center bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.25 }}
    >
      <div className="relative flex h-full w-full max-w-screen-2xl items-center justify-between px-4 lg:px-12">
        <Link href="/" className="flex items-center text-lg font-black">
          <Image
            src={"/logo.png"}
            alt="Ongba Logo"
            width={40}
            height={40}
            className="aspect-square object-cover dark:invert"
          />
          ton huynh
        </Link>

        <Navbar />

        <MobileNav />
      </div>
    </motion.header>
  );
}
