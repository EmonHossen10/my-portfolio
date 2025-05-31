import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <button
      className="md:text-2xl p-2 border border-orange rounded-full"
      onClick={handleToggleMenu}
    >
      <GiHamburgerMenu />
    </button>
  );
};
export default NavbarToggler;