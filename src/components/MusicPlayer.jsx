import { useRef, useState, useEffect } from "react";
import { playlist } from "../constants";
import { Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AudioControls from "./AudioControls";
import ProgressBar from "./ProgressBar";
import TrackInfo from "./TrackInfo";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        preload="metadata"
        volume={volume}
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
                  <TrackInfo
                    currentTrack={currentTrack}
                    playlist={playlist}
                    isMobile={true}
                  />

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex-1 mx-2">
                      <ProgressBar
                        duration={duration}
                        currentTime={currentTime}
                        handleSeek={handleSeek}
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <AudioControls
                      isPlaying={isPlaying}
                      togglePlay={togglePlay}
                      handleNext={handleNext}
                      handlePrev={handlePrev}
                      volume={volume}
                      toggleMute={toggleMute}
                      setVolume={setVolume}
                      isMuted={isMuted}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden md:block w-[320px]">
                <TrackInfo
                  currentTrack={currentTrack}
                  playlist={playlist}
                  isMobile={false}
                />

                <div className="p-4">
                  <ProgressBar
                    duration={duration}
                    currentTime={currentTime}
                    handleSeek={handleSeek}
                  />

                  <AudioControls
                    isPlaying={isPlaying}
                    togglePlay={togglePlay}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    volume={volume}
                    toggleMute={toggleMute}
                    setVolume={setVolume}
                    isMuted={isMuted}
                  />
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
