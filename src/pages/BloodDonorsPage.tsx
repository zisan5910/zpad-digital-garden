import React from 'react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const BloodDonorsPage = () => {
  // Dummy data for blood donors
  const bloodDonors = [
    {
      name: 'Md. Ridoan Zisan',
      bloodType: 'O+',
      location: 'Dhunat Sadar',
      phone: '01712525910',
      lastDonation: '2024-01-15'
    },
    {
      name: 'Jahid Hasan',
      bloodType: 'A+',
      location: ' এলাঙ্গী ',
      phone: '01912345678',
      lastDonation: '2023-12-20'
    },
    {
      name: 'Sumaiya Islam',
      bloodType: 'B+',
      location: 'Dhunat Town',
      phone: '01888777666',
      lastDonation: '2024-02-01'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 bengali-font">রক্তদাতা</h1>
        <p className="text-gray-600 mb-4 bengali-font">যোগাযোগ করুন জীবন বাঁচাতে</p>

        {bloodDonors.map((donor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 bengali-font">{donor.name}</h2>
            <p className="text-gray-700 mb-1 bengali-font">
              <b> রক্তের গ্রুপ:</b> {donor.bloodType}
            </p>
            <p className="text-gray-700 mb-1 bengali-font">
              <b> এলাকা:</b> {donor.location}
            </p>
            <p className="text-gray-700 mb-2">
              <b> ফোন:</b> <a href={`tel:${donor.phone}`} className="text-blue-600">{donor.phone}</a>
            </p>
            <p className="text-gray-600 text-sm bengali-font">
              শেষ রক্তদান: {donor.lastDonation}
            </p>
          </div>
        ))}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default BloodDonorsPage;
