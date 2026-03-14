"use client";

import { useState } from "react";

export default function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <>
      <section id="journey" className="video-section">
        <div className="video-section-content">
          <p className="video-intro-text">
            These testimonials showcase Syam&apos;s incredible journey from medical trauma to sky mastery.<br />
            Each video tells a part of the story that proves human potential has no ceiling.
          </p>
          <div className="video-grid">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="video-card"
                tabIndex={0}
                aria-label="Play video"
                onClick={openModal}
                onKeyDown={handleKeyDown}
              >
                <div className="video-thumb-v2">
                  <div className="play-icon-v2">
                    <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" />
                    </svg>
                  </div>
                </div>
                <p className="video-caption-v2">The Medical Journey: From Hospital Bed to Sky</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      <div
        className={`video-modal${modalOpen ? " open" : ""}`}
        id="videoModal"
        onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
      >
        <div className="video-modal-inner">
          <button className="modal-close" onClick={closeModal}>✕</button>
          <p className="modal-placeholder">🎬 Video coming soon</p>
        </div>
      </div>
    </>
  );
}
