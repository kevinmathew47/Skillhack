export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">What I&apos;ve been working on!</h2>
      
      <div className="project-media-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/images/project-hero.png" 
          alt="Syam Kumar Skydiving" 
          className="project-hero-img"
          loading="lazy"
        />
      </div>

      <div className="project-info-row">
        <div className="project-info-left">
          <h3 className="project-name-v2">Skillhac</h3>
          <p className="project-tagline-v2">A social media for film lovers and filmmakers.</p>
        </div>
        <div className="project-info-right">
          <p className="project-desc-v2">
            A dream to create a space where film lovers and filmmakers connect, share ideas, and
            celebrate the art of cinema.
          </p>
        </div>
      </div>
    </section>
  );
}
