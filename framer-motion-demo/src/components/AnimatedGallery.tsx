import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nfGVufDB8fDB8fHww",

  "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1570422593863-bd38ef7ce050?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFtbWFsfGVufDB8fDB8fHww",

  "https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1586959140245-62ae66f20b75?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbW1hbHxlbnwwfHwwfHx8MA%3D%3D",

  "https://plus.unsplash.com/premium_photo-1676385777209-1d435cc69c5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",

  "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedGallery = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => setShowImages((prev) => !prev);

  return (
    <div>
      <button
        className="cursor-pointer px-4 py-4 rounded-xl bg-amber-200 text-black"
        onClick={handleClick}
      >
        {showImages ? "Hide Images" : "Show Images"}
      </button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "visible" : "hidden"}
        className="grid sm:grid-cols-2 lg:grid-cols-5 mt-10 gap-5 px-10 py-10"
      >
        {galleryImages.map((image, index) => (
          <motion.div key={index} variants={childVariants}>
            <img
              src={image}
              alt={`images number ${index + 1}`}
              className="rounded-lg"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGallery;
