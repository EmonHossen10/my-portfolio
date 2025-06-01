 
import SkillText from "./SkillText";
import AllSkills from "./AllSkills";
import AllSkillsSm from "./AllSkillsSm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillMain = () => {
   
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">

        <motion.div >
        <SkillText></SkillText>

        </motion.div>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
          <AllSkills></AllSkills>
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSm></AllSkillsSm>
        </div>
      </div>
    </div>
  );
};

export default SkillMain;
