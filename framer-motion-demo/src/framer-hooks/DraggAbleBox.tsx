import { motion, useMotionValue, useTransform } from "framer-motion";

const DraggAbleBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ["#ff0000", "#00ff00"]);

  return (
    <motion.div
      drag
      dragConstraints={{
        left: -100,
        right: 100,
        top: -100,
        bottom: 100,
      }}
      style={{ x, y, backgroundColor }}
      className="w-32 h-32 flex items-center justify-center rounded-lg cursor-pointer text-white"
    >
      <span>Drag me!</span>
    </motion.div>
  );
};

export default DraggAbleBox;
