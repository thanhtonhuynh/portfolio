export function Contact() {
  return (
    <section id="contact" className="relative mb-4 flex min-h-screen flex-col rounded-3xl border">
      <h2 className="w-full space-y-2 rounded-t-3xl bg-muted p-16 text-4xl font-extrabold">
        <p>Contact</p>
        <p className="text-base font-bold text-muted-foreground">
          Learn enough about me? Let's get in touch!
        </p>
      </h2>

      <div className="absolute left-1/2 top-1/2 flex w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col space-y-4 rounded-3xl bg-muted p-20 px-28 leading-7"></div>
    </section>
  );
}
