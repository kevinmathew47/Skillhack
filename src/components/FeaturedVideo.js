"use client";

import { useRef } from "react";

export default function FeaturedVideo() {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    if (video.paused) {
      video.play();
      wrap.classList.add("playing");
    } else {
      video.pause();
      wrap.classList.remove("playing");
    }
  };

  return (
    <section className="featured-video-section">
      <div className="featured-video-wrap" ref={wrapRef} onClick={togglePlay}>
        <video
          ref={videoRef}
          className="featured-video-player"
          src="/videos/featured.mp4"
          muted
          loop
          playsInline
          preload="metadata"
        ></video>
        <div className="featured-play-wrap" id="featuredPlayBtn">
          <div className="featured-play-btn">&#9654;</div>
        </div>
      </div>
    </section>
  );
}
