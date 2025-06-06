
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Pill, Phone, MapPin, Clock, ShoppingBag, AlertCircle } from 'lucide-react';

const PharmacyPage = () => {
  const pharmacies = [
    {
      name: 'জনতা ফার্মেসি',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71234',
      owner: 'ফার্মাসিস্ট আবুল হাসান',
      workingHours: 'সকাল ৮টা - রাত ১০টা',
      services: ['প্রেসক্রিপশন', 'জেনেরিক ওষুধ', 'হোমিও ওষুধ', 'মেডিকেল ইকুইপমেন্ট'],
      emergencyAvailable: true,
      homeDelivery: true
    },
    {
      name: 'স্বাস্থ্য ফার্মেসি',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71567',
      owner: 'ডাঃ মোঃ রফিকুল ইসলাম',
      workingHours: '২৪ ঘন্টা',
      services: ['সকল ধরনের ওষুধ', 'ইনজেকশন', 'চিকিৎসা পরামর্শ', 'স্বাস্থ্য পরীক্ষা'],
      emergencyAvailable: true,
      homeDelivery: true
    },
    {
      name: 'আয়ুর্বেদিক ঔষধালয়',
      address: 'ধুনট হাট, বগুড়া',
      phone: '051-71890',
      owner: 'কবিরাজ আব্দুর রহমান',
      workingHours: 'সকাল ৯টা - বিকাল ৬টা',
      services: ['হার্বাল ওষুধ', 'আয়ুর্বেদিক চিকিৎসা', 'প্রাকৃতিক ওষুধ'],
      emergencyAvailable: false,
      homeDelivery: false
    }
  ];

  const generalStores = [
    {
      name: 'আলিম স্টোর',
      type: 'জেনারেল স্টোর',
      address: 'ধুনট বাজার, বগুড়া',
      phone: '051-71345',
      owner: 'মোঃ আলিম উদ্দিন',
      workingHours: 'সকাল ৭টা - রাত ৯টা',
      products: ['দৈনন্দিন পণ্য', 'খাদ্যদ্রব্য', 'টেলিকম', 'স্টেশনারি']
    },
    {
      name: 'সুপার মার্কেট',
      type: 'সুপার শপ',
      address: 'ধুনট সদর, বগুড়া',
      phone: '051-71678',
      owner: 'মোঃ করিম উদ্দিন',
      workingHours: 'সকাল ৮টা - রাত ১০টা',
      products: ['গ্রোসারি', 'ইলেকট্রনিক্স', 'পোশাক', 'বইখাতা']
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
          <Pill className="text-green-500 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">ফার্মেসি ও দোকান</h1>
            <p className="text-gray-600 text-sm bengali-font">ওষুধ ও দৈনন্দিন প্রয়োজনীয় সামগ্রী</p>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <AlertCircle className="text-red-600 mr-2" size={20} />
            <h2 className="text-lg font-semibold text-red-800 bengali-font">জরুরি সেবা</h2>
          </div>
          <p className="text-red-700 bengali-font text-sm">
            ২৪ ঘন্টা সেবার জন্য "স্বাস্থ্য ফার্মেসি" যোগাযোগ করুন: 051-71567
          </p>
        </div>

        {/* Pharmacies Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 bengali-font mb-4">ফার্মেসি সমূহ</h2>
          <div className="space-y-4">
            {pharmacies.map((pharmacy, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <Pill className="text-green-500 mr-3" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                        {pharmacy.name}
                      </h3>
                      <div className="flex gap-2 mt-1">
                        {pharmacy.emergencyAvailable && (
                          <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full bengali-font">
                            জরুরি সেবা
                          </span>
                        )}
                        {pharmacy.homeDelivery && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full bengali-font">
                            হোম ডেলিভারি
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                    <span className="text-gray-700 bengali-font text-sm">{pharmacy.address}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="text-green-600 mr-2" size={16} />
                      <span className="text-gray-700 text-sm">{pharmacy.phone}</span>
                    </div>
                    <button
                      onClick={() => handleCall(pharmacy.phone)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                    >
                      কল করুন
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="text-blue-600 mr-2" size={16} />
                    <span className="text-gray-700 bengali-font text-sm">{pharmacy.workingHours}</span>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 bengali-font text-sm mb-2">
                      মালিক: {pharmacy.owner}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-800 bengali-font font-medium mb-2">সেবাসমূহ:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pharmacy.services.map((service, serviceIndex) => (
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

        {/* General Stores Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 bengali-font mb-4">সাধারণ দোকান</h2>
          <div className="space-y-4">
            {generalStores.map((store, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center">
                    <ShoppingBag className="text-blue-500 mr-3" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                        {store.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full bengali-font mt-1">
                        {store.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                    <span className="text-gray-700 bengali-font text-sm">{store.address}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Phone className="text-green-600 mr-2" size={16} />
                      <span className="text-gray-700 text-sm">{store.phone}</span>
                    </div>
                    <button
                      onClick={() => handleCall(store.phone)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                    >
                      কল করুন
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="text-blue-600 mr-2" size={16} />
                    <span className="text-gray-700 bengali-font text-sm">{store.workingHours}</span>
                  </div>
                  
                  <div>
                    <p className="text-gray-600 bengali-font text-sm mb-2">
                      মালিক: {store.owner}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-gray-800 bengali-font font-medium mb-2">পণ্যসমূহ:</h4>
                    <div className="flex flex-wrap gap-1">
                      {store.products.map((product, productIndex) => (
                        <span
                          key={productIndex}
                          className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full bengali-font"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PharmacyPage;
