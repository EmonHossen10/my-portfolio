import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// ── Always load immediately (critical above-the-fold path) ──────────────────
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import CursorSpotlight from "./Components/Common/CursorSpotlight";

// ── Lazy load 3D Background & below-the-fold sections ──────────────────────
const Background3D   = lazy(() => import("./Components/3D/Background3D"));
const SubHeroMain    = lazy(() => import("./Components/SubHero section/SubHeroMain"));
const AboutMeMain    = lazy(() => import("./Components/AboutMeSection/AboutMeMain"));
const SkillMain      = lazy(() => import("./Components/SkillsSections/SkillMain"));
const SubSkills      = lazy(() => import("./Components/SkillsSections/SubSkills"));
const ExperienceMain = lazy(() => import("./Components/Experience Section/ExperienceMain"));
const ProjectMain    = lazy(() => import("./Components/ProjectSection/ProjectMain"));
const ContactMeMain  = lazy(() => import("./Components/ContactMe/ContactMeMain"));
const FooterMain     = lazy(() => import("./Components/Footer/FooterMain"));

function App() {
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    // Defer heavy 3D WebGL background initialization until after critical hero paint
    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => setLoad3D(true), {
        timeout: 1200,
      });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setLoad3D(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] text-[#0F172A] dark:text-slate-100 selection:bg-blue-500/20 selection:text-[#0F172A] dark:selection:bg-cyan dark:selection:text-black relative overflow-x-hidden font-body transition-colors duration-300">
      {/* 3D Cosmic Background — deferred so it never blocks first paint */}
      {load3D && (
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
      )}

      {/* Hardware-accelerated Cursor Spotlight */}
      <CursorSpotlight />

      {/* Critical path: Navbar + Hero section render instantly */}
      <NavbarMain />

      <main className="relative z-10 flex flex-col">
        <HeroMain />

        {/* Below-the-fold sections load asynchronously */}
        <Suspense fallback={<div className="min-h-[100px]" />}>
          <SubHeroMain />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <AboutMeMain />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <SkillMain />
        </Suspense>

        <Suspense fallback={<div className="min-h-[100px]" />}>
          <SubSkills />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ExperienceMain />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ProjectMain />
        </Suspense>

        <Suspense fallback={<div className="min-h-[200px]" />}>
          <ContactMeMain />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <FooterMain />
      </Suspense>
    </div>
  );
}

export default App;
