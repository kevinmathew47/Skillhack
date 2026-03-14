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
          src="/images/shyam-in-colorful-shirt.png"
          alt="Syam in colorful shirt"
          className="gallery-item"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shyam-on-stage.png"
          alt="Syam on stage"
          className="gallery-item"
          loading="lazy"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shyam-on-bike.png"
          alt="Syam on bike"
          className="gallery-item"
          loading="lazy"
        />
      </div>
      <div className="gallery-bottom">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gallery-wide-2.png"
          alt="Gallery Wide Image"
          className="gallery-wide"
          loading="lazy"
        />
      </div>
    </section>
  );
}
