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
    <div>
      {skills.map((skill) => {
        return (
          <div key={skill.skill} className="flex items-center space-x-2">
            <skill.icon size={30} className="text-green-500" />
            <p>{skill.skill}</p>
          </div>
        );
      })}
    </div>
  );
}

export default AllSkills;
