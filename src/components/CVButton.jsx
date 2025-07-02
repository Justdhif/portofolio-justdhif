const CVButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative px-8 py-3 text-white bg-gradient-to-r from-primary to-indigo rounded-full hover:from-indigo hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 group-hover:animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download CV
      </span>
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
    </button>
  );
};

export default CVButton;
