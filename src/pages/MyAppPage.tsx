
import React from 'react';
import { ArrowLeft, Plus, Star, MessageSquare, ExternalLink, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MyAppPage = () => {
  const navigate = useNavigate();

  const handleUpdateRequest = () => {
    window.open('https://forms.google.com/your-form-link', '_blank');
  };

  const features = [
    { icon: Plus, title: 'নতুন সেবা যোগ করুন', description: 'আপনার এলাকার নতুন সেবা যোগ করার জন্য আবেদন করুন' },
    { icon: Star, title: 'ফিচার উন্নতি', description: 'বিদ্যমান ফিচার উন্নত করার পরামর্শ দিন' },
    { icon: MessageSquare, title: 'মতামত দিন', description: 'অ্যাপ সম্পর্কে আপনার মূল্যবান মতামত জানান' },
    { icon: Lightbulb, title: 'নতুন আইডিয়া', description: 'অ্যাপের জন্য নতুন আইডিয়া শেয়ার করুন' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">আমার অ্যাপ</h1>
              <p className="text-blue-100 text-sm bengali-font">অ্যাপ কাস্টমাইজ ও আপডেট</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 bengali-font mb-2">স্বাগতম!</h2>
          <p className="text-gray-600 bengali-font mb-4">
            এই অ্যাপটি আপনার প্রয়োজন অনুযায়ী তৈরি। আপনার মতামত ও পরামর্শের ভিত্তিতে আমরা অ্যাপটি আরও উন্নত করতে চাই।
          </p>
          <button
            onClick={handleUpdateRequest}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            <ExternalLink size={20} />
            <span className="bengali-font font-semibold">আপডেট আবেদন করুন</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                    <IconComponent className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 bengali-font">{feature.title}</h3>
                </div>
                <p className="text-gray-600 bengali-font">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 bengali-font mb-4">কীভাবে আবেদন করবেন?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-semibold bengali-font">আবেদন ফর্ম পূরণ করুন</h4>
                <p className="text-gray-600 bengali-font">উপরের বাটনে ক্লিক করে গুগল ফর্ম পূরণ করুন</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-semibold bengali-font">বিস্তারিত তথ্য দিন</h4>
                <p className="text-gray-600 bengali-font">আপনার প্রয়োজনীয় সেবা বা ফিচারের বিস্তারিত লিখুন</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-semibold bengali-font">অপেক্ষা করুন</h4>
                <p className="text-gray-600 bengali-font">আমাদের টিম আপনার আবেদন পর্যালোচনা করে আপডেট করবে</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppPage;
