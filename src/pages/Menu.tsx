import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import breakfastImage from "@/assets/menu-breakfast.jpg";
import teaImage from "@/assets/menu-tea.jpg";
import dessertImage from "@/assets/menu-dessert.jpg";
import heroImage from "@/assets/hero-cafe.jpg";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  chefPick?: boolean;
  image?: string;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const Menu = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const menuSections: MenuSection[] = [
    {
      title: "Breakfast",
      items: [
        {
          name: "Blue Box Croissant",
          description: "Laminated butter croissant, sea-salt butter",
          price: "₹220",
          image: breakfastImage,
        },
        {
          name: "Smoked Salmon Sando",
          description: "Milk bread, dill cream, lemon",
          price: "₹420",
          chefPick: true,
          image: breakfastImage,
        },
      ],
    },
    {
      title: "Brunch",
      items: [
        {
          name: "Seasonal Tartine",
          description: "Roasted veg, whipped ricotta, herb drizzle",
          price: "₹460",
          image: teaImage,
        },
        {
          name: "Cloud Omelette",
          description: "Soft herbs, truffle oil (add salad)",
          price: "₹380",
          image: breakfastImage,
        },
      ],
    },
    {
      title: "Pastries & Sweets",
      items: [
        {
          name: "Signature Blue Box Macaron",
          description: "2pc",
          price: "₹150",
          image: dessertImage,
        },
        {
          name: "Caramel Miso Brioche",
          description: "Weekly special",
          price: "₹240",
          image: dessertImage,
        },
      ],
    },
    {
      title: "Drinks",
      items: [
        {
          name: "Blue Box Espresso",
          description: "Single origin, 30ml",
          price: "₹160",
          image: heroImage,
        },
        {
          name: "Latte (house blend)",
          description: "Made-to-order, oat and dairy options",
          price: "₹220",
          image: heroImage,
        },
      ],
    },
  ];

  return (
    <div 
      className="min-h-screen relative" 
      style={{ 
        backgroundImage: 'url("/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#1b1411',
        paddingTop: '80px', 
        paddingBottom: '100px',
        position: 'relative'
      }}
    >
      {/* Background overlay for text readability */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.18)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
      {/* Hero Header */}
      <section className="border-b border-white/10 pb-12 mb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px] text-center">
          <h1 className="mb-6 sm:mb-8 text-white">
            Menu
          </h1>
          <p className="text-sm sm:text-base font-sans font-light text-[#f3efec] max-w-2xl mx-auto leading-[1.7] px-2">
            A short, considered menu — perfect for sharing or savoring alone.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <div className="space-y-20">
            {menuSections.map((section, sectionIndex) => (
              <div key={section.title} data-section className="fade-up">
                {/* Section Header - Centered, Playfair Display */}
                <h2 
                  className="text-center uppercase mb-10"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    marginTop: sectionIndex === 0 ? '0' : '60px',
                    marginBottom: '40px'
                  }}
                >
                  {section.title}
                </h2>
                
                {/* Menu Cards - 2-column grid desktop, 1-column mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {section.items.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="group"
                      style={{
                        backgroundColor: 'rgba(35, 26, 23, 0.4)',
                        borderRadius: '16px',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                      }}
                    >
                      {/* Card Content - Image Left, Details Right */}
                      <div className="flex flex-col md:flex-row">
                        {/* Image - Left Side */}
                        {item.image && (
                          <div 
                            className="w-full md:w-[260px] flex-shrink-0 h-[180px] md:h-[260px] overflow-hidden rounded-t-[16px] md:rounded-l-[16px] md:rounded-t-none"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.05]"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        {/* Content - Right Side */}
                        <div className="flex-1 flex flex-col justify-between p-4 md:p-6 lg:p-8 min-h-[180px] md:min-h-[260px]">
                          <div>
                            <div className="flex items-start gap-2 mb-3">
                              <h3 
                                className="font-serif font-semibold"
                                style={{
                                  color: '#f3efec',
                                  fontSize: 'clamp(18px, 2vw, 22px)',
                                  lineHeight: '1.3'
                                }}
                              >
                                {item.name}
                              </h3>
                              {item.chefPick && (
                                <Star className="w-5 h-5 text-[#C9A85F] fill-current flex-shrink-0 mt-1" />
                              )}
                            </div>
                            <p 
                              className="font-sans font-light leading-[1.7] mb-4"
                              style={{
                                color: '#f3efec',
                                fontSize: 'clamp(14px, 1.5vw, 16px)',
                                opacity: 0.9
                              }}
                            >
                              {item.description}
                            </p>
                          </div>
                          {/* Price - Bottom Right */}
                          <div className="text-left md:text-right mt-auto">
                            <span 
                              className="font-serif font-medium"
                              style={{
                                color: '#C9A85F',
                                fontSize: 'clamp(18px, 2vw, 22px)'
                              }}
                            >
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Microcopy */}
      <section className="mt-20 pt-12 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
          <p 
            className="text-center leading-[1.7] px-2"
            style={{
              color: '#f3efec',
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 300,
              opacity: 0.8
            }}
          >
            All dishes may contain nuts. Vegan and gluten-free options available — ask our team.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Menu;
