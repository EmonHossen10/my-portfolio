import { useState } from "react";
import { HiOutlineMail, HiOutlineCheck } from "react-icons/hi";
import { FiPhone, FiCopy } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const ContactInfo = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Email Card with Click-to-Copy */}
      <div
        onClick={() => copyToClipboard("emonhossen1000@gmail.com", "email")}
        className="p-4 rounded-2xl bg-white/90 dark:bg-[#070e1f]/70 border border-blue-100/90 dark:border-white/5 hover:border-[#2563EB]/50 dark:hover:border-cyan/40 transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(37,99,235,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.12)] cursor-pointer group flex items-center justify-between"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-cyan/10 border border-blue-200 dark:border-cyan/20 flex items-center justify-center text-[#2563EB] dark:text-cyan text-xl group-hover:scale-110 transition-transform">
            <HiOutlineMail />
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">EMAIL ADDRESS</p>
            <p className="text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors">
              emonhossen1000@gmail.com
            </p>
          </div>
        </div>

        <button
          className="p-2 rounded-lg text-slate-500 dark:text-gray-400 group-hover:text-[#2563EB] dark:group-hover:text-cyan hover:bg-blue-50 dark:hover:bg-white/5 transition-colors text-sm"
          title="Copy email address"
        >
          {copiedEmail ? (
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
              <HiOutlineCheck /> Copied
            </span>
          ) : (
            <FiCopy />
          )}
        </button>
      </div>

      {/* Phone Card with Click-to-Copy */}
      <div
        onClick={() => copyToClipboard("+880 1302-256625", "phone")}
        className="p-4 rounded-2xl bg-white/90 dark:bg-[#070e1f]/70 border border-blue-100/90 dark:border-white/5 hover:border-[#7C3AED]/50 dark:hover:border-purple-500/40 transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(124,58,237,0.06)] hover:shadow-[0_8px_20px_-4px_rgba(124,58,237,0.12)] cursor-pointer group flex items-center justify-between"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-purple-500/10 border border-violet-200 dark:border-purple-500/20 flex items-center justify-center text-[#7C3AED] dark:text-purple-400 text-xl group-hover:scale-110 transition-transform">
            <FiPhone />
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">PHONE & WHATSAPP</p>
            <p className="text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#7C3AED] dark:group-hover:text-purple-300 transition-colors">
              +880 1302-256625
            </p>
          </div>
        </div>

        <button
          className="p-2 rounded-lg text-slate-500 dark:text-gray-400 group-hover:text-[#7C3AED] dark:group-hover:text-purple-400 hover:bg-violet-50 dark:hover:bg-white/5 transition-colors text-sm"
          title="Copy phone number"
        >
          {copiedPhone ? (
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-mono font-medium">
              <HiOutlineCheck /> Copied
            </span>
          ) : (
            <FiCopy />
          )}
        </button>
      </div>

      {/* Location Card */}
      <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#070e1f]/70 border border-blue-100/90 dark:border-white/5 flex items-center gap-3.5 shadow-[0_4px_16px_-4px_rgba(6,182,212,0.06)]">
        <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-emerald-500/10 border border-cyan-200 dark:border-emerald-500/20 flex items-center justify-center text-[#06B6D4] dark:text-emerald-400 text-xl">
          <IoLocationOutline />
        </div>
        <div>
          <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">LOCATION</p>
          <p className="text-sm font-semibold text-[#0F172A] dark:text-white">
            Gazipur, Bangladesh <span className="text-xs text-slate-500 dark:text-gray-400 font-normal font-mono">(Remote Friendly)</span>
          </p>
        </div>
      </div>

      {/* Direct Social Cards */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <a
          href="https://github.com/EmonHossen10"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#070e1f]/70 border border-blue-100/90 dark:border-white/5 hover:border-[#2563EB]/60 dark:hover:border-cyan/40 transition-all duration-300 flex items-center justify-between group hover:bg-blue-50/50 dark:hover:bg-white/5 shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <FaGithub className="text-lg text-[#0F172A] dark:text-gray-300 group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-colors" />
            <span className="text-xs font-mono font-medium text-[#0F172A] dark:text-gray-200 group-hover:text-[#2563EB] dark:group-hover:text-white">
              GitHub
            </span>
          </div>
          <FiArrowUpRight className="text-sm text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href="https://www.linkedin.com/in/mohammademon92/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-2xl bg-white/90 dark:bg-[#070e1f]/70 border border-blue-100/90 dark:border-white/5 hover:border-[#2563EB]/60 dark:hover:border-cyan/40 transition-all duration-300 flex items-center justify-between group hover:bg-blue-50/50 dark:hover:bg-white/5 shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <FaLinkedin className="text-lg text-[#2563EB] dark:text-cyan" />
            <span className="text-xs font-mono font-medium text-[#0F172A] dark:text-gray-200 group-hover:text-[#2563EB] dark:group-hover:text-white">
              LinkedIn
            </span>
          </div>
          <FiArrowUpRight className="text-sm text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
