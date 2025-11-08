import { Leaf, Globe, Sprout, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Sustainability = () => {
  const milestones = [
    {
      year: '1980s',
      title: 'Founded in Gandhinagar',
      description: 'Started our journey with a vision for sustainable agriculture',
      icon: Sprout,
    },
    {
      year: '1995',
      title: '100% Biodegradable Line',
      description: 'Achieved complete biodegradability across all products',
      icon: Leaf,
    },
    {
      year: '2010',
      title: 'Global Reach',
      description: 'Expanded to serve eco-conscious growers worldwide',
      icon: Globe,
    },
    {
      year: '2024',
      title: '40+ Years Excellence',
      description: 'Continuing innovation in sustainable growing solutions',
      icon: Award,
    },
  ];

  return (
    <section id="sustainability" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Sustainability</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Journey Towards a <span className="text-primary">Greener Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four decades of commitment to sustainable practices and environmental stewardship
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 animate-pulse-slow" />

                  {/* Content Card */}
                  <Card
                    className={`flex-1 cursor-pointer hover:shadow-xl transition-smooth hover:scale-105 border-2 hover:border-primary group ${
                      isLeft ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-bounce flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                        </div>
                        <div className="flex-1">
                          <div className="text-primary font-bold mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto gradient-card border-2 border-primary/20 hover:border-primary transition-smooth cursor-pointer hover:shadow-xl">
            <CardContent className="p-8">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Our Green Mission
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of the sustainable agriculture revolution. Subscribe to our newsletter for eco-friendly tips and updates.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing!');
                  }}
                >
                  Subscribe
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
