import { motion, useScroll, useTransform } from "framer-motion";
import { cards } from "./data";
import Card from "./Card";
import { useRef } from "react";

const ScrollCarousel = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => (
            <Card card={card} idx={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollCarousel;
