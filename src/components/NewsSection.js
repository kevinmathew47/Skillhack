export default function NewsSection() {
  return (
    <section id="news" className="news-section">
      <h2 className="news-title">News, Stories, Updates, and Highlights From My Ongoing Journey</h2>
      <div className="news-grid">
        {[1, 2, 3].map((i) => (
          <div className="news-card" key={i}>
            <div className="news-thumb"></div>
            <p className="news-tag">Headline</p>
            <p className="news-body">Please add your content here</p>
          </div>
        ))}
      </div>
    </section>
  );
}
