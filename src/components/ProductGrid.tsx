
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
    <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
      {products.map((product) => (
        <div 
          key={product.id}
          className="group cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <div className="relative aspect-square mb-2 overflow-hidden rounded-lg bg-gray-50">
            <img 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-1 right-1 h-6 w-6 rounded-full transition-all ${
                wishlist.includes(product.id)
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(product.id);
              }}
            >
              <Heart 
                className={`h-2.5 w-2.5 ${wishlist.includes(product.id) ? "fill-current" : ""}`} 
              />
            </Button>
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white text-[10px] font-medium">Out of Stock</span>
              </div>
            )}
          </div>
          
          <div className="space-y-1">
            <h4 className="font-light text-xs leading-tight line-clamp-2 group-hover:text-gray-600 transition-colors">
              {product.name}
            </h4>
            <p className="font-medium text-xs">৳{product.price}</p>
            {product.rating && (
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-[10px]">★</span>
                <span className="text-[10px] text-gray-500">{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
