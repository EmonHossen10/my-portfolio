import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";

const HeroText = () => {
  return (
    <div className="flex  f flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" text-xl md:text-3xl text-orange font-bold   "
      >
        Hi, I'm <br />
        Mohammad Easin Arafat Emon
      </motion.p>

      {/* type animation */}
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-4xl text-xl text-white  font-semibold mb-2 animate__animated animate__zoomIn"
      >
        <span>I'm a </span>
        <TypeAnimation
          sequence={[
            "MERN",
            700,
            "MERN Stack",
            700,
            "MERN Stack Developer",
            700,
            "Front-end",
            700,
            "Front-end Developer",
            700,
            "Web Developer",
            700,
            "",
            700,
          ]}
          className="lg:text-4xl text-3xl text-cyan font-bold mb-5"
          repeat={Infinity}
          delay={100} // Adjusted delay for typing speed
        />
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" text-sm text-white/80 mt-4"
      >
        I am a passionate MERN stack developer with 2 years of learning
        experience in HTML, CSS, React, Node.js, Express.js, and MongoDB. Aiming
        to build innovative solutions that drive business growth and deliver
        exceptional user experiences.
      </motion.p>
    </div>
  );
};

export default HeroText;
