import { skillItems } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative mb-4 flex scroll-m-16 flex-col gap-8 p-4 md:p-8">
      <h2 className="space-y-2 text-left md:text-center">
        <p className="text-3xl font-extrabold md:text-5xl">Skills</p>
        <p className="text-lg font-bold text-muted-foreground md:text-xl">
          Languages, frameworks, technologies, and libraries.
        </p>
      </h2>

      <ul className="grid grid-cols-4 place-items-center gap-8 md:grid-cols-6">
        {skillItems.map((skillItem, i) => (
          <li key={i} className="flex flex-col items-center gap-2">
            {skillItem.icon}
            <span className="text-nowrap">{skillItem.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
