import React from "react";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { AiFillExperiment } from "react-icons/ai";
import AllExperience from "./AllExperience";

const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText></ExperienceText>
      <ExperienceTop></ExperienceTop>
       <div className="w-full h-1 mt-4 bg-lightBrown lg:block sm:hidden"></div>
      <AllExperience></AllExperience>
    </div>
  );
};

export default ExperienceMain;
