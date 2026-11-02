import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-[750px] mx-auto mb-16">
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-3"
      >
        <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] dark:text-cyan font-bold">
          // Featured Portfolio
        </span>
        <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
      </motion.div>

      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] dark:text-white tracking-tight"
      >
        Production <span className="text-cyber-gradient">Web Applications</span>
      </motion.h2>

      <motion.p
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-4 font-body leading-relaxed"
      >
        A curated selection of full-stack projects showcasing real-world state management,
        secure authentication, payment processing, and responsive modern user interfaces.
      </motion.p>
    </div>
  );
};

export default ProjectsText;
