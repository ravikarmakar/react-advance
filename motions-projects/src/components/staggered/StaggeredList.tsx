import { motion } from "framer-motion";

const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const staggerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const StaggeredList = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.8 } } }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={staggerVariants}
          className="mb-2 p-5 bg-yellow-300"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredList;
