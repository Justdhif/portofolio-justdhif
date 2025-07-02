import React, { useState } from "react";

const FeedbackForm = ({ onSubmit, onError }) => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("https://portof-nadhif-api.vercel.app/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setMessage("");
        onSubmit(message);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      onError(err.message || "Error sending message. Check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full mt-12 mb-5 lg:px-20 sm:px-0">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div
          className={`
          flex items-end gap-2 
          ${isFocused ? "ring-2 ring-blue-400/50" : ""} bg-gray-800 
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
              resize-none placeholder-gray-500 text-gray-100
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

          <button
            type="submit"
            disabled={!message.trim() || isSubmitting}
            className={`
              px-5 py-3 mb-1
              rounded-xl
              transition-all
              ${
                message.trim() && !isSubmitting
                  ? "bg-blue-500 hover:bg-blue-600 text-white shadow-md"
                  : "text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
