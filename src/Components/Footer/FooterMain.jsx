import { Link as ScrollLink } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Experience", section: "experience" },
  { name: "Projects", section: "projects" },
  { name: "Contact", section: "contact" },
];

const FooterMain = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-blue-100/90 dark:border-white/5 bg-white/70 dark:bg-[#030712] relative overflow-hidden pt-12 pb-8 transition-colors duration-300">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 dark:via-cyan/50 to-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-100/80 dark:border-white/5">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-extrabold text-xl text-[#0F172A] dark:text-white tracking-wide">
              &lt;Mohammad <span className="text-[#2563EB] dark:text-cyan">Emon/&gt;</span>
            </span>
            <p className="text-xs font-mono text-slate-500 dark:text-gray-400 mt-1">
              Full-Stack MERN Developer • Gazipur, Bangladesh
            </p>
          </div>

          {/* Quick Nav Links */}
          <ul className="flex items-center gap-6 text-xs font-mono text-slate-600 dark:text-gray-300 flex-wrap justify-center">
            {footerLinks.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  to={item.section}
                  className="hover:text-[#2563EB] dark:hover:text-cyan transition-colors cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/EmonHossen10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-blue-200/80 dark:border-white/10 flex items-center justify-center text-[#0F172A] dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-cyan hover:border-[#2563EB]/50 dark:hover:border-cyan/40 shadow-xs transition-colors"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammademon92/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-blue-200/80 dark:border-white/10 flex items-center justify-center text-[#0F172A] dark:text-gray-300 hover:text-[#2563EB] dark:hover:text-cyan hover:border-[#2563EB]/50 dark:hover:border-cyan/40 shadow-xs transition-colors"
            >
              <FaLinkedinIn className="text-sm" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-9 h-9 rounded-full bg-blue-50 dark:bg-cyan/10 border border-blue-200 dark:border-cyan/30 text-[#2563EB] dark:text-cyan hover:bg-gradient-to-r hover:from-[#2563EB] hover:to-[#7C3AED] hover:text-white dark:hover:bg-cyan dark:hover:text-black transition-all duration-300 flex items-center justify-center hover:scale-105 shadow-xs"
            >
              <FiArrowUp className="text-sm" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Mohammad Emon. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-500 dark:text-gray-400">
            <span>Built with React 19, Three.js 3D & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
