import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl  uppercase text-cyan ">
        Front-End Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-5xl sm:text-4xl text-orange font-bold uppercase">
        Mohammad <br className="sm:hidden md:block" />
        Easin Arafat Emon
      </h1>
      <p className="text-lg  text-[#ffffff] mt-4">
        A passionate MERN stack developer with 2 years of learning experience.
      </p>
    </div>
  );
};

export default HeroText;
