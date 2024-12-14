import { ModeToggle } from "./ModeToggle";

export async function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 border-t border-border/40 px-8 py-16 dark:border-border">
      <div className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()}, Ton Huynh. All rights reserved.
      </div>

      <ModeToggle />
    </footer>
  );
}
