
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Fuel, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const GasStationsPage = () => {
  const gasStations = [
    {
      name: 'ধুনট পেট্রোল পাম্প',
      address: 'ধুনট-বগুড়া রোড, ধুনট',
      phone: '051-71234',
      owner: 'মোঃ আবুল কাশেম',
      workingHours: '২৪ ঘন্টা',
      fuelTypes: ['পেট্রোল', 'ডিজেল', 'অকটেন'],
      services: ['জ্বালানি সরবরাহ', 'এয়ার সার্ভিস', 'গাড়ি পরিষ্কার'],
      hasConvenienceStore: true,
      quality: 'উচ্চ মানের'
    },
    {
      name: 'সোহাগ ফিলিং স্টেশন',
      address: 'ধুনট হাট, বগুড়া',
      phone: '051-71567',
      owner: 'মোঃ সোহাগ হোসেন',
      workingHours: 'সকাল ৬টা - রাত ১০টা',
      fuelTypes: ['পেট্রোল', 'ডিজেল'],
      services: ['জ্বালানি সরবরাহ', 'এয়ার সার্ভিস'],
      hasConvenienceStore: false,
      quality: 'মানসম্পন্ন'
    },
    {
      name: 'রহমান এনার্জি পয়েন্ট',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71890',
      owner: 'মোঃ আবদুর রহমান',
      workingHours: 'সকাল ৫টা - রাত ১১টা',
      fuelTypes: ['পেট্রোল', 'ডিজেল', 'অকটেন', 'সিএনজি'],
      services: ['জ্বালানি সরবরাহ', 'এয়ার সার্ভিস', 'গাড়ি পরিষ্কার', 'তেল পরিবর্তন'],
      hasConvenienceStore: true,
      quality: 'সেরা মানের'
    }
  ];

  const getFuelTypeColor = (fuel: string) => {
    switch (fuel) {
      case 'পেট্রোল': return 'bg-red-100 text-red-700';
      case 'ডিজেল': return 'bg-blue-100 text-blue-700';
      case 'অকটেন': return 'bg-purple-100 text-purple-700';
      case 'সিএনজি': return 'bg-green-100 text-green-700';
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
          <Fuel className="text-red-700 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">গ্যাস স্টেশন</h1>
            <p className="text-gray-600 text-sm bengali-font">জ্বালানি সরবরাহ কেন্দ্র</p>
          </div>
        </div>

        <div className="space-y-4">
          {gasStations.map((station, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <Fuel className="text-red-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                      {station.name}
                    </h3>
                    <div className="flex items-center mt-1">
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full bengali-font">
                        {station.quality}
                      </span>
                      {station.hasConvenienceStore && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full bengali-font">
                          কনভিনিয়েন্স স্টোর
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{station.address}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Phone className="text-green-600 mr-2" size={16} />
                    <span className="text-gray-700 text-sm">{station.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCall(station.phone)}
                    className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    কল করুন
                  </button>
                </div>
                
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{station.workingHours}</span>
                </div>
                
                <div>
                  <p className="text-gray-600 bengali-font text-sm mb-2">
                    মালিক: {station.owner}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">জ্বালানির ধরন:</h4>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {station.fuelTypes.map((fuel, fuelIndex) => (
                      <span
                        key={fuelIndex}
                        className={`px-2 py-1 text-xs rounded-full bengali-font ${getFuelTypeColor(fuel)}`}
                      >
                        {fuel}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                  <div className="space-y-1">
                    {station.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="text-green-600 mr-2" size={14} />
                        <span className="text-gray-700 bengali-font text-sm">{service}</span>
                      </div>
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

export default GasStationsPage;
