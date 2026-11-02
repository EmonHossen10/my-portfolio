import AboutMeText from "./AboutMeText";
import AboutMeImg from "./AboutMeImg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <AboutMeImg />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <AboutMeText />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;
