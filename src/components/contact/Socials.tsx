import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { Button } from "../ui/button";

export function Socials() {
  return (
    // <ul className="flex items-stretch justify-center gap-8">
    <ul className="grid gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-8 xl:gap-16">
      <li>
        <Button variant={`outline`} className="h-11 w-full" asChild>
          <Link href="https://github.com/thanhtonhuynh" target="_blank">
            <LuGithub size={25} />
            /thanhtonhuynh
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`outline`} className="h-11 w-full" asChild>
          <Link href="https://www.linkedin.com/in/thanhtonhuynh/" target="_blank">
            <LuLinkedin size={25} />
            /in/thanhtonhuynh
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`outline`} className="h-11 w-full" asChild>
          <Link href="https://www.instagram.com/976.ton/" target="_blank">
            <FaInstagram size={26} />
            /976.ton
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`outline`} className="h-11 w-full" asChild>
          <Link href="https://www.facebook.com/thanhtonhuynhh" target="_blank">
            <TbBrandFacebook size={25} />
            /thanhtonhuynhh
          </Link>
        </Button>
      </li>
    </ul>
  );
}
