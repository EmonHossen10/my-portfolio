import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex  text-white flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className=" text-3xl md:text-6xl  text-cyan mb-10">About Me</h2>
      <p>
        Passionate MERN Stack Developer with 2 years of hands-on experience
        building efficient, user-friendly web applications. Proficient in
        React.js, Next.js, Node.js, Express.js, and MongoDB. Thrive on solving
        complex problems, adapting to new tech, and collaborating in dynamic
        environments. When not coding, I contribute to open-source, explore
        emerging tech, and stay active.
      </p>

      {/* <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange   transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Projects
      </button> */}
    </div>
  );
};

export default AboutMeText;
