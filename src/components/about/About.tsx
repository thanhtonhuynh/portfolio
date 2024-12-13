import { Timeline } from "./timeline";

export function About() {
  return (
    <section
      id="about"
      className="relative mb-4 flex min-h-screen flex-col justify-between rounded-3xl border"
    >
      <h2 className="w-full space-y-2 rounded-t-3xl bg-muted p-16 text-4xl font-extrabold">
        <p>About</p>
        <p className="text-base font-bold text-muted-foreground">
          Learn more about me and my journey.
        </p>
      </h2>

      <div className="mx-32 space-y-4 rounded-3xl bg-muted p-20 px-28 leading-7">
        <p className="">
          I am a Computer Science student at{" "}
          <span className="font-bold">Simon Fraser University</span>, BC.
        </p>
        <p className="">
          <span className="font-bold">Elegant</span>, <span className="font-bold">efficient</span>,
          and <span className="font-bold">easy to use</span> are the three main keywords that I
          always bring on the table when working on a project. I am always eager and ready to learn
          new technologies and tools that can smooth out the development process.
        </p>
        <p className="">
          With a strong focus in <span className="font-bold">web development and web design</span>,
          I am currently seeking opportunities to grow, learn, and contribute my values.
        </p>
      </div>

      <Timeline />
    </section>
  );
}
