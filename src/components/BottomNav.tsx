
import { Home, ShoppingCart, MessageCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BottomNavProps {
  cartCount: number;
  onHomeClick: () => void;
  onSearchClick: () => void;
  onCartClick: () => void;
  onContactClick: () => void;
  activeTab?: string;
}

const BottomNav = ({ 
  cartCount, 
  onHomeClick, 
  onSearchClick, 
  onCartClick, 
  onContactClick,
  activeTab = "home"
}: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-40 backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-around max-w-md mx-auto">
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 transition-all duration-200 transform active:scale-95 hover:scale-105 ${
            activeTab === "home" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black"
          }`}
          onClick={onHomeClick}
          title="হোম (Alt+1)"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs">হোম</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 transition-all duration-200 transform active:scale-95 hover:scale-105 ${
            activeTab === "search" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black"
          }`}
          onClick={onSearchClick}
          title="সার্চ (Alt+2)"
        >
          <Search className="h-5 w-5" />
          <span className="text-xs">সার্চ</span>
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 relative transition-all duration-200 transform active:scale-95 hover:scale-105 ${
            activeTab === "cart" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black"
          }`}
          onClick={onCartClick}
          title="কার্ট (Alt+3)"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="text-xs">কার্ট</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </Button>
        
        <Button 
          variant="ghost" 
          className={`flex flex-col items-center gap-1 h-auto py-2 transition-all duration-200 transform active:scale-95 hover:scale-105 ${
            activeTab === "contact" ? "text-black bg-gray-100" : "text-gray-500 hover:text-black"
          }`}
          onClick={onContactClick}
          title="যোগাযোগ (Alt+4)"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">যোগাযোগ</span>
        </Button>
      </div>
      
      {/* Keyboard shortcuts hint */}
      <div className="text-center mt-1">
        <span className="text-[10px] text-gray-400">Alt+1-4 দিয়ে দ্রুত নেভিগেট করুন</span>
      </div>
    </div>
  );
};

export default BottomNav;
