import React from "react";
import { Link } from "react-scroll";

function NavbarLogo() {
  return (
    <Link
      to="home"
      spy={true}
      duration={500}
      offset={-130}
      smooth={true}
      className="cursor-pointer"
    >
      <h1 className="text-white text-2xl font-body sm:hidden lg:block">
        Omer Kugel
      </h1>
      <h1 className="text-white text-2xl font-special font-extrabold sm:block lg:hidden">
        OK
      </h1>
    </Link>
  );
}

export default NavbarLogo;
