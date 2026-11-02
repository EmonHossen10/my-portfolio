import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../state/themeSlice";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ className = "" }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      type="button"
      title={`Switch to ${isDark ? "Light" : "Dark"} mode`}
      aria-label={`Current mode: ${isDark ? "Dark" : "Light"}. Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative inline-flex items-center gap-1.5 p-1 sm:p-1.5 rounded-full transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 ${
        isDark
          ? "bg-slate-900/90 border border-cyan/40 text-cyan hover:border-cyan hover:shadow-[0_0_15px_rgba(0,245,255,0.35)]"
          : "bg-white border border-blue-200/90 text-amber-500 hover:border-[#2563EB]/50 hover:shadow-[0_4px_16px_rgba(37,99,235,0.15)]"
      } ${className}`}
    >
      {/* Light Mode Indicator */}
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          !isDark
            ? "bg-amber-50 border border-amber-200/80 text-amber-600 shadow-xs scale-100"
            : "text-slate-500 hover:text-slate-300 scale-90 opacity-60"
        }`}
      >
        <FiSun className="text-sm transition-transform duration-500 hover:rotate-90" />
      </span>

      {/* Dark Mode Indicator */}
      <span
        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark
            ? "bg-cyan/20 text-cyan shadow-[0_0_10px_rgba(0,245,255,0.3)] scale-100"
            : "text-slate-400 hover:text-[#2563EB] scale-90 opacity-60"
        }`}
      >
        <FiMoon className="text-sm transition-transform duration-500 hover:-rotate-45" />
      </span>
    </button>
  );
};

export default ThemeToggle;
