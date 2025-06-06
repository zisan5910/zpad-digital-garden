
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Stethoscope, Building2, Heart, Activity, Car, Shield, Scale, 
  Briefcase, GraduationCap, TrendingUp, BookOpen, Newspaper, 
  Bus, Home, Building, Package, Globe, Zap, MapPin, CreditCard, 
  Fuel, Sparkles, Pill
} from 'lucide-react';

const ServiceCategories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'ডাক্তার', icon: Stethoscope, color: 'bg-blue-500', path: '/doctors' },
    { name: 'হাসপাতাল', icon: Building2, color: 'bg-red-500', path: '/hospitals' },
    { name: 'রক্তদাতা', icon: Heart, color: 'bg-red-600', path: '/blood-donors' },
    { name: 'ডায়াগনস্টিক', icon: Activity, color: 'bg-purple-500', path: '/diagnostics' },
    { name: 'গাড়ি ভাড়া', icon: Car, color: 'bg-yellow-500', path: '/car-rental' },
    { name: 'পুলিশ/থানা', icon: Shield, color: 'bg-indigo-500', path: '/police' },
    { name: 'আইনজীবী', icon: Scale, color: 'bg-gray-600', path: '/lawyers' },
    { name: 'চাকরির খবর', icon: Briefcase, color: 'bg-green-600', path: '/jobs' },
    { name: 'শিক্ষক', icon: GraduationCap, color: 'bg-teal-500', path: '/teachers' },
    { name: 'উদ্যোক্তা', icon: TrendingUp, color: 'bg-orange-500', path: '/entrepreneurs' },
    { name: 'প্রশিক্ষণ কেন্দ্র', icon: BookOpen, color: 'bg-purple-600', path: '/training-centers' },
    { name: 'আজকের বগুড়া', icon: Newspaper, color: 'bg-blue-600', path: '/news' },
    { name: 'বাস/ট্রেন সময়সূচি', icon: Bus, color: 'bg-green-700', path: '/transport' },
    { name: 'বাসা/ফ্ল্যাট ভাড়া', icon: Home, color: 'bg-indigo-600', path: '/housing' },
    { name: 'হোটেল', icon: Building, color: 'bg-pink-500', path: '/hotels' },
    { name: 'কুরিয়ার সার্ভিস', icon: Package, color: 'bg-orange-600', path: '/courier' },
    { name: 'ওয়েবসাইট', icon: Globe, color: 'bg-cyan-500', path: '/websites' },
    { name: 'সংবাদপত্র', icon: Newspaper, color: 'bg-gray-700', path: '/newspapers' },
    { name: 'বিদ্যুৎ অফিস', icon: Zap, color: 'bg-yellow-600', path: '/electricity' },
    { name: 'পৌরসভা/গভঃ অফিস', icon: MapPin, color: 'bg-green-800', path: '/government' },
    { name: 'ব্যাংক/বীমা', icon: CreditCard, color: 'bg-blue-700', path: '/banks' },
    { name: 'গ্যাস স্টেশন', icon: Fuel, color: 'bg-red-700', path: '/gas-stations' },
    { name: 'দুয়া/যিকির', icon: Sparkles, color: 'bg-emerald-600', path: '/prayers' },
    { name: 'ফার্মেসি/দোকান', icon: Pill, color: 'bg-green-500', path: '/pharmacy' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4 bengali-font">সেবা সমূহ</h2>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(category.path)}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`${category.color} p-3 rounded-full mb-2`}>
                <IconComponent size={24} className="text-white" />
              </div>
              <span className="text-xs text-center font-medium text-gray-700 bengali-font leading-tight">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategories;
