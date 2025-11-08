import { Sun, Moon, Menu, X, Leaf, Sparkles, ShoppingBag } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'products', 'sustainability', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Leaf },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 dark:bg-card/95 backdrop-blur-xl shadow-2xl border-b border-border/50' 
          : 'bg-transparent backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Animation */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-3 group relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-eco-leaf to-eco-sun rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-eco-leaf to-eco-sun flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                <Leaf className="w-6 h-6 text-white animate-pulse-slow" />
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-extrabold bg-gradient-to-r from-eco-leaf to-eco-sun bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Coco & Coir
              </h1>
              <p className="text-xs text-muted-foreground font-medium flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Grow Sustainably</span>
              </p>
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              const Icon = link.icon;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2 font-medium">
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{link.label}</span>
                  </span>
                  {isActive && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg animate-fade-in" />
                  )}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-eco-leaf to-eco-sun group-hover:w-3/4 transition-all duration-300" />
                </button>
              );
            })}
          </div>

          {/* Enhanced Actions */}
          <div className="flex items-center space-x-3">
            <Button
              onClick={toggleTheme}
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-accent hover:scale-110 transition-all duration-300 border-2 hover:border-primary relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-eco-leaf to-eco-sun opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              {theme === 'light' ? (
                <Moon className="h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun className="h-5 w-5 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              )}
            </Button>
            
            <Button
              onClick={() => scrollToSection('#products')}
              className="hidden md:inline-flex bg-gradient-to-r from-eco-leaf to-eco-sun hover:from-eco-leaf/90 hover:to-eco-sun/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6 font-semibold group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Shop Now</span>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            {/* Enhanced Mobile Menu Toggle */}
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              variant="outline"
              size="icon"
              className="md:hidden rounded-full border-2 hover:border-primary hover:scale-110 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 animate-spin-in" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-fade-in bg-card/50 backdrop-blur-xl rounded-2xl">
            <div className="flex flex-col space-y-2 px-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 flex items-center space-x-3 group ${
                      isActive 
                        ? 'bg-primary/10 text-primary font-semibold' 
                        : 'text-foreground hover:text-primary hover:bg-accent/50'
                    }`}
                  >
                    {Icon && (
                      <Icon className={`w-5 h-5 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'} transition-colors`} />
                    )}
                    <span>{link.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </button>
                );
              })}
              <Button
                onClick={() => scrollToSection('#products')}
                className="w-full bg-gradient-to-r from-eco-leaf to-eco-sun hover:from-eco-leaf/90 hover:to-eco-sun/90 text-white shadow-lg mt-2 rounded-full font-semibold"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Decorative gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </nav>
  );
};

export default Navigation;
