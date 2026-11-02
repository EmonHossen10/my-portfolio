import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TiltCard from "../Common/TiltCard";
import { FiCalendar, FiCheckCircle, FiLayers } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack MERN Developer",
    type: "Production & Client Apps",
    date: "2022 - Present",
    badge: "Current Focus",
    icon: FaReact,
    iconColor: "#00f5ff",
    responsibilities: [
      "Engineered full-stack e-commerce and real-time dashboard applications.",
      "Integrated secure JWT email/password auth, role-based access, and Stripe payments.",
      "Optimized MongoDB aggregations, schema design, and server response times.",
      "Implemented responsive UI with dynamic animations and accessible components.",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    role: "Frontend Engineer & UI Specialist",
    type: "Interactive Interfaces",
    date: "2023 - Present",
    badge: "UI/UX & 3D",
    icon: FiLayers,
    iconColor: "#a855f7",
    responsibilities: [
      "Crafted high-converting, mobile-responsive web apps with React and Next.js.",
      "Implemented 3D WebGL physics, interactive particle fields, and smooth Framer animations.",
      "Built modular design systems with reusable atomic components and clean state management.",
    ],
    tech: ["React 19", "Next.js", "Three.js", "Framer Motion", "Redux Toolkit"],
  },
  {
    role: "Backend & API Architect",
    type: "Server Architecture",
    date: "2023 - Present",
    badge: "Security & Cloud",
    icon: FaNodeJs,
    iconColor: "#22c55e",
    responsibilities: [
      "Architected secure RESTful APIs adhering to clean controller-service architecture.",
      "Implemented environment configuration, CORS security, and request validation middleware.",
      "Managed cloud database deployments on MongoDB Atlas with automated backups.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT", "Postman"],
  },
];

const ExperienceMain = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-[720px] mx-auto mb-16">
          <motion.div
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[2px] bg-[#2563EB] dark:bg-cyan"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#2563EB] dark:text-cyan font-bold">
              // Career Trajectory
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
            Professional <span className="text-cyber-gradient">Milestones</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-slate-600 dark:text-gray-300 text-sm sm:text-base mt-4 font-body leading-relaxed"
          >
            A track record of engineering robust solutions, continuously adopting emerging
            technologies, and turning complex product requirements into intuitive user experiences.
          </motion.p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.15)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="h-full"
              >
                <TiltCard
                  maxTilt={8}
                  scale={1.02}
                  className="h-full p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/40 transition-all duration-300 shadow-[0_6px_25px_-5px_rgba(37,99,235,0.06)] hover:shadow-[0_12px_30px_-5px_rgba(124,58,237,0.12)] dark:shadow-none dark:hover:shadow-[0_10px_30px_rgba(0,245,255,0.15)] flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Date Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${exp.iconColor}15`,
                          color: exp.iconColor,
                          border: `1px solid ${exp.iconColor}40`,
                        }}
                      >
                        <Icon />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#2563EB] dark:text-cyan bg-blue-50 dark:bg-cyan/10 border border-blue-200 dark:border-cyan/20 flex items-center gap-1.5 font-medium">
                          <FiCalendar className="text-xs" />
                          {exp.date}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 mt-1">
                          {exp.badge}
                        </span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-display font-bold text-xl text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-[#7C3AED] dark:text-purple-300 mb-4 font-medium">
                      {exp.type}
                    </p>

                    {/* Responsibilities Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-300/90 leading-relaxed font-body"
                        >
                          <FiCheckCircle className="text-[#2563EB] dark:text-cyan text-sm flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-4 border-t border-blue-100/80 dark:border-white/5 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-50/60 dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 border border-blue-100 dark:border-white/5 group-hover:border-blue-200 dark:group-hover:border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceMain;
