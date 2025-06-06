
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Star, Search, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const DiagnosticsPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const diagnosticTypes = [
    'all', 'প্যাথলজি ল্যাব', 'এক্স-রে সেন্টার', 'আল্ট্রাসাউন্ড', 'ইসিজি সেন্টার', 'এমআরআই/সিটি স্ক্যান'
  ];

  const diagnostics = [
    {
      id: 1,
      name: 'ধুনট ডায়াগনস্টিক সেন্টার',
      type: 'প্যাথলজি ল্যাব',
      phone: '01711-333333',
      address: 'ধুনট বাজার',
      rating: 4.5,
      services: ['রক্ত পরীক্ষা', 'প্রস্রাব পরীক্ষা', 'এক্স-রে', 'ইসিজি'],
      imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=250&fit=crop',
      hours: 'সকাল ৮টা - রাত ৮টা',
      homeService: true
    },
    {
      id: 2,
      name: 'আধুনিক ল্যাব ও এক্স-রে',
      type: 'এক্স-রে সেন্টার',
      phone: '01712-444444',
      address: 'স্টেশন রোড',
      rating: 4.3,
      services: ['ডিজিটাল এক্স-রে', 'আল্ট্রাসাউন্ড', 'ইসিজি', 'কালার ডপলার'],
      imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=250&fit=crop',
      hours: '২৤ ঘন্টা',
      homeService: false
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredDiagnostics = diagnostics.filter(diagnostic => {
    const matchesSearch = diagnostic.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || diagnostic.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">ডায়াগনস্টিক সেন্টার</h1>
              <p className="text-purple-100 text-sm bengali-font">রোগ নির্ণয় সেবা</p>
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
              placeholder="ডায়াগনস্টিক সেন্টার খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bengali-font"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bengali-font"
          >
            {diagnosticTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'সকল ধরণ' : type}
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
          {filteredDiagnostics.map((diagnostic) => (
            <div key={diagnostic.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={diagnostic.imageUrl}
                alt={diagnostic.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{diagnostic.name}</h3>
                    <p className="text-purple-600 font-medium bengali-font">{diagnostic.type}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{diagnostic.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{diagnostic.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="bengali-font">{diagnostic.hours}</span>
                  </div>
                  {diagnostic.homeService && (
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <Activity size={16} />
                      <span className="bengali-font">হোম সার্ভিস উপলব্ধ</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সেবা সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {diagnostic.services.map((service, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCall(diagnostic.phone)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone size={18} />
                  <span>কল করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DiagnosticsPage;
