import { motion, useScroll, useTransform } from "framer-motion";

const AnimationScroll = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 1000], [1, 0.5]);
  const borderRadius = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <motion.img
        src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="Background"
        className="w-full h-auto max-w-4xl object-cover"
        style={{ scale, borderRadius }}
      />
    </div>
  );
};

export default AnimationScroll;
