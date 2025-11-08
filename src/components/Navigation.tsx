import { Sun, Moon, Menu, X, Sprout, ShoppingCart, Phone, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-background/80 dark:bg-background/90 backdrop-blur-2xl shadow-lg border-b border-border/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Modern Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:bg-primary/30 transition-all duration-500" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-primary via-eco-leaf to-eco-sun rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                <Sprout className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-black text-foreground tracking-tight">COCO & COIR</h1>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-[0.2em]">Premium Growing Media</p>
            </div>
          </button>

          {/* Desktop Navigation - Minimalist */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-5 py-2.5 text-sm font-semibold text-foreground/70 hover:text-foreground transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-eco-leaf to-eco-sun scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg hover:bg-accent"
                onClick={() => scrollToSection('#contact')}
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-lg hover:bg-accent"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-lg hover:bg-accent transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              onClick={() => scrollToSection('#products')}
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shop Now
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 py-6 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 px-4 text-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#products')}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4 rounded-lg font-semibold"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
