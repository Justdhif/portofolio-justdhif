import { useEffect, useRef } from "react";

const CVPreview = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-md w-full overflow-x-hidden">
      <div
        ref={modalRef}
        className="relative bg-gray-900 border border-gray-800 rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl custom-scrollbar"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800 bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-10">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            CV Nadhif Ararya Wiankosasi
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-all duration-200 group"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* CV Preview Image */}
        <div className="relative overflow-y-auto max-h-[70vh] w-full flex justify-center p-4 custom-scrollbar">
          <img
            src="/assets/cv/cv_nadhif_ararya_wiankosasi.jpg"
            alt="CV Preview"
            className="max-w-full h-auto object-contain border border-gray-700 rounded-lg"
          />
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 p-6 bg-gray-900/80 border-t border-gray-800 sticky bottom-0">
          <a
            href="/assets/cv/cv_nadhif_ararya_wiankosasi.pdf"
            download="Justdhif_CV.pdf"
            className="relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 overflow-hidden group flex-1 sm:flex-none text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV (PDF)
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </a>

          <button
            onClick={onClose}
            className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2 group flex-1 sm:flex-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
