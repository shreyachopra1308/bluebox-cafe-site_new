import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, BookOpen, Sprout } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const About = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Lead eco-conscious cultivation worldwide',
      fullContent: 'We envision a world where sustainable agriculture is the norm, not the exception. Our vision is to lead the global transition towards eco-conscious cultivation practices that prioritize soil health, water conservation, and biodiversity. Through innovative coco coir solutions, we aim to empower farmers and gardeners to grow abundantly while protecting our planet for future generations.',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Promote sustainable agriculture through innovation',
      fullContent: 'Our mission is to provide premium quality, eco-friendly growing media that enables sustainable agriculture practices. We are committed to researching and developing innovative coir-based solutions that reduce environmental impact while maximizing crop yields. We believe in building long-term partnerships with our customers, supporting them with expert knowledge and superior products that make a real difference.',
    },
    {
      icon: BookOpen,
      title: 'Our Story',
      description: '40+ years of expertise in organic coir solutions',
      fullContent: 'Founded in Gandhinagar, Gujarat, our journey began over four decades ago with a simple belief: nature provides the best solutions for cultivation. From humble beginnings, we have grown into a trusted name in organic growing media, serving thousands of satisfied customers across India and beyond. Our commitment to quality, sustainability, and customer satisfaction has remained unwavering throughout our journey. Today, we continue to innovate while staying true to our roots in traditional, eco-friendly practices.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sprout className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Growing Together for a <span className="text-primary">Greener Tomorrow</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the values and passion that drive our commitment to sustainable cultivation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-xl transition-smooth hover:-translate-y-2 border-2 hover:border-primary group bg-card/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCard(index)}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-bounce">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {card.fullContent}
                  </div>
                  <button className="text-primary font-medium hover:underline flex items-center group">
                    Read More
                    <span className="ml-2 group-hover:ml-4 transition-smooth">→</span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Modal for full content */}
      <Dialog open={selectedCard !== null} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-2xl">
          {selectedCard !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center">
                  {(() => {
                    const Icon = cards[selectedCard].icon;
                    return <Icon className="w-8 h-8 text-primary mr-3" />;
                  })()}
                  {cards[selectedCard].title}
                </DialogTitle>
                <DialogDescription className="text-lg">
                  {cards[selectedCard].description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 text-foreground leading-relaxed">
                {cards[selectedCard].fullContent}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;
