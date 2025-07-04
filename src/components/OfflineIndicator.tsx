
import { Wifi, WifiOff } from "lucide-react";
import { useOffline } from "@/hooks/useOffline";

const OfflineIndicator = () => {
  const { isOffline } = useOffline();

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-red-500 text-white px-4 py-2 text-sm flex items-center justify-center gap-2 z-50">
      <WifiOff className="h-4 w-4" />
      <span>আপনি অফলাইনে আছেন - ক্যাশ থেকে কনটেন্ট দেখানো হচ্ছে</span>
    </div>
  );
};

export default OfflineIndicator;
