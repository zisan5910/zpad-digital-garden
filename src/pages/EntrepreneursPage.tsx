
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Star, Search, TrendingUp, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const EntrepreneursPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all', 'তথ্যপ্রযুক্তি', 'কৃষি ব্যবসা', 'খুচরা ব্যবসা', 'উৎপাদন', 
    'সেবা খাত', 'খাদ্য ব্যবসা', 'পরিবহন', 'শিক্ষা সেবা'
  ];

  const entrepreneurs = [
    {
      id: 1,
      name: 'মোহাম্মদ কামাল হোসেন',
      business: 'ধুনট টেক সলিউশন',
      category: 'তথ্যপ্রযুক্তি',
      phone: '01711-123123',
      address: 'কলেজ রোড, ধুনট',
      rating: 4.9,
      experience: '৮ বছর',
      employees: '২৫ জন',
      services: ['ওয়েবসাইট ডেভেলপমেন্ট', 'মোবাইল অ্যাপ', 'ডিজিটাল মার্কেটিং'],
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      founded: '২০১৬',
      achievements: ['স্থানীয় সেরা IT কোম্পানি ২০২৩']
    },
    {
      id: 2,
      name: 'ফরিদা খাতুন',
      business: 'গ্রিন ফার্ম অর্গানিক',
      category: 'কৃষি ব্যবসা',
      phone: '01712-234234',
      address: 'গ্রাম: কামালপুর, ধুনট',
      rating: 4.7,
      experience: '১২ বছর',
      employees: '৫০ জন',
      services: ['জৈব সবজি', 'ফলমূল', 'মুরগির মাংস', 'ডিম'],
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=300&h=300&fit=crop',
      founded: '২০১২',
      achievements: ['জেলা সেরা কৃষি উদ্যোক্তা ২০২২']
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredEntrepreneurs = entrepreneurs.filter(entrepreneur => {
    const matchesSearch = entrepreneur.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entrepreneur.business.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entrepreneur.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">উদ্যোক্তা</h1>
              <p className="text-orange-100 text-sm bengali-font">স্থানীয় ব্যবসায়ী নেটওয়ার্ক</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 bg-white shadow-sm">
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="উদ্যোক্তা খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bengali-font"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bengali-font"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'সকল ক্যাটাগরি' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => setShowMap(!showMap)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <MapPin size={20} />
          <span>{showMap ? 'তালিকা দেখুন' : 'মানচিত্র দেখুন'}</span>
        </button>
      </div>

      {showMap ? (
        <div className="px-4 pb-4">
          <div className="h-96 rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      ) : (
        <div className="px-4 pb-20">
          {filteredEntrepreneurs.map((entrepreneur) => (
            <div key={entrepreneur.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={entrepreneur.imageUrl}
                    alt={entrepreneur.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{entrepreneur.name}</h3>
                    <p className="text-orange-600 font-medium bengali-font">{entrepreneur.business}</p>
                    <p className="text-gray-600 text-sm bengali-font">{entrepreneur.category}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{entrepreneur.rating}</span>
                      <span className="text-sm text-gray-500">• প্রতিষ্ঠিত {entrepreneur.founded}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{entrepreneur.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <TrendingUp size={16} />
                    <span className="bengali-font">অভিজ্ঞতা: {entrepreneur.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span className="bengali-font">কর্মী: {entrepreneur.employees}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সেবা/পণ্য:</h4>
                  <div className="flex flex-wrap gap-2">
                    {entrepreneur.services.map((service, index) => (
                      <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {entrepreneur.achievements.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-semibold text-gray-800 bengali-font mb-2">অর্জন:</h4>
                    <div className="flex flex-wrap gap-2">
                      {entrepreneur.achievements.map((achievement, index) => (
                        <span key={index} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs bengali-font">
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleCall(entrepreneur.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>যোগাযোগ করুন</span>
                  </button>
                  <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-orange-700 transition-colors">
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EntrepreneursPage;
