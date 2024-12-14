import { ContactForm } from "./ContactForm";
import { Socials } from "./Socials";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mb-8 flex min-h-screen flex-col justify-between rounded-3xl border"
    >
      <h2 className="mb-4 w-full space-y-2 rounded-3xl bg-muted p-16 text-4xl font-extrabold">
        <p>Contact</p>
        <p className="text-base font-bold text-muted-foreground">
          Learn enough about me? Let's get in touch!
        </p>
      </h2>

      <div className="mx-8 mb-4 rounded-3xl bg-muted p-10">
        <Socials />
      </div>

      <div className="mx-8 mb-4 flex flex-col space-y-4 rounded-3xl bg-muted p-20 px-28">
        <h3 className="text-xl font-bold">Leave me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
}
