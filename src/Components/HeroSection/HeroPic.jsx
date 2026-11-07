import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import img from "../../../public/images/emon4.jpg";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full max-w-[460px] flex items-center justify-center relative"
    >
      {/* Soft Ambient Neon Glow Behind Photo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#2563EB]/20 via-[#06B6D4]/15 to-[#7C3AED]/20 dark:from-cyan/25 dark:via-blue-600/20 dark:to-purple-600/25 rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>

      {/* Main Profile Card Container */}
      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white/90 dark:bg-slate-900/70 border border-blue-200/80 dark:border-cyan/30 p-3 shadow-[0_15px_35px_-5px_rgba(37,99,235,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md group transition-colors duration-300">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          {/* Portrait Image — LCP critical: fetchpriority high */}
          <img
            src={img}
            alt="Mohammad Emon"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Cyber Corner Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#2563EB] dark:border-cyan pointer-events-none"></div>

          {/* Floating Live Tech Badges */}
          <div className="absolute top-4 left-4 bg-white/95 dark:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-blue-200 dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-cyan font-semibold flex items-center gap-2 shadow-sm animate-float">
            <FaReact className="text-[#06B6D4] dark:text-cyan text-base animate-spin-slow" />
            <span>React.js</span>
          </div>

          <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-white/10 text-xs font-mono text-[#0F172A] dark:text-emerald-400 font-semibold flex items-center gap-2 shadow-sm animate-float-delayed">
            <FaNodeJs className="text-emerald-600 dark:text-emerald-400 text-base" />
            <span>Node.js</span>
          </div>

          {/* Bottom Info Bar Overlay */}
          <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 dark:bg-[#070e1f]/90 p-3.5 rounded-2xl border border-white/15 dark:border-cyan/30 backdrop-blur-xl flex items-center justify-between shadow-xl">
            <div>
              <p className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Mohammad Emon
              </p>
              <p className="text-[11px] font-mono text-[#06B6D4] dark:text-cyan font-medium">
                Full-Stack MERN Developer
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <div
                className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-emerald-400 text-sm"
                title="MongoDB"
              >
                <SiMongodb />
              </div>
              <div
                className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-white text-sm"
                title="Next.js"
              >
                <SiNextdotjs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
