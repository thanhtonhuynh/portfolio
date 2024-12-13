export function About() {
  return (
    <section id="about" className="relative mb-4 flex min-h-screen flex-col rounded-3xl border">
      <h2 className="w-full rounded-t-3xl bg-muted p-16 text-4xl font-extrabold">About Me</h2>

      <div className="absolute left-1/2 top-1/2 flex w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col space-y-4 rounded-3xl bg-muted p-20 px-28 leading-7">
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
    </section>
  );
}
