const ContactInfo = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-700/50">
      <h3 className="text-lg font-medium text-white mb-3">Direct Contact</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-3 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-indigo-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>justdhif418@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-indigo-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>+62-821-1328-5557</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
