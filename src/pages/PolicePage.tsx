
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Shield, Search, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const PolicePage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const policeStations = [
    {
      id: 1,
      name: 'ধুনট থানা',
      type: 'থানা',
      phone: '01711-999999',
      emergency: '999',
      address: 'ধুনট, বগুড়া',
      inCharge: 'এস.আই মোহাম্মদ আলী',
      services: ['জরুরি সেবা', 'মামলা দায়ের', 'পাসপোর্ট ভেরিফিকেশন', 'চরিত্র সনদ'],
      imageUrl: 'https://images.unsplash.com/photo-1562447401-7a17b4e9bbe8?w=400&h=250&fit=crop',
      hours: '২৪ ঘন্টা'
    },
    {
      id: 2,
      name: 'ট্রাফিক পুলিশ অফিস',
      type: 'ট্রাফিক পুলিশ',
      phone: '01712-888888',
      emergency: '999',
      address: 'বাস টার্মিনাল, ধুনট',
      inCharge: 'কনস্টেবল রহিম উদ্দিন',
      services: ['ড্রাইভিং লাইসেন্স', 'গাড়ি নিবন্ধন', 'ট্রাফিক ভায়োলেশন'],
      imageUrl: 'https://images.unsplash.com/photo-1616023767252-6d85d8afbeec?w=400&h=250&fit=crop',
      hours: 'সকাল ৮টা - সন্ধ্যা ৬টা'
    }
  ];

  const emergencyNumbers = [
    { service: 'জাতীয় জরুরি সেবা', number: '999' },
    { service: 'ফায়ার সার্ভিস', number: '102' },
    { service: 'মহিলা ও শিশু নির্যাতন', number: '109' },
    { service: 'র্যাব', number: '01777-777777' }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredStations = policeStations.filter(station =>
    station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">পুলিশ/থানা</h1>
              <p className="text-indigo-100 text-sm bengali-font">আইন শৃঙ্খলা সেবা</p>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Alert */}
      <div className="bg-red-100 border-l-4 border-red-500 mx-4 my-4 p-4 rounded-r-lg">
        <div className="flex items-center">
          <AlertTriangle className="text-red-500 mr-3" size={20} />
          <div>
            <h3 className="text-red-800 font-semibold bengali-font">জরুরি সেবা</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {emergencyNumbers.map((emergency, index) => (
                <button
                  key={index}
                  onClick={() => handleCall(emergency.number)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold bengali-font hover:bg-red-700"
                >
                  {emergency.service}: {emergency.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="থানা খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bengali-font"
          />
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
          {filteredStations.map((station) => (
            <div key={station.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={station.imageUrl}
                alt={station.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{station.name}</h3>
                    <p className="text-indigo-600 font-medium bengali-font">{station.type}</p>
                    <p className="text-gray-600 text-sm bengali-font">দায়িত্বপ্রাপ্ত: {station.inCharge}</p>
                  </div>
                  <Shield className="text-indigo-600" size={24} />
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{station.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="bengali-font">{station.hours}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সেবা সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {station.services.map((service, index) => (
                      <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleCall(station.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>কল করুন</span>
                  </button>
                  <button
                    onClick={() => handleCall(station.emergency)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <AlertTriangle size={18} />
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

export default PolicePage;
