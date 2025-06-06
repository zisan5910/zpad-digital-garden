
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, User, Search, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BloodDonorsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('all');

  const bloodTypes = ['all', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const donors = [
    {
      id: 1,
      name: 'মোহাম্মদ করিম',
      bloodType: 'O+',
      phone: '01711-555111',
      address: 'ধুনট বাজার',
      age: 28,
      lastDonation: '৩ মাস আগে',
      availability: 'উপলব্ধ',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'রহিমা খাতুন',
      bloodType: 'A+',
      phone: '01712-555222',
      address: 'কলেজ রোড',
      age: 25,
      lastDonation: '৪ মাস আগে',
      availability: 'উপলব্ধ',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'আব্দুল রহমান',
      bloodType: 'B+',
      phone: '01713-555333',
      address: 'স্টেশন রোড',
      age: 32,
      lastDonation: '২ মাস আগে',
      availability: 'অনুপলব্ধ',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredDonors = donors.filter(donor => {
    const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBloodType = selectedBloodType === 'all' || donor.bloodType === selectedBloodType;
    return matchesSearch && matchesBloodType;
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
              <h1 className="text-xl font-bold bengali-font">রক্তদাতা</h1>
              <p className="text-red-100 text-sm bengali-font">জীবন বাঁচান, রক্ত দিন</p>
            </div>
          </div>
        </div>
      </header>

      {/* Emergency Notice */}
      <div className="bg-red-100 border-l-4 border-red-500 mx-4 my-4 p-4 rounded-r-lg">
        <div className="flex items-center">
          <Heart className="text-red-500 mr-3" size={20} />
          <div>
            <h3 className="text-red-800 font-semibold bengali-font">জরুরি রক্তের প্রয়োজন?</h3>
            <p className="text-red-700 text-sm bengali-font">
              জরুরি প্রয়োজনে ০১৭১১-৯৯৯৯৯৯ নম্বরে কল করুন - ২৪/৭ সেবা
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="p-4 bg-white shadow-sm">
        <div className="flex flex-col space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="রক্তদাতা খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bengali-font"
            />
          </div>
          <select
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {bloodTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'সকল রক্তের গ্রুপ' : `${type} গ্রুপ`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Donors List */}
      <div className="px-4 pb-20">
        {filteredDonors.map((donor) => (
          <div key={donor.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
            <div className="flex items-start space-x-4">
              <img
                src={donor.imageUrl}
                alt={donor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-800 bengali-font">{donor.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    donor.availability === 'উপলব্ধ' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  } bengali-font`}>
                    {donor.availability}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-2">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                    {donor.bloodType}
                  </span>
                  <span className="text-gray-600 bengali-font">বয়স: {donor.age}</span>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span className="bengali-font">{donor.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span className="bengali-font">শেষ রক্তদান: {donor.lastDonation}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCall(donor.phone)}
                  disabled={donor.availability === 'অনুপলব্ধ'}
                  className={`w-full mt-3 py-2 rounded-lg font-semibold bengali-font transition-colors flex items-center justify-center space-x-2 ${
                    donor.availability === 'উপলব্ধ'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <Phone size={18} />
                  <span>যোগাযোগ করুন</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodDonorsPage;
