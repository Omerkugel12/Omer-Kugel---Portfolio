import React from "react";
import { PiHexagonThin } from "react-icons/pi";

function HeroPic() {
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src="../../../public/hero image.svg"
        alt="Omer Kugel"
        className="w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full border-[1px] border-cyan "
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:w-[600px] md:h-[600px] w-[350px] h-[350px] text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
}

export default HeroPic;
