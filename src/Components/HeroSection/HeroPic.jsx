import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full  flex items-center justify-center  "
    >
      <img
        className="max-h-[500px] w-auto  rounded-xl  "
        src="../../public/images/emon4.jpg"
        alt=""
      />
    </motion.div>
  );
};

export default HeroPic;
