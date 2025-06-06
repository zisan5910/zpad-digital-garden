
import React, { useState } from 'react';
import { ArrowLeft, Phone, MapPin, Star, Search, GraduationCap, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const TeachersPage = () => {
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    'all', 'ইংরেজি', 'গণিত', 'বিজ্ঞান', 'বাংলা', 'সামাজিক বিজ্ঞান', 
    'আইসিটি', 'ধর্ম', 'কোরআন শিক্ষা', 'আরবি', 'সঙ্গীত'
  ];

  const teachers = [
    {
      id: 1,
      name: 'প্রফেসর আহমেদ হাসান',
      subject: 'ইংরেজি',
      phone: '01711-333111',
      address: 'কলেজ রোড, ধুনট',
      rating: 4.9,
      experience: '২০ বছর',
      education: 'এমএ ইংরেজি (ঢাকা বিশ্ববিদ্যালয়)',
      institution: 'ধুনট কলেজ',
      classes: ['এসএসসি', 'এইচএসসি', 'স্নাতক'],
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      fees: '১০০০-২০০০ টাকা/মাস',
      availability: 'সন্ধ্যা ৫টা - রাত ৮টা',
      hometuition: true
    },
    {
      id: 2,
      name: 'মিসেস ফাতেমা খাতুন',
      subject: 'গণিত',
      phone: '01712-444222',
      address: 'স্টেশন রোড, ধুনট',
      rating: 4.8,
      experience: '১৫ বছর',
      education: 'এমএসসি গণিত (রাজশাহী বিশ্ববিদ্যালয়)',
      institution: 'ধুনট উচ্চ বিদ্যালয়',
      classes: ['৬ষ্ঠ', '৭ম', '৮ম', '৯ম', '১০ম'],
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b742?w=300&h=300&fit=crop',
      fees: '৮০০-১৫০০ টাকা/মাস',
      availability: 'বিকাল ৩টা - সন্ধ্যা ৬টা',
      hometuition: true
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredTeachers = teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || teacher.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">শিক্ষক</h1>
              <p className="text-teal-100 text-sm bengali-font">প্রাইভেট টিউটর</p>
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
              placeholder="শিক্ষক খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bengali-font"
            />
          </div>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bengali-font"
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject === 'all' ? 'সকল বিষয়' : subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-4">
        <button
          onClick={() => setShowMap(!showMap)}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <MapPin size={20} />
          <span>{showMap ? 'তালিকা দেখুন' : 'মানচিত্র দেখুন'}</span>
        </button>
      </div>

      {showMap ? (
        <div className="px-4 pb-4">
          <div className="h-96 rounded-lg overflow-hidden">
            <Map />
          </div>
        </div>
      ) : (
        <div className="px-4 pb-20">
          {filteredTeachers.map((teacher) => (
            <div key={teacher.id} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <div className="p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 bengali-font">{teacher.name}</h3>
                    <p className="text-teal-600 font-medium bengali-font">{teacher.subject} শিক্ষক</p>
                    <p className="text-gray-600 text-sm bengali-font">{teacher.institution}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm text-gray-600">{teacher.rating}</span>
                      <span className="text-sm text-gray-500">• {teacher.experience} অভিজ্ঞতা</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    <span className="bengali-font">{teacher.address}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <GraduationCap size={16} />
                    <span className="bengali-font">{teacher.education}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <BookOpen size={16} />
                    <span className="bengali-font">ফিস: {teacher.fees}</span>
                  </div>
                  {teacher.hometuition && (
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <GraduationCap size={16} />
                      <span className="bengali-font">হোম টিউশন উপলব্ধ</span>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <h4 className="font-semibold text-gray-800 bengali-font mb-2">পাঠদান ক্লাস:</h4>
                  <div className="flex flex-wrap gap-2">
                    {teacher.classes.map((className, index) => (
                      <span key={index} className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs bengali-font">
                        {className}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 text-sm text-gray-600 bengali-font">
                  <strong>সময়সূচি:</strong> {teacher.availability}
                </div>

                <div className="mt-4 flex space-x-3">
                  <button
                    onClick={() => handleCall(teacher.phone)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone size={18} />
                    <span>যোগাযোগ করুন</span>
                  </button>
                  <button className="flex-1 bg-teal-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-teal-700 transition-colors">
                    বিস্তারিত
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachersPage;
