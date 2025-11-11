import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 transition-colors duration-300 relative z-10">
      {/* Hero */}
      <section className="section-spacing border-b border-cream/20 dark:border-cream/10">
        <div className="container mx-auto px-6 max-w-[1200px] text-center">
          <h1 className="mb-4">Contact</h1>
          <p className="text-base font-sans font-light text-deep/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Visit us at The Blue Box Café
          </p>
        </div>
      </section>

      {/* Contact Information - Centered, No Map */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[800px]">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="mb-6 text-[clamp(28px,4vw,40px)] font-serif font-medium text-white">THE BLUE BOX CAFÉ</h2>
              <p className="text-base font-sans font-light text-[rgba(234,231,228,0.9)] leading-relaxed tracking-wide max-w-2xl mx-auto">
                Experience breakfast at Tiffany's in the heart of Fifth Avenue. Visit us on the sixth floor of Tiffany & Co.'s iconic flagship store.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-tiffany flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-medium text-white mb-2 text-lg">Address</h3>
                  <p className="font-sans font-light text-[rgba(234,231,228,0.95)]">
                    The Blue Box Café — 12/4 Mercantile Lane, Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-tiffany flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-medium text-white mb-2 text-lg">Hours</h3>
                  <p className="font-sans font-light text-[rgba(234,231,228,0.95)]">
                    Mon–Sun · 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-tiffany flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-medium text-white mb-2 text-lg">Phone</h3>
                  <a
                    href="tel:+12127558000"
                    className="font-sans font-light text-[rgba(234,231,228,0.95)] hover:text-tiffany transition-colors duration-220"
                  >
                    (212) 755-8000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
