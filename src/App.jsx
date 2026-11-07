import { lazy, Suspense } from "react";
import "./App.css";

// ── Always load immediately (above-the-fold critical path) ──────────────────
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import CursorSpotlight from "./Components/Common/CursorSpotlight";

// ── Lazy load everything else (below-the-fold / heavy) ─────────────────────
const Background3D   = lazy(() => import("./Components/3D/Background3D"));
const SubHeroMain    = lazy(() => import("./Components/SubHero section/SubHeroMain"));
const AboutMeMain    = lazy(() => import("./Components/AboutMeSection/AboutMeMain"));
const SkillMain      = lazy(() => import("./Components/SkillsSections/SkillMain"));
const SubSkills      = lazy(() => import("./Components/SkillsSections/SubSkills"));
const ExperienceMain = lazy(() => import("./Components/Experience Section/ExperienceMain"));
const ProjectMain    = lazy(() => import("./Components/ProjectSection/ProjectMain"));
const ContactMeMain  = lazy(() => import("./Components/ContactMe/ContactMeMain"));
const FooterMain     = lazy(() => import("./Components/Footer/FooterMain"));

// Minimal fallback — invisible, no layout shift
const Noop = () => null;

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] text-[#0F172A] dark:text-slate-100 selection:bg-blue-500/20 selection:text-[#0F172A] dark:selection:bg-cyan dark:selection:text-black relative overflow-x-hidden font-body transition-colors duration-300">
      {/* 3D Background — lazy, non-blocking */}
      <Suspense fallback={<Noop />}>
        <Background3D />
      </Suspense>

      {/* Cursor — lightweight, load immediately */}
      <CursorSpotlight />

      {/* Navbar — critical, load immediately */}
      <NavbarMain />

      <main className="relative z-10 flex flex-col">
        {/* Hero — critical, load immediately */}
        <HeroMain />

        {/* Everything below is below-the-fold — lazy */}
        <Suspense fallback={<Noop />}>
          <SubHeroMain />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <AboutMeMain />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <SkillMain />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <SubSkills />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <ExperienceMain />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <ProjectMain />
        </Suspense>

        <Suspense fallback={<Noop />}>
          <ContactMeMain />
        </Suspense>
      </main>

      <Suspense fallback={<Noop />}>
        <FooterMain />
      </Suspense>
    </div>
  );
}

export default App;
