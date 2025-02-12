import { motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ scale: 1, rotate: 0 }}
      whileHover={{ scale: 1.05, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      drag
      dragConstraints={{
        left: -50,
        top: -50,
        right: 50,
        bottom: 50,
      }}
      dragElastic={0.2}
      className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
        alt="card image"
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-black">
        <h1 className="text-2xl font-bold">Card Title</h1>

        <p className="text-semibold mt-2">
          this this demo card to show my animation skills using framer motion
          and tailwind css
        </p>

        <button className="px-4 mt-2 py-2 bg-teal-300 hover:bg-teal-200 rounded-4xl cursor-pointer">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default AnimatedCard;
