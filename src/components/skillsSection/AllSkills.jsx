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
import SingleSkill from "./SingleSkill";

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

function AllSkills() {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((skill) => {
        return (
          <SingleSkill
            key={skill.skill}
            text={skill.skill}
            imgSvg={<skill.icon />}
          />
        );
      })}
    </div>
  );
}

export default AllSkills;
