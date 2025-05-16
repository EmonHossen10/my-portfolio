import "./App.css";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import HelperSection from "./Components/HelperSection";
import HeroGradient from "./Components/HeroSection/HeroGradient";
import HeroMain from "./Components/HeroSection/HeroMain";
import Navbar from "./Components/Navbar/Navbar";
import SkillMain from "./Components/SkillsSections/SkillMain";
import SubSkills from "./Components/SkillsSections/SubSkills";
import SubHeroMain from "./Components/SubHero section/SubHeroMain";

function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <HeroMain></HeroMain>
        <HeroGradient></HeroGradient>
        <SubHeroMain></SubHeroMain>
        <AboutMeMain></AboutMeMain>
        <SkillMain></SkillMain>
        <SubSkills></SubSkills>
        <HelperSection></HelperSection>
      </main>
    </>
  );
}

export default App;
