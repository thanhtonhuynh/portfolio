import { Timeline } from "./timeline";

export function About() {
  return (
    <section id="about" className="relative mb-4 flex scroll-m-16 flex-col gap-8 p-4 md:p-8">
      <h2 className="space-y-2 text-left md:text-center">
        <p className="text-3xl font-extrabold md:text-5xl">About</p>
        <p className="text-lg font-bold text-muted-foreground md:text-xl">
          Learn more about me and my journey.
        </p>
      </h2>

      <div className="space-y-4 rounded-xl border-2 border-l-8 border-primary p-4 leading-7 shadow-md md:p-8">
        <p className="">
          I am a Computer Science student at{" "}
          <span className="font-bold">Simon Fraser University</span>, BC.
        </p>

        <p className="">
          <span className="font-bold">Elegant</span>, <span className="font-bold">efficient</span>,
          and <span className="font-bold">easy to use</span> are the three main keywords that I
          always bring on the table when working on a project.
        </p>

        <p>
          My core stack includes <span className="font-bold">React</span>,{" "}
          <span className="font-bold">Next.js</span>, <span className="font-bold">MongoDB</span>,
          and <span className="font-bold">Tailwindcss</span>. I am always eager and ready to learn
          new technologies and tools that can smooth out the development process.
        </p>

        <p className="">
          With a strong focus in{" "}
          <span className="font-bold">full-stack web development and web design</span>, I am
          currently seeking opportunities to grow, learn, and contribute my values.
        </p>
      </div>

      <Timeline />
    </section>
  );
}
