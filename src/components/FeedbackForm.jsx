import React, { useState } from "react";

const FeedbackForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus("Sending...");

    try {
      const res = await fetch("https://portof-nadhif-api.vercel.app/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setMessage("");
        setStatus("Thank you for your feedback! 🎉");
        onSubmit();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message. Check connection.");
    }
  };

  return (
    <div className="w-full mt-12 mb-5 lg:px-20 sm:px-0">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div
          className={`
          flex items-end gap-2 
          ${isFocused ? "ring-2 ring-blue-400/50" : ""}
          bg-gray-50 dark:bg-gray-800 
          rounded-2xl p-1.5 
          transition-all duration-200
          shadow-sm hover:shadow-md
        `}
        >
          <textarea
            className="
              flex-1 p-3 
              bg-transparent 
              border-none focus:outline-none 
              resize-none 
              placeholder-gray-400 dark:placeholder-gray-500 
              text-gray-800 dark:text-gray-100
              rounded-xl
            "
            placeholder="Type your feelings..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={3}
            required
          />

          {/* Button (Right Side) */}
          <button
            type="submit"
            disabled={!message.trim()}
            className={`
              px-5 py-3 mb-1
              rounded-xl
              transition-all
              ${
                message.trim()
                  ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            Send
          </button>
        </div>

        {/* Status Message */}
        {status && (
          <div
            className={`
            px-4 py-2 rounded-lg text-sm
            ${
              status.includes("Thank you")
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                : status === "Sending..."
                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
            }
          `}
          >
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
