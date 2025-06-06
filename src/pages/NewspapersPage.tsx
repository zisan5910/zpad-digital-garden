
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Newspaper, ExternalLink, Clock } from 'lucide-react';

const NewspapersPage = () => {
  const newspapers = [
    {
      name: 'প্রথম আলো',
      url: 'https://www.prothomalo.com/',
      type: 'জাতীয়',
      language: 'বাংলা',
      publishTime: 'দৈনিক'
    },
    {
      name: 'কালের কণ্ঠ',
      url: 'https://www.kalerkantho.com/',
      type: 'জাতীয়',
      language: 'বাংলা',
      publishTime: 'দৈনিক'
    },
    {
      name: 'যুগান্তর',
      url: 'https://www.jugantor.com/',
      type: 'জাতীয়',
      language: 'বাংলা',
      publishTime: 'দৈনিক'
    },
    {
      name: 'ইত্তেফাক',
      url: 'https://www.ittefaq.com.bd/',
      type: 'জাতীয়',
      language: 'বাংলা',
      publishTime: 'দৈনিক'
    },
    {
      name: 'দৈনিক স্টার',
      url: 'https://www.thedailystar.net/',
      type: 'জাতীয়',
      language: 'ইংরেজি',
      publishTime: 'দৈনিক'
    },
    {
      name: 'বগুড়া নিউজ ২৪',
      url: '#',
      type: 'স্থানীয়',
      language: 'বাংলা',
      publishTime: 'অনলাইন'
    },
    {
      name: 'উত্তরাঞ্চল নিউজ',
      url: '#',
      type: 'আঞ্চলিক',
      language: 'বাংলা',
      publishTime: 'সাপ্তাহিক'
    }
  ];

  const handleReadNewspaper = (url: string, name: string) => {
    if (url === '#') {
      alert(`${name} শীঘ্রই আসছে`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Newspaper className="text-gray-700 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">সংবাদপত্র</h1>
            <p className="text-gray-600 text-sm bengali-font">দৈনিক ও স্থানীয় সংবাদপত্র</p>
          </div>
        </div>

        <div className="space-y-4">
          {newspapers.map((newspaper, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 bengali-font mb-2">
                    {newspaper.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full bengali-font">
                      {newspaper.type}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full bengali-font">
                      {newspaper.language}
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full bengali-font flex items-center">
                      <Clock size={12} className="mr-1" />
                      {newspaper.publishTime}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleReadNewspaper(newspaper.url, newspaper.name)}
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <ExternalLink size={16} className="mr-2" />
                <span className="bengali-font">পড়ুন</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default NewspapersPage;
