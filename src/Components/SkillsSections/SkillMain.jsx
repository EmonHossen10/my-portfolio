import React, { useState, lazy, Suspense } from "react";
import SkillText from "./SkillText";
import TiltCard from "../Common/TiltCard";
import { motion } from "framer-motion";

const Skills3DCanvas = lazy(() => import("../3D/Skills3DCanvas"));
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiPostman,
  SiStripe,
} from "react-icons/si";

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "Advanced",
    percent: 92,
    icon: FaReact,
    color: "#00f5ff",
    bg: "rgba(0, 245, 255, 0.1)",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    level: "Advanced",
    percent: 90,
    icon: SiJavascript,
    color: "#f7df1e",
    bg: "rgba(247, 223, 30, 0.1)",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: "Proficient",
    percent: 85,
    icon: SiNextdotjs,
    color: "#ffffff",
    bg: "rgba(255, 255, 255, 0.1)",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    percent: 95,
    icon: SiTailwindcss,
    color: "#38bdf8",
    bg: "rgba(56, 189, 248, 0.1)",
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: "Proficient",
    percent: 84,
    icon: SiRedux,
    color: "#764abc",
    bg: "rgba(118, 74, 188, 0.1)",
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    level: "Expert",
    percent: 96,
    icon: FaHtml5,
    color: "#e34f26",
    bg: "rgba(227, 79, 38, 0.1)",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    level: "Advanced",
    percent: 88,
    icon: FaNodeJs,
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.1)",
  },
  {
    name: "Express.js",
    category: "backend",
    level: "Advanced",
    percent: 86,
    icon: SiExpress,
    color: "#e2e8f0",
    bg: "rgba(226, 232, 240, 0.1)",
  },
  {
    name: "MongoDB & Mongoose",
    category: "backend",
    level: "Advanced",
    percent: 88,
    icon: SiMongodb,
    color: "#10b981",
    bg: "rgba(16, 185, 129, 0.1)",
  },
  {
    name: "REST APIs & Auth",
    category: "backend",
    level: "Advanced",
    percent: 89,
    icon: SiPostman,
    color: "#ff6c37",
    bg: "rgba(255, 108, 55, 0.1)",
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Advanced",
    percent: 90,
    icon: FaGitAlt,
    color: "#f05032",
    bg: "rgba(240, 80, 50, 0.1)",
  },
  {
    name: "Stripe Payments",
    category: "tools",
    level: "Proficient",
    percent: 82,
    icon: SiStripe,
    color: "#635bff",
    bg: "rgba(99, 91, 255, 0.1)",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & APIs" },
];

const SkillMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <SkillText />

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-mono tracking-wide transition-all duration-300 ${
                activeFilter === cat.id
                  ? "bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] text-white font-bold shadow-[0_4px_16px_rgba(37,99,235,0.28)] dark:from-cyan dark:to-blue-600 dark:text-slate-950 dark:shadow-[0_0_20px_rgba(0,245,255,0.4)]"
                  : "bg-white dark:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-white border border-blue-100/90 dark:border-white/5 hover:border-[#2563EB] dark:hover:border-cyan/30 shadow-xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Layout: 3D Developer Workstation + Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Interactive Developer Workstation */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full rounded-3xl bg-white/90 dark:bg-slate-900/75 border border-blue-200/80 dark:border-cyan/20 p-4 shadow-[0_8px_30px_-5px_rgba(37,99,235,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-4 left-4 text-xs font-mono text-[#2563EB] dark:text-cyan flex items-center gap-2 font-medium z-10">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-cyan animate-pulse"></span>
                <span>3D Developer Workstation</span>
              </div>
              <div className="absolute top-4 right-4 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-300/50 dark:border-emerald-500/30 flex items-center gap-1 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>LIVE IDE</span>
              </div>
              <Suspense
                fallback={
                  <div className="w-full h-[340px] sm:h-[400px] lg:h-[430px] flex items-center justify-center font-mono text-xs text-[#2563EB] dark:text-cyan animate-pulse">
                    [ INITIALIZING 3D WORKSTATION... ]
                  </div>
                }
              >
                <Skills3DCanvas />
              </Suspense>
              <div className="text-center mt-2 px-4 py-2 rounded-xl bg-blue-50/60 dark:bg-white/[0.02] border border-blue-100 dark:border-white/5">
                <p className="text-xs font-mono text-slate-600 dark:text-gray-300">
                  Interactive 3D Full-Stack Coding Studio & Cloud Ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Right: Skills Interactive Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              const isMonochrome =
                skill.name === "Next.js" || skill.name === "Express.js";

              return (
                <TiltCard
                  key={index}
                  maxTilt={8}
                  className="p-4 rounded-2xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/40 transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_24px_-4px_rgba(124,58,237,0.12)] dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: isMonochrome
                            ? undefined
                            : skill.bg,
                          color: isMonochrome ? undefined : skill.color,
                          border: isMonochrome
                            ? undefined
                            : `1px solid ${skill.color}33`,
                        }}
                      >
                        <span
                          className={
                            isMonochrome
                              ? "text-[#0F172A] dark:text-white p-2 rounded-lg bg-blue-50 dark:bg-white/10"
                              : ""
                          }
                        >
                          <Icon />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                          {skill.level}
                        </span>
                      </div>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-cyan">
                      {skill.percent}%
                    </span>
                  </div>

                  {/* Progress Track */}
                  <div className="w-full h-1.5 bg-slate-200/80 dark:bg-gray-800/80 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.05 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                        boxShadow: `0 0 10px ${skill.color}`,
                      }}
                    />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMain;
