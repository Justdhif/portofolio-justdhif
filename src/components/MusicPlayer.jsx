import { useRef, useState, useEffect } from "react";
import { playlist } from "../constants";
import { Play, Pause, SkipForward, SkipBack, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => handleNext();

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, isPlaying]);

  const togglePanel = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        preload="metadata"
      />

      <div className="flex flex-col items-start">
        <motion.button
          onClick={togglePanel}
          className="bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Open Music Player"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: isOpen ? -10 : 0,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <Music size={24} />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="music-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3,
              }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-2xl overflow-hidden mt-2"
            >
              {/* Mobile layout */}
              <div className="md:hidden flex">
                {/* Album Art - Mobile */}
                <div className="w-20 h-20 flex-shrink-0">
                  <img
                    src={playlist[currentTrack].cover}
                    alt={`${playlist[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info and Controls - Mobile */}
                <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                  <div className="truncate">
                    <h3 className="font-bold truncate">
                      {playlist[currentTrack].title}
                    </h3>
                    <p className="text-gray-300 text-sm truncate">
                      {playlist[currentTrack].artist}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="text-xs text-gray-400">
                      {formatTime(currentTime)}
                    </div>

                    <div className="flex-1 mx-2">
                      <input
                        type="range"
                        min={0}
                        max={duration}
                        value={currentTime}
                        onChange={handleSeek}
                        step="0.1"
                        className="w-full h-1 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                        style={{
                          background: `linear-gradient(to right, #3b82f6 ${
                            (currentTime / duration) * 100
                          }%, #374151 ${(currentTime / duration) * 100}%)`,
                        }}
                      />
                    </div>

                    <div className="text-xs text-gray-400">
                      {formatTime(duration)}
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      className="p-2 text-gray-300 hover:text-white"
                    >
                      <SkipBack size={18} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={togglePlay}
                      className="p-2 bg-blue-600 rounded-full hover:bg-blue-700"
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
                      className="p-2 text-gray-300 hover:text-white"
                    >
                      <SkipForward size={18} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block w-[320px]">
                {/* Album Art */}
                <motion.div
                  key={currentTrack}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-48 w-full overflow-hidden"
                >
                  <img
                    src={playlist[currentTrack].cover}
                    alt={`${playlist[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold truncate max-w-[240px]">
                      {playlist[currentTrack].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {playlist[currentTrack].artist}
                    </p>
                  </div>
                </motion.div>

                {/* Controls */}
                <div className="p-4">
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <input
                      type="range"
                      min={0}
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      step="0.1"
                      className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500"
                      style={{
                        background: `linear-gradient(to right, #3b82f6 ${
                          (currentTime / duration) * 100
                        }%, #374151 ${(currentTime / duration) * 100}%)`,
                      }}
                    />
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-center gap-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                    >
                      <SkipBack size={20} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={togglePlay}
                      className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md"
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
                      className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition"
                    >
                      <SkipForward size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MusicPlayer;
