import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import breakfastImage from "@/assets/menu-breakfast.jpg";
import teaImage from "@/assets/menu-tea.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import storefrontImage from "@/assets/tiffany-storefront.jpg";

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const galleryImages = [
    { src: heroImage, alt: "Morning light on our counter", caption: "Morning light on our counter" },
    { src: breakfastImage, alt: "Signature Blue Box macaron — seasonal flavor", caption: "Signature Blue Box macaron — seasonal flavor" },
    { src: teaImage, alt: "The Tiffany collaboration tasting evening", caption: "The Tiffany collaboration tasting evening" },
    { src: dessertImage, alt: "Artfully plated seasonal dish", caption: "Artfully plated seasonal dish" },
    { src: storefrontImage, alt: "Elegant café interior", caption: "Elegant café interior" },
    { src: heroImage, alt: "Cozy dining space", caption: "Cozy dining space" },
    { src: breakfastImage, alt: "Fresh seasonal ingredients", caption: "Fresh seasonal ingredients" },
    { src: teaImage, alt: "Tea ceremony presentation", caption: "Tea ceremony presentation" },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxImage(galleryImages[index].src);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const next = (lightboxIndex + 1) % galleryImages.length;
    setLightboxIndex(next);
    setLightboxImage(galleryImages[next].src);
  };

  const prevImage = () => {
    const prev = (lightboxIndex - 1 + galleryImages.length) % galleryImages.length;
    setLightboxIndex(prev);
    setLightboxImage(galleryImages[prev].src);
  };

  return (
    <div className="min-h-screen relative pt-24">
      {/* Hero */}
      <section className="section-spacing border-b border-offwhite/10">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <h1 className="mb-8">
            Gallery
          </h1>
          <p className="text-base font-sans font-light text-theme-secondary max-w-2xl mx-auto leading-relaxed">
            A glimpse into The Blue Box Café experience
          </p>
        </div>
      </section>

      {/* Masonry Grid - 10px gutter */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-[10px] space-y-[10px]">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-[10px] cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto transition-transform duration-220 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brown/0 group-hover:bg-brown/20 transition-colors duration-220" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-brown/95 z-50 flex items-center justify-center p-6"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-offwhite hover:text-tiffany transition-colors duration-220 z-10"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-offwhite hover:text-tiffany transition-colors duration-220 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-offwhite hover:text-tiffany transition-colors duration-220 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt={galleryImages[lightboxIndex].alt}
              className="max-w-full max-h-[90vh] object-contain mx-auto rounded-2xl"
            />
            {galleryImages[lightboxIndex].caption && (
              <p className="text-center text-offwhite mt-4 font-sans font-light text-sm">
                {galleryImages[lightboxIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
