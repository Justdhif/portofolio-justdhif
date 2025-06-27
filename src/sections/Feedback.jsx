import { useEffect, useState, useRef } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import { Particles } from "../components/Particles";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const containerRef = useRef();

  const fetchFeedbacks = async () => {
    try {
      const res = await fetch("https://portof-nadhif-api.vercel.app/feedback");
      const data = await res.json();
      setFeedbacks(data.reverse());
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen px-4 py-20 overflow-hidden">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={300}
        ease={80}
        color={"#6366f1"}
        refresh
      />

      <div className="w-full px-4">
        <h2 className="text-heading text-center">
          What do you think about justdhif?
        </h2>
        <FeedbackForm onSubmit={fetchFeedbacks} className="w-full" />
        <div className="w-full h-[25rem] overflow-hidden">
          <div
            className="flex items-center justify-center w-full h-full"
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
