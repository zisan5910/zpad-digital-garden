
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Star, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const DoctorsPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const doctorCategories = [
    'all', 'সাধারণ চিকিৎসক', 'শিশু বিশেষজ্ঞ', 'হৃদরোগ বিশেষজ্ঞ', 
    'চর্মরোগ বিশেষজ্ঞ', 'নারী রোগ বিশেষজ্ঞ', 'অর্থোপেডিক', 
    'চোখের ডাক্তার', 'দাঁতের ডাক্তার', 'নাক কান গলা'
  ];

  const doctors = [
    {
      id: 1,
      name: 'ডাঃ মোহাম্মদ আলী',
      specialty: 'সাধারণ চিকিৎসক',
      hospital: 'ধুনট উপজেলা স্বাস্থ্য কমপ্লেক্স',
      phone: '01711-123456',
      address: 'ধুনট বাজার, বগুড়া',
      rating: 4.8,
      experience: '১৫ বছর',
      chambers: 'সকাল ৯টা - দুপুর ১টা, বিকাল ৪টা - রাত ৮টা',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop',
      category: 'সাধারণ চিকিৎসক'
    },
    {
      id: 2,
      name: 'ডাঃ ফাতেমা খাতুন',
      specialty: 'নারী রোগ বিশেষজ্ঞ',
      hospital: 'ধুনট আধুনিক হাসপাতাল',
      phone: '01712-234567',
      address: 'স্টেশন রোড, ধুনট',
      rating: 4.9,
      experience: '১২ বছর',
      chambers: 'সকাল ১০টা - দুপুর ২টা, বিকাল ৫টা - রাত ৯টা',
      imageUrl: 'https://images.unsplash.com/photo-1594824804732-ca8db7531fda?w=300&h=300&fit=crop',
      category: 'নারী রোগ বিশেষজ্ঞ'
    },
    {
      id: 3,
      name: 'ডাঃ রফিকুল ইসলাম',
      specialty: 'শিশু বিশেষজ্ঞ',
      hospital: 'ধুনট শিশু হাসপাতাল',
      phone: '01713-345678',
      address: 'কলেজ রোড, ধুনট',
      rating: 4.7,
      experience: '১০ বছর',
      chambers: 'সকাল ৮টা - দুপুর ১২টা, বিকাল ৩টা - সন্ধ্যা ৭টা',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop',
      category: 'শিশু বিশেষজ্ঞ'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doctor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">ডাক্তার</h1>
              <p className="text-blue-100 text-sm bengali-font">চিকিৎসা সেবা</p>
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
              placeholder="ডাক্তার খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
          >
            {doctorCategories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'সকল বিভাগ' : category}
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
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium bengali-font">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm bengali-font">{doctor.hospital}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{doctor.rating}</span>
                      <span className="text-sm text-gray-500">• {doctor.experience} অভিজ্ঞতা</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{doctor.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="bengali-font">{doctor.chambers}</span>
                  </div>
                </div>

                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleCall(doctor.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>কল করুন</span>
                  </button>
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-blue-700 transition-colors">
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

export default DoctorsPage;
