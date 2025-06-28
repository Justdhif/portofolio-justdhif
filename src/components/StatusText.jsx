import { motion } from "motion/react";

const StatusText = () => (
  <motion.p
    className="text-sm md:text-base text-gray-400 font-light tracking-wider"
    animate={{
      opacity: [0.8, 1, 0.8],
      letterSpacing: ["0.05em", "0.1em", "0.05em"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    CRAFTING DIGITAL PORTOFOLIO
  </motion.p>
);

export default StatusText;
