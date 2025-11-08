import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Sprout, Package, Droplets, Shield, Leaf, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const Products = () => {
  const [enquiryProduct, setEnquiryProduct] = useState('');

  const categories = [
    {
      id: 'coco-media',
      name: 'Coco-Based Media',
      icon: Package,
      products: [
        { name: 'Coco Peat Block', description: '100% organic, compressed growing medium' },
        { name: 'Coco Chips', description: 'Excellent aeration and drainage properties' },
        { name: 'Coco Brick', description: 'Convenient size for home gardeners' },
        { name: 'Coco Peat Loose', description: 'Ready-to-use loose form' },
      ],
    },
    {
      id: 'fertilizers',
      name: 'Organic Fertilizers',
      icon: Sprout,
      products: [
        { name: 'Vermicompost', description: 'Rich in beneficial microorganisms' },
        { name: 'Gypsum Powder', description: 'Improves soil structure' },
        { name: 'Organic Manure', description: '100% natural plant nutrition' },
        { name: 'Jivamrut', description: 'Traditional organic fertilizer' },
      ],
    },
    {
      id: 'conditioners',
      name: 'Soil Conditioners',
      icon: Droplets,
      products: [
        { name: 'Perlite', description: 'Lightweight volcanic glass' },
        { name: 'Vermiculite', description: 'Moisture retention specialist' },
        { name: 'Carbon Powder', description: 'Activates soil biology' },
        { name: 'Coco Peat Loose', description: 'Improves soil texture' },
      ],
    },
    {
      id: 'cakes',
      name: 'Fertilizer Cakes',
      icon: Shield,
      products: [
        { name: 'Neem Cake', description: 'Natural pest deterrent' },
        { name: 'Mustard Cake', description: 'Rich in nitrogen' },
        { name: 'Castor Cake', description: 'Slow-release nutrients' },
        { name: 'Tobacco Powder', description: 'Organic insect control' },
      ],
    },
    {
      id: 'growth',
      name: 'Growth Promoters',
      icon: Leaf,
      products: [
        { name: 'Neem Oil', description: 'Natural growth enhancer' },
        { name: 'Jivamrut', description: 'Microbial inoculant' },
        { name: 'Plant Growth Promoter', description: 'Boost plant vigor' },
        { name: 'Seaweed Extract', description: 'Rich in micronutrients' },
      ],
    },
    {
      id: 'essentials',
      name: 'Gardening Essentials',
      icon: ShoppingBag,
      products: [
        { name: 'Grow Bags', description: 'Durable fabric containers' },
        { name: 'Nursery Bags', description: 'Various sizes available' },
        { name: 'Leca Balls', description: 'Lightweight aggregate' },
        { name: 'Coco Poles', description: 'Plant support structures' },
      ],
    },
  ];

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Enquiry sent successfully! We will contact you soon.');
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Package className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Our Products</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Premium <span className="text-primary">Eco-Friendly</span> Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of sustainable growing media and organic products
          </p>
        </div>

        <Tabs defaultValue="coco-media" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2 bg-muted/50 p-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-smooth"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.products.map((product, index) => (
                  <Card
                    key={index}
                    className="group cursor-pointer hover:shadow-xl transition-smooth hover:-translate-y-2 border-2 hover:border-primary overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-smooth">
                      <Package className="w-20 h-20 text-primary/40" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {product.name}
                      </CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                            onClick={() => setEnquiryProduct(product.name)}
                          >
                            Enquire Now
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Product Enquiry</DialogTitle>
                            <DialogDescription>
                              Fill out the form below and we'll get back to you soon
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleEnquiry} className="space-y-4">
                            <div>
                              <Label htmlFor="name">Name</Label>
                              <Input id="name" placeholder="Your name" required />
                            </div>
                            <div>
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" type="email" placeholder="your@email.com" required />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone</Label>
                              <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                            </div>
                            <div>
                              <Label htmlFor="product">Product Interest</Label>
                              <Input id="product" value={enquiryProduct} readOnly />
                            </div>
                            <div>
                              <Label htmlFor="message">Message</Label>
                              <Textarea id="message" placeholder="Tell us about your requirements" />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                              Submit Enquiry
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Badge variant="secondary" className="text-lg px-6 py-2">
            All products are 100% organic and biodegradable
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Products;
