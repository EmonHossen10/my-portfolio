import React from "react";
import TiltCard from "../Common/TiltCard";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

const SingleProject = ({ project, index }) => {
  const { name, description, tags, picture, liveLink, githubLink, featured } =
    project;

  return (
    <TiltCard
      maxTilt={8}
      scale={1.02}
      className="rounded-3xl bg-white/90 dark:bg-[#0b1120]/75 border border-blue-100/90 dark:border-white/5 hover:border-violet-300 dark:hover:border-cyan/40 transition-all duration-300 shadow-[0_8px_30px_-6px_rgba(37,99,235,0.07)] hover:shadow-[0_15px_35px_-5px_rgba(124,58,237,0.14)] dark:shadow-none dark:hover:shadow-[0_15px_35px_rgba(0,245,255,0.18)] flex flex-col h-full overflow-hidden group"
    >
      {/* Project Image Preview with Overlay */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-black/40">
        <img
          src={picture}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 dark:from-[#0b1120] via-transparent to-black/25 opacity-90 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono text-[#2563EB] dark:text-cyan bg-white/95 dark:bg-[#030712]/85 backdrop-blur-md border border-blue-200 dark:border-cyan/30 flex items-center gap-1.5 shadow-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] dark:bg-cyan animate-pulse"></span>
            {featured ? "Featured Build" : `Project #0${index + 1}`}
          </span>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name} live demo`}
            className="w-8 h-8 rounded-full bg-white/95 dark:bg-[#030712]/85 backdrop-blur-md border border-blue-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-cyan hover:border-[#2563EB] dark:hover:border-cyan transition-colors shadow-xs"
          >
            <FiArrowUpRight className="text-sm" />
          </a>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
        <div>
          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors mb-2.5">
            {name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-300/90 leading-relaxed font-body mb-5">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-blue-50/80 dark:bg-white/[0.03] text-[#2563EB] dark:text-cyan/90 border border-blue-200/80 dark:border-cyan/15 group-hover:border-blue-300 dark:group-hover:border-cyan/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-blue-100/80 dark:border-white/5 grid grid-cols-2 gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100/90 hover:bg-slate-200 border border-slate-200 dark:bg-white/5 dark:border-white/10 dark:hover:border-cyan/40 text-xs font-mono text-[#0F172A] dark:text-gray-200 dark:hover:text-white transition-all duration-300 shadow-xs"
          >
            <FiGithub className="text-sm" />
            <span>Code</span>
          </a>

          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] hover:from-[#1D4ED8] hover:via-[#0891B2] hover:to-[#6D28D9] text-xs font-mono font-bold text-white transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.35)] dark:from-cyan dark:to-blue-600 dark:hover:from-cyan dark:hover:to-purple-600 dark:text-slate-950 dark:shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:scale-[1.02]"
          >
            <FiExternalLink className="text-sm" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </TiltCard>
  );
};

export default SingleProject;
