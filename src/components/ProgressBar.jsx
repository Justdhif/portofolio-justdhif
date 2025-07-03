const ProgressBar = ({ duration, currentTime, handleSeek }) => {
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
    <div className="mb-2">
      <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        step="0.1"
        className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        style={{
          background: `linear-gradient(to right, #ffffff ${
            (currentTime / duration) * 100
          }%, #374151 ${(currentTime / duration) * 100}%)`,
        }}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
