
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Sparkles, MapPin, Clock, Book, Users } from 'lucide-react';

const PrayersPage = () => {
  const religiousPlaces = [
    {
      name: 'ধুনট কেন্দ্রীয় জামে মসজিদ',
      type: 'মসজিদ',
      address: 'ধুনট বাজার, বগুড়া',
      imam: 'মাওলানা আবুল কালাম আজাদ',
      capacity: '৫০০ জন',
      prayerTimes: {
        fajr: '৫:০০',
        dhuhr: '১২:১৫',
        asr: '৪:৩০',
        maghrib: '৬:১৫',
        isha: '৭:৩০'
      },
      facilities: ['ওযুখানা', 'মহিলাদের নামাযের স্থান', 'পার্কিং', 'কুরআন শিক্ষা']
    },
    {
      name: 'বায়তুল মুকাররম মসজিদ',
      type: 'মসজিদ',
      address: 'ধুনট সদর, বগুড়া',
      imam: 'হাফেজ মোঃ নুরুল ইসলাম',
      capacity: '৩০০ জন',
      prayerTimes: {
        fajr: '৫:০৫',
        dhuhr: '১২:২০',
        asr: '৪:৩৫',
        maghrib: '৬:২০',
        isha: '৭:৩৫'
      },
      facilities: ['মাদ্রাসা', 'ইসলামী লাইব্রেরি', 'হিফজখানা']
    },
    {
      name: 'শ্রী রাধা কৃষ্ণ মন্দির',
      type: 'মন্দির',
      address: 'ধুনট হিন্দুপাড়া, বগুড়া',
      priest: 'পণ্ডিত রাম প্রসাদ শর্মা',
      capacity: '১০০ জন',
      prayerTimes: {
        morning: '৬:০০',
        afternoon: '১২:০০',
        evening: '৬:০০'
      },
      facilities: ['প্রসাদ বিতরণ', 'ধর্মীয় শিক্ষা', 'উৎসব আয়োজন']
    }
  ];

  const islamicContent = [
    {
      title: 'দৈনন্দিন দোয়া',
      items: [
        'বিসমিল্লাহির রাহমানির রাহীম',
        'আলহামদুলিল্লাহি রাব্বিল আলামীন',
        'সুবহানাল্লাহি ওয়াবিহামদিহী',
        'লা ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ'
      ]
    },
    {
      title: 'তাসবীহ',
      items: [
        'সুবহানাল্লাহ (৩৩ বার)',
        'আলহামদুলিল্লাহ (৩৩ বার)',
        'আল্লাহু আকবার (৩৪ বার)',
        'লা হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Sparkles className="text-emerald-600 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">ধর্মীয় সেবা</h1>
            <p className="text-gray-600 text-sm bengali-font">প্রার্থনা ও ধর্মীয় স্থান</p>
          </div>
        </div>

        {/* Prayer Times Section */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 bengali-font mb-3">আজকের নামাযের সময়</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">ফজর</p>
              <p className="text-emerald-600">৫:০০</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">যোহর</p>
              <p className="text-emerald-600">১২:১৫</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">আসর</p>
              <p className="text-emerald-600">৪:৩০</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">মাগরিব</p>
              <p className="text-emerald-600">৬:১৫</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">এশা</p>
              <p className="text-emerald-600">৭:৩০</p>
            </div>
            <div className="text-center">
              <p className="text-emerald-700 bengali-font font-medium">জুমআ</p>
              <p className="text-emerald-600">১:০০</p>
            </div>
          </div>
        </div>

        {/* Religious Places */}
        <div className="space-y-4 mb-6">
          {religiousPlaces.map((place, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <Sparkles className="text-emerald-600 mr-3" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 bengali-font">
                      {place.name}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full bengali-font mt-1">
                      {place.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gray-500 mr-2 mt-1" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">{place.address}</span>
                </div>
                
                <div className="flex items-center">
                  <Users className="text-blue-600 mr-2" size={16} />
                  <span className="text-gray-700 bengali-font text-sm">ধারণক্ষমতা: {place.capacity}</span>
                </div>
                
                <div>
                  <p className="text-gray-600 bengali-font text-sm mb-2">
                    {place.imam && `ইমাম: ${place.imam}`}
                    {place.priest && `পুরোহিত: ${place.priest}`}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gray-800 bengali-font font-medium mb-2">সুবিধাসমূহ:</h4>
                  <div className="flex flex-wrap gap-1">
                    {place.facilities.map((facility, facilityIndex) => (
                      <span
                        key={facilityIndex}
                        className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full bengali-font"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Islamic Content */}
        <div className="space-y-4">
          {islamicContent.map((content, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center mb-3">
                <Book className="text-emerald-600 mr-2" size={20} />
                <h3 className="text-lg font-semibold text-gray-800 bengali-font">{content.title}</h3>
              </div>
              <div className="space-y-2">
                {content.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-2 bg-emerald-50 rounded text-gray-700 bengali-font text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default PrayersPage;
