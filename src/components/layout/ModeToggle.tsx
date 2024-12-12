"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Monitor, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    // Temporiarily make this fixed to the bottom right
    <div className="fixed bottom-14 right-4 space-x-1 rounded-full border bg-transparent p-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("system")}
        className={cn(
          "h-7 w-7 rounded-full",
          theme === "system"
            ? "cursor-default bg-muted"
            : "text-muted-foreground hover:bg-background hover:text-foreground",
        )}
      >
        <Monitor />
        <span className="sr-only">System mode</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("light")}
        className={cn(
          "h-7 w-7 rounded-full",
          theme === "light"
            ? "cursor-default bg-muted"
            : "text-muted-foreground hover:bg-background hover:text-foreground",
        )}
      >
        <SunIcon />
        <span className="sr-only">Light mode</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme("dark")}
        className={cn(
          "h-7 w-7 rounded-full",
          theme === "dark"
            ? "cursor-default bg-muted"
            : "text-muted-foreground hover:bg-background hover:text-foreground",
        )}
      >
        <MoonIcon />
        <span className="sr-only">Dark mode</span>
      </Button>
    </div>
  );
}
