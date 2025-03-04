import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

function SingleProject({ project }) {
  return (
    <div>
      <div>
        <h3>{project.name}</h3>
        <h3>{project.year}</h3>
        <p>{project.description}</p>
        <div>
          {project.links.githubFrontend && (
            <a href={`${project.links.githubFrontend}`} className="">
              <p>Github (Frontend)</p>
              <FaGithub />
            </a>
          )}
          {project.links.githubBackend && (
            <a href={`${project.links.githubBackend}`}>
              <p>Github (Backend)</p>
              <FaGithub />
            </a>
          )}
          {project.links.website && (
            <a href={`${project.links.website}`}>
              <p>View</p>
              <AiOutlineGlobal />
            </a>
          )}
        </div>
      </div>
      <div>
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

export default SingleProject;
