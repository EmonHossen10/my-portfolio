
import { Helmet } from "react-helmet-async";
import "./App.css";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import ContactMeMain from "./Components/ContactMe/ContactMeMain";
import ExperienceMain from "./Components/Experience Section/ExperienceMain";
import FooterMain from "./Components/Footer/FooterMain";
import HelperSection from "./Components/HelperSection";
import HeroGradient from "./Components/HeroSection/HeroGradient";
import HeroMain from "./Components/HeroSection/HeroMain";
import NavbarMain from "./Components/Navbar/NavbarMain";

import ProjectMain from "./Components/ProjectSection/ProjectMain";
import SkillMain from "./Components/SkillsSections/SkillMain";
import SubSkills from "./Components/SkillsSections/SubSkills";
import SubHeroMain from "./Components/SubHero section/SubHeroMain";
 

function App() {
  return (
    <div className="text-white">
      <main>
   
        <NavbarMain></NavbarMain>
        <HeroMain></HeroMain>
        <HeroGradient></HeroGradient>
        <SubHeroMain></SubHeroMain>
        <AboutMeMain></AboutMeMain>
        <SkillMain></SkillMain>
        <SubSkills></SubSkills>
        <ExperienceMain></ExperienceMain>
        <ProjectMain></ProjectMain>
        <ContactMeMain></ContactMeMain>
        <FooterMain></FooterMain>
        {/* here under is helper section */}
        {/* <HelperSection></HelperSection> */}
      </main>
    </div>
  );
}

export default App;
