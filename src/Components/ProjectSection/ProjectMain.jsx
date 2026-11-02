import React, { useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import pro1 from "../../../public/images/project10.jpg";
import pro2 from "../../../public/images/project11.jpg";
import pro3 from "../../../public/images/project12.jpg";

const projects = [
  {
    name: "Fast News Portal",
    category: "fullstack",
    featured: true,
    description:
      "A feature-rich full-stack digital news platform engineered with MongoDB, Express, and React. Includes comprehensive admin dashboard, role permissions, article publishing, private subscriber routes, and Stripe payment integration.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
    picture: pro3,
    githubLink: "https://github.com/EmonHossen10/a12-fast-news-client",
    liveLink: "https://fast-news-80a2e.web.app/",
  },
  {
    name: "Service Master",
    category: "fullstack",
    featured: false,
    description:
      "A community service-sharing and booking portal powered by MongoDB. Features interactive geospatial location mapping with React-Leaflet, dynamic service booking forms, protected user dashboards, and secure authentication.",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js", "React-Leaflet", "Tailwind"],
    picture: pro2,
    githubLink: "https://github.com/EmonHossen10/a11-service-sharing-client",
    liveLink:
      "https://655bb2950553e718f37aaa29--earnest-macaron-5b91b8.netlify.app/",
  },
  {
    name: "Digital Tech Hub",
    category: "fullstack",
    featured: false,
    description:
      "An electronic product showcase and client store powered by MongoDB. Features real-time catalog filtering, protected purchase routes, user profile authentication, and responsive mobile-first UI with Tailwind CSS.",
    tags: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "REST API", "Firebase"],
    picture: pro1,
    githubLink: "https://github.com/EmonHossen10/a10-digital-tech-client",
    liveLink:
      "https://65c9251bcd4bfb58dd306f73--joyful-melba-507ba4.netlify.app/",
  },
];

const ProjectMain = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <ProjectsText />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", index * 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h-full"
            >
              <SingleProject project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectMain;
