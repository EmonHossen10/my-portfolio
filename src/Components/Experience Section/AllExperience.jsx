import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
const experiences = [
  {
    job: "Front-End Developer",
    date: "2022 - Present",
    responsibilities: [
      "Built MERN e-commerce app.",
      "Secure auth & real-time tracking.",
      "Skilled in MongoDB, Express, React, Node.",
      "Focused on UX improvements & innovation.",
    ],
  },
  {
    job: "Frontend Part",
    date: "2023 - Present",
    responsibilities: [
      "Gained expertise in front-end development with React.js.",
      "Building responsive and interactive user interfaces.",
      "Proficient in HTML, CSS,Tailwind,JavaScript",
    ],
  },
  {
    job: "Backend Part",
    date: "2023 - Present",
    responsibilities: [
      "Specialized in back-end development using Node.js and Express.js.",
      "Experienced in making RESTful APIs",
      "Managing databases with MongoDB.",
      "Ensuringsecure server-side operations.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <div>
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
