import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";

function SkillsMain() {
  return (
    <div id="skills" className="pt-40">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] xl:block hidden">
          <AllSkills />
        </div>
        <div className="md:block xl:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
}

export default SkillsMain;
