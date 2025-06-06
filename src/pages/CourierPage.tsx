
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Search, Package, Clock, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CourierPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const couriers = [
    {
      id: 1,
      name: 'সুন্দরবন কুরিয়ার সার্ভিস',
      phone: '01711-555666',
      address: 'বাজার রোড, ধুনট',
      services: ['দেশব্যাপী ডেলিভারি', 'ক্যাশ অন ডেলিভারি', 'দ্রুত সেবা'],
      deliveryTime: '১-৩ দিন',
      charges: '৫০-২০০ টাকা',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop',
      coverage: 'সারাদেশ',
      tracking: true
    },
    {
      id: 2,
      name: 'এসএ পরিবহন',
      phone: '01712-666777',
      address: 'স্টেশন রোড, ধুনট',
      services: ['পার্সেল সার্ভিস', 'ডকুমেন্ট ডেলিভারি', 'বাল্ক অর্ডার'],
      deliveryTime: '২-৫ দিন',
      charges: '৪০-১৫০ টাকা',
      imageUrl: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=400&h=250&fit=crop',
      coverage: 'জেলার মধ্যে',
      tracking: false
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredCouriers = couriers.filter(courier =>
    courier.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">কুরিয়ার সার্ভিস</h1>
              <p className="text-orange-100 text-sm bengali-font">পার্সেল ডেলিভারি</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 bg-white shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="কুরিয়ার সার্ভিস খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bengali-font"
          />
        </div>
      </div>

      <div className="px-4 pb-20">
        {filteredCouriers.map((courier) => (
          <div key={courier.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
            <img
              src={courier.imageUrl}
              alt={courier.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 bengali-font mb-2">{courier.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span className="bengali-font">{courier.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span className="bengali-font">ডেলিভারি সময়: {courier.deliveryTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Package size={16} />
                  <span className="bengali-font">চার্জ: {courier.charges}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Truck size={16} />
                  <span className="bengali-font">এলাকা: {courier.coverage}</span>
                </div>
                {courier.tracking && (
                  <div className="text-sm text-green-600 bengali-font">
                    ✓ অনলাইন ট্র্যাকিং সুবিধা
                  </div>
                )}
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 bengali-font mb-2">সেবা সমূহ:</h4>
                <div className="flex flex-wrap gap-2">
                  {courier.services.map((service, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs bengali-font">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleCall(courier.phone)}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>যোগাযোগ করুন</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourierPage;
