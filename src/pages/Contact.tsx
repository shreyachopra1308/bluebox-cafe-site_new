import { MapPin, Phone, Mail, Clock } from "lucide-react";
import storefrontImage from "@/assets/tiffany-storefront.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-deep pt-20 transition-colors duration-300">
      {/* Hero */}
      <section className="section-spacing border-b border-cream/20 dark:border-cream/10">
        <div className="container mx-auto px-6 max-w-[1200px] text-center">
          <h1 className="mb-4">Contact</h1>
          <p className="text-base font-sans font-light text-deep/70 dark:text-cream/70 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Visit us at The Blue Box Café
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl">The Blue Box Café</h2>
                <p className="text-base font-sans font-light text-deep/70 dark:text-cream/70 leading-relaxed tracking-wide">
                  Experience breakfast at Tiffany's in the heart of Fifth Avenue. Visit us on the sixth floor of Tiffany & Co.'s iconic flagship store.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-tiffany flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-normal text-deep dark:text-cream mb-1">Address</h3>
                    <p className="font-sans font-light text-deep/70 dark:text-cream/70">
                      The Blue Box Café — 12/4 Mercantile Lane, Mumbai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-tiffany flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-normal text-deep dark:text-cream mb-1">Hours</h3>
                    <p className="font-sans font-light text-deep/70 dark:text-cream/70">
                      Mon–Sun · 8:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-tiffany flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-normal text-deep dark:text-cream mb-1">Phone</h3>
                    <a
                      href="tel:+12127558000"
                      className="font-sans font-light text-deep/70 dark:text-cream/70 hover:text-tiffany transition-colors duration-220"
                    >
                      (212) 755-8000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-tiffany flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif font-normal text-deep dark:text-cream mb-1">Email</h3>
                    <a
                      href="mailto:blueboxcafe@tiffany.com"
                      className="font-sans font-light text-deep/70 dark:text-cream/70 hover:text-tiffany transition-colors duration-220"
                    >
                      blueboxcafe@tiffany.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div>
              <div className="rounded-sm overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.97545128459395!3d40.76243797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fea8b3c743%3A0x554c9d16c0c1c0e7!2sTiffany%20%26%20Co.!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Blue Box Café Location"
                  aria-label="Interactive map showing location of The Blue Box Café"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
