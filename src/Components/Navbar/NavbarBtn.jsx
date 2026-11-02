import { Link } from "react-scroll";
import { LuArrowDownRight, LuSparkles } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <Link
      spy={true}
      smooth={true}
      duration={500}
      offset={-100}
      to="contact"
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] dark:from-cyan dark:to-purple-600 rounded-full blur opacity-50 dark:opacity-60 group-hover:opacity-100 transition duration-300"></div>
      <button className="relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-semibold font-body text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] dark:bg-none dark:bg-[#070e1d] flex items-center gap-2 border border-blue-300/40 dark:border-white/10 group-hover:border-white/50 dark:group-hover:border-cyan/50 shadow-[0_4px_16px_rgba(37,99,235,0.25)] dark:shadow-none transition-all duration-300">
        <LuSparkles className="text-cyan-200 dark:text-cyan text-sm animate-pulse" />
        <span className="tracking-wide">Hire Me</span>
        <LuArrowDownRight className="text-cyan-200 dark:text-cyan transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
      </button>
    </Link>
  );
};

export default NavbarBtn;