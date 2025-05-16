import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-10 items-center justify-center">
      <ExperienceTopLeft></ExperienceTopLeft>
      <ExperienceTopMiddle></ExperienceTopMiddle>
      <ExperienceTopRight></ExperienceTopRight> 
    </div>
  );
};

export default ExperienceTop;
