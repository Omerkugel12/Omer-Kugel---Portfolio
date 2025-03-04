import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";

function ExperienceMain() {
  return (
    <main id="experience" className="pt-40 pb-16 max-w-[1200px] mx-auto">
      <ExperienceTitle />
      <ExperienceTop />
      <div className="w-full h-1 bg-grey max-w-[1200px] mx-auto items-center sm:hidden lg:block"></div>
      <AllExperience />
    </main>
  );
}

export default ExperienceMain;
