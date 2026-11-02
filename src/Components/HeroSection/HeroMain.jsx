import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <section id="hero" className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 overflow-hidden">
      <HeroGradient />
      
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <HeroText />
          <HeroPic />
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
