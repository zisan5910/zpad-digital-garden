
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Search, Home, Bed, Bath, Car } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const HousingPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const houseTypes = ['all', 'ফ্ল্যাট', 'বাসা', 'রুম', 'অফিস স্পেস', 'দোকান'];

  const properties = [
    {
      id: 1,
      title: '৩ বেডরুম ফ্ল্যাট ভাড়া',
      type: 'ফ্ল্যাট',
      rent: '১৫,০০০ টাকা/মাস',
      address: 'কলেজ রোড, ধুনট',
      bedrooms: 3,
      bathrooms: 2,
      area: '১২০০ বর্গফুট',
      floor: '৩য় তলা',
      features: ['বারান্দা', 'পার্কিং', 'লিফট', 'জেনারেটর'],
      imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=250&fit=crop',
      contact: '01711-111222',
      owner: 'মোহাম্মদ আলী',
      available: true
    },
    {
      id: 2,
      title: '২ বেডরুম বাসা',
      type: 'বাসা',
      rent: '১০,০০০ টাকা/মাস',
      address: 'স্টেশন রোড, ধুনট',
      bedrooms: 2,
      bathrooms: 1,
      area: '৮০০ বর্গফুট',
      floor: 'নিচতলা',
      features: ['উঠান', 'টিউবওয়েল', 'গ্যাস সংযোগ'],
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop',
      contact: '01712-222333',
      owner: 'ফাতেমা খাতুন',
      available: true
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">বাসা/ফ্ল্যাট ভাড়া</h1>
              <p className="text-indigo-100 text-sm bengali-font">আবাসন সেবা</p>
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
              placeholder="এলাকা বা ঠিকানা খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bengali-font"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bengali-font"
          >
            {houseTypes.map((type) => (
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
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{property.title}</h3>
                    <p className="text-indigo-600 font-medium bengali-font">{property.type}</p>
                    <p className="text-green-600 font-bold text-lg bengali-font">{property.rent}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    property.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  } bengali-font`}>
                    {property.available ? 'উপলব্ধ' : 'ভাড়া হয়ে গেছে'}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{property.address}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Bed size={16} />
                      <span className="bengali-font">{property.bedrooms} বেডরুম</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath size={16} />
                      <span className="bengali-font">{property.bathrooms} বাথরুম</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Home size={16} />
                      <span className="bengali-font">{property.area}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 bengali-font">তলা: {property.floor}</p>
                  <p className="text-sm text-gray-600 bengali-font">মালিক: {property.owner}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">সুবিধা সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCall(property.contact)}
                  disabled={!property.available}
                  className={`w-full py-2 rounded-lg font-semibold bengali-font transition-colors flex items-center justify-center space-x-2 ${
                    property.available
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Phone size={18} />
                  <span>যোগাযোগ করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HousingPage;
