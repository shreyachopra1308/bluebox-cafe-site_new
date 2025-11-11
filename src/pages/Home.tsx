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
    <div className="min-h-screen relative">
      {/* Hero Section - Exact Specifications */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Elegant café interior with soft natural light"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Cream overlay - Exact 45% with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.18] to-transparent" />
          <div className="absolute inset-0 bg-[#F6F4F2]/45" />
        </div>

        {/* Content - Centered, max-width 900px */}
        <div className="relative z-20 max-w-[900px] mx-auto px-6 text-center hero-content">
          <h1 className="mb-6 text-white">
            A Moment in Blue
          </h1>
          
          <p className="text-[20px] font-sans font-light text-white/95 mb-12 max-w-2xl mx-auto leading-[1.7]">
            Where timeless craftsmanship meets modern calm.
          </p>
          
          {/* CTAs - Exact Specifications */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/reservation">
              <Button
                className="bg-[#0ABAB5] hover:bg-[#14CFCB] hover:shadow-lg hover:-translate-y-[3px] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[rgba(10,186,181,0.22)] focus:ring-offset-2 text-white px-8 py-4 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                aria-label="Reserve now"
              >
                Reserve Now
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-[#F6F4F2] text-[#F6F4F2] hover:bg-[#F6F4F2]/10 hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#F6F4F2]/30 focus:ring-offset-2 px-8 py-4 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                aria-label="Explore menu"
              >
                Explore Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about-section"
        data-section
        className="section-spacing bg-theme-section fade-up relative"
      >
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-tiffany/20 rounded-2xl blur-xl transform group-hover:scale-105 transition-transform duration-500" />
              <img
                src={storefrontImage}
                alt="The Blue Box Café interior"
                className="relative w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3]">
                Our Story
              </h2>
              <div className="space-y-4 text-base font-sans font-light text-theme-secondary leading-[1.75]">
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
      >
        <div className="container mx-auto px-6 max-w-[1240px]">
          <h2 className="text-center mb-20 text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3] uppercase">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="section-card bg-theme-card backdrop-blur-sm border border-theme group cursor-pointer"
              >
                <div className="year-accent text-3xl mb-6 font-bold">{item.year}</div>
                <h3 className="mb-4 text-white text-xl font-serif font-semibold leading-tight group-hover:text-white transition-colors duration-250">
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
      >
        <div className="container mx-auto px-6 max-w-[1240px]">
          <h2 className="text-center mb-16 text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3] uppercase">
            Menu Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {menuPreview.map((item, index) => (
              <Link
                key={index}
                to="/menu"
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[12px] mb-6 aspect-[4/3] bg-brown/10 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {item.chefPick && (
                    <div className="absolute top-4 right-4 bg-gold/95 backdrop-blur-sm text-brown px-4 py-2 rounded-full text-xs font-sans font-semibold flex items-center gap-2 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Chef's Choice
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-white text-xl font-serif font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm font-sans font-light text-[rgba(246,244,242,0.9)] leading-[1.7] group-hover:text-white transition-colors duration-250">
                    {item.description}
                  </p>
                  <p className="font-serif font-semibold text-gold-light text-lg pt-2">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/menu">
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-brown hover:shadow-lg hover:border-white active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 px-10 py-5 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer inline-flex items-center gap-2"
              >
                View Full Menu
                <ChevronRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
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
      >
        <div className="container mx-auto px-6 max-w-[1240px]">
          <h2 className="text-center mb-16 text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3] uppercase">
            Shop
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {shopPreview.map((item, index) => (
              <Link
                key={index}
                to="/shop"
                className="group section-card bg-theme-card backdrop-blur-sm border border-theme cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-[12px] mb-6 aspect-square bg-brown/10 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-menu-item text-xl font-serif font-semibold">
                    {item.name}
                  </h3>
                  <p className="font-serif font-semibold text-gold-light text-lg">
                    {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/shop">
              <Button
                className="bg-tiffany hover:bg-tiffany-light hover:shadow-lg hover:shadow-tiffany/40 active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white px-10 py-5 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer inline-flex items-center gap-2"
              >
                Shop All
                <ChevronRight className="w-4 h-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
