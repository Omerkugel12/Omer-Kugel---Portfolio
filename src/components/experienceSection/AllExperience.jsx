import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";

const experience = [
  {
    role: "Full-Stack Developer",
    organization: "Relyon.ai",
    date: "2024 - 2025",
    responsibilities: [
      "Built and optimized web apps with Next.js and Firestore.",
      "Enhanced UX and performance with real-time data sync.",
      "Collaborated with teams to deliver scalable solutions.",
      "Maintained clean, efficient, and reusable code.",
    ],
  },
  {
    role: "Full-Stack Teaching Assistant",
    organization: "IITC college",
    date: "2025 - present",
    responsibilities: [
      "Guided students through coding challenges.",
      "Reviewed and debugged projects.",
      "Provided support in JavaScript, React, and backend development.",
    ],
  },
];

function AllExperience() {
  return (
    <div className="mt-10 max-w-[1200px] mx-auto sm:px-10">
      <ul className="flex sm:flex-col lg:flex-row sm gap-10">
        {experience.map((exp, i) => {
          return (
            <li key={i} className="flex items-center gap-10">
              <SingleExperience
                role={exp.role}
                organization={exp.organization}
                date={exp.date}
                responsibilities={exp.responsibilities}
              />
              {i !== experience.length - 1 ? (
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllExperience;
