import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Plot No. 160/161, GIDC, Electronic Estate, Sector 26, Gandhinagar, Gujarat - 382620',
      action: 'View on Map',
      link: 'https://maps.google.com/?q=Plot+160+161+GIDC+Gandhinagar+Gujarat',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: (
        <div className="space-y-1">
          <div>Chirag Jain: +91 94279 01107</div>
          <div>Ratan Purohit: +91 98989 98742</div>
        </div>
      ),
      action: 'Call Now',
      link: 'tel:+919427901107',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@cococoir.com',
      action: 'Send Email',
      link: 'mailto:info@cococoir.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Contact Us</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's <span className="text-primary">Grow Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you succeed in sustainable growing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-smooth border-2 hover:border-primary cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-bounce flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-smooth" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2 group-hover:text-primary transition-smooth">
                          {info.title}
                        </CardTitle>
                        <CardDescription className="text-foreground/80 mb-3">
                          {info.details}
                        </CardDescription>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm font-medium inline-flex items-center group"
                        >
                          {info.action}
                          <span className="ml-2 group-hover:ml-4 transition-smooth">→</span>
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}

            {/* Animated Plant Illustration */}
            <div className="hidden lg:block">
              <div className="relative h-48">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full bg-eco-earth/20 animate-pulse-slow" />
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                    <div className="text-6xl animate-float">🌱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-primary transition-smooth animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>We'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <Label htmlFor="product">Product Interest</Label>
                  <Input id="product" placeholder="e.g., Coco Peat, Vermicompost" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
