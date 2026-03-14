"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection({ raisedAmount, goalAmount, pillFillWidth }) {
  const heroVideoRef = useRef(null);

  useEffect(() => {
    const heroBg = heroVideoRef.current;
    if (!heroBg) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight * 1.5) {
        heroBg.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero">
      {/* Yellow orb decorations */}
      <div className="hero-orb hero-orb-left"></div>
      <div className="hero-orb hero-orb-right"></div>

      {/* Progress pill */}
      <div className="progress-pill">
        <div className="pill-bar">
          <div className="pill-fill" id="heroPillFill" style={{ width: pillFillWidth }}></div>
        </div>
        <span className="pill-text">{raisedAmount} of {goalAmount} raised</span>
      </div>

      {/* Hero background VIDEO */}
      <div className="hero-image-wrap">
        <video
          className="hero-video"
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={heroVideoRef}
        ></video>
      </div>

      {/* Text overlay */}
      <div className="hero-content">
        <p className="hero-greeting">Hi, I&apos;m</p>
        <h1 className="hero-name">Syam Kumar</h1>
        <p className="hero-desc">
          From 16 surgeries to setting a world record — support Syam Kumar in
          becoming the first person without a leg to skydive from 45,000
          feet and fly as a wingsuit pilot.
        </p>
        <Link href="/fund" className="btn-fund hero-btn">Fund my dream</Link>
      </div>

      {/* Handwritten "A Life Above Limits" */}
      <div className="hero-handwritten" aria-hidden="true">A Life Above Limits</div>
    </section>
  );
}
