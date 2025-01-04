import { socialItems } from "@/data/socials";
import Link from "next/link";
import { Button } from "../ui/button";

export function Socials() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-8 xl:gap-16">
      {socialItems.map((social, i) => (
        <li key={i}>
          <Button
            variant={`outline`}
            className="h-11 w-full rounded-xl border-2 border-dashed border-primary"
            asChild
          >
            <Link href={social.url} target="_blank">
              {social.icon}
              {social.title}
            </Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
