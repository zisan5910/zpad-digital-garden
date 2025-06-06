
import React, { useState } from 'react';
import { ArrowLeft, Search, Clock, MapPin, Bus, Train } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TransportPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const transportTypes = ['all', 'বাস', 'ট্রেন'];

  const schedules = [
    {
      id: 1,
      type: 'বাস',
      route: 'ধুনট - ঢাকা',
      company: 'শ্যামলী পরিবহন',
      departure: 'সকাল ৭:০০',
      arrival: 'দুপুর ১২:৩০',
      fare: '৪৫০ টাকা',
      from: 'ধুনট বাস স্ট্যান্ড',
      to: 'গাবতলী',
      duration: '৫ ঘন্টা ৩০ মিনিট',
      seats: 'AC/Non-AC',
      phone: '01711-123456'
    },
    {
      id: 2,
      type: 'ট্রেন',
      route: 'বগুড়া - ঢাকা',
      company: 'বাংলাদেশ রেলওয়ে',
      departure: 'সন্ধ্যা ৬:৩০',
      arrival: 'রাত ১১:১৫',
      fare: '২৮০-৮০০ টাকা',
      from: 'বগুড়া রেল স্টেশন',
      to: 'কমলাপুর স্টেশন',
      duration: '৪ ঘন্টা ৪৫ মিনিট',
      seats: 'শোভন/শোভন চেয়ার/AC',
      phone: '01712-234567'
    },
    {
      id: 3,
      type: 'বাস',
      route: 'ধুনট - চট্টগ্রাম',
      company: 'সোহাগ পরিবহন',
      departure: 'রাত ১০:০০',
      arrival: 'সকাল ৮:০০',
      fare: '৭০০ টাকা',
      from: 'ধুনট বাস স্ট্যান্ড',
      to: 'চট্টগ্রাম টার্মিনাল',
      duration: '১০ ঘন্টা',
      seats: 'AC বাস',
      phone: '01713-345678'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredSchedules = schedules.filter(schedule => {
    const matchesSearch = schedule.route.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || schedule.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">বাস/ট্রেন সময়সূচি</h1>
              <p className="text-green-100 text-sm bengali-font">যাতায়াত তথ্য</p>
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
              placeholder="গন্তব্য খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bengali-font"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bengali-font"
          >
            {transportTypes.map((type) => (
              <option key={type} value={type}>
                {type === 'all' ? 'সকল যানবাহন' : type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="px-4 pb-20">
        {filteredSchedules.map((schedule) => (
          <div key={schedule.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                {schedule.type === 'বাস' ? (
                  <Bus className="text-green-600" size={24} />
                ) : (
                  <Train className="text-blue-600" size={24} />
                )}
                <div>
                  <h3 className="text-lg font-bold text-gray-800 bengali-font">{schedule.route}</h3>
                  <p className="text-gray-600 font-medium bengali-font">{schedule.company}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                schedule.type === 'বাস' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
              } bengali-font`}>
                {schedule.type}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <Clock size={16} />
                  <span className="bengali-font">ছাড়ার সময়: {schedule.departure}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span className="bengali-font">{schedule.from}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                  <Clock size={16} />
                  <span className="bengali-font">পৌঁছানোর সময়: {schedule.arrival}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span className="bengali-font">{schedule.to}</span>
                </div>
              </div>
            </div>

            <div className="border-t pt-3">
              <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                <div>
                  <span className="font-semibold bengali-font">ভাড়া:</span>
                  <p className="text-green-600 font-bold bengali-font">{schedule.fare}</p>
                </div>
                <div>
                  <span className="font-semibold bengali-font">সময়:</span>
                  <p className="bengali-font">{schedule.duration}</p>
                </div>
                <div>
                  <span className="font-semibold bengali-font">আসন:</span>
                  <p className="bengali-font">{schedule.seats}</p>
                </div>
              </div>

              <button
                onClick={() => handleCall(schedule.phone)}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors"
              >
                টিকিট বুকিং
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportPage;
