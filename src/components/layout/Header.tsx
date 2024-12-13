import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-0 flex w-full items-center justify-between px-12 py-4 text-lg font-black">
        <span>ton huynh</span>

        <nav className="rounded-full bg-muted px-16 py-2 text-base font-semibold">
          <ul className="flex space-x-16">
            <li>
              <Link href={"#about"}>About</Link>
            </li>
            <li>
              <Link href={"#skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Button className="rounded-full">CONTACT ME</Button>
      </div>

      <div className="flex h-full flex-col items-center justify-center">
        <Image
          src="/ton.png"
          alt="Ton Huynh's photo"
          width={400}
          height={600}
          className="rounded-full border dark:bg-muted"
        />

        <div className="absolute left-24 top-1/4 -translate-y-1/4">
          <h1 className="flex flex-col space-y-2 text-6xl font-black">
            <span>Hello There,</span>
            <span>I'm Ton Huynh</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
