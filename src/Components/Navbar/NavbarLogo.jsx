import React from "react";

const NavbarLogo = () => {
  return (
    <a href="#" className="flex items-center gap-2 group cursor-pointer">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563EB] via-[#06B6D4] to-[#7C3AED] dark:from-cyan dark:via-blue-500 dark:to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-[0_0_15px_rgba(37,99,235,0.25)] dark:shadow-[0_0_15px_rgba(0,245,255,0.4)]">
        <div className="w-full h-full bg-white dark:bg-[#050b18] rounded-[10px] flex items-center justify-center">
          <span className="font-mono font-black text-[#2563EB] dark:text-cyan text-base">E</span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-display font-bold text-lg text-[#0F172A] dark:text-white tracking-wide group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors duration-300 flex items-center gap-1">
          <span>&lt;Emon</span>
          <span className="text-[#2563EB] dark:text-cyan">.dev/&gt;</span>
        </span>
        <span className="text-[10px] font-mono text-slate-500 dark:text-gray-400 tracking-wider -mt-1 hidden sm:block">
          MERN STACK ARCHITECT
        </span>
      </div>
    </a>
  );
};

export default NavbarLogo;
