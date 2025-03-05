import React from "react";
import { Link } from "react-scroll";

function FooterMain() {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <main className="pb-20 pt-5 px-10 max-w-[1200px] mx-auto flex items-center justify-between">
      <h2 className="text-xl text-grey">Omer Kugel - Full-Stack developer</h2>
      <ul className="flex justify-center items-center gap-4">
        {links.map((link) => {
          return (
            <li key={link.section} className="group">
              <Link
                to={link.section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-130}
                className="cursor-pointer text-grey"
              >
                {link.link}
              </Link>
              <div className="mx-auto bg-grey w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default FooterMain;
