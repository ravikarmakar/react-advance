import { motion } from "framer-motion";

const images = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=600&auto=format&fit=crop&q=60",
    caption: "Image Caption 1",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&auto=format&fit=crop&q=60",
    caption: "Image Caption 2",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=600&auto=format&fit=crop&q=60",
    caption: "Image Caption 3",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 4",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 5",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 6",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 7",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 8",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 9",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww",
    caption: "Image Caption 10",
  },
];

const ImageGallery = () => {
  return (
    <div className="grid sm:grid-cols-3 lg:grid-cols-5">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg group"
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={image.imageUrl}
            alt={image.caption}
            className="w-full h-full object-cover"
          />

          <motion.div
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            {image.caption}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGallery;

// className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"

// className =
//   "absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer";
