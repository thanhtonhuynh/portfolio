import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";
import { Button } from "../ui/button";

export function Socials() {
  return (
    <ul className="flex items-stretch justify-center gap-8">
      <li>
        <Button variant={`link`} className="h-full" asChild>
          <Link href="https://github.com/thanhtonhuynh" target="_blank">
            <LuGithub size={27} />
            /thanhtonhuynh
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`link`} className="h-full" asChild>
          <Link href="https://www.linkedin.com/in/thanhtonhuynh/" target="_blank">
            <LuLinkedin size={27} />
            /in/thanhtonhuynh
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`link`} className="h-full" asChild>
          <Link href="https://www.instagram.com/976.ton/" target="_blank">
            <FaInstagram size={32} />
            /976.ton
          </Link>
        </Button>
      </li>

      <li>
        <Button variant={`link`} className="h-full" asChild>
          <Link href="https://www.facebook.com/thanhtonhuynhh" target="_blank">
            <TbBrandFacebook size={30} />
            /thanhtonhuynhh
          </Link>
        </Button>
      </li>
    </ul>
  );
}
