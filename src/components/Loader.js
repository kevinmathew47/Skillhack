import { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      
      // Wait for the CSS transition (usually 0.8s) to finish before unmounting
      const unmountTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);

      return () => clearTimeout(unmountTimeout);
    }, 2400);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
    };
  }, []);

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
