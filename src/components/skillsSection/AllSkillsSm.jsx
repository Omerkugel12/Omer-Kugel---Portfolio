import React from "react";
import { TbBrandJavascript } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import { LiaNodeJs } from "react-icons/lia";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motions/variants.js";

const skills = [
  { skill: "HTML", icon: AiOutlineHtml5 },
  { skill: "JAVASCRIPT", icon: TbBrandJavascript },
  { skill: "TYPESCRIPT", icon: TbBrandTypescript },
  { skill: "CSS", icon: IoLogoCss3 },
  { skill: "REACT.JS", icon: FaReact },
  { skill: "EXPRESS.JS", icon: SiExpress },
  { skill: "NEXT.JS", icon: RiNextjsFill },
  { skill: "MONGODB", icon: SiMongodb },
  { skill: "FIREBASE", icon: RiFirebaseLine },
  { skill: "NODEJS", icon: LiaNodeJs },
  { skill: "GIT", icon: FaGitAlt },
];

function AllSkillsSm() {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12">
      {skills.map((skill) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0 }}
            key={skill.skill}
            className="flex flex-col items-center"
          >
            <div className="text-7xl text-orange">
              <skill.icon />
            </div>
            <p className="text-center mt-4 text-white font-body">
              {skill.skill}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default AllSkillsSm;
