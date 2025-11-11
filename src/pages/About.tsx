import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import storefrontImage from "@/assets/tiffany-storefront.jpg";

const About = () => {
  return (
    <div className="min-h-screen relative pt-24">
      {/* Hero */}
      <section className="section-spacing border-b border-theme">
        <div className="container mx-auto px-6 max-w-[1200px] text-center">
          <h1 className="mb-8">
            About
          </h1>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Text on Cream */}
            <div className="space-y-8">
              <h2 className="mb-6 text-white font-serif font-medium tracking-[0.02em] text-[clamp(28px,3.5vw,40px)] leading-[1.3]">
                Our Story
              </h2>
              <div className="space-y-6 text-base font-sans font-light text-theme-secondary leading-relaxed">
                <p>
                  The Blue Box Café is a collaboration with Tiffany & Co., honoring a long tradition of craftsmanship and conviviality. We serve seasonally inspired dishes and curated gift boxes that pair perfectly with our coffee program.
                </p>
                <p>
                  Our kitchen emphasizes local sourcing, minimal waste, and thoughtful presentation.
                </p>
              </div>

              {/* Pull Quote */}
              <blockquote className="border-l-4 border-gold-light pl-6 py-4 my-8 bg-gradient-to-r from-gold-light/10 to-transparent rounded-r-lg">
                <p className="font-serif font-normal text-white text-xl italic leading-relaxed text-glow">
                  "Every detail should whisper luxury, never shout it."
                </p>
              </blockquote>
            </div>

            {/* Right Column - Image on Tiffany Blue Background */}
            <div className="bg-tiffany/20 rounded-2xl p-8 flex items-center justify-center">
              <img
                src={storefrontImage}
                alt="Tiffany & Co. Fifth Avenue storefront"
                className="w-full h-auto rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing border-t border-theme bg-theme-section/50">
        <div className="container mx-auto px-6 max-w-[1240px] text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservation">
              <Button
                className="bg-tiffany hover:bg-tiffany-light hover:shadow-md active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white px-8 py-4 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
              >
                Reserve your moment
              </Button>
            </Link>
            <Link to="/menu">
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-brown hover:shadow-md hover:border-white active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 px-8 py-4 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
              >
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
