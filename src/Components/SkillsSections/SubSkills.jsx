import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiVite,
  SiFirebase,
} from "react-icons/si";

const techIcons = [
  { name: "React 19", icon: FaReact, color: "#00f5ff" },
  { name: "Next.js", icon: SiNextdotjs, color: null },
  { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express", icon: SiExpress, color: "#94a3b8" },
  { name: "MongoDB", icon: SiMongodb, color: "#10b981" },
  { name: "JavaScript", icon: SiJavascript, color: "#f59e0b" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Redux", icon: SiRedux, color: "#764abc" },
  { name: "Vite", icon: SiVite, color: "#bd34fe" },
  { name: "Firebase", icon: SiFirebase, color: "#f59e0b" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Git", icon: FaGitAlt, color: "#f05032" },
];

const SubSkills = () => {
  return (
    <div className="w-full py-8 border-y border-blue-100/80 dark:border-white/5 bg-gradient-to-r from-blue-50/40 via-white/80 to-violet-50/40 dark:bg-none dark:bg-[#050b18]/40 backdrop-blur-md overflow-hidden relative transition-colors duration-300">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8FAFC] dark:from-[#030712] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8FAFC] dark:from-[#030712] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap justify-around">
        {techIcons.concat(techIcons).map((tech, idx) => {
          const Icon = tech.icon;
          const isNext = tech.name === "Next.js";
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/40 shadow-xs hover:shadow-sm transition-all duration-300 group"
            >
              <span
                className={`text-lg transition-transform duration-300 group-hover:scale-125 ${
                  isNext ? "text-[#0F172A] dark:text-white" : ""
                }`}
                style={tech.color ? { color: tech.color } : {}}
              >
                <Icon />
              </span>
              <span className="text-xs font-mono text-slate-700 dark:text-gray-300 group-hover:text-[#2563EB] dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubSkills;