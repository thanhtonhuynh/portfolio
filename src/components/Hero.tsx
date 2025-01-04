import Image from "next/image";

export function Hero() {
  return (
    <section className="relative mb-4 flex h-full min-h-[calc(100vh-4rem)] scroll-m-20 flex-col items-center justify-center">
      <div className="flex flex-col items-center lg:flex-row lg:gap-16">
        <div className="p-4">
          <h1 className="mb-4 text-4xl font-black md:mb-8 md:text-6xl">Hello, I'm Ton Huynh.</h1>
          <p className="text-xl font-bold md:text-2xl">
            I'm a full-stack web developer with passion to create greate experiences.
          </p>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/ton.png"
            alt="Ton Huynh's photo"
            width={512}
            height={730}
            className="rounded-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
