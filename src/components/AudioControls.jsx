import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "motion/react";

const AudioControls = ({
  isPlaying,
  togglePlay,
  handleNext,
  handlePrev,
  volume,
  toggleMute,
  setVolume,
  isMuted,
}) => {
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (newVolume === 0) {
      toggleMute();
    } else if (isMuted) {
      toggleMute();
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="p-1 text-gray-300 hover:text-white md:p-2 md:bg-gray-700 md:rounded-full md:hover:bg-gray-600 transition"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </motion.button>

      {/* Volume Bar */}
      <div className="w-16 h-1 bg-gray-700 rounded-full relative">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div
          className="h-full bg-white rounded-full absolute top-0 left-0"
          style={{
            width: `${(isMuted ? 0 : volume) * 100}%`,
            transition: "width 0.2s ease",
          }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-white rounded-full"
          style={{
            left: `${(isMuted ? 0 : volume) * 100}%`,
            transition: "left 0.2s ease",
          }}
        />
      </div>

      {/* Rest of the controls... */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrev}
        className="p-2 text-gray-300 hover:text-white md:bg-gray-700 md:rounded-full md:hover:bg-gray-600 transition"
        aria-label="Previous track"
      >
        <SkipBack size={18} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause size={20} fill="currentColor" />
        ) : (
          <Play size={20} fill="currentColor" />
        )}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
        className="p-2 text-gray-300 hover:text-white md:bg-gray-700 md:rounded-full md:hover:bg-gray-600 transition"
        aria-label="Next track"
      >
        <SkipForward size={18} />
      </motion.button>
    </div>
  );
};

export default AudioControls;
