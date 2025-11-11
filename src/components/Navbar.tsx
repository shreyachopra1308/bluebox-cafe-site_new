import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Moon, Sun, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/menu", label: "Menu" },
    { to: "/reservation", label: "Reservations" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];

  const handleReserveClick = () => {
    navigate("/reservation");
    setIsMobileMenuOpen(false);
  };

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateDarkMode = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };

    updateDarkMode();

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setIsDark(mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-[12px] left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4" : "py-6"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-[900px]">
        <div className="flex items-center justify-center">
          {/* Rounded Pill Navigation - Exact Specifications */}
          <div className="nav-pill flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 w-full sm:w-auto justify-between sm:justify-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 group"
              aria-label="Blue Box Café home"
            >
              <div className="w-8 h-8 bg-tiffany rounded-full flex items-center justify-center text-white font-serif font-bold text-sm group-hover:bg-tiffany-dark transition-all duration-220">
                BB
              </div>
            </Link>

            {/* Desktop Navigation - Centered Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-xs sm:text-sm md:text-[14px] font-sans font-normal tracking-[0.06em] uppercase transition-all duration-180 hover-underline ${
                    location.pathname === link.to
                      ? "text-[#0ABAB5]"
                      : "text-[#F6F4F2]"
                  }`}
                  aria-label={`Navigate to ${link.label} page`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 ml-2 lg:ml-4">
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-full text-theme-primary hover:text-tiffany hover:bg-theme-primary/10 active:bg-theme-primary/20 focus:outline-none focus:ring-2 focus:ring-tiffany focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 ease-out"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 hover:rotate-180" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 hover:rotate-12" />
                )}
              </button>
              <Link
                to="/shop"
                className="p-1.5 sm:p-2 rounded-full bg-[#2C2420] text-[#F6F4F2] hover:bg-[#3A3230] hover:text-white hover:-translate-y-[3px] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[rgba(10,186,181,0.22)] focus:ring-offset-2 transition-all duration-250 ease relative"
                aria-label="Shopping cart"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-250" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#0ABAB5] text-white text-[10px] sm:text-xs font-sans font-normal rounded-full flex items-center justify-center animate-pulse">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Button
                onClick={handleReserveClick}
                className="bg-[#0ABAB5] hover:bg-[#14CFCB] hover:shadow-lg hover:-translate-y-[3px] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[rgba(10,186,181,0.22)] focus:ring-offset-2 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                aria-label="Reserve a table"
              >
                Reserve
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-theme-primary hover:text-tiffany hover:bg-theme-primary/10 active:bg-theme-primary/20 focus:outline-none focus:ring-2 focus:ring-tiffany focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 ease-out"
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 transition-transform duration-300 hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-theme-primary transition-colors duration-220"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 nav-pill mx-4 sm:mx-6 animate-fade-in">
          <div className="py-4 sm:py-6 space-y-3 sm:space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-center text-sm sm:text-[14px] font-sans font-normal tracking-[0.06em] uppercase transition-colors duration-180 hover-underline ${
                  location.pathname === link.to
                    ? "text-[#0ABAB5]"
                    : "text-[#F6F4F2]"
                }`}
                aria-label={`Navigate to ${link.label} page`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-offwhite/20">
              <Button
                onClick={handleReserveClick}
                className="w-full bg-[#0ABAB5] hover:bg-[#14CFCB] hover:shadow-lg hover:-translate-y-[3px] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[rgba(10,186,181,0.22)] focus:ring-offset-2 text-white py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                aria-label="Reserve a table"
              >
                Reserve
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
