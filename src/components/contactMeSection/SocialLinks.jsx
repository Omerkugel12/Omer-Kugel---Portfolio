import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";

const socials = [
  {
    key: "linkedin",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/omerkugel-fullstack",
  },
  {
    key: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/okugel/",
  },
  {
    key: "github",
    icon: LuGithub,
    link: "https://github.com/Omerkugel12",
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => {
        return (
          <a
            href={social.link}
            key={social.key}
            className="p-2 flex items-center justify-center rounded-full border border-orange"
          >
            <social.icon className="text-3xl text-orange" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
