import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      aria-label="Toggle Navigation Menu"
      className="p-2 text-xl text-[#0F172A] hover:text-[#2563EB] dark:text-gray-200 dark:hover:text-cyan rounded-xl bg-white hover:bg-blue-50/80 border border-blue-200/80 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 transition-all duration-300 shadow-sm"
      onClick={() => dispatch(toggleMenu())}
    >
      {menuOpen ? <HiX className="text-[#2563EB] dark:text-cyan" /> : <HiOutlineMenuAlt3 />}
    </button>
  );
};

export default NavbarToggler;