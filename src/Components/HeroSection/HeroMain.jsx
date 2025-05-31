import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className=" pt-40 pb-16 ">
      <div className="flex md:flex-row gap-5 sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4">
        <HeroText></HeroText>
        <HeroPic></HeroPic>
      </div>
    </div>
  );
};

export default HeroMain;
