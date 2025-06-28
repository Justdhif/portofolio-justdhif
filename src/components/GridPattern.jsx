import { motion } from "motion/react";

const GridPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-10">
    <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
      {[...Array(72)].map((_, i) => (
        <motion.div
          key={i}
          className="border border-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: i * 0.01, duration: 1 }}
        />
      ))}
    </div>
  </div>
);

export default GridPattern;
