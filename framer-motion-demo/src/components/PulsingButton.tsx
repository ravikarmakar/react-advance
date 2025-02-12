import { motion } from "framer-motion";

const PulsingButton = () => {
  return (
    <motion.button
      className="bg-blue-500 py-2 px-4 rounded-4xl cursor-pointer"
      animate={{
        scale: [1, 1.1, 1],
        backgroundColor: ["#fff", "#ff1", "#fff"],
      }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
    >
      Click me
    </motion.button>
  );
};

export default PulsingButton;
