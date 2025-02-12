import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1.1 },
  exit: { opacity: 0, scale: 0.5 },
};

const Variant = () => {
  const [isVisible, setIsVisbible] = useState(true);

  return (
    <div>
      <motion.div
        className="h-50 w-50 bg-yellow-300 rounded-full cursor-pointer"
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.2 }}
        onClick={() => setIsVisbible(!isVisible)}
      />
    </div>
  );
};

export default Variant;
