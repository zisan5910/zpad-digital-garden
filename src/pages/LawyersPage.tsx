
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Star, Search, Scale, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const LawyersPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    'all', 'সাধারণ আইনজীবী', 'ফৌজদারি আইন', 'দেওয়ানি আইন', 'পারিবারিক আইন', 
    'ভূমি আইন', 'শ্রম আইন', 'কর আইন', 'ব্যাংকিং আইন'
  ];

  const lawyers = [
    {
      id: 1,
      name: 'ব্যারিস্টার আহমেদ হাসান',
      specialty: 'সাধারণ আইনজীবী',
      phone: '01711-777777',
      address: 'কোর্ট রোড, ধুনট',
      rating: 4.8,
      experience: '২০ বছর',
      court: 'সুপ্রিম কোর্ট',
      chambers: 'সকাল ১০টা - বিকাল ৫টা',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      fees: '৫০০০-১০০০০ টাকা',
      languages: ['বাংলা', 'ইংরেজি']
    },
    {
      id: 2,
      name: 'অ্যাডভোকেট ফাতেমা খাতুন',
      specialty: 'পারিবারিক আইন',
      phone: '01712-666666',
      address: 'বার অ্যাসোসিয়েশন, ধুনট',
      rating: 4.7,
      experience: '১৫ বছর',
      court: 'জেলা জজ কোর্ট',
      chambers: 'সকাল ৯টা - দুপুর ২টা',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=300&h=300&fit=crop',
      fees: '৩০০০-৮০০০ টাকা',
      languages: ['বাংলা', 'ইংরেজি']
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredLawyers = lawyers.filter(lawyer => {
    const matchesSearch = lawyer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || lawyer.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">আইনজীবী</h1>
              <p className="text-gray-200 text-sm bengali-font">আইনি সেবা</p>
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
              placeholder="আইনজীবী খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bengali-font"
            />
          </div>
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 bengali-font"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty === 'all' ? 'সকল বিভাগ' : specialty}
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
          {filteredLawyers.map((lawyer) => (
            <div key={lawyer.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={lawyer.imageUrl}
                    alt={lawyer.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{lawyer.name}</h3>
                    <p className="text-gray-600 font-medium bengali-font">{lawyer.specialty}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{lawyer.rating}</span>
                      <span className="text-sm text-gray-500">• {lawyer.experience} অভিজ্ঞতা</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{lawyer.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Scale size={16} />
                    <span className="bengali-font">{lawyer.court}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap size={16} />
                    <span className="bengali-font">ফিস: {lawyer.fees}</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {lawyer.languages.map((language, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleCall(lawyer.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>পরামর্শ নিন</span>
                  </button>
                  <button className="flex-1 bg-gray-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-gray-700 transition-colors">
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

export default LawyersPage;
