import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import FloatingOrb from "./FloatingOrb";
import GridPattern from "./GridPattern";
import TechStackIcons from "./TechStackIcons";
import BouncingCirclesLoader from "./BouncingCirclesLoader";
import StatusText from "./StatusText";

const SplashScreen = ({ progress }) => {
  const [localProgress, setLocalProgress] = useState(0);

  useEffect(() => {
    // Smooth out the progress updates
    const timer = setInterval(() => {
      setLocalProgress((prev) => {
        const diff = progress - prev;
        return prev + diff * 0.3; // Smoothing factor
      });
    }, 30);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 z-[9999] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <GridPattern />

        <FloatingOrb
          size={120}
          color="bg-gradient-to-br from-amber-400 to-rose-500"
          position={{ top: "20%", left: "15%" }}
          delay={0.2}
        />
        <FloatingOrb
          size={80}
          color="bg-gradient-to-br from-emerald-400 to-cyan-500"
          position={{ bottom: "25%", right: "20%" }}
          delay={0.4}
        />

        <motion.div
          className="relative z-10 text-center p-8 w-full max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <TechStackIcons />

          <motion.h1
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Loading Portfolio
          </motion.h1>

          <BouncingCirclesLoader progress={localProgress} />

          <StatusText />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
