import { useState } from "react";

const ContactForm = ({
  formData,
  handleChange,
  activeField,
  setActiveField,
  isLoading,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="relative">
        <label
          htmlFor="name"
          className={`absolute left-4 transition-all duration-300 ${
            activeField === "name" || formData.name
              ? "top-1 text-xs text-indigo-400"
              : "top-4 text-sm text-gray-400"
          }`}
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full pt-6 pb-2 px-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all duration-300 text-white"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setActiveField("name")}
          onBlur={() => setActiveField(null)}
          autoComplete="name"
          required
        />
      </div>

      <div className="relative">
        <label
          htmlFor="email"
          className={`absolute left-4 transition-all duration-300 ${
            activeField === "email" || formData.email
              ? "top-1 text-xs text-indigo-400"
              : "top-4 text-sm text-gray-400"
          }`}
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full pt-6 pb-2 px-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all duration-300 text-white"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setActiveField("email")}
          onBlur={() => setActiveField(null)}
          autoComplete="email"
          required
        />
      </div>

      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute left-4 transition-all duration-300 ${
            activeField === "message" || formData.message
              ? "top-1 text-xs text-indigo-400"
              : "top-4 text-sm text-gray-400"
          }`}
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full pt-6 pb-2 px-4 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 outline-none transition-all duration-300 text-white resize-none"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setActiveField("message")}
          onBlur={() => setActiveField(null)}
          autoComplete="off"
          required
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            isLoading
              ? "bg-indigo-900/50 text-indigo-300 cursor-not-allowed"
              : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-indigo-500/20"
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Transmitting...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
