const StarsBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Small stars */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
          }}
        />
      ))}

      {/* Nebula effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-900/30 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-900/20 blur-[120px]"></div>
      <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-blue-900/20 blur-[90px] animate-pulse"></div>
    </div>
  );
};

export default StarsBackground;
