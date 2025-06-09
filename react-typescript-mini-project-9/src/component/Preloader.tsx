import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { preloaderStore } from "../store/preloadersStore";
import { LOADING_DELAY } from "../constants/constants";

const Preloader: React.FC = () => {
  const { isLoading, setLoading } = preloaderStore();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (!isLoading) return null;
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed inset-0 bg-black text-white flex items-center justify-center text-2xl z-50"
    >
      Loading...
    </motion.div>
  );
};

export default Preloader;
