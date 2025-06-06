
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Star, Search, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const HospitalsPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const hospitalTypes = [
    'all', 'সরকারি হাসপাতাল', 'বেসরকারি হাসপাতাল', 'ক্লিনিক', 
    'বিশেষায়িত হাসপাতাল', 'জরুরি সেবা'
  ];

  const hospitals = [
    {
      id: 1,
      name: 'ধুনট উপজেলা স্বাস্থ্য কমপ্লেক্স',
      type: 'সরকারি হাসপাতাল',
      phone: '01711-111111',
      emergency: '999',
      address: 'ধুনট বাজার, বগুড়া',
      rating: 4.2,
      services: ['জরুরি সেবা', 'সাধারণ চিকিৎসা', 'প্রসূতি সেবা', 'শিশু স্বাস্থ্য'],
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
      hours: '২৪ ঘন্টা',
      category: 'সরকারি হাসপাতাল'
    },
    {
      id: 2,
      name: 'ধুনট আধুনিক হাসপাতাল',
      type: 'বেসরকারি হাসপাতাল',
      phone: '01712-222222',
      emergency: '01712-222223',
      address: 'স্টেশন রোড, ধুনট',
      rating: 4.6,
      services: ['হার্ট সেন্টার', 'ক্যান্সার চিকিৎসা', 'অর্থোপেডিক', 'নিউরোলজি'],
      imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=250&fit=crop',
      hours: '২৪ ঘন্টা',
      category: 'বেসরকারি হাসপাতাল'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch = hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hospital.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || hospital.category === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">হাসপাতাল</h1>
              <p className="text-red-100 text-sm bengali-font">চিকিৎসা প্রতিষ্ঠান</p>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="হাসপাতাল খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bengali-font"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bengali-font"
          >
            {hospitalTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'সকল ধরণ' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Toggle Map Button */}
      <div className="p-4">
        <button
          onClick={() => setShowMap(!showMap)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <MapPin size={20} />
          <span>{showMap ? 'তালিকা দেখুন' : 'মানচিত্র দেখুন'}</span>
        </button>
      </div>

      {/* Map or List View */}
      {showMap ? (
        <div className="px-4 pb-4">
          <div className="h-96 rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      ) : (
        <div className="px-4 pb-20">
          {filteredHospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={hospital.imageUrl}
                alt={hospital.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{hospital.name}</h3>
                    <p className="text-red-600 font-medium bengali-font">{hospital.type}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{hospital.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{hospital.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="bengali-font">{hospital.hours}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সেবা সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hospital.services.map((service, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleCall(hospital.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>কল করুন</span>
                  </button>
                  <button
                    onClick={() => handleCall(hospital.emergency)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Heart size={18} />
                    <span>জরুরি</span>
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

export default HospitalsPage;
