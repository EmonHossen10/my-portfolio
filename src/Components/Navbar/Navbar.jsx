import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto  bg-black items-center p-6 rounded-r-full rounded-l-full border-orange border-[0.5px] ">
        <NavbarLogo></NavbarLogo>
       <div className={`${menuOpen? 'sm:block' : 'sm:hidden' }lg:block  `}>
       <NavbarLinks></NavbarLinks>
       </div>
        <NavbarBtn></NavbarBtn>
      </div>

      {/* hamburger */}
      <div className="flex lg:hidden sm:block p-6 bg-black  items-center justify-center  rounded-full  border-orange border-[0.5px]">
        <button onClick={toggleMenu} className="text-2xl p-3 border text-white border-orange rounded-full">
          <GiHamburgerMenu></GiHamburgerMenu>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
