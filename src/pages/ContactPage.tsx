
import React from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, Facebook, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmail = (email: string) => {
    window.open(`mailto:${email}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">যোগাযোগ</h1>
              <p className="text-blue-100 text-sm bengali-font">আমাদের সাথে যোগাযোগ করুন</p>
            </div>
          </div>
        </div>
      </header>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-800 bengali-font mb-4">Dhunat.App টিম</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="text-green-600" size={20} />
              <div>
                <p className="font-semibold bengali-font">ফোন</p>
                <button 
                  onClick={() => handleCall('01711-999888')}
                  className="text-blue-600 hover:underline bengali-font"
                >
                  ০১৭১১-৯৯৯৮৮৮
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="text-red-600" size={20} />
              <div>
                <p className="font-semibold bengali-font">ইমেইল</p>
                <button 
                  onClick={() => handleEmail('info@dhunat.app')}
                  className="text-blue-600 hover:underline"
                >
                  info@dhunat.app
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MapPin className="text-purple-600" size={20} />
              <div>
                <p className="font-semibold bengali-font">ঠিকানা</p>
                <p className="text-gray-600 bengali-font">ধুনট, বগুড়া, বাংলাদেশ</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="text-orange-600" size={20} />
              <div>
                <p className="font-semibold bengali-font">সেবার সময়</p>
                <p className="text-gray-600 bengali-font">সকাল ৯টা - রাত ৯টা (সপ্তাহের সব দিন)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-800 bengali-font mb-4">সামাজিক মাধ্যম</h2>
          
          <div className="space-y-3">
            <button className="flex items-center space-x-3 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Facebook size={20} />
              <span className="bengali-font">Facebook: Dhunat App</span>
            </button>
            
            <button className="flex items-center space-x-3 w-full p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Globe size={20} />
              <span>Website: www.dhunat.app</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 bengali-font mb-4">মতামত ও পরামর্শ</h2>
          <p className="text-gray-600 bengali-font mb-4">
            আপনার মূল্যবান মতামত ও পরামর্শ আমাদের জানান। আমরা আমাদের সেবার মান উন্নত করতে প্রতিশ্রুতিবদ্ধ।
          </p>
          
          <div className="space-y-3">
            <input
              type="text"
              placeholder="আপনার নাম"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
            />
            <input
              type="email"
              placeholder="ইমেইল"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="আপনার মতামত লিখুন..."
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bengali-font"
            ></textarea>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors">
              পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
