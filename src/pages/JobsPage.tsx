
import React, { useState } from 'react';
import { ArrowLeft, Search, MapPin, Clock, Briefcase, DollarSign, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const JobsPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const categories = [
    'all', 'সরকারি চাকরি', 'বেসরকারি চাকরি', 'শিক্ষা প্রতিষ্ঠান', 'ব্যাংক', 
    'তথ্যপ্রযুক্তি', 'স্বাস্থ্য সেবা', 'ব্যবসা', 'পার্ট টাইম'
  ];

  const jobTypes = ['all', 'ফুল টাইম', 'পার্ট টাইম', 'কন্ট্র্যাক্ট', 'ইন্টার্নশিপ'];

  const jobs = [
    {
      id: 1,
      title: 'কম্পিউটার অপারেটর',
      company: 'ধুনট উপজেলা কার্যালয়',
      category: 'সরকারি চাকরি',
      type: 'ফুল টাইম',
      location: 'ধুনট, বগুড়া',
      salary: '১৫,০০০ - ২৫,০০০ টাকা',
      experience: '১-৩ বছর',
      education: 'এইচএসসি',
      deadline: '১৫ জানুয়ারি, ২০২৫',
      posted: '৫ দিন আগে',
      requirements: ['কম্পিউটার দক্ষতা', 'বাংলা ও ইংরেজি টাইপিং', 'মাইক্রোসফট অফিস'],
      description: 'উপজেলা কার্যালয়ে কম্পিউটার সংক্রান্ত কাজের জন্য একজন দক্ষ অপারেটর প্রয়োজন।',
      contactPhone: '01711-555001',
      contactPerson: 'মোহাম্মদ রাশেদ'
    },
    {
      id: 2,
      title: 'সেলস এক্সিকিউটিভ',
      company: 'আধুনিক ইলেকট্রনিক্স',
      category: 'বেসরকারি চাকরি',
      type: 'ফুল টাইম',
      location: 'স্টেশন রোড, ধুনট',
      salary: '২০,০০০ - ৩৫,০০০ টাকা',
      experience: '১-৫ বছর',
      education: 'স্নাতক',
      deadline: '৩০ জানুয়ারি, ২০২৫',
      posted: '২ দিন আগে',
      requirements: ['বিক্রয় অভিজ্ঞতা', 'যোগাযোগ দক্ষতা', 'বাইক চালানোর লাইসেন্স'],
      description: 'ইলেকট্রনিক্স পণ্য বিক্রয় ও গ্রাহক সেবার জন্য অভিজ্ঞ সেলস এক্সিকিউটিভ প্রয়োজন।',
      contactPhone: '01712-555002',
      contactPerson: 'করিম উদ্দিন'
    }
  ];

  const handleCall = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/')} className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg">
              <ArrowLeft size={24} />
            </button>
            <div>
              <h1 className="text-xl font-bold bengali-font">চাকরির খবর</h1>
              <p className="text-green-100 text-sm bengali-font">স্থানীয় চাকরির সুযোগ</p>
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
              placeholder="চাকরি খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bengali-font"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bengali-font"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'সকল ক্যাটাগরি' : category}
                </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bengali-font"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'all' ? 'সকল ধরণ' : type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="px-4 pb-20">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-bold text-gray-800 bengali-font">{job.title}</h3>
                <p className="text-green-600 font-medium bengali-font">{job.company}</p>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium bengali-font">
                  {job.category}
                </span>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium bengali-font">
                {job.type}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin size={16} />
                <span className="bengali-font">{job.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <DollarSign size={16} />
                <span className="bengali-font font-semibold text-green-600">{job.salary}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Briefcase size={16} />
                <span className="bengali-font">অভিজ্ঞতা: {job.experience}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Users size={16} />
                <span className="bengali-font">শিক্ষাগত যোগ্যতা: {job.education}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-red-600">
                <Clock size={16} />
                <span className="bengali-font font-semibold">আবেদনের শেষ তারিখ: {job.deadline}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 text-sm bengali-font mb-2">{job.description}</p>
              <h4 className="font-semibold text-gray-800 bengali-font mb-2">প্রয়োজনীয় দক্ষতা:</h4>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((requirement, index) => (
                  <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs bengali-font">
                    {requirement}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-3">
              <p className="text-xs text-gray-500 bengali-font mb-2">
                যোগাযোগ: {job.contactPerson} • পোস্ট করা হয়েছে {job.posted}
              </p>
              <button
                onClick={() => handleCall(job.contactPhone)}
                className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold bengali-font hover:bg-green-700 transition-colors"
              >
                আবেদন করুন / যোগাযোগ করুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
