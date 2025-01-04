import langaraLogo from "@/assets/langara.png";
import sfuLogo from "@/assets/sfu.png";
import Image from "next/image";

export function Timeline() {
  return (
    <div className="flex flex-col justify-center gap-4 md:flex-row md:gap-16">
      <div className="place-content-center space-y-4 rounded-xl border-2 border-dashed border-primary p-4">
        <div className="mx-auto h-32 w-32">
          <Image src={langaraLogo} alt="Langara College Logo" width={128} height={125} />
        </div>

        <div className="space-y-1.5">
          <p className="font-semibold leading-none tracking-tight">
            Associate of Science in Computer Science
          </p>

          <div className="text-sm text-muted-foreground">
            <div className="font-medium">Langara College</div>
            <div>June 2019 - April 2022</div>
          </div>

          <div className="flex justify-between">
            <span>Honour</span>
            <span className="font-medium">Graduation with Distinction</span>
          </div>

          <div className="flex justify-between">
            <span>GPA</span>
            <span className="font-medium">3.84</span>
          </div>
        </div>
      </div>

      <div className="place-content-center space-y-4 rounded-xl border-2 border-dashed border-primary p-4">
        <div className="mx-auto flex h-32 w-32 flex-col justify-center">
          <Image src={sfuLogo} alt="SFU Logo" width={128} height={64} />
        </div>

        <div className="space-y-1.5">
          <p className="font-semibold leading-none tracking-tight">
            Bachelor of Science in Computing Science
          </p>

          <div className="text-sm text-muted-foreground">
            <div className="font-medium">Simon Fraser University</div>
            <div>September 2022 - Present</div>
          </div>
        </div>
      </div>
    </div>
  );
}
