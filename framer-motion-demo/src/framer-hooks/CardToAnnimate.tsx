import { motion } from "framer-motion";

const CardToAnnimate = () => {
  return (
    <div className="flex justify-center items-start mt-[30rem]">
      <div className="h-[200vh] bg-black w-full flex justify-center items-center">
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          whileInView={{ scale: 1.1, opacity: 1, y: -200 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg p-6 shadow-lg text-center text-black f"
        >
          <h1 className="text-2xl">Amazing Card</h1>

          <p className="text-gary-600 ont-bold">
            This Card Animate beautiful in way! let's see.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CardToAnnimate;
