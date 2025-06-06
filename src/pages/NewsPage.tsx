
import React, { useState } from 'react';
import { ArrowLeft, Search, Calendar, Eye, Share2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NewsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all', 'স্থানীয় সংবাদ', 'রাজনীতি', 'শিক্ষা', 'স্বাস্থ্য', 'ব্যবসা', 'খেলাধুলা', 'বিনোদন', 'অপরাধ'
  ];

  const news = [
    {
      id: 1,
      title: 'ধুনটে নতুন হাসপাতাল উদ্বোধন',
      category: 'স্থানীয় সংবাদ',
      excerpt: 'উপজেলার স্বাস্থ্য সেবায় নতুন মাত্রা যোগ হলো আধুনিক হাসপাতাল উদ্বোধনের মধ্য দিয়ে...',
      publishedAt: '২ ঘন্টা আগে',
      author: 'স্থানীয় প্রতিবেদক',
      views: '১২৫',
      imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=250&fit=crop',
      source: 'ধুনট নিউজ'
    },
    {
      id: 2,
      title: 'কৃষকদের জন্য নতুন সার বিতরণ কর্মসূচি',
      category: 'স্থানীয় সংবাদ',
      excerpt: 'আগামী সপ্তাহ থেকে শুরু হচ্ছে কৃষকদের মাঝে ভর্তুকি মূল্যে সার বিতরণ...',
      publishedAt: '৫ ঘন্টা আগে',
      author: 'কৃষি প্রতিবেদক',
      views: '৮৯',
      imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=250&fit=crop',
      source: 'বগুড়া প্রতিদিন'
    }
  ];

  const handleShare = (newsTitle: string) => {
    if (navigator.share) {
      navigator.share({
        title: newsTitle,
        text: 'ধুনট অ্যাপ থেকে সংবাদ দেখুন',
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('লিংক কপি হয়েছে!');
    }
  };

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">আজকের বগুড়া</h1>
              <p className="text-blue-100 text-sm bengali-font">স্থানীয় সংবাদ</p>
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
              placeholder="সংবাদ খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'সকল ক্যাটাগরি' : category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="px-4 pb-20">
        {filteredNews.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium bengali-font">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500 bengali-font">{item.source}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-800 bengali-font mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm bengali-font mb-3">{item.excerpt}</p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span className="bengali-font">{item.publishedAt}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye size={14} />
                    <span className="bengali-font">{item.views} ভিউ</span>
                  </div>
                </div>
                <span className="bengali-font">লেখক: {item.author}</span>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleShare(item.title)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold bengali-font hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <Share2 size={16} />
                  <span>শেয়ার</span>
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink size={16} />
                  <span>বিস্তারিত</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
