import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Building2, Phone, MapPin, Clock, User, Stethoscope } from 'lucide-react';

const HospitalsPage = () => {
  const hospitals = [
    {
      name: 'ধুনট উপজেলা স্বাস্থ্য কমপ্লেক্স',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71234',
      emergencyPhone: '051-71235',
      director: 'ডাঃ মোঃ আবদুল করিম',
      workingHours: '২৪ ঘন্টা',
      services: ['জরুরি সেবা', 'বহিঃবিভাগ', 'অন্তঃবিভাগ', 'সার্জারি', 'গাইনি'],
      bedCount: 50,
      ambulance: true
    },
    {
      name: 'আল-শিফা হাসপাতাল',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71567',
      emergencyPhone: '051-71568',
      director: 'ডাঃ মোঃ রফিকুল ইসলাম',
      workingHours: '২৪ ঘন্টা',
      services: ['জরুরি সেবা', 'বহিঃবিভাগ', 'অন্তঃবিভাগ', 'ডায়াগনস্টিক', 'ফিজিওথেরাপি'],
      bedCount: 30,
      ambulance: true
    },
    {
      name: 'মা-মনি ক্লিনিক',
      address: 'ধুনট হাট, বগুড়া',
      phone: '051-71890',
      emergencyPhone: '051-71891',
      director: 'ডাঃ সালমা বেগম',
      workingHours: 'সকাল ৮টা - রাত ১০টা',
      services: ['মাতৃস্বাস্থ্য', 'শিশু স্বাস্থ্য', 'পরিবার পরিকল্পনা'],
      bedCount: 15,
      ambulance: false
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
          <Building2 className="text-red-500 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">হাসপাতাল</h1>
            <p className="text-gray-600 text-sm bengali-font">চিকিৎসা সেবা প্রতিষ্ঠান</p>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-red-800 bengali-font mb-3">জরুরি যোগাযোগ</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-red-700 bengali-font">উপজেলা স্বাস্থ্য কমপ্লেক্স</span>
              <button
                onClick={() => handleCall('051-71235')}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
              >
                051-71235
              </button>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-700 bengali-font">আল-শিফা হাসপাতাল</span>
              <button
                onClick={() => handleCall('051-71568')}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
              >
                051-71568
              </button>
            </div>
          </div>
        </div>

        {/* Hospitals List */}
        <div className="space-y-4">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 bengali-font mb-3">
                {hospital.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{hospital.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="text-green-600 mr-2" size={16} />
                    <span className="text-gray-700 text-sm">{hospital.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCall(hospital.phone)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    কল করুন
                  </button>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{hospital.workingHours}</span>
                </div>
                
                <div className="flex items-center">
                  <User className="text-purple-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">পরিচালক: {hospital.director}</span>
                </div>
                
                <div className="flex items-center">
                  <Building2 className="text-orange-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">বেড সংখ্যা: {hospital.bedCount}</span>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full bengali-font"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                
                {hospital.ambulance && (
                  <div className="mt-2">
                    <div className="flex items-center">
                      <Stethoscope className="text-red-600 mr-2" size={16} />
                      <span className="text-gray-700 bengali-font text-sm">অ্যাম্বুলেন্স সেবা উপলব্ধ</span>
                    </div>
                    <button
                      onClick={() => handleCall(hospital.emergencyPhone)}
                      className="mt-2 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                    >
                      <Phone size={16} className="mr-2" />
                      <span className="bengali-font">অ্যাম্বুলেন্স কল করুন</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default HospitalsPage;
