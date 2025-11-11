import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";
import breakfastImage from "@/assets/menu-breakfast.jpg";
import teaImage from "@/assets/menu-tea.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import storefrontImage from "@/assets/tiffany-storefront.jpg";

const Home = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const timelineItems = [
    {
      year: "2015",
      title: "The Birth of The Blue Box Café",
      description: "Founded within Tiffany & Co., celebrating everyday elegance.",
    },
    {
      year: "2020",
      title: "Global Recognition",
      description: "Expanded into new cities blending design and culinary art.",
    },
    {
      year: "Today",
      title: "A New Chapter",
      description: "Revived with modern light fare and signature experiences.",
    },
  ];

  const menuPreview = [
    {
      name: "Smoked Salmon Sando",
      description: "Milk bread, dill cream, lemon",
      price: "₹420",
      image: breakfastImage,
      chefPick: true,
    },
    {
      name: "Seasonal Tartine",
      description: "Roasted veg, whipped ricotta, herb drizzle",
      price: "₹460",
      image: teaImage,
    },
    {
      name: "Blue Box Macaron",
      description: "Signature 2pc set",
      price: "₹150",
      image: dessertImage,
    },
  ];

  const shopPreview = [
    {
      name: "Classic Gift Box",
      price: "₹1,499",
      image: breakfastImage,
    },
    {
      name: "Signature Macarons",
      price: "₹450",
      image: dessertImage,
    },
  ];

  return (
    <div 
      className="min-h-screen relative overflow-x-hidden"
      style={{
        backgroundImage: 'url("/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#1b1411'
      }}
    >
      {/* Background overlay for text readability */}
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.18)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      {/* Hero Section - Hero Image Overlay on Background */}
      <section 
        className="hero-section relative w-full flex items-center justify-center overflow-hidden"
        style={{
          minHeight: '100vh',
          height: '100vh',
          paddingTop: 'env(safe-area-inset-top, 0px)',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          width: '100%',
          maxWidth: '100vw',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Content - Centered, Responsive, Mobile-Safe */}
        <div 
          className="relative z-[60] w-full max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 text-center hero-content flex flex-col items-center justify-center"
          style={{
            paddingLeft: 'max(1rem, env(safe-area-inset-left, 1rem))',
            paddingRight: 'max(1rem, env(safe-area-inset-right, 1rem))',
            paddingTop: 'clamp(2rem, 8vh, 4rem)',
            paddingBottom: 'clamp(2rem, 8vh, 4rem)',
            minHeight: '100%'
          }}
        >
          <h1 className="mb-4 sm:mb-5 md:mb-6 text-center w-full hero-heading relative z-[60]">
            A Moment in Blue
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-sans font-light mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-[1.7] px-2 sm:px-4 w-full hero-subtitle">
            Where timeless craftsmanship meets modern calm.
          </p>
          
          {/* CTAs - Stacked on Mobile, Side-by-Side on Desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full px-2 sm:px-4">
            <Link 
              to="/reservation" 
              className="btn-primary w-full sm:w-auto text-center"
              aria-label="Reserve now"
            >
              RESERVE NOW
            </Link>
            <Link 
              to="/menu" 
              className="btn-primary w-full sm:w-auto text-center"
              aria-label="Explore menu"
            >
              EXPLORE MENU
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about-section"
        data-section
        className="section-spacing bg-theme-section fade-up relative"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-tiffany/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500 z-0" />
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={storefrontImage}
                  alt="The Blue Box Café interior"
                  className="w-full h-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-white font-serif font-medium tracking-[0.02em] text-[clamp(24px,3.5vw,40px)] leading-[1.3]">
                Our Story
              </h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base font-sans font-light text-theme-secondary leading-[1.75]">
                <p>
                  The Blue Box Café is a collaboration with Tiffany & Co., honoring a long tradition of craftsmanship and conviviality.
                </p>
                <p>
                  We serve seasonally inspired dishes and curated gift boxes that pair perfectly with our coffee program. Our kitchen emphasizes local sourcing, minimal waste, and thoughtful presentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        id="timeline-section"
        data-section
        className="section-spacing bg-theme-section fade-up"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
          <h2 className="text-center mb-12 sm:mb-16 md:mb-20 text-white font-serif font-medium tracking-[0.02em] text-[clamp(24px,3.5vw,40px)] leading-[1.3] uppercase">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="section-card bg-theme-card backdrop-blur-sm border border-theme group cursor-pointer"
              >
                <div className="year-accent text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold">{item.year}</div>
                <h3 className="mb-3 sm:mb-4 text-white text-lg sm:text-xl font-serif font-semibold leading-tight group-hover:text-white transition-colors duration-250">
                  {item.title}
                </h3>
                <p className="text-sm font-sans font-light text-[rgba(246,244,242,0.9)] leading-[1.75] group-hover:text-white transition-colors duration-250">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section 
        id="menu-preview-section"
        data-section
        className="section-spacing bg-theme-section fade-up relative"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
          <h2 className="text-center mb-12 sm:mb-16 text-white font-serif font-medium tracking-[0.02em] text-[clamp(24px,3.5vw,40px)] leading-[1.3] uppercase">
            Menu Highlights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {menuPreview.map((item, index) => (
              <Link
                key={index}
                to="/menu"
                className="group cursor-pointer w-full"
              >
                <div className="relative overflow-hidden rounded-[12px] mb-4 sm:mb-6 aspect-[4/3] bg-brown/10 shadow-lg w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {item.chefPick && (
                    <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gold/95 backdrop-blur-sm text-brown px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-sans font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      <span className="hidden sm:inline">Chef's Choice</span>
                      <span className="sm:hidden">Chef's</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-lg sm:text-xl font-serif font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-[rgba(246,244,242,0.9)] leading-[1.7] group-hover:text-white transition-colors duration-250">
                    {item.description}
                  </p>
                  <p className="font-serif font-semibold text-gold-light text-base sm:text-lg pt-2">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/menu" className="inline-block">
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-brown hover:shadow-lg hover:border-white active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 px-6 sm:px-10 py-3 sm:py-5 rounded-full text-xs sm:text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer inline-flex items-center gap-2"
              >
                View Full Menu
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section 
        id="shop-preview-section"
        data-section
        className="section-spacing bg-theme-section fade-up"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
          <h2 className="text-center mb-12 sm:mb-16 text-white font-serif font-medium tracking-[0.02em] text-[clamp(24px,3.5vw,40px)] leading-[1.3] uppercase">
            Shop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-3xl mx-auto">
            {shopPreview.map((item, index) => (
              <Link
                key={index}
                to="/shop"
                className="group section-card bg-theme-card backdrop-blur-sm border border-theme cursor-pointer w-full"
              >
                <div className="relative overflow-hidden rounded-[12px] mb-4 sm:mb-6 aspect-square bg-brown/10 shadow-lg w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-menu-item text-lg sm:text-xl font-serif font-semibold">
                    {item.name}
                  </h3>
                  <p className="font-serif font-semibold text-gold-light text-base sm:text-lg">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12 sm:mt-16">
            <Link to="/shop" className="inline-block">
              <Button
                className="bg-tiffany hover:bg-tiffany-light hover:shadow-lg hover:shadow-tiffany/40 active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-xs sm:text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer inline-flex items-center gap-2"
              >
                Shop All
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
