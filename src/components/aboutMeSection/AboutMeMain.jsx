import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";

function AboutMeMain() {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto items-center pt-20"
    >
      {/* <div> */}
      <AboutMeText />
      <AboutMeImage />
      {/* </div> */}
    </div>
  );
}

export default AboutMeMain;
