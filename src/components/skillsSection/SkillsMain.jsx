import React from "react";
import SkillsText from "./SkillsText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motions/variants.js";

function SkillsMain() {
  return (
    <div id="skills" className="pt-20">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[400px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>
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
