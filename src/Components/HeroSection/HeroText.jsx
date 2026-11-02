import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { TypeAnimation } from "react-type-animation";
import { FiDownload, FiFolder, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left text-center max-w-[620px]">
      {/* Availability Status Badge */}
      <motion.div
        variants={fadeIn("down", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-slate-900/60 border border-blue-200/80 dark:border-cyan/30 text-xs font-mono w-fit md:self-start self-center shadow-xs dark:shadow-[0_0_15px_rgba(0,245,255,0.15)] backdrop-blur-md"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-[#0F172A] dark:text-gray-300 font-medium">
          Available for Hire & Projects
        </span>
      </motion.div>

      {/* Main Name Heading */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-[#2563EB] dark:text-cyan font-mono mb-1 font-semibold">
          Full-Stack Web Architect
        </p>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] dark:text-white tracking-tight leading-[1.1]">
          Hi, I'm <br className="hidden sm:inline" />
          <span className="text-cyber-gradient drop-shadow-sm dark:drop-shadow-[0_0_25px_rgba(0,245,255,0.35)]">
            Mohammad Emon
          </span>
        </h1>
      </motion.div>

      {/* Dynamic Typing Title */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-lg sm:text-2xl lg:text-3xl text-slate-800 dark:text-gray-200 font-semibold flex items-center md:justify-start justify-center gap-2 flex-wrap min-h-[40px]"
      >
        <span className="text-slate-600 dark:text-gray-400">Crafting</span>
        <TypeAnimation
          sequence={[
            "MERN Stack Web Apps",
            1200,
            "Frontend & React Solutions",
            1200,
            "Next.js & Node.js Architecture",
            1200,
            "Scalable Cloud APIs",
            1200,
            "High-Performance Interfaces",
            1200,
          ]}
          className="text-[#2563EB] dark:text-cyan font-mono font-bold"
          repeat={Infinity}
          speed={50}
        />
      </motion.div>

      {/* Bio Summary */}
      <motion.p
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm sm:text-base text-slate-600 dark:text-gray-300/90 leading-relaxed font-body"
      >
        Passionate Full-Stack Developer with 2+ years of hands-on expertise building
        responsive, production-grade applications with React, Node.js, Express, MongoDB,
        and Next.js. Obsessed with clean architecture, modern aesthetics, and delivering
        delightful user journeys.
      </motion.p>

      {/* Quick Value Metrics Pill */}
      <motion.div
        variants={fadeIn("up", 0.45)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-gray-400 md:justify-start justify-center py-1"
      >
        <span className="flex items-center gap-1.5 text-[#0F172A] dark:text-gray-300">
          <FiCheckCircle className="text-[#2563EB] dark:text-cyan" /> 2+ Years Exp
        </span>
        <span className="text-slate-300 dark:text-gray-600">•</span>
        <span className="flex items-center gap-1.5 text-[#0F172A] dark:text-gray-300">
          <FiCheckCircle className="text-[#7C3AED] dark:text-purple-400" /> 15+ Web Builds
        </span>
        <span className="text-slate-300 dark:text-gray-600">•</span>
        <span className="flex items-center gap-1.5 text-[#0F172A] dark:text-gray-300">
          <FiCheckCircle className="text-[#06B6D4] dark:text-emerald-400" /> 100% Responsive
        </span>
      </motion.div>

      {/* CTAs and Social Links */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:justify-start justify-center"
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1Z6jG2V0ynV_jmY3b00N9lVaOptvN3icM"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 font-semibold text-sm px-7 py-3.5 rounded-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] hover:from-[#1D4ED8] hover:via-[#0891B2] hover:to-[#6D28D9] text-white font-mono tracking-wide shadow-[0_4px_20px_rgba(37,99,235,0.28)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.4)] dark:from-cyan dark:to-blue-600 dark:hover:from-cyan dark:hover:to-purple-600 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(0,245,255,0.4)] dark:hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]">
            <span>Download Resume</span>
            <FiDownload className="text-base" />
          </button>
        </a>

        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-90}
          className="w-full sm:w-auto cursor-pointer"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 rounded-full bg-white dark:bg-white/5 border border-blue-200/90 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-cyan/40 text-[#0F172A] dark:text-gray-200 hover:text-[#2563EB] dark:hover:text-white transition-all duration-300 shadow-xs hover:shadow-sm">
            <FiFolder className="text-[#2563EB] dark:text-cyan text-base" />
            <span>View Projects</span>
          </button>
        </ScrollLink>

        {/* Social Icons */}
        <div className="flex items-center gap-2 pt-2 sm:pt-0">
          <a
            href="https://github.com/EmonHossen10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 rounded-full bg-white dark:bg-white/5 border border-blue-200/90 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-cyan flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-cyan shadow-xs dark:shadow-none hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammademon92/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 rounded-full bg-white dark:bg-white/5 border border-blue-200/90 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-cyan flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-cyan shadow-xs dark:shadow-none hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 hover:scale-105"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
