import { motion } from "motion/react";

const TrackInfo = ({ currentTrack, playlist, isMobile }) => {
  return (
    <div className={isMobile ? "truncate" : ""}>
      {isMobile ? (
        <>
          <h3 className="font-bold truncate">{playlist[currentTrack].title}</h3>
          <p className="text-gray-300 text-sm truncate">
            {playlist[currentTrack].artist}
          </p>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default TrackInfo;
