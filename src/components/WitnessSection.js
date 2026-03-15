import Link from "next/link";

export default function WitnessSection() {
  return (
    <section id="about" className="witness-section">
      <div 
        className="hero-handwritten text-center" 
        style={{ position: 'absolute', top: '1rem', left: '0', right: '0', bottom: 'auto', marginBottom: '2rem', width: '100%', zIndex: 10 }}
      >
        A Life Above Limits
      </div>
      {/* Left Column: Stats and Action Buttons */}
      <div className="witness-left">
        <div className="witness-stats">
          <div className="stat-item">
            <span className="stat-num">16</span>
            <span className="stat-label">Surgeries</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">100+</span>
            <span className="stat-label">Solo Skydiving</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">42000ft</span>
            <span className="stat-label">Wingsuit Flying</span>
          </div>
          <div className="stat-item">
            <span className="stat-label-only">Tom Cruise Cliff Jump</span>
          </div>
        </div>
        <div className="witness-btns">
          <Link href="/fund" className="btn-fund-dream">Fund my dream</Link>
          <a href="#journey" className="btn-view-records">View all records</a>
        </div>
      </div>

      {/* Center Column: Kerala Map Backdrop + Main Portrait */}
      <div className="witness-center">
        <div className="kerala-map-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="kerala-map-img"
            src="/images/vector.png"
            alt="Kerala state outline map"
          />
        </div>

        <div className="witness-photo-container">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="witness-photo"
            src="/images/highlight-image.png"
            alt="Syam Kumar"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Column: Key Narrative Heading */}
      <div className="witness-right">
        <h2 className="witness-title">
          <div className="witness-line-1">Witness The Journey:</div>
          <div className="witness-line-2">From Biological Mutiny</div>
          <div className="witness-line-3">to Sky Mastery</div>
        </h2>
      </div>
    </section>
  );
}
