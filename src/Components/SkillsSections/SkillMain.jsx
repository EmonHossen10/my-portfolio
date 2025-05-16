import React from "react";
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";

const SkillMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillText></SkillText>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills></AllSkills>
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm></AllSkillsSm>
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
