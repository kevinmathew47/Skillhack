export default function MissionSection() {
  return (
    <section id="mission" className="mission-section">
      <div className="mission-bg-text" aria-hidden="true">MISSION</div>
      
      <div className="mission-container">
        {/* Phase 1 */}
        <div className="mission-phase-item phase-1">
          <div className="phase-marker-wrap">
            <div className="phase-connector top"></div>
            <div className="phase-circle">
              <span className="phase-number">1</span>
            </div>
            <div className="phase-connector bottom"></div>
          </div>
          
          <div className="phase-content-card">
            <div className="phase-meta">Phase 1 (Years 1-3)</div>
            <h3 className="phase-mission-name yellow">
              Mission 1: High-Performance Mobility (sky blade)
            </h3>
            <div className="phase-details">
              <p>
                This mission involves developing a next generation adaptive leg system engineered for extreme vertical and lateral forces, specifically for high impact motocross landings. 
              </p>
              <p>
                • <strong>Objective:</strong> Restore controlled glide authority and aerodynamic balance for an asymmetrical body during extreme maneuvers. 
              </p>
              <p>
                • <strong>Proof of Concept:</strong> A planned high risk cinematic motocross jump inspired by iconic practical stunts, serving as a demonstration for a Netflix documentary.
              </p>
            </div>
            <div className="phase-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1601024445121-e294b4116d4a?w=1200&q=80"
                alt="Sky Blade Mission"
                className="mission-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Phase 2 Header Area */}
        <div className="phase-header-row">
          <div className="phase-marker-wrap">
            <div className="phase-connector top"></div>
            <div className="phase-circle">
              <span className="phase-number">2</span>
            </div>
            <div className="phase-connector bottom"></div>
          </div>
          <h2 className="phase-main-title">
            Phase 2 : Healing, Rebuilding & Human Dignity
          </h2>
        </div>

        {/* Phase 2 Mission Content */}
        <div className="mission-phase-item phase-2">
          <div className="phase-marker-wrap">
            <div className="phase-connector top"></div>
            <div className="phase-connector bottom hidden"></div>
          </div>
          
          <div className="phase-content-card">
            <h3 className="phase-mission-name yellow">
              Mission 2: Spinal Protection & Survival • Exoskeleton Development:
            </h3>
            <div className="phase-details">
              <p>
                Engineering a proprietary protective suit architecture to mitigate the risk of severe spinal injury and paralysis during skydiving and extreme sports.
              </p>
              <p>
                • <strong>Stratospheric Aspirancy:</strong> Preparation for a 41,000 foot wingsuit world record jump. This requires specialized life-support systems to survive hypoxia and temperatures as low as −90°C.
              </p>
            </div>
            <div className="phase-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?w=1200&q=80"
                alt="Exoskeleton Mission"
                className="mission-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
