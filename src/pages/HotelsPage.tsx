
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Star, Search, Wifi, Car, Coffee } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const HotelsPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'হোটেল', 'রিসোর্ট', 'গেস্ট হাউস', 'লজ'];

  const hotels = [
    {
      id: 1,
      name: 'ধুনট প্যালেস হোটেল',
      category: 'হোটেল',
      phone: '01711-111333',
      address: 'স্টেশন রোড, ধুনট',
      rating: 4.5,
      price: '২০০০-৪০০০ টাকা/রাত',
      rooms: '২০টি রুম',
      facilities: ['AC রুম', 'Wi-Fi', 'রেস্টুরেন্ট', 'পার্কিং'],
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
      type: 'স্ট্যান্ডার্ড থেকে ডিলাক্স',
      availability: true
    },
    {
      id: 2,
      name: 'গ্রিন ভ্যালি রিসোর্ট',
      category: 'রিসোর্ট',
      phone: '01712-222444',
      address: 'গ্রাম: কামালপুর, ধুনট',
      rating: 4.8,
      price: '৫০০০-৮০০০ টাকা/রাত',
      rooms: '১৫টি কটেজ',
      facilities: ['সুইমিং পুল', 'বারবিকিউ', 'বোটিং', 'ফিশিং'],
      imageUrl: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop',
      type: 'কটেজ ও ভিলা',
      availability: true
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || hotel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">হোটেল</h1>
              <p className="text-pink-100 text-sm bengali-font">থাকার ব্যবস্থা</p>
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
              placeholder="হোটেল খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bengali-font"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bengali-font"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'সকল ধরণ' : category}
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
          {filteredHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={hotel.imageUrl}
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{hotel.name}</h3>
                    <p className="text-pink-600 font-medium bengali-font">{hotel.category}</p>
                    <p className="text-green-600 font-bold bengali-font">{hotel.price}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{hotel.rating}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      hotel.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    } bengali-font`}>
                      {hotel.availability ? 'উপলব্ধ' : 'বুকড'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{hotel.address}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="bengali-font font-semibold">রুম: </span>
                    <span className="bengali-font">{hotel.rooms}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="bengali-font font-semibold">ধরণ: </span>
                    <span className="bengali-font">{hotel.type}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সুবিধা সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotel.facilities.map((facility, index) => (
                      <span key={index} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCall(hotel.phone)}
                  disabled={!hotel.availability}
                  className={`w-full py-2 rounded-lg font-semibold bengali-font transition-colors flex items-center justify-center space-x-2 ${
                    hotel.availability
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Phone size={18} />
                  <span>বুকিং করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelsPage;
