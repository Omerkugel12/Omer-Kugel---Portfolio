import React from "react";

function NavbarLogo() {
  return (
    <a href="#home">
      <h1 className="text-white text-2xl font-body sm:hidden lg:block">
        Omer Kugel
      </h1>
      <h1 className="text-white text-2xl font-special font-extrabold sm:block lg:hidden">
        OK
      </h1>
    </a>
  );
}

export default NavbarLogo;
