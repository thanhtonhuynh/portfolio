import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Ton Huynh",
  description: "Solutions for your online presence",
};

const options = [
  {
    title: "Static Website",
    price: "From $999",
    description: "Personal websites, portfolios, and small businesses.",
    features: [
      "Minimum 5 pages",
      "Design + Development",
      "Fast, responsive, and user-friendly",
      "Search Engine Optimization",
      "Ongoing security maintenance & updates",
      "1 year of free domain in a 3-year plan",
      "1 year of free cloud hosting",
    ],
  },
  {
    title: "Website Application",
    price: "From $1999",
    description: "Blogs, e-commerce, online bookings & services, and custom solutions.",
    features: [
      "Design + Development",
      "Fast, responsive, and user-friendly",
      "Search Engine Optimization",
      "Ongoing security maintenance & updates",
      "1 year of free domain in a 3-year plan",
      "1 year of free cloud hosting",
      "First 3 months of free database hosting",
    ],
  },
  {
    title: "Subscription Plan",
    price: "$0 down, from $119/month",
    description: "Don't want to absorb the upfront cost? No problem!",
    features: [
      "Design + Development",
      "Fast, responsive, and user-friendly",
      "Search Engine Optimization",
      "Ongoing security maintenance & updates",
      "Includes cloud hosting, database hosting, and domain",
      "Unlimited edits",
      "Lifetime updates",
      "Google Business Profile setup & management",
      "24/7 support",
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
        <section className="grid gap-8 md:grid-cols-4 xl:grid-cols-3">
          {/* <section className="grid gap-8 md:grid-cols-4"> */}
          {options.map((option, i) => (
            <div
              key={i}
              className={cn(
                "z-10 flex flex-col justify-between gap-8 rounded-xl border-2 border-primary bg-background p-8 shadow-md transition-all duration-300 md:col-span-2 md:hover:scale-105 xl:col-span-1",
                // "z-10 flex flex-col gap-4 rounded-xl border bg-background p-8 md:col-span-2",
                i === 2 && "md:col-end-4",
              )}
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">{option.title}</h2>
                <p className="text-muted-foreground">{option.description}</p>
                <ul className="mt-4 space-y-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CircleCheck size={20} className="min-h-5 min-w-5 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-2xl font-bold">{option.price}</p>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
}
