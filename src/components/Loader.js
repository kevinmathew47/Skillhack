"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(() => {
    // Initialize state from sessionStorage if available (server-safe)
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("hasSeenLoader");
    }
    return true;
  });
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      
      // Mark as seen in this session
      sessionStorage.setItem("hasSeenLoader", "true");
      
      const unmountTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(unmountTimeout);
    }, 2400);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      id="loader" 
      className={`loader-overlay${isDone ? " done" : ""}`} 
      role="status" 
      aria-label="Loading"
    >
      <div className="loader-streaks" aria-hidden="true">
        <span className="streak s1"></span>
        <span className="streak s2"></span>
        <span className="streak s3"></span>
        <span className="streak s4"></span>
        <span className="streak s5"></span>
        <span className="streak s6"></span>
      </div>
      <div className="loader-character" id="loaderChar">
        <video
          className="loader-video"
          src="/videos/loading.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        ></video>
        <div className="char-shadow"></div>
      </div>
      <div className="loader-text-wrap">
        <p className="loader-text">
          Gliding Through the Sky
          <span className="loader-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
