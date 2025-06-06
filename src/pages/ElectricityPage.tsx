
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Zap, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';

const ElectricityPage = () => {
  const electricityOffices = [
    {
      name: 'ধুনট পল্লী বিদ্যুৎ অফিস',
      address: 'ধুনট বাজার, ধুনট, বগুড়া',
      phone: '051-71234',
      emergencyPhone: '051-71235',
      managerName: 'মোঃ রহিমুল ইসলাম',
      workingHours: 'সকাল ৯টা - বিকাল ৫টা',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'ত্রুটি সমাধান', 'মিটার পরিবর্তন']
    },
    {
      name: 'বগুড়া পল্লী বিদ্যুৎ সমিতি',
      address: 'সাতমাথা, বগুড়া',
      phone: '051-66789',
      emergencyPhone: '051-66790',
      managerName: 'ইঞ্জিনিয়ার আব্দুল্লাহ',
      workingHours: 'সকাল ৮টা - বিকাল ৬টা',
      services: ['নতুন সংযোগ', 'বিল পরিশোধ', 'ত্রুটি সমাধান', 'লোড বৃদ্ধি']
    }
  ];

  const emergencyNumbers = [
    { service: 'জরুরি সেবা', number: '051-71235' },
    { service: 'লাইন ত্রুটি', number: '051-66790' },
    { service: 'বিদ্যুৎ বিভ্রাট', number: '16263' }
  ];

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Zap className="text-yellow-600 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">বিদ্যুৎ অফিস</h1>
            <p className="text-gray-600 text-sm bengali-font">বিদ্যুৎ সেবা ও যোগাযোগ</p>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-3">
            <AlertTriangle className="text-red-600 mr-2" size={20} />
            <h2 className="text-lg font-semibold text-red-800 bengali-font">জরুরি নম্বর</h2>
          </div>
          <div className="space-y-2">
            {emergencyNumbers.map((emergency, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-red-700 bengali-font">{emergency.service}</span>
                <button
                  onClick={() => handleCall(emergency.number)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
                >
                  {emergency.number}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Electricity Offices */}
        <div className="space-y-4">
          {electricityOffices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 bengali-font mb-3">
                {office.name}
              </h3>
              
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
                
                <div>
                  <p className="text-gray-600 bengali-font text-sm mb-2">ব্যবস্থাপক: {office.managerName}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {office.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full bengali-font"
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

export default ElectricityPage;
