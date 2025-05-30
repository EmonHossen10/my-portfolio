import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className=" md:px-4 md:py-2 px-2 py-1  rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;