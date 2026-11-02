import React from "react";
import { FiArrowUpRight, FiLayers, FiCpu, FiLayout } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const pillars = [
  {
    icon: FiLayout,
    title: "Modern Frontends",
    desc: "Pixel-perfect, accessible React & Next.js architectures with responsive CSS.",
  },
  {
    icon: FiCpu,
    title: "Robust Backends",
    desc: "RESTful APIs with Node.js, Express, secure auth, and MongoDB schemas.",
  },
  {
    icon: FiLayers,
    title: "Interactive 3D Polish",
    desc: "Immersive WebGL & Three.js animations that elevate user retention.",
  },
];

const AboutMeText = () => {
  return (
    <div className="flex flex-col gap-5 text-[#0F172A] dark:text-white max-w-[620px]">
      <div className="flex items-center gap-2">
        <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
        <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] dark:text-cyan font-bold">
          // About The Developer
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#0F172A] dark:text-white leading-tight">
        Passionate About Building <br />
        <span className="text-cyber-gradient">Impactful Digital Products</span>
      </h2>

      <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-body">
        I am a MERN Stack Developer based in Gazipur, Bangladesh with 2+ years of hands-on
        experience engineering end-to-end web applications. I bridge the gap between
        clean, scalable back-end logic and engaging, state-of-the-art interactive user interfaces.
      </p>

      {/* 3 Value Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-2">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/30 transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(124,58,237,0.12)] dark:shadow-none dark:hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-cyan/10 border border-blue-200 dark:border-cyan/20 flex items-center justify-center text-[#2563EB] dark:text-cyan mb-2">
                <Icon className="text-sm" />
              </div>
              <h4 className="text-sm font-semibold text-[#0F172A] dark:text-white mb-1">
                {pillar.title}
              </h4>
              <p className="text-[12px] text-slate-600 dark:text-gray-400 leading-snug">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="cursor-pointer"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] hover:from-[#1D4ED8] hover:via-[#0891B2] hover:to-[#6D28D9] text-white font-mono font-bold text-sm shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.35)] dark:from-cyan dark:to-blue-600 dark:hover:from-cyan dark:hover:to-purple-600 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(0,245,255,0.35)] transition-all duration-300 hover:scale-[1.02]">
            <span>Let's Build Together</span>
            <FiArrowUpRight className="text-base" />
          </button>
        </ScrollLink>

        <a
          href="https://github.com/EmonHossen10"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-blue-200/90 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-cyan/40 text-[#0F172A] dark:text-gray-200 hover:text-[#2563EB] dark:hover:text-white font-mono text-sm transition-all duration-300 shadow-xs"
        >
          <span>Explore GitHub</span>
          <FiArrowUpRight className="text-base text-[#2563EB] dark:text-cyan" />
        </a>
      </div>
    </div>
  );
};

export default AboutMeText;
