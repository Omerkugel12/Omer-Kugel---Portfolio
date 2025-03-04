import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceTop from "./ExperienceTop";

function ExperienceMain() {
  return (
    <main id="experience" className="pt-40 pb-16">
      <ExperienceTitle />
      <ExperienceTop />
      <div className="w-full h-1 bg-grey max-w-[1200px] mx-auto items-center sm:hidden xl:block"></div>
    </main>
  );
}

export default ExperienceMain;
