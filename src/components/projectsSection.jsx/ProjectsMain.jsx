import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framer-motions/variants.js";

const projects = [
  {
    name: "Booking clone",
    year: "2024",
    description:
      " Booking.com clone is a full-stack web app for hotel searches and reservations (the site is a clone of Booking and does not actually process orders). Built with React (Vite), Node.js, Express, MongoDB, and SQL, it features Context API, Tailwind CSS, and ShadCN for a smooth user experience.",
    links: {
      githubFrontend: "https://github.com/Omerkugel12/Booking.com-----frontend",
      githubBackend: "https://github.com/Omerkugel12/Booking.com-----backend",
      website: null,
    },
    align: "right",
    image: "/website-img-1.jpg",
  },
  {
    name: "Omer Kugel - Portfolio",
    year: "2025",
    description:
      "My portfolio website to show my activity as a Full-Stack developer. Built with React.js and tailwind.CSS, deployed by 'Vercel'",
    links: {
      githubFrontend: "https://github.com/Omerkugel12/Omer-Kugel---Portfolio",
      githubBackend: null,
      website: "https://omer-kugel-portfolio.vercel.app/",
    },
    align: "left",
    image: "/website-img-2.webp",
  },
];

function ProjectsMain() {
  return (
    <div id="projects" className="pt-6 pb-16 max-w-[1200px] mx-auto">
      <ProjectsText />
      <div className="lg:max-w-[900px] mx-auto px-10 mt-20 flex flex-col gap-20 sm:max-w-full">
        {projects.map((project, i) => {
          return (
            <motion.div
              variants={
                project.align === "left"
                  ? fadeIn("left", 0.2)
                  : fadeIn("right", 0.2)
              }
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              key={i}
            >
              <SingleProject project={project} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsMain;
