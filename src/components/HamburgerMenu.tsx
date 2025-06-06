import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Phone, Bell, Info, Code, User, ExternalLink, MessageSquare, Settings, HelpCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const quickLinks = [
    { name: 'হোম', icon: Home, path: '/', color: 'text-green-600' },
    { name: 'আমার অ্যাপ', icon: User, path: '/my-app', color: 'text-blue-600' },
    { name: 'নোটিশ', icon: Bell, path: '/notifications', color: 'text-orange-600' },
    { name: 'সেটিংস', icon: Settings, path: '/settings', color: 'text-gray-600' },
    { name: 'সম্পর্কে', icon: Info, path: '/about', color: 'text-purple-600' }
  ];

  const supportLinks = [
    { name: 'সাহায্য', icon: HelpCircle, path: '/help', color: 'text-blue-500' },
    { name: 'ফিডব্যাক', icon: MessageSquare, path: '/feedback', color: 'text-teal-500' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleUpdateRequest = () => {
    window.open('https://forms.google.com/your-form-link', '_blank');
    setIsOpen(false);
  };

  const handleDeveloperLink = () => {
    window.open('https://ridoan-zisan.netlify.app', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={toggleMenu}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section with Logo */}
            <div className="p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src="https://i.postimg.cc/05hF33K5/IMG-20250606-WA0001.jpg" 
                      alt="Dhunat.App Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold bengali-font">Dhunat.App</h2>
                    <p className="text-green-100 text-sm bengali-font">লোকাল সার্ভিস ডিরেক্টরি</p>
                  </div>
                </div>
                <button 
                  onClick={toggleMenu} 
                  className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto pb-4">
              <div className="p-4">
                {/* Quick Links */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 bengali-font border-b pb-2">দ্রুত লিংক</h3>
                  <div className="space-y-1">
                    {quickLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <button
                          key={link.path}
                          onClick={() => handleNavigation(link.path)}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left focus:outline-none focus:bg-gray-100"
                        >
                          <IconComponent size={20} className={link.color} />
                          <span className="bengali-font font-medium text-gray-800">{link.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Support Links */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 bengali-font border-b pb-2">সাহায্য ও সমর্থন</h3>
                  <div className="space-y-1">
                    {supportLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <button
                          key={link.path}
                          onClick={() => handleNavigation(link.path)}
                          className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left focus:outline-none focus:bg-gray-100"
                        >
                          <IconComponent size={20} className={link.color} />
                          <span className="bengali-font font-medium text-gray-800">{link.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Update Request Card */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 bengali-font">অ্যাপ আপডেট আবেদন</h3>
                  <p className="text-sm text-gray-600 mb-3 bengali-font">
                    আপনার পছন্দের সেবা যোগ করতে বা অ্যাপ উন্নত করতে আবেদন করুন
                  </p>
                  <button
                    onClick={handleUpdateRequest}
                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <ExternalLink size={16} />
                    <span className="bengali-font">আবেদন করুন</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="border-t pt-4 px-4 pb-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 bengali-font">ডেভেলপার তথ্য</h3>
              <div className="space-y-3">
                <button 
                  onClick={handleDeveloperLink}
                  className="w-full flex items-center space-x-3 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                >
                  <Code className="text-indigo-600" size={20} />
                  <div className="text-left">
                    <p className="font-medium bengali-font">তৈরি করেছেন</p>
                    <p className="text-sm text-gray-600">Md. Ridoan Mahmud Zisan</p>
                    <p className="text-xs text-blue-500 mt-1">ridoan-zisan.netlify.app</p>
                  </div>
                </button>
                <div className="flex items-center space-x-3">
                  <Phone className="text-green-600" size={20} />
                  <div>
                    <p className="font-medium bengali-font">যোগাযোগ</p>
                    <p className="text-sm text-gray-600">01712525910</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-4 bengali-font text-center">
                  সংস্করণ 2025 • Dhunat.App
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
