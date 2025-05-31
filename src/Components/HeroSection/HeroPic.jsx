import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import img from "../../../public/images/emon4.jpg"

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full w-full flex  items-center justify-center "
    >
      <img
        className="max-h-[500px] w-auto  rounded-xl  "
        src={img}
        alt=""
      />
    </motion.div>
  );
};

export default HeroPic;
