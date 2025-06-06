
import React from 'react';
import { ArrowLeft, Heart, Users, MapPin, Smartphone, Star, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="text-blue-600" size={24} />,
      title: 'সহজ যোগাযোগ',
      description: 'এক ক্লিকেই যেকোনো সেবাদাতার সাথে যোগাযোগ করুন'
    },
    {
      icon: <MapPin className="text-green-600" size={24} />,
      title: 'অবস্থান ভিত্তিক',
      description: 'আপনার আশেপাশের সেবা খুঁজে নিন মানচিত্রের মাধ্যমে'
    },
    {
      icon: <Shield className="text-purple-600" size={24} />,
      title: 'নির্ভরযোগ্য তথ্য',
      description: 'যাচাইকৃত এবং আপডেটেড তথ্য পেয়ে থাকুন সবসময়'
    },
    {
      icon: <Star className="text-yellow-600" size={24} />,
      title: 'রেটিং সিস্টেম',
      description: 'অন্যদের রেটিং দেখে সেরা সেবা বেছে নিন'
    }
  ];

  const stats = [
    { number: '১০০+', label: 'সেবাদাতা' },
    { number: '২৪+', label: 'ক্যাটাগরি' },
    { number: '৫০০+', label: 'ব্যবহারকারী' },
    { number: '৯৮%', label: 'সন্তুষ্টি' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">আমাদের সম্পর্কে</h1>
              <p className="text-green-100 text-sm bengali-font">Dhunat.App পরিচিতি</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        {/* App Introduction */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 bengali-font mb-2">Dhunat.App</h2>
            <p className="text-gray-600 bengali-font">স্থানীয় সেবা ডিরেক্টরি</p>
          </div>
          
          <p className="text-gray-700 bengali-font text-center leading-relaxed">
            ধুনট অ্যাপ হলো একটি স্থানীয় সেবা ডিরেক্টরি যা ধুনট উপজেলার সকল ধরনের প্রয়োজনীয় সেবা এক জায়গায় নিয়ে এসেছে। 
            আমাদের লক্ষ্য হলো স্থানীয় মানুষের দৈনন্দিন জীবনকে আরো সহজ করে তোলা।
          </p>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-bold text-gray-800 bengali-font mb-4">বিশেষ বৈশিষ্ট্য</h3>
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                {feature.icon}
                <div>
                  <h4 className="font-semibold text-gray-800 bengali-font">{feature.title}</h4>
                  <p className="text-sm text-gray-600 bengali-font">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h3 className="text-xl font-bold text-gray-800 bengali-font mb-4 text-center">পরিসংখ্যান</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{stat.number}</div>
                <div className="text-sm text-gray-600 bengali-font">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="text-red-600" size={24} />
            <h3 className="text-xl font-bold text-gray-800 bengali-font">আমাদের লক্ষ্য</h3>
          </div>
          <p className="text-gray-700 bengali-font leading-relaxed">
            আমাদের মূল লক্ষ্য হলো ধুনট উপজেলার সকল মানুষের কাছে সহজে সেবা পৌঁছে দেওয়া। 
            আমরা চাই যেন একটি অ্যাপের মাধ্যমেই সবাই তাদের প্রয়োজনীয় সকল সেবা খুঁজে পায়। 
            স্থানীয় ব্যবসায়ী ও সেবাদাতাদের সাথে মানুষের যোগাযোগ সহজ করে তুলে আমরা একটি সংযুক্ত সমাজ গড়তে চাই।
          </p>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-md p-6 text-white text-center">
          <h3 className="text-xl font-bold bengali-font mb-2">যোগ দিন আমাদের সাথে</h3>
          <p className="bengali-font mb-4">আপনার ব্যবসা বা সেবা যোগ করতে চান?</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold bengali-font hover:bg-gray-100 transition-colors"
          >
            যোগাযোগ করুন
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center mt-6 text-gray-500 text-sm">
          <p>Dhunat.App v1.0.0</p>
          <p className="bengali-font">© ২০২৫ সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
