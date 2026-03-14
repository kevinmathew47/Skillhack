export default function GallerySection() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?w=1800&q=80"
          alt="Syam Kumar with plane"
          className="gallery-main"
          loading="lazy"
        />
      </div>
      <div className="gallery-grid">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1597764690523-9bda4ee43895?w=800&q=80"
          alt="Syam in colorful shirt"
          className="gallery-item"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1547481887-a26e2cacb5ca?w=800&q=80"
          alt="Syam on stage"
          className="gallery-item"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80"
          alt="Syam on bike"
          className="gallery-item"
          loading="lazy"
        />
      </div>
    </section>
  );
}
