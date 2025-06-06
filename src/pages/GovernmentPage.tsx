
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { MapPin, Phone, Clock, User, Building } from 'lucide-react';

const GovernmentPage = () => {
  const governmentOffices = [
    {
      name: 'ধুনট উপজেলা পরিষদ',
      address: 'ধুনট, বগুড়া',
      phone: '051-71456',
      chairman: 'মোঃ আবুল কালাম আজাদ',
      workingHours: 'সকাল ৯টা - বিকাল ৫টা',
      services: ['সার্টিফিকেট প্রদান', 'প্রকল্প অনুমোদন', 'উন্নয়ন কার্যক্রম'],
      type: 'upazila'
    },
    {
      name: 'ধুনট থানা',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71789',
      inCharge: 'এস.আই মোঃ রফিকুল ইসলাম',
      workingHours: '২৪ ঘন্টা',
      services: ['এফআইআর দাখিল', 'পাসপোর্ট ভেরিফিকেশন', 'চরিত্র সনদ'],
      type: 'police'
    },
    {
      name: 'ইউনিয়ন ভূমি অফিস',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71234',
      officer: 'মোঃ নুরুল হক',
      workingHours: 'সকাল ১০টা - বিকাল ৪টা',
      services: ['ভূমি রেকর্ড', 'জমির দলিল', 'নামজারি'],
      type: 'land'
    },
    {
      name: 'বগুড়া জেলা প্রশাসক অফিস',
      address: 'জেলা প্রশাসক ভবন, বগুড়া',
      phone: '051-66123',
      dc: 'জনাব মোঃ সাইফুল ইসলাম',
      workingHours: 'সকাল ৯টা - বিকাল ৫টা',
      services: ['প্রশাসনিক সেবা', 'জেলা প্রকল্প', 'নাগরিক সেবা'],
      type: 'district'
    }
  ];

  const getOfficeIcon = (type: string) => {
    switch (type) {
      case 'police': return '🚔';
      case 'land': return '📋';
      case 'district': return '🏛️';
      default: return '🏢';
    }
  };

  const getOfficeColor = (type: string) => {
    switch (type) {
      case 'police': return 'bg-blue-100 text-blue-700';
      case 'land': return 'bg-green-100 text-green-700';
      case 'district': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Building className="text-green-800 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">সরকারি অফিস</h1>
            <p className="text-gray-600 text-sm bengali-font">পৌরসভা ও সরকারি প্রতিষ্ঠান</p>
          </div>
        </div>

        <div className="space-y-4">
          {governmentOffices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{getOfficeIcon(office.type)}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                      {office.name}
                    </h3>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full bengali-font mt-1 ${getOfficeColor(office.type)}`}>
                      {office.type === 'police' ? 'পুলিশ' : 
                       office.type === 'land' ? 'ভূমি' :
                       office.type === 'district' ? 'জেলা' : 'উপজেলা'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{office.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="text-green-600 mr-2" size={16} />
                    <span className="text-gray-700 text-sm">{office.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCall(office.phone)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    কল করুন
                  </button>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{office.workingHours}</span>
                </div>
                
                <div className="flex items-center">
                  <User className="text-purple-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">
                    {office.chairman && `চেয়ারম্যান: ${office.chairman}`}
                    {office.inCharge && `দায়িত্বপ্রাপ্ত: ${office.inCharge}`}
                    {office.officer && `কর্মকর্তা: ${office.officer}`}
                    {office.dc && `জেলা প্রশাসক: ${office.dc}`}
                  </span>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {office.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full bengali-font"
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

export default GovernmentPage;
