import Link from "next/link";
import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="relative flex h-16 flex-col items-center justify-center">
      <div className="flex h-full w-full items-center justify-between px-8 text-lg font-black lg:px-12">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
          ton huynh
        </Link>

        <nav className="hidden rounded-full bg-muted py-1 text-base font-semibold md:block md:px-4 lg:px-16">
          <ul className="flex space-x-8">
            <li>
              <Button asChild variant={"link"}>
                <Link href={"/#about"}>About</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link href={"/#skills"}>Skills</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link href={"/#projects"}>Projects</Link>
              </Button>
            </li>
            <li>
              <Button asChild variant={"link"}>
                <Link href={"/#contact"}>Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>

        <Button className="">CONTACT ME</Button>
      </div>
    </header>
  );
}
