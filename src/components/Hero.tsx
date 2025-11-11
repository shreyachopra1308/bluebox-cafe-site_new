import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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

  const features = [
    '100% Organic',
    'Biodegradable',
    'Water Efficient',
    'Premium Quality'
  ];

  const stats = [
    { number: '40+', label: 'Years', icon: Award },
    { number: '1000+', label: 'Growers', icon: Users },
    { number: '100%', label: 'Natural', icon: TrendingUp },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-eco-leaf/10" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Trusted by 1000+ Growers Worldwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Premium
              <br />
              <span className="bg-gradient-to-r from-primary via-eco-leaf to-eco-sun bg-clip-text text-transparent">
                Coco Coir
              </span>
              <br />
              Growing Solutions
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Transform your growing experience with our eco-friendly, soil-less media. 
              Perfect for hydroponics, container gardening, and sustainable agriculture.
            </p>

            {/* Features List */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg border border-border/50"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => scrollToSection('#products')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#about')}
                size="lg"
                variant="outline"
                className="rounded-lg px-8 py-6 text-lg font-semibold border-2 hover:bg-accent transition-all duration-300 group"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-black text-foreground">{stat.number}</div>
                    <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Visual Card */}
              <div 
                className="relative bg-gradient-to-br from-primary/20 via-eco-leaf/20 to-eco-sun/20 rounded-3xl p-12 backdrop-blur-xl border border-primary/20 shadow-2xl"
                style={{
                  transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-eco-leaf/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="text-6xl font-black text-primary/20">40+</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">Years of Excellence</h3>
                    <p className="text-muted-foreground">
                      Leading the industry in sustainable growing solutions since 1984
                    </p>
                  </div>
                  
                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                      <div className="text-2xl font-black text-primary mb-1">100%</div>
                      <div className="text-xs text-muted-foreground uppercase">Organic</div>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-border/50">
                      <div className="text-2xl font-black text-eco-leaf mb-1">1000+</div>
                      <div className="text-xs text-muted-foreground uppercase">Happy Customers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div 
                className="absolute -top-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-xl font-bold text-sm"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                Best Seller
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 cursor-pointer" onClick={() => scrollToSection('#about')}>
          <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full" />
          </div>
          <span className="text-xs text-muted-foreground font-medium">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
