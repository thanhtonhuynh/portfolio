"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="mb-8 flex min-h-screen flex-col items-center justify-center rounded-3xl border">
      <div className="space-y-8 rounded-3xl bg-muted px-16 py-10">
        <h2 className="space-y-2 text-4xl font-extrabold">
          <div className="text-center text-destructive">404</div>
          <div className="text-base font-bold">
            Opps! The page you are looking for doesn't exist.
          </div>
        </h2>

        <div className="flex flex-col space-y-3">
          <div>Sometimes it is okay to get lost...</div>
          <Button onClick={() => router.back()}>
            <ChevronLeft className="size-4" />
            Go back to where I was
          </Button>
        </div>
      </div>
    </section>
  );
}
