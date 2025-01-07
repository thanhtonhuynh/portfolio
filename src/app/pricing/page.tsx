import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Ton Huynh",
  description: "Solutions for your online presence",
};

const options = [
  // {
  //   title: "Landing Page / Single Page",
  //   price: "From $500",
  //   description: "
  //   features: ["", "", "", ""],
  // },
  {
    title: "Static Website",
    price: "From $999",
    description: "Personal websites, portfolios, and small businesses.",
    features: [
      "Design + Development",
      "Fast, responsive, and user-friendly",
      "Search Engine Optimization",
      "1 year of free domain in a 3-year plan",
      "1 year of free hosting",
      "Infinite revisions",
      "Ongoing security maintenance & updates",
    ],
  },
  {
    title: "Website Application",
    price: "From $1999",
    description: "Blogs, e-commerce, online bookings & services,  and custom solutions.",
    features: [
      "Design + Development",
      "Fast, responsive, and user-friendly",
      "Search Engine Optimization",
      "1 year of free domain in a 3-year plan",
      "1 year of free hosting",
      "First 3 months of free database hosting",
      "Infinite revisions",
      "Ongoing security maintenance & updates",
    ],
  },
];

export default function Page() {
  return (
    <section className="relative mb-8 flex h-full min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4 md:p-16">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#e4e4e7,transparent_1px),linear-gradient(to_bottom,#e4e4e7,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

      <header className="z-10 my-8 flex flex-col items-center space-y-4 md:mb-16 md:mt-0">
        <h1 className="text-center text-4xl font-extrabold sm:text-4xl">
          Solutions for your online presence
        </h1>

        <Button asChild effect={"shine"} size={"lg"} className="text-base font-semibold">
          <Link href={"/#contact"}>Contact</Link>
        </Button>
      </header>

      <main className="w-full">
        {/* <section className="grid gap-8 md:grid-cols-4 lg:grid-cols-3"> */}
        <section className="grid gap-8 md:grid-cols-4">
          {options.map((option, i) => (
            <div
              key={i}
              className={cn(
                // "flex flex-col gap-4 rounded-xl border p-8 md:col-span-2 lg:col-span-1",
                "z-10 flex flex-col gap-4 rounded-xl border bg-background p-8 md:col-span-2",
                i === 2 && "md:col-end-4",
              )}
            >
              <h2 className="text-2xl font-semibold">{option.title}</h2>

              <p className="text-xl">{option.price}</p>

              <p className="text-muted-foreground">{option.description}</p>

              <ul className="mt-4 space-y-3">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check size={20} className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}