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
    <div className="min-h-screen relative pt-24">
      {/* Hero Header - Perfect Styling */}
      <section className="section-spacing border-b border-offwhite/10">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <h1 className="mb-8">
            Menu
          </h1>
          <p className="text-base font-sans font-light text-theme-secondary max-w-2xl mx-auto leading-[1.7]">
            A short, considered menu — perfect for sharing or savoring alone.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="space-y-20">
            {menuSections.map((section) => (
              <div key={section.title} data-section className="fade-up">
                {/* Section Header - Perfect Styling */}
                <h2 className="mb-12 text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3] text-center uppercase">
                  {section.title}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {section.items.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="group transition-transform duration-250 ease hover:-translate-y-0.5"
                    >
                      {/* Menu Item Card with Image */}
                      <div className="flex flex-col md:flex-row gap-6 pb-8 border-b border-offwhite/10 last:border-0">
                        {/* Image */}
                        {item.image && (
                          <div className="md:w-36 md:h-36 w-full h-56 flex-shrink-0 rounded-[12px] overflow-hidden bg-brown/20 shadow-lg transition-all duration-250">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-300 ease group-hover:scale-[1.03]"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex items-start gap-2 mb-3">
                              <h3 className="font-serif font-semibold text-white text-lg md:text-xl">
                                {item.name}
                              </h3>
                              {item.chefPick && (
                                <Star className="w-5 h-5 text-gold fill-current flex-shrink-0 mt-0.5" />
                              )}
                            </div>
                            <p className="text-sm md:text-base font-sans font-light text-[rgba(246,244,242,0.9)] leading-[1.7] mb-4 group-hover:text-white transition-colors duration-250">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-left md:text-right">
                            <span className="font-serif font-medium text-gold-light text-lg md:text-xl">
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
      <section className="section-spacing border-t border-offwhite/10">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <p className="text-sm font-sans font-light text-theme-muted text-center leading-[1.7]">
            All dishes may contain nuts. Vegan and gluten-free options available — ask our team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
