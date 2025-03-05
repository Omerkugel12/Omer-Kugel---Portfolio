import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const socials = [
  {
    key: "linkedin",
    icon: CiLinkedin,
    link: "https://www.linkedin.com/in/omerkugel-fullstack",
  },
  {
    key: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/okugel/",
  },
  {
    key: "github",
    icon: FaGithub,
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
