import "./App.css";
import AboutMeMain from "./Components/AboutMeSection/AboutMeMain";
import HeroGradient from "./Components/HeroSection/HeroGradient";
import HeroMain from "./Components/HeroSection/HeroMain";
import Navbar from "./Components/Navbar/Navbar";
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
      </main>
    </>
  );
}

export default App;
