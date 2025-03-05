import React from "react";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motions/variants.js";

function ExperienceMain() {
  return (
    <main id="experience" className="pt-20 pb-16 max-w-[1200px] mx-auto">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTitle />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 bg-grey max-w-[1200px] mx-auto items-center sm:hidden lg:block"></div>
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
      >
        <AllExperience />
      </motion.div>
    </main>
  );
}

export default ExperienceMain;
