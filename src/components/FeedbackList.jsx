import { motion, AnimatePresence } from "motion/react";

const FeedbackList = ({ feedbacks, containerRef }) => {
  if (!feedbacks.length)
    return (
      <div className="text-center py-10">
        <svg
          className="w-12 h-12 mx-auto text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
        <p className="mt-2 text-gray-500">No feedback yet.</p>
        <p className="text-sm text-gray-400">
          Be the first to share your thoughts!
        </p>
      </div>
    );

  return (
    <AnimatePresence>
      {feedbacks.map((feedback) => (
        <motion.div
          key={feedback.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="absolute px-5 py-3 bg-gradient-to-b from-storm to-indigo text-white rounded-xl shadow-sm cursor-grab active:cursor-grabbing"
          whileTap={{ scale: 0.98 }}
          drag
          dragConstraints={containerRef}
          dragElastic={1}
        >
          {feedback.message}
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default FeedbackList;
