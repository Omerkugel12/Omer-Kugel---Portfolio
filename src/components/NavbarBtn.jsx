import React from "react";
import { FiArrowDownRight } from "react-icons/fi";

function NavbarBtn() {
  return (
    <button className="px-4 py-2 text-xl rounded-full font-bold border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire Me <FiArrowDownRight />
    </button>
  );
}

export default NavbarBtn;
