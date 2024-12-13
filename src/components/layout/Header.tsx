import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative flex h-16 flex-col items-center justify-center">
      <div className="flex h-full w-full items-center justify-between px-12 text-lg font-black">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          ton huynh
        </Link>

        <nav className="rounded-full bg-muted px-16 py-2 text-base font-semibold">
          <ul className="flex space-x-16">
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#skills"}>Skills</Link>
            </li>
            <li>
              <Link href={"/#projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/#contact"}>Contact</Link>
            </li>
          </ul>
        </nav>

        <Button className="rounded-full">CONTACT ME</Button>
      </div>
    </header>
  );
}
