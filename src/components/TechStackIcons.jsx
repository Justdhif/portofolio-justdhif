import { motion } from "motion/react";

const TechStackIcons = () => (
  <motion.div
    className="flex justify-center gap-8 mb-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    {/* React Icon */}
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 0.2,
        ease: "easeInOut",
      }}
    >
      <img src="/assets/logos/react.svg" alt="" className="w-16 h-16"/>
    </motion.div>

    {/* Vite Icon */}
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 0.4,
        ease: "easeInOut",
      }}
    >
      <img src="/assets/logos/vitejs.svg" alt="" className="w-16 h-16"/>
    </motion.div>

    {/* Tailwind CSS Icon */}
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, -10, 10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: 0.6,
        ease: "easeInOut",
      }}
    >
      <img src="/assets/logos/tailwindcss.svg" alt="" className="w-16 h-16"/>
    </motion.div>
  </motion.div>
);

export default TechStackIcons;
