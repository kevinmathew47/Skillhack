"use client";

import { useEffect, useRef } from "react";

export default function useScrollAnimations() {
  const observed = useRef(false);

  useEffect(() => {
    if (observed.current) return;
    observed.current = true;

    const fadeEls = document.querySelectorAll(
      ".witness-section, .video-section, .featured-video-section, " +
      ".projects-section, .timeline-section, .gallery-section, " +
      ".mission-section, .fund-section, .news-section, " +
      ".tcard, .video-card, .gallery-item, .gallery-main, .project-card, " +
      ".phase-wrap, .news-card"
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in", "visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    fadeEls.forEach((el, i) => {
      el.classList.add("fade-in");
      el.style.transitionDelay = `${(i % 4) * 0.07}s`;
      io.observe(el);
    });

    // Yellow orb mouse-follow parallax
    const orbs = document.querySelectorAll(".hero-orb");
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 22;
      const y = (e.clientY / window.innerHeight - 0.5) * 22;
      orbs.forEach((orb, i) => {
        const f = i % 2 === 0 ? 1 : -1;
        orb.style.transform = `translate(${x * f * 0.5}px, ${y * f * 0.5}px)`;
      });
    };
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      io.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
