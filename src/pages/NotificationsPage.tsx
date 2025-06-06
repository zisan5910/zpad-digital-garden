
import React, { useState } from 'react';
import { ArrowLeft, Bell, Clock, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'সাধারণ', 'জরুরি', 'আপডেট', 'সেবা'];

  const notifications = [
    {
      id: 1,
      title: 'নতুন ডাক্তার যোগ দিয়েছেন',
      message: 'ডাঃ সাহিদা খাতুন (শিশু বিশেষজ্ঞ) ধুনট আধুনিক হাসপাতালে যোগ দিয়েছেন।',
      category: 'সেবা',
      time: '২ ঘন্টা আগে',
      type: 'info',
      read: false
    },
    {
      id: 2,
      title: 'জরুরি নোটিশ',
      message: 'আগামীকাল বিদ্যুৎ বিভ্রাট থাকবে সকাল ১০টা থেকে দুপুর ২টা পর্যন্ত।',
      category: 'জরুরি',
      time: '৫ ঘন্টা আগে',
      type: 'warning',
      read: false
    },
    {
      id: 3,
      title: 'অ্যাপ আপডেট',
      message: 'নতুন ফিচার যোগ হয়েছে - এখন আপনি মানচিত্রে সকল সেবা দেখতে পারবেন।',
      category: 'আপডেট',
      time: '১ দিন আগে',
      type: 'success',
      read: true
    },
    {
      id: 4,
      title: 'রক্তদানের প্রয়োজন',
      message: 'ধুনট হাসপাতালে O+ রক্তের জরুরি প্রয়োজন। যোগাযোগ: ০১৭১১-৯৯৯৯৯৯',
      category: 'জরুরি',
      time: '২ দিন আগে',
      type: 'warning',
      read: true
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      default:
        return <Info className="text-blue-500" size={20} />;
    }
  };

  const filteredNotifications = notifications.filter(notification =>
    selectedCategory === 'all' || notification.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">নোটিশ ও বিজ্ঞপ্তি</h1>
              <p className="text-purple-100 text-sm bengali-font">সর্বশেষ আপডেট</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4 bg-white shadow-sm">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bengali-font"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'সকল নোটিশ' : category}
            </option>
          ))}
        </select>
      </div>

      <div className="px-4 pb-20">
        {filteredNotifications.map((notification) => (
          <div key={notification.id} className={`bg-white rounded-lg shadow-md mb-4 p-4 border-l-4 ${
            notification.type === 'warning' ? 'border-red-500' :
            notification.type === 'success' ? 'border-green-500' : 'border-blue-500'
          } ${!notification.read ? 'bg-blue-50' : ''}`}>
            <div className="flex items-start space-x-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-bold text-gray-800 bengali-font ${!notification.read ? 'text-blue-800' : ''}`}>
                    {notification.title}
                  </h3>
                  {!notification.read && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">নতুন</span>
                  )}
                </div>
                
                <p className="text-gray-700 bengali-font mb-2">{notification.message}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock size={14} />
                    <span className="bengali-font">{notification.time}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    notification.category === 'জরুরি' ? 'bg-red-100 text-red-800' :
                    notification.category === 'সেবা' ? 'bg-green-100 text-green-800' :
                    notification.category === 'আপডেট' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  } bengali-font`}>
                    {notification.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
