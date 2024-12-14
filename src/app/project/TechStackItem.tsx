import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TechStackItem({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="space-x-1">
      <Button variant={"link"} asChild className="h-8 px-0 text-base underline">
        <Link href={href} target="_blank">
          {label}
        </Link>
      </Button>

      <span>- {children}</span>
    </li>
  );
}
