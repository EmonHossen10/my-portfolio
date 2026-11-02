import "./App.css";
import Background3D from "./Components/3D/Background3D";
import CursorSpotlight from "./Components/Common/CursorSpotlight";
import NavbarMain from "./Components/Navbar/NavbarMain";
import HeroMain from "./Components/HeroSection/HeroMain";
import SubHeroMain from "./Components/SubHero section/SubHeroMain";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import SkillMain from "./Components/SkillsSections/SkillMain";
import SubSkills from "./Components/SkillsSections/SubSkills";
import ExperienceMain from "./Components/Experience Section/ExperienceMain";
import ProjectMain from "./Components/ProjectSection/ProjectMain";
import ContactMeMain from "./Components/ContactMe/ContactMeMain";
import FooterMain from "./Components/Footer/FooterMain";

function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#030712] text-[#0F172A] dark:text-slate-100 selection:bg-blue-500/20 selection:text-[#0F172A] dark:selection:bg-cyan dark:selection:text-black relative overflow-x-hidden font-body transition-colors duration-300">
      {/* Interactive 3D Three.js Starfield / Cosmic Particle Background */}
      <Background3D />

      {/* Interactive Cursor Spotlight Glow */}
      <CursorSpotlight />

      {/* Floating Modern Capsule Navbar with Reading Progress */}
      <NavbarMain />

      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Interactive 3D Cyber Core & Switchable Hologram Profile */}
        <HeroMain />

        {/* Live Metrics Grid & Core Trait Pills */}
        <SubHeroMain />

        {/* About Me Section with 3D Tilt Card and Engineering Pillars */}
        <AboutMeMain />

        {/* Interactive Skills Universe with 3D Node Mesh & Category Filters */}
        <SkillMain />

        {/* Dynamic Tech Marquee */}
        <SubSkills />

        {/* Career Trajectory & Milestones Timeline with 3D Tilt Cards */}
        <ExperienceMain />

        {/* Production Projects Showcase with 3D Tilt Cards */}
        <ProjectMain />

        {/* Contact Hub with Click-to-Copy & EmailJS Confetti Form */}
        <ContactMeMain />
      </main>

      {/* Cyber Footer with Scroll-to-Top */}
      <FooterMain />
    </div>
  );
}

export default App;
