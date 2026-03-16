"use client";

import Navbar from "@/components/Navbar";
import FundCTA from "@/components/FundCTA";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutTimeline from "@/components/AboutTimeline";
import AboutVision from "@/components/AboutVision";
import useMilaapFetch from "@/hooks/useMilaapFetch";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function AboutPage() {
  const { raisedText, goalText, fillWidth, supportersCount } = useMilaapFetch();
  useScrollAnimations();

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-content">
        {/* Top Hero Section */}
        <AboutHero />

        {/* Timeline Section */}
        <AboutTimeline />

        {/* Dual Image Divider (Scuba / Skydive) */}
        <section className="about-dual-image-section">
          <div className="dual-image-left">
            <img 
              src="/images/gallery/scuba diving .JPG" 
              alt="Syam scuba diving" 
              className="dual-img"
            />
          </div>
          <div className="dual-image-right">
            <div className="dual-image-badge">1440 × 819</div>
            <img 
              src="https://images.unsplash.com/photo-1528659556157-12c85eaf7fde?w=800&q=80" 
              alt="Syam skydiving" 
              className="dual-img"
            />
          </div>
        </section>

        {/* TEDx Image Section */}
        <section className="about-tedx-image-section">
          <img 
            src="/tedx-image.jpg" 
            alt="Syam at TEDx Kanke" 
            className="about-tedx-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentNode.innerHTML = `
                <div style="width: 100%; height: 50vh; background-image: url('https://images.unsplash.com/photo-1475721025505-1113b29dbb71?w=1600&q=80'); background-size: cover; background-position: center; display: flex; align-items: flex-end; justify-content: center; padding-bottom: 2rem;">
                  <h2 style="color: white; font-size: 8vw; font-weight: 900; letter-spacing: 5px; filter: drop-shadow(0 0 10px red);">TED Kanke</h2>
                </div>
              `;
            }}
          />
        </section>

        {/* Vision Section */}
        <AboutVision />
      </main>

      <FundCTA
        raisedText={`${raisedText} raised`}
        goalText={`Goal: ${goalText}`}
        fillWidth={fillWidth}
        supportersCount={supportersCount}
      />
      
      <Footer />
    </div>
  );
}
