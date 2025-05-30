import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
 

const ProjectButtons = ({ liveLink, githubLink }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <a
        href={githubLink}
        target="_blank"
        className="cursor-pointer   underline hover:underline hover:text-darkOrange text-white font-semibold py-2 rounded-lg  
               hover:bg-gray-600 hover:scale-110 transform transition duration-300 ease-in-out
               flex justify-center items-center"
      >
        Github Link <LuSquareArrowOutUpRight className="ml-1" />
      </a>
      <a
        href={liveLink}
        target="_blank"
        className="cursor-pointer  underline  hover:underline hover:text-darkOrange text-white font-semibold py-2 rounded-lg  
               hover:bg-gray-400 hover:scale-110 transform transition duration-300 ease-in-out
               flex justify-center items-center"
      >
        Live Link <LuSquareArrowOutUpRight className="ml-1" />
      </a>
    </div>
  );
};

export default ProjectButtons;
