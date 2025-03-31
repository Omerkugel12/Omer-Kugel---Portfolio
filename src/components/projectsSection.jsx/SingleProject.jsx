import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function SingleProject({ project }) {
  const linkData = [
    { key: "githubFrontend", label: "GitHub (Frontend)", icon: <FaGithub /> },
    { key: "githubBackend", label: "GitHub (Backend)", icon: <FaGithub /> },
    { key: "github", label: "GitHub", icon: <FaGithub /> },
    { key: "website", label: `View -  ${project.name}`, icon: <AiOutlineGlobal /> },
  ];

  return (
    <div
      className={`flex w-full sm:flex-col-reverse items-center gap-8 font-body ${
        project.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="">
        <h3
          className={`text-orange text-xl ${
            project.align === "left"
              ? "lg:justify-self-end"
              : "lg:justify-self-start"
          }`}
        >
          {project.name}
        </h3>
        <h3
          className={`text-lightGrey ${
            project.align === "left" ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {project.year}
        </h3>
        <p
          className={`text-white mb-4 ${
            project.align === "left"
              ? "lg:justify-self-end"
              : "lg:justify-self-start"
          }`}
        >
          {project.description}
        </p>
        <div
          className={`flex gap-5 items-center text-sm sm:flex-col md:flex-row ${
            project.align === "left"
              ? "lg:justify-self-end"
              : "lg:justify-self-start"
          }`}
        >
          {linkData.map((linkData, i) =>
            project.links[linkData.key] ? (
              <a
                key={linkData.key}
                href={project.links[linkData.key]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-darkBrown sm:w-full md:w-auto bg-cyan font-bold flex items-center justify-center gap-2 border rounded-full transition-all duration-500 transform hover:shadow-cyanShadow px-2 sm:py-2 md:py-1"
              >
                <p>{linkData.label}</p> {linkData.icon}
              </a>
            ) : null
          )}
        </div>
      </div>
      <div className="max-h-[220px] sm:max-w-[300px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 border border-white relative">
        <div className="w-full h-full bg-cyan absolute opacity-50 hover:opacity-0 transition-all duration-500"></div>
        <div className="">
          <img
            src={project.image}
            alt={project.description}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
