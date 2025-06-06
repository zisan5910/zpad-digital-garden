
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { CreditCard, Phone, MapPin, Clock, Banknote } from 'lucide-react';

const BanksPage = () => {
  const banksAndInsurance = [
    {
      name: 'সোনালী ব্যাংক',
      type: 'ব্যাংক',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71567',
      manager: 'মোঃ আলমগীর হোসেন',
      workingHours: 'সকাল ১০টা - বিকাল ৪টা',
      services: ['সাধারণ হিসাব', 'সঞ্চয় হিসাব', 'লোন সেবা', 'রেমিট্যান্স'],
      atmAvailable: true
    },
    {
      name: 'রূপালী ব্যাংক',
      type: 'ব্যাংক',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71789',
      manager: 'মোঃ কামরুল হাসান',
      workingHours: 'সকাল ১০টা - বিকাল ৪টা',
      services: ['চলতি হিসাব', 'স্থায়ী আমানত', 'শিক্ষা ঋণ', 'কৃষি ঋণ'],
      atmAvailable: true
    },
    {
      name: 'ডাচ-বাংলা ব্যাংক',
      type: 'ব্যাংক',
      address: 'ধুনট হাট, বগুড়া',
      phone: '051-71890',
      manager: 'জনাব রাহুল আহমেদ',
      workingHours: 'সকাল ৯টা - বিকাল ৫টা',
      services: ['ডিজিটাল ব্যাংকিং', 'মোবাইল ব্যাংকিং', 'ক্রেডিট কার্ড', 'ব্যবসায়িক ঋণ'],
      atmAvailable: true
    },
    {
      name: 'দেল্টা লাইফ ইন্স্যুরেন্স',
      type: 'বীমা',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71456',
      agent: 'মোঃ নাসির উদ্দিন',
      workingHours: 'সকাল ৯টা - বিকাল ৬টা',
      services: ['জীবন বীমা', 'স্বাস্থ্য বীমা', 'শিক্ষা বীমা', 'পেনশন পরিকল্পনা'],
      atmAvailable: false
    },
    {
      name: 'পপুলার লাইফ ইন্স্যুরেন্স',
      type: 'বীমা',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71678',
      agent: 'মোঃ সেলিম রেজা',
      workingHours: 'সকাল ৮টা - বিকাল ৬টা',
      services: ['মেয়াদী বীমা', 'চিকিৎসা বীমা', 'দুর্ঘটনা বীমা', 'সম্পদ বীমা'],
      atmAvailable: false
    }
  ];

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <CreditCard className="text-blue-700 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">ব্যাংক ও বীমা</h1>
            <p className="text-gray-600 text-sm bengali-font">আর্থিক সেবা প্রতিষ্ঠান</p>
          </div>
        </div>

        <div className="space-y-4">
          {banksAndInsurance.map((institution, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="mr-3">
                    {institution.type === 'ব্যাংক' ? (
                      <Banknote className="text-blue-600" size={24} />
                    ) : (
                      <CreditCard className="text-green-600" size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                      {institution.name}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full bengali-font mt-1 ${
                      institution.type === 'ব্যাংক' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {institution.type}
                    </span>
                    {institution.atmAvailable && (
                      <span className="ml-2 inline-block px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                        ATM
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{institution.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="text-green-600 mr-2" size={16} />
                    <span className="text-gray-700 text-sm">{institution.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCall(institution.phone)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    কল করুন
                  </button>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{institution.workingHours}</span>
                </div>
                
                <div>
                  <p className="text-gray-600 bengali-font text-sm mb-2">
                    {institution.manager && `ম্যানেজার: ${institution.manager}`}
                    {institution.agent && `এজেন্ট: ${institution.agent}`}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {institution.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className={`px-2 py-1 text-xs rounded-full bengali-font ${
                          institution.type === 'ব্যাংক' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                        }`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default BanksPage;
