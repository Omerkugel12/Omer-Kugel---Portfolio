import React from "react";
import { Link } from "react-scroll";

function NavbarLinks({ setMenuOpen }) {
  const links = [
    { link: "About Me", section: "about" },
    { link: "Skills", section: "skills" },
    { link: "Experience", section: "experience" },
    { link: "Projects", section: "projects" },
    { link: "Contact", section: "contact" },
  ];

  return (
    <ul className="flex gap-6 text-white font-bold text-center py-4 lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-base sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full sm:py-4">
      {links.map((link) => {
        return (
          <li key={link.section} className="group">
            <Link
              to={link.section}
              spy={true}
              smooth={true}
              offset={-130}
              duration={500}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
              onClick={() => setMenuOpen(false)}
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500 "></div>
          </li>
        );
      })}
    </ul>
  );
}

export default NavbarLinks;
