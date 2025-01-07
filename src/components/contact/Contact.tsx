import { ContactForm } from "./ContactForm";
import { Socials } from "./Socials";

export function Contact() {
  return (
    <section id="contact" className="relative mb-8 flex scroll-m-16 flex-col gap-8 p-4 md:p-8">
      <h2 className="space-y-2 text-left md:text-center">
        <p className="text-3xl font-extrabold md:text-5xl">Contact</p>
        <p className="text-lg font-bold text-muted-foreground md:text-xl">
          Did I have you at <span className="italic">hello</span>?
        </p>
      </h2>

      <Socials />

      <div className="flex w-full max-w-3xl flex-col space-y-4 self-center rounded-xl border-2 border-l-8 border-primary p-4 shadow-md md:p-8">
        <h3 className="text-xl font-bold">Leave me a message</h3>
        <ContactForm />
      </div>
    </section>
  );
}
