import { motion } from "motion/react";

const FloatingOrb = ({ size, color, position, delay }) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-md opacity-70`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      ...position,
    }}
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: [0, -40, 0],
      opacity: [0, 0.7, 0],
    }}
    transition={{
      delay,
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default FloatingOrb;
