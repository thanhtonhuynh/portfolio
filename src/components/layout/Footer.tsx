import { ModeToggle } from "./ModeToggle";

export async function Footer() {
  return (
    <footer className="flex items-center justify-between gap-4 border-t border-border/40 px-8 py-6 dark:border-border">
      <div>&copy; {new Date().getFullYear()}, Ton Huynh</div>

      <ModeToggle />
    </footer>
  );
}
