import SubpageHeader from "@/components/SubpageHeader";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const galleryItems = Array.from({ length: 12 });

  return (
    <>
      <SubpageHeader />
      <main className="gallery-page-main">
        <div className="gallery-page-header-row" style={{ paddingTop: '3rem' }}>
          <div className="gallery-page-title-wrap">
            <h1 className="gallery-page-title">Gallery</h1>
            <p className="gallery-page-subtitle">Moments from my journey</p>
          </div>
          <p className="gallery-page-desc">
            A collection of photographs capturing my journey, training, and moments in the sky.
          </p>
        </div>

        <div className="gallery-masonry">
          {galleryItems.map((_, i) => (
            <div className="gallery-masonry-item" key={i}>
              {/* Using a placeholder background color for now; images can be swapped later */}
              <div className="gallery-masonry-img"></div>
              <div className="gallery-masonry-overlay">
                <h4 className="gallery-overlay-title">Add card title</h4>
                <p className="gallery-overlay-desc">Description goes here</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
