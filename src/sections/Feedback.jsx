import { useEffect, useState, useRef } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import Notification from "../components/Notification";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [notification, setNotification] = useState(null);
  const containerRef = useRef();

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("https://portof-nadhif-api.vercel.app/feedback");
      if (!res.ok) throw new Error("Failed to fetch feedbacks");
      const data = await res.json();
      setFeedbacks(data.reverse());
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err);
      showNotification(
        "error",
        "Failed to load feedbacks. Please try again later."
      );
    }
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000);
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
      <div className="w-full px-4">
        <h2 className="text-heading text-center">
          What do you think about justdhif?
        </h2>

        <Notification notification={notification} />

        <FeedbackForm
          onSubmit={(message) => {
            showNotification("success", "Thank you for your feedback!");
            fetchFeedbacks();
          }}
          onError={(error) => {
            showNotification("error", error);
          }}
        />

        <div className="w-full h-[25rem] overflow-hidden">
          <div
            className="relative flex items-center justify-center w-full h-full"
            ref={containerRef}
          >
            <FeedbackList feedbacks={feedbacks} containerRef={containerRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
