import { motion } from "framer-motion";
import { boxStyle } from "./Gestures";

const AnimatedShape = () => {
  const boxVariants = {
    initial: {
      scale: 1,
      rotate: 0,
      skew: 0,
    },
    hover: {
      scale: 1.2,
      rotate: 15,
      skew: "10deg",
      backgroundColor: "blue",
      transition: {
        duration: 0.5,
      },
    },

    click: {
      scale: 0.9,
      rotate: -15,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <motion.div
        style={boxStyle}
        className="rounded-lg cursor-pointer"
        variants={boxVariants}
        initial="initial"
        whileHover="hover"
        whileTap="click"
      />
    </div>
  );
};

export default AnimatedShape;
