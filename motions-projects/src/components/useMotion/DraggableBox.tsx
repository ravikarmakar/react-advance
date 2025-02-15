import { motion, useMotionValue } from "framer-motion";

const DraggableBox = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        drag
        style={{ x, y }}
        className="w-32 h-32 bg-blue-500 rounded"
      />
      <p className="text-white">
        Position: ({x.get().toFixed(2)}, {y.get().toFixed(2)})
      </p>
    </div>
  );
};

export default DraggableBox;

// import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
// import { useState } from "react";

// const DraggableBox = () => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // Listen to motion value changes
//   useMotionValueEvent(x, "change", (latest) => {
//     setPosition((prev) => ({ ...prev, x: latest }));
//   });

//   useMotionValueEvent(y, "change", (latest) => {
//     setPosition((prev) => ({ ...prev, y: latest }));
//   });

//   return (
//     <div className="flex flex-col items-center">
//       <motion.div
//         drag
//         style={{ x, y }}
//         className="w-32 h-32 bg-blue-500 rounded"
//       />
//       <p className="text-white">
//         Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})
//       </p>
//     </div>
//   );
// };

// export default DraggableBox;
