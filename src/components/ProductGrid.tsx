
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/Product";

interface ProductGridProps {
  products: Product[];
  wishlist: number[];
  onProductClick: (product: Product) => void;
  onToggleWishlist: (productId: number) => void;
}

const ProductGrid = ({ products, wishlist, onProductClick, onToggleWishlist }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
      {products.map((product) => (
        <div 
          key={product.id}
          className="group cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="relative aspect-[3/4] mb-2 overflow-hidden rounded-lg bg-gray-50">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-2 right-2 h-8 w-8 rounded-full transition-all ${
                wishlist.includes(product.id)
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product.id);
              }}
            >
              <Heart 
                className={`h-4 w-4 ${wishlist.includes(product.id) ? "fill-current" : ""}`} 
              />
            </Button>
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-sm font-medium">Out of Stock</span>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <h4 className="font-light text-sm leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors">
              {product.name}
            </h4>
            <p className="font-medium text-sm">${product.price}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500 uppercase tracking-wider">{product.subcategory}</p>
              {product.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs text-gray-500">{product.rating}</span>
                </div>
              )}
            </div>
            {product.brand && (
              <p className="text-xs text-gray-400">{product.brand}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
