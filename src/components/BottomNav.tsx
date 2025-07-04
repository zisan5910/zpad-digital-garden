
import { Home, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  cartCount: number;
  onCartClick: () => void;
}

const BottomNav = ({ cartCount, onCartClick }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
          <Home className="h-5 w-5" />
          <span className="text-xs">Home</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex flex-col items-center gap-1 h-auto py-2 relative"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Button>
        
        <Button variant="ghost" className="flex flex-col items-center gap-1 h-auto py-2">
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Contact</span>
        </Button>
      </div>
    </div>
  );
};

export default BottomNav;
