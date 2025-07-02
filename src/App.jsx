import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Feedback from "./sections/Feedback";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SplashScreen from "./components/SplashScreen";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (loading) {
    return <SplashScreen progress={progress} />;
  }

  return (
    <div className="container mx-auto max-w-7xl overflow-x-hidden">
      <MusicPlayer />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Testimonial />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
