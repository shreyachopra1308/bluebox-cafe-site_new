import { useState } from "react";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing",
        description: "You'll receive seasonal menus, first access to boxes, and invitations.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/tiffanyandco",
      label: "Follow us on Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/tiffanyandco",
      label: "Follow us on Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/tiffanyandco",
      label: "Follow us on Twitter",
    },
  ];

  return (
    <footer className="bg-theme-section text-theme-primary border-t border-theme">
      <div className="container mx-auto px-6 max-w-[1240px] py-16 md:py-20">
        {/* Centered Content */}
        <div className="text-center space-y-8 mb-12">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-tiffany rounded-full flex items-center justify-center text-white font-serif font-bold text-sm">
              BB
            </div>
            <span className="text-xl font-serif font-normal text-theme-primary">Blue Box Café</span>
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm font-sans font-light text-theme-secondary">
              <Clock className="w-4 h-4" />
              <span>Mon–Sun · 8:00 AM – 6:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-sans font-light text-theme-secondary">
              <MapPin className="w-4 h-4" />
              <span>The Blue Box Café — 12/4 Mercantile Lane, Mumbai</span>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-6 text-sm font-sans font-light text-theme-secondary">
            <a
              href="tel:+12127558000"
              className="flex items-center gap-2 text-theme-secondary hover:text-tiffany transition-colors duration-220"
            >
              <Phone className="w-4 h-4" />
              <span>(212) 755-8000</span>
            </a>
            <a
              href="mailto:blueboxcafe@tiffany.com"
              className="flex items-center gap-2 text-theme-secondary hover:text-tiffany transition-colors duration-220"
            >
              <Mail className="w-4 h-4" />
              <span>blueboxcafe@tiffany.com</span>
            </a>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto">
            <p className="text-sm font-sans font-light text-theme-secondary mb-4">
              Receive seasonal menus, first access to boxes, and invitations.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-theme-card border border-theme rounded-full text-theme-primary placeholder-theme-muted font-sans font-light focus:outline-none focus:border-tiffany transition-colors duration-220"
                required
              />
              <Button
                type="submit"
                className="bg-tiffany hover:bg-tiffany-dark text-white px-6 py-3 rounded-full font-sans font-normal tracking-[0.05em] uppercase transition-all duration-220"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover:text-tiffany transition-colors duration-220"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme text-center">
          <p className="text-xs font-sans font-light text-theme-muted tracking-wide">
            A Blue Box Café experience — by Tiffany & Co. Trademark and branding remain property of Tiffany & Co.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
