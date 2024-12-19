import { skillItems } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mb-4 flex min-h-[calc(100vh-4rem)] scroll-m-16 flex-col rounded-3xl border"
    >
      <h2 className="w-full space-y-2 rounded-t-3xl bg-muted p-16 text-4xl font-extrabold">
        <p>Skills</p>
        <p className="text-base font-bold text-muted-foreground">
          Languages, frameworks, technologies, and tools.
        </p>
      </h2>

      <div className="absolute top-1/2 w-full -translate-y-1/2 rounded-3xl bg-muted p-20 px-28">
        <ul className="grid grid-cols-6 place-items-center gap-8">
          {skillItems.map((skillItem, i) => (
            <li key={i} className="flex flex-col items-center gap-2">
              {skillItem.icon}
              <span className="text-nowrap">{skillItem.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
