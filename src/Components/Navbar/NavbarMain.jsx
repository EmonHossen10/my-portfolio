import { useEffect, useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setScrolled(currentScroll > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Reading Indicator */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#7C3AED] dark:from-cyan dark:via-purple-500 dark:to-pink-500 shadow-[0_0_10px_rgba(37,99,235,0.4)] dark:shadow-[0_0_10px_#00f5ff] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-4">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 ${
              scrolled
                ? "bg-white/85 dark:bg-[#050b18]/85 backdrop-blur-xl border border-blue-100/90 dark:border-white/10 shadow-[0_8px_30px_rgba(37,99,235,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                : "bg-white/70 dark:bg-[#050b18]/60 backdrop-blur-md border border-blue-100/60 dark:border-white/5"
            }`}
          >
            {/* Logo */}
            <NavbarLogo />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:block">
              <NavbarLinks isMobile={false} />
            </div>

            {/* Right actions: Theme Toggle + CTA button + Mobile Toggler */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Dark / Light Theme Toggle Switcher */}
              <ThemeToggle />

              <div className="hidden xs:block">
                <NavbarBtn />
              </div>

              <div className="lg:hidden">
                <NavbarToggler />
              </div>
            </div>
          </nav>

          {/* Mobile Navigation Drawer */}
          {menuOpen && (
            <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white/95 dark:bg-[#070e1f]/95 backdrop-blur-2xl border border-blue-100 dark:border-cyan/20 shadow-xl dark:shadow-[0_15px_35px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-4 duration-300">
              <NavbarLinks isMobile={true} />
              <div className="pt-3 border-t border-blue-100 dark:border-white/10 flex items-center justify-between xs:hidden">
                <NavbarBtn />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavbarMain;
