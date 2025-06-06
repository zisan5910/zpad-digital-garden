
import React from 'react';
import Header from '../components/Header';
import AdBanner from '../components/AdBanner';
import EmergencyNotice from '../components/EmergencyNotice';
import ServiceCategories from '../components/ServiceCategories';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      <AdBanner />
      <EmergencyNotice />
      <ServiceCategories />
      <BottomNavigation />
    </div>
  );
};

export default Index;
