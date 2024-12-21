import Image from "next/image";

export function Hero() {
  return (
    <section className="relative mb-4 flex h-full min-h-[calc(100vh-4rem)] scroll-m-20 flex-col">
      <div className="flex flex-1 flex-col justify-between rounded-b-[150px] bg-muted">
        <div className="flex flex-1 flex-col items-center justify-center rounded-b-[150px] bg-background">
          {/* <div className="max-w-md"> */}
          <Image
            src="/ton.png"
            alt="Ton Huynh's photo"
            width={400}
            height={600}
            className="rounded-full dark:bg-muted"
            priority
          />
          {/* </div> */}
        </div>

        <div className="flex h-[300px] items-center justify-center rounded-b-[150px] p-6 text-2xl font-bold">
          I'm a full-stack web developer with passion to create greate experiences.
        </div>
      </div>

      <div className="absolute left-5 top-[75px] -translate-y-1/4 sm:left-10 sm:top-[100px] md:left-16 lg:left-20 lg:top-[200px] xl:left-24">
        <h1 className="flex flex-col space-y-2 text-xl font-black sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
          <span>Hello There,</span>
          <span>I'm Ton Huynh</span>
        </h1>
      </div>
    </section>
  );
}
