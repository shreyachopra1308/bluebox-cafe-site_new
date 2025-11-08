import { Button } from '@/components/ui/button';
import { Sprout, Leaf, Sparkles, ArrowRight, TrendingUp, Heart, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    // Mouse move effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background with Parallax */}
      <div className="absolute inset-0 gradient-hero opacity-95">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          style={{
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            transition: 'background-position 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20 animate-pulse-slow" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 rounded-full bg-white/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-eco-leaf/40 w-20 h-20 animate-float drop-shadow-lg" style={{ animationDelay: '0s', filter: 'blur(0.5px)' }} />
        <Leaf className="absolute top-40 right-20 text-eco-leaf/30 w-16 h-16 animate-float drop-shadow-lg" style={{ animationDelay: '2s', filter: 'blur(0.5px)' }} />
        <Leaf className="absolute bottom-40 left-1/4 text-eco-leaf/35 w-24 h-24 animate-float drop-shadow-lg" style={{ animationDelay: '4s', filter: 'blur(0.5px)' }} />
        <Sprout className="absolute top-60 right-1/4 text-eco-sun/40 w-18 h-18 animate-float drop-shadow-lg" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-1/3 left-1/3 text-white/30 w-12 h-12 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-1/3 right-1/3 text-eco-sun/40 w-10 h-10 animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with Glow Effect */}
          <div className="mb-8 inline-block animate-fade-in">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-full border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 group cursor-pointer">
              <Sparkles className="w-5 h-5 text-eco-sun animate-pulse-slow group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-semibold text-white tracking-wide">40+ Years of Sustainable Excellence</span>
              <TrendingUp className="w-5 h-5 text-eco-leaf animate-pulse-slow" />
            </div>
          </div>

          {/* Main Heading with Gradient Text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 drop-shadow-2xl animate-fade-in leading-tight">
            <span className="block bg-gradient-to-r from-white via-eco-cream to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Grow Sustainably.
            </span>
            <span className="block mt-2 bg-gradient-to-r from-eco-sun via-eco-leaf to-eco-sun bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: '0.1s' }}>
              Live Green.
            </span>
          </h1>

          {/* Subtitle with Enhanced Styling */}
          <p className="text-xl md:text-3xl mb-12 text-white/95 max-w-3xl mx-auto animate-fade-in font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Eco-friendly, soil-less growing solutions that{' '}
            <span className="font-semibold text-eco-sun">nourish your plants</span> — and the planet.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in mb-16" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={() => scrollToSection('#products')}
              size="lg"
              className="bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-10 py-7 group relative overflow-hidden rounded-full font-semibold"
            >
              <span className="relative z-10 flex items-center">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-eco-leaf to-eco-sun opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              onClick={() => scrollToSection('#about')}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 shadow-2xl transition-all duration-300 text-lg px-10 py-7 rounded-full font-semibold group"
            >
              <span className="flex items-center">
                Our Story
                <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>

          {/* Enhanced Stats Section with Icons */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '40+', label: 'Years Experience', icon: TrendingUp, color: 'text-eco-sun' },
              { number: '100%', label: 'Biodegradable', icon: Globe, color: 'text-eco-leaf' },
              { number: '1000+', label: 'Happy Growers', icon: Heart, color: 'text-eco-sun' },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-110 hover:shadow-2xl cursor-pointer group relative overflow-hidden"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <Icon className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-125 transition-transform duration-300`} />
                    <div className="text-5xl font-extrabold text-white mb-2 group-hover:text-eco-sun transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2 group cursor-pointer" onClick={() => scrollToSection('#about')}>
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <div className="w-1.5 h-4 bg-white/80 rounded-full animate-pulse" />
          </div>
          <span className="text-xs text-white/70 font-medium uppercase tracking-wider">Scroll</span>
        </div>
      </div>

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-eco-sun/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-eco-leaf/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
