
import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import { Globe, ExternalLink, Star } from 'lucide-react';

const WebsitesPage = () => {
  const websites = [
    {
      name: 'Dhunat Upazila Portal',
      url: 'http://dhunat.bogura.gov.bd/',
      category: 'সরকারি',
      description: 'ধুনট উপজেলার অফিসিয়াল ওয়েবসাইট',
      rating: 4.5
    },
    {
      name: 'Bogura District Portal',
      url: 'http://bogura.gov.bd/',
      category: 'সরকারি',
      description: 'বগুড়া জেলার অফিসিয়াল ওয়েবসাইট',
      rating: 4.2
    },
    {
      name: 'Bangladesh Government Portal',
      url: 'https://www.bangladesh.gov.bd/',
      category: 'সরকারি',
      description: 'বাংলাদেশ সরকারের মূল ওয়েবসাইট',
      rating: 4.0
    },
    {
      name: 'Prothom Alo',
      url: 'https://www.prothomalo.com/',
      category: 'সংবাদ',
      description: 'বাংলাদেশের জনপ্রিয় সংবাদপত্র',
      rating: 4.8
    },
    {
      name: 'Kaler Kantho',
      url: 'https://www.kalerkantho.com/',
      category: 'সংবাদ',
      description: 'দৈনিক কালের কণ্ঠ অনলাইন',
      rating: 4.3
    },
    {
      name: 'Bangladesh Railway',
      url: 'https://railway.gov.bd/',
      category: 'পরিবহন',
      description: 'বাংলাদেশ রেলওয়ের অফিসিয়াল সাইট',
      rating: 3.8
    }
  ];

  const handleVisitWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <div className="flex items-center mb-6">
          <Globe className="text-cyan-500 mr-3" size={28} />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 bengali-font">ওয়েবসাইট সমূহ</h1>
            <p className="text-gray-600 text-sm bengali-font">গুরুত্বপূর্ণ ওয়েবসাইটের তালিকা</p>
          </div>
        </div>

        <div className="space-y-4">
          {websites.map((website, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 bengali-font mb-1">
                    {website.name}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full bengali-font mb-2">
                    {website.category}
                  </span>
                  <p className="text-gray-600 text-sm bengali-font mb-2">
                    {website.description}
                  </p>
                  <div className="flex items-center mb-3">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="text-sm text-gray-600">{website.rating}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => handleVisitWebsite(website.url)}
                className="w-full bg-cyan-500 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center"
              >
                <ExternalLink size={16} className="mr-2" />
                <span className="bengali-font">ওয়েবসাইট ভিজিট করুন</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default WebsitesPage;
