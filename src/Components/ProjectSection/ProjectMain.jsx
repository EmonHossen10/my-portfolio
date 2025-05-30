import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import pro1 from "../../../public/images/project10.jpg";
import pro2 from "../../../public/images/project11.jpg";
import pro3 from "../../../public/images/project12.jpg";

const projects = [
  {
    name: "Digital Tech",
    description:
      "A MongoDB-powered site with navigation, product details, protected service routes, and secure email-password authentication for user registration and login.",
    tags: ["HTML", "CSS", "Tailwind CSS", "React js", "Mongo db", "express js"],
    picture: pro1,
    githubLink: "https://github.com/EmonHossen10/a10-digital-tech-client",
    liveLink:
      "https://65c9251bcd4bfb58dd306f73--joyful-melba-507ba4.netlify.app/",
  },
  {
    name: "Service Master",
    description:
      "My project uses MongoDB for data storage and secure key management via environment variables. It features navigation, service details with React-Leaflet, private routes, and secure email-password authentication.",
    tags: ["HTML", "CSS", "Tailwind CSS", "React js", "Mongo db", "express js"],
    picture: pro2,
    githubLink: "https://github.com/EmonHossen10/a11-service-sharing-client",
    liveLink:
      "https://655bb2950553e718f37aaa29--earnest-macaron-5b91b8.netlify.app/",
  },
  {
    name: "Fast News",
    description:
      "This project uses MongoDB for data storage and secure key management. Features include navigation, admin dashboard, private routes, email authentication, admin panel, and secure payment methods.",
    tags: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React js",
      "Mongo db",
      "express js",
      "Node js",
      "Stripe",
    ],
    picture: pro3,
    githubLink: "https://github.com/EmonHossen10/a12-fast-news-client",
    liveLink: "https://fast-news-80a2e.web.app/",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="w-[85%] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText></ProjectsText>
      </motion.div>

      {/* mapping will be inside the div */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 mt-20">
        {projects.map((project, index) => {
          return <SingleProject key={index} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectMain;
