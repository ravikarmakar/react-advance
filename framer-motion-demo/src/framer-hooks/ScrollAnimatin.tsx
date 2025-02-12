// import CardToAnnimate from "./CardToAnnimate";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollAnimatin = () => {
  const { scrollY } = useScroll();

  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="flex h-screen justify-center items-center">
      <motion.div
        style={{ scale, opacity }}
        className="bg-blue-500 w-32 h-32 rounded-lg shadow-lg"
      ></motion.div>

      <div className="w-full h-[200vh]"></div>
    </div>
  );
};

export default ScrollAnimatin;

// whileInView add this in return statement
// also in App.tsx file add height min-height

{
  /* <div>
<h1 className="text-3xl p-10">Scroll down to see Animation</h1>

<div className="h-screen bg-black"></div>

<CardToAnnimate />
</div> */
}
