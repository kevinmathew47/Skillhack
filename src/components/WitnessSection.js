import Link from "next/link";

export default function WitnessSection() {
  return (
    <section id="about" className="witness-section">
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

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="witness-photo"
          src="/images/highlight-image.png"
          alt="Syam Kumar"
          loading="lazy"
        />
      </div>

      {/* Right Column: Key Narrative Heading */}
      <div className="witness-right">
        <h2 className="witness-title">
          Witness The Journey:<br />From Biological Mutiny<br />to Sky Mastery
        </h2>
      </div>
    </section>
  );
}
