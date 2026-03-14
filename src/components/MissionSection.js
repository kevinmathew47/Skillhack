export default function MissionSection() {
  return (
    <section id="mission" className="mission-section">
      {/* Phase 1 */}
      <div className="phase-wrap phase-1">
        <div className="phase-number-bg" aria-hidden="true">1</div>
        <div className="phase-content">
          <p className="phase-label">Healing, Rebuilding &amp; Human Dignity</p>
          <h2 className="phase-title yellow">Mission 1: High-Performance Mobility (sky blade)</h2>
          <p className="phase-body">
            This mission involves developing a next generation adaptive leg system engineered for extreme vertical and
            lateral performance. • Proof of Concept: A planned high risk cinematic motocross jump inspired by iconic
            practical stunts, serving as a demonstration for a Netflix documentary.
          </p>
        </div>
        <div className="phase-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1601024445121-e294b4116d4a?w=1200&q=80"
            alt="Syam skydiving – Mission 1"
            className="phase-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Huge MISSION marquee text */}
      <div className="mission-banner" aria-hidden="true">MISSION</div>

      {/* Phase 2 */}
      <div className="phase-wrap phase-2">
        <div className="phase-number-bg" aria-hidden="true">2</div>
        <div className="phase-content phase-content-center">
          <h2 className="phase-title yellow">Mission 2: Spinal Protection &amp; Survival • Exoskeleton Development:</h2>
          <p className="phase-body phase-body-center">
            Engineering a proprietary protective suit architecture to mitigate the risk of severe spinal injury and
            paralysis during skydiving and extreme sports. • Stratospheric Aspirancy: Preparation for a 41,000 foot
            wingsuit world record jump. This requires specialized life-support systems to survive hypoxia and temperatures
            as low as −90°C.
          </p>
        </div>
        <div className="phase-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?w=1200&q=80"
            alt="Syam with prosthetic – Mission 2"
            className="phase-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
