import { navItems } from "@/data/nav-links";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export async function Footer() {
  return (
    <footer className="border-t border-border/40 px-8 py-16 dark:border-border">
      <div className="flex items-center justify-between">
        <ul className="flex flex-col items-start sm:flex-row sm:items-center">
          {navItems.map((item) => (
            <Button
              key={item.title}
              effect={"hoverUnderline"}
              className="text-muted-foreground"
              variant="link"
            >
              <Link href={item.href}>{item.title}</Link>
            </Button>
          ))}
          <Button effect={"hoverUnderline"} className="text-muted-foreground" variant="link">
            <Link href="/pricing">Pricing</Link>
          </Button>
        </ul>

        <ModeToggle />
      </div>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}, Ton Huynh. All rights reserved.
      </div>
    </footer>
  );
}
