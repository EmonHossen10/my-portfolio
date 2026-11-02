import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ isMobile = false }) => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    if (isMobile) {
      dispatch(toggleMenu());
    }
  };

  return (
    <ul
      className={
        isMobile
          ? "flex flex-col gap-3 py-4 w-full"
          : "hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-white/[0.03] border border-blue-100/90 dark:border-white/10 backdrop-blur-md shadow-xs dark:shadow-none"
      }
    >
      {links.map((link, index) => {
        return (
          <li key={index} className="relative group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to={link.section}
              onClick={handleLinkClick}
              className={`cursor-pointer text-sm font-medium transition-all duration-300 block ${
                isMobile
                  ? "px-4 py-3 rounded-xl text-slate-700 hover:text-[#2563EB] hover:bg-blue-50/60 dark:text-gray-200 dark:hover:text-cyan dark:hover:bg-white/5 border border-transparent dark:hover:border-cyan/20"
                  : "px-4 py-1.5 rounded-full text-slate-700 hover:text-[#2563EB] hover:bg-blue-50/60 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
              }`}
              activeClass="!text-[#2563EB] !bg-blue-50 !border-blue-200 dark:!text-cyan dark:!bg-cyan/10 dark:!border-cyan/30 active-link font-semibold"
            >
              {link.link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;