import { motion, useScroll, useTransform } from "framer-motion";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen p-[20px] bg-black text-white">
      {/* Red line */}

      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-500"
        style={{ width: lineWidth, transition: "width 0.1s ease" }}
      />

      {/* Random text */}

      <div className="mt-[50px]">
        {[...Array(100)].map((_, index) => (
          <p key={index} className="mt-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            blanditiis voluptatum explicabo quibusdam praesentium. In molestiae
            voluptas, suscipit expedita repellat quaerat maiores quisquam
            exercitationem nisi enim sequi veniam officiis placeat! Quisquam ea
            fuga reiciendis ut atque deserunt, natus iusto vero asperiores
            tempore perferendis! Architecto eum placeat, aliquid ipsam id autem
            eligendi amet ea voluptas dolorem hic explicabo corrupti
            consequuntur molestia
          </p>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
