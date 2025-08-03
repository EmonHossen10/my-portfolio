import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4  fixed left-[50%] -translate-x-[50%] z-20 flex gap-2 md:gap-2 mt-2">
      {/* nav body */}
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center px-3 md:p-6 rounded-r-full rounded-l-full border-cyan border-[0.5px] ">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>

        <NavbarBtn />
      </div>
      {/* toggler */}
      <div className="flex lg:hidden sm:block p-3 bg-black items-center justify-center rounded-full  border-orange border-[0.5px] ">
        <NavbarToggler />
      </div>
    </nav>
  );
};

export default NavbarMain;
