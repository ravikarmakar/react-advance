import { motion } from "framer-motion";

const Gestures = () => {
  return (
    <div>
      {/* <motion.div
        className="h-50 w-50 bg-red-500"
        // whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      {/* <motion.div
        style={boxStyle}
        whileTap={{ scale: 0.8, backgroundColor: "blue" }}
        transition={{ type: "spring", stiffness: 300 }}
      /> */}

      <motion.div
        style={boxStyle}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
      />
    </div>
  );
};

export default Gestures;

// eslint-disable-next-line react-refresh/only-export-components
export const boxStyle = {
  height: "250px",
  width: "250px",
  backgroundColor: "red",
};
