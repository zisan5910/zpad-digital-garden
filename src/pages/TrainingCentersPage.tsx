
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Star, Search, GraduationCap, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const TrainingCentersPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all', 'কম্পিউটার প্রশিক্ষণ', 'ভাষা শিক্ষা', 'দক্ষতা উন্নয়ন', 'কারিগরি প্রশিক্ষণ', 
    'ড্রাইভিং', 'রান্নার প্রশিক্ষণ', 'সেলাই প্রশিক্ষণ', 'ব্যবসায়িক প্রশিক্ষণ'
  ];

  const centers = [
    {
      id: 1,
      name: 'ধুনট আইটি ট্রেনিং সেন্টার',
      category: 'কম্পিউটার প্রশিক্ষণ',
      phone: '01711-777111',
      address: 'কলেজ রোড, ধুনট',
      rating: 4.8,
      courses: ['মাইক্রোসফট অফিস', 'গ্রাফিক ডিজাইন', 'ওয়েব ডেভেলপমেন্ট'],
      duration: '৩-৬ মাস',
      fees: '৫০০০-১৫০০০ টাকা',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      students: '২০০+ শিক্ষার্থী',
      schedule: 'সকাল ৯টা - বিকাল ৫টা'
    },
    {
      id: 2,
      name: 'ইংরেজি ভাষা শিক্ষা কেন্দ্র',
      category: 'ভাষা শিক্ষা',
      phone: '01712-888222',
      address: 'স্টেশন রোড, ধুনট',
      rating: 4.6,
      courses: ['স্পোকেন ইংলিশ', 'IELTS প্রস্তুতি', 'ব্যবসায়িক ইংরেজি'],
      duration: '৩-৪ মাস',
      fees: '৩০০০-৮০০০ টাকা',
      imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      students: '১৫০+ শিক্ষার্থী',
      schedule: 'সন্ধ্যা ৫টা - রাত ৮টা'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredCenters = centers.filter(center => {
    const matchesSearch = center.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || center.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
              <h1 className="text-xl font-bold bengali-font">প্রশিক্ষণ কেন্দ্র</h1>
              <p className="text-purple-100 text-sm bengali-font">দক্ষতা উন্নয়ন প্রশিক্ষণ</p>
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
              placeholder="প্রশিক্ষণ কেন্দ্র খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bengali-font"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bengali-font"
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
          {filteredCenters.map((center) => (
            <div key={center.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <img
                src={center.imageUrl}
                alt={center.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{center.name}</h3>
                    <p className="text-purple-600 font-medium bengali-font">{center.category}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{center.rating}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{center.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span className="bengali-font">{center.schedule}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span className="bengali-font">{center.students}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap size={16} />
                    <span className="bengali-font">ফিস: {center.fees}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">কোর্স সমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {center.courses.map((course, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleCall(center.phone)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
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

export default TrainingCentersPage;
