import { motion } from "framer-motion";

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVariants} initial="hidden" animate="visible">
      {[...Array(5)].map((_, index) => (
        <motion.div variants={childVariants} key={index} style={staggerStyle} />
      ))}
    </motion.div>
  );
};

export default StaggerAnimation;

const staggerStyle = {
  width: "150px",
  height: "150px",
  backgroundColor: "yellow",
  borderRadius: "50%",
  marginTop: "1rem",
};
