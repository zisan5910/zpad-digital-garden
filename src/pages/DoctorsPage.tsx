import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const DoctorsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 bengali-font">ডাক্তার</h1>
        <p className="text-gray-600 text-sm bengali-font">ডাক্তারদের তালিকা</p>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default DoctorsPage;
