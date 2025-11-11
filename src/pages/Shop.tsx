import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, Minus, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import coffeeImage from "@/assets/menu-breakfast.jpg";
import teaImage from "@/assets/menu-tea.jpg";
import breakfastImage from "@/assets/menu-breakfast.jpg";
import interiorImage from "@/assets/hero-cafe.jpg";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const Shop = () => {
  const { addItem, items, updateQuantity, removeItem, total, itemCount } =
    useCart();
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: "classic-gift-box",
      name: "Classic Gift Box",
      description: "Curated pastries + 2 signature macarons + sachet of house blend (ships in gift packaging)",
      price: 1499,
      image: coffeeImage,
    },
    {
      id: "signature-macarons",
      name: "Signature Macarons",
      description: "Boxed macaron set (6 pieces) in signature Blue Box packaging",
      price: 450,
      image: teaImage,
    },
    {
      id: "linen-cup-set",
      name: "Linen Cup Set",
      description: "Premium linen cup set with Blue Box Café branding",
      price: 1299,
      image: breakfastImage,
    },
    {
      id: "blue-coffee-blend",
      name: "Blue Coffee Blend",
      description: "House blend coffee beans, 250g, in elegant packaging",
      price: 899,
      image: interiorImage,
    },
  ];

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "Added to your Blue Box",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen relative pt-24">
      {/* Hero */}
      <section className="section-spacing border-b border-offwhite/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px] text-center">
          <h1 className="mb-6 sm:mb-8">
            Shop
          </h1>
          <p className="text-sm sm:text-base font-sans font-light text-theme-secondary max-w-2xl mx-auto leading-relaxed px-2">
            Curated gift boxes and signature merchandise
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1240px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative section-card bg-cream/10 backdrop-blur-sm border border-offwhite/10 hover-lift cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-brown/10 w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-220 group-hover:scale-105"
                    loading="lazy"
                    style={{ aspectRatio: '1/1' }}
                  />
                  {/* Hover Overlay - Add to Cart */}
                  <div className="absolute inset-0 bg-brown/80 opacity-0 group-hover:opacity-100 transition-opacity duration-220 flex items-center justify-center">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="bg-tiffany hover:bg-tiffany-light hover:shadow-md active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white px-6 py-3 rounded-full text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <h3 className="mb-2 text-white text-lg font-serif font-semibold tracking-[0.02em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{product.name}</h3>
                <p className="text-sm font-sans font-light text-[rgba(246,244,242,0.9)] mb-4 leading-relaxed group-hover:text-white transition-colors duration-250">
                  {product.description}
                </p>
                <p className="font-serif font-semibold text-gold-light text-lg">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      {itemCount > 0 && (
        <div className="fixed bottom-0 right-0 left-0 md:left-auto md:w-96 bg-theme-section border-t md:border-l border-theme p-4 sm:p-6 shadow-lg z-50 max-h-[80vh] md:max-h-none overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif font-normal text-white text-lg">
              Cart ({itemCount})
            </h3>
            <button
              onClick={() => {
                items.forEach((item) => removeItem(item.id));
              }}
              className="text-sm text-[#E8E6E3] hover:text-white transition-colors duration-300"
            >
              Clear
            </button>
          </div>
          <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 pb-4 border-b border-offwhite/10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <p className="font-sans font-normal text-white text-sm">
                    {item.name}
                  </p>
                  <p className="font-sans font-light text-[#E8E6E3] text-xs">
                    ₹{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-full hover:bg-theme-primary/10 transition-colors duration-300"
                  >
                    <Minus className="w-4 h-4 text-white" />
                  </button>
                  <span className="font-sans font-normal text-white text-sm w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-full hover:bg-white/10 transition-colors duration-300"
                  >
                    <Plus className="w-4 h-4 text-white" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-1 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-4 pt-4 border-t border-theme">
            <span className="font-serif font-normal text-white">Total</span>
            <span className="font-sans font-normal text-white text-lg">
              ₹{total.toLocaleString()}
            </span>
          </div>
          <Button className="w-full bg-tiffany hover:bg-tiffany-light hover:shadow-md active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white py-3 rounded-full font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer">
            Checkout
          </Button>
        </div>
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-theme-section/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-theme-card max-w-2xl w-full rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-tiffany transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h2 className="font-serif font-semibold text-white mb-3 sm:mb-4 text-xl sm:text-2xl">
                  {selectedProduct.name}
                </h2>
                <p className="font-sans font-light text-[rgba(246,244,242,0.9)] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {selectedProduct.description}
                </p>
                <p className="font-serif font-semibold text-gold-light mb-4 sm:mb-6 text-xl sm:text-2xl">
                  ₹{selectedProduct.price.toLocaleString()}
                </p>
                <Button
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-tiffany hover:bg-tiffany-light hover:shadow-md active:bg-tiffany-dark active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-tiffany/30 focus:ring-offset-2 text-white py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-sans font-normal tracking-[0.05em] uppercase transition-all duration-250 ease cursor-pointer"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
