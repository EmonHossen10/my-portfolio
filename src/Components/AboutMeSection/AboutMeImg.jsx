import React from "react";
import TiltCard from "../Common/TiltCard";
import image from "../../../public/images/emon5.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

const AboutMeImg = () => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Background neon ambient aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563EB]/20 via-[#06B6D4]/15 to-[#7C3AED]/20 dark:from-cyan/20 dark:via-purple-600/20 dark:to-pink-500/20 rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>

      <TiltCard
        maxTilt={10}
        scale={1.03}
        className="w-full rounded-3xl overflow-hidden bg-white/90 dark:bg-slate-900/70 border border-blue-200/80 dark:border-cyan/30 p-3 shadow-[0_15px_35px_-5px_rgba(37,99,235,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-md transition-colors duration-300"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] group">
          <img
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            src={image}
            alt="Mohammad Emon About"
          />

          {/* Vignette gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Hologram Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>

          {/* Floating badge bottom */}
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-[#070e1f]/90 p-3 rounded-xl border border-blue-200/90 dark:border-cyan/30 backdrop-blur-xl flex items-center justify-between shadow-[0_8px_25px_rgba(37,99,235,0.12)]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-cyan/15 border border-blue-200 dark:border-cyan/30 flex items-center justify-center text-[#2563EB] dark:text-cyan">
                <FaLaptopCode className="text-lg" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-[#0F172A] dark:text-white">Full-Stack Dev</p>
                <p className="text-[10px] font-mono text-[#2563EB] dark:text-cyan flex items-center gap-1 font-medium">
                  <FiCheckCircle /> Verified Skills
                </p>
              </div>
            </div>

            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-violet-50 dark:bg-cyan/10 text-[#7C3AED] dark:text-cyan border border-violet-200 dark:border-cyan/20 font-bold">
              2+ Yrs
            </span>
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

export default AboutMeImg;
