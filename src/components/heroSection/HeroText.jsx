import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motions/variants.js";

function HeroText() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan font-body"
      >
        Fullstack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl font-bold font-special text-orange"
      >
        Omer Kugel
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0 }}
        className="font-body text-white"
      >
        Hi, I'm Omer Kugel, a passionate developer who loves creating intuitive
        <br />
        and engaging digital experiences. I enjoy solving problems, bringing
        <br />
        ideas to life, and continuously learning and improving.
      </motion.p>
    </div>
  );
}

export default HeroText;
