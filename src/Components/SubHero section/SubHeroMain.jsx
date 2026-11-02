import { motion } from "framer-motion";
import { FiCode, FiAward, FiCheckSquare, FiZap } from "react-icons/fi";

const stats = [
  {
    icon: FiCode,
    value: "2+",
    label: "Years Experience",
    sub: "Full-Stack Development",
    color: "from-cyan to-blue-500",
  },
  {
    icon: FiZap,
    value: "15+",
    label: "Projects Completed",
    sub: "MERN & React Apps",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FiCheckSquare,
    value: "100%",
    label: "Client Focus",
    sub: "Dedicated & Reliable",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: FiAward,
    value: "99.9%",
    label: "Code Quality",
    sub: "Modern Standards",
    color: "from-amber-400 to-orange-500",
  },
];

const highlights = [
  "Fast Learner",
  "Scalable Architecture",
  "High Performance",
  "Team Player",
  "UI/UX Passionate",
  "Clean Code",
  "Full-Stack Agility",
  "Creative Problem Solver",
];

const SubHeroMain = () => {
  return (
    <div className="w-full relative my-12 border-y border-blue-100/80 dark:border-white/10 bg-gradient-to-r from-blue-50/40 via-white/80 to-violet-50/40 dark:bg-none dark:bg-[#050b18]/80 backdrop-blur-xl py-8 overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 via-[#7C3AED]/5 to-[#06B6D4]/5 dark:from-cyan/5 dark:via-purple-500/5 dark:to-cyan/5 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/30 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_25px_-4px_rgba(124,58,237,0.12)] dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(0,245,255,0.15)] flex flex-col items-center text-center"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${stat.color} p-[1px] mb-3 transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className="w-full h-full bg-slate-900 rounded-[11px] flex items-center justify-center text-white">
                    <Icon className="text-base" />
                  </div>
                </div>

                <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#0F172A] dark:text-white tracking-tight group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-200 mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400 mt-1">
                  {stat.sub}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Ticker Badges */}
        <div className="mt-8 pt-6 border-t border-blue-100/80 dark:border-white/5 flex flex-wrap items-center justify-center gap-3">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono text-slate-700 dark:text-gray-300 bg-white dark:bg-white/5 border border-blue-100/80 dark:border-white/10 hover:border-[#2563EB] dark:hover:border-cyan/40 hover:text-[#2563EB] dark:hover:text-cyan transition-colors duration-300 shadow-xs"
            >
              ✦ {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeroMain;
