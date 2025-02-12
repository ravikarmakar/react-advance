import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="py-4 px-6 mb-4  bg-blue-300 cursor-pointer rounded-3xl"
      >
        Open Siderbar
      </button>

      <motion.div
        className={`fixed letf-0 top-0 h-full bg-gray-600 text-white p-4 ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <span className="flex justify-between border-b-2 p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
          <p
            className="text-2xl text-blue-400 cursor-pointer"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            X
          </p>
        </span>
        <div className="py-6">
          <p>All content display here</p>
          <p>this is side bar component</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
