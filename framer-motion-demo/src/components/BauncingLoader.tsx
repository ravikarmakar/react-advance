import { motion } from "framer-motion";

const BauncingLoader = () => {
  return (
    <div className="flex gap-2">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="bg-teal-400 rounded-full h-4 w-4"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: index * 0.6,
          }}
        />
      ))}
    </div>
  );
};

export default BauncingLoader;
