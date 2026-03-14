export default function ProjectsSection() {
  return (
    <section id="mission-intro" className="projects-section">
      <h2 className="projects-heading">What I&apos;ve been working on!</h2>
      <div className="project-card">
        {/* Real skydiving VIDEO */}
        <div className="project-img-wrap">
          <video
            className="project-video"
            src="/videos/project.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          ></video>
        </div>
        <div className="project-info">
          <h3 className="project-name">Skillhac</h3>
          <p className="project-tagline">A social media for film lovers and filmmakers.</p>
          <p className="project-desc">
            A dream to create a space where film lovers and filmmakers connect, share ideas, and
            celebrate the art of cinema.
          </p>
        </div>
      </div>
    </section>
  );
}
