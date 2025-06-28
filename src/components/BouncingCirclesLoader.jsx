import { motion } from "framer-motion";

const BouncingCirclesLoader = ({ progress }) => {
  const circleCount = 5;
  const colors = [
    "bg-amber-400",
    "bg-rose-500",
    "bg-purple-500",
    "bg-cyan-400",
    "bg-emerald-400",
  ];

  return (
    <div className="flex justify-center items-center h-24 mb-8 gap-2">
      {[...Array(circleCount)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-4 h-4 rounded-full ${colors[i]}`}
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Progress text */}
      <motion.div
        className="ml-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-rose-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.min(100, Math.round(progress))}%
      </motion.div>
    </div>
  );
};

export default BouncingCirclesLoader;
