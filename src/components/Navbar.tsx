import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/menu", label: "Menu" },
    { to: "/shop", label: "Shop" },
    { to: "/contact", label: "Contact" },
    { to: "/reservation", label: "Reservations" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
  ];

  const handleReserveClick = () => {
    navigate("/reservation");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-[12px] left-0 right-0 z-[100] transition-all duration-300 ${
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
                  className={`text-xs sm:text-sm md:text-[14px] font-['Inter',sans-serif] font-normal tracking-[0.04em] uppercase transition-colors duration-300 ease hover-underline ${
                    location.pathname === link.to
                      ? "text-[#0ABAB5]"
                      : "text-white"
                  }`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: '0.04em',
                    fontWeight: 400,
                    color: location.pathname === link.to ? '#0ABAB5' : '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.color = '#0ABAB5';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.to) {
                      e.currentTarget.style.color = '#ffffff';
                    }
                  }}
                  aria-label={`Navigate to ${link.label} page`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 ml-2 lg:ml-4">
              <button
                onClick={handleReserveClick}
                className="btn-primary"
                aria-label="Reserve a table"
              >
                RESERVE NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white transition-colors duration-220"
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
                className={`block text-center text-sm sm:text-[14px] font-['Inter',sans-serif] font-normal tracking-[0.04em] uppercase transition-colors duration-300 ease hover-underline ${
                  location.pathname === link.to
                    ? "text-[#0ABAB5]"
                    : "text-white"
                }`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '0.04em',
                  fontWeight: 400,
                  color: location.pathname === link.to ? '#0ABAB5' : '#ffffff'
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = '#0ABAB5';
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.to) {
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                aria-label={`Navigate to ${link.label} page`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-offwhite/20">
              <button
                onClick={handleReserveClick}
                className="btn-primary w-full"
                aria-label="Reserve a table"
              >
                RESERVE NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
