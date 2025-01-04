import { Social } from "@/types";
import { FaInstagram } from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { TbBrandFacebook } from "react-icons/tb";

export const socialItems: Social[] = [
  {
    title: "/thanhtonhuynh",
    icon: <LuGithub size={25} />,
    url: "https://github.com/thanhtonhuynh",
  },
  {
    title: "/in/thanhtonhuynh",
    icon: <LuLinkedin size={25} />,
    url: "https://www.linkedin.com/in/thanhtonhuynh/",
  },
  {
    title: "/976.ton",
    icon: <FaInstagram size={26} />,
    url: "https://www.instagram.com/976.ton/",
  },
  {
    title: "/thanhtonhuynh",
    icon: <TbBrandFacebook size={25} />,
    url: "https://www.facebook.com/thanhtonhuynhh",
  },
];
