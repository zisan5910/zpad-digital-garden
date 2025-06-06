
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Car, Star, Search, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const CarRentalPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const carTypes = [
    'all', 'প্রাইভেট কার', 'মাইক্রোবাস', 'বাস', 'অটো রিক্সা', 'মোটরসাইকেল'
  ];

  const vehicles = [
    {
      id: 1,
      ownerName: 'আব্দুল করিম',
      vehicleType: 'প্রাইভেট কার',
      model: 'টয়োটা করোলা',
      phone: '01711-555111',
      address: 'ধুনট বাজার',
      rating: 4.7,
      capacity: '৪ জন',
      rent: '১৫০০ টাকা/দিন',
      imageUrl: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=400&h=250&fit=crop',
      available: true,
      features: ['এসি', 'ড্রাইভার সহ', 'ইন্স্যুরেন্স']
    },
    {
      id: 2,
      ownerName: 'রহিম উদ্দিন',
      vehicleType: 'মাইক্রোবাস',
      model: 'হিউন্ডাই H1',
      phone: '01712-555222',
      address: 'স্টেশন রোড',
      rating: 4.5,
      capacity: '১২ জন',
      rent: '৩০০০ টাকা/দিন',
      imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400&h=250&fit=crop',
      available: true,
      features: ['এসি', 'ড্রাইভার সহ', 'GPS']
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || vehicle.vehicleType === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">গাড়ি ভাড়া</h1>
              <p className="text-yellow-100 text-sm bengali-font">যানবাহন ভাড়া সেবা</p>
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
              placeholder="গাড়ি খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bengali-font"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bengali-font"
          >
            {carTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'সকল গাড়ি' : type}
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
          {filteredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={vehicle.imageUrl}
                alt={vehicle.model}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{vehicle.model}</h3>
                    <p className="text-yellow-600 font-medium bengali-font">{vehicle.vehicleType}</p>
                    <p className="text-gray-600 text-sm bengali-font">মালিক: {vehicle.ownerName}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{vehicle.rating}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      vehicle.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    } bengali-font`}>
                      {vehicle.available ? 'উপলব্ধ' : 'ব্যস্ত'}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{vehicle.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span className="bengali-font">ধারণক্ষমতা: {vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Car size={16} />
                    <span className="bengali-font font-semibold text-green-600">{vehicle.rent}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">বৈশিষ্ট্য:</h4>
                  <div className="flex flex-wrap gap-2">
                    {vehicle.features.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCall(vehicle.phone)}
                  disabled={!vehicle.available}
                  className={`w-full py-2 rounded-lg font-semibold bengali-font transition-colors flex items-center justify-center space-x-2 ${
                    vehicle.available
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

export default CarRentalPage;
