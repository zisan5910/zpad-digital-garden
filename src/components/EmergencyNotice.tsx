
import React from 'react';
import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

const EmergencyNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 mx-4 my-4 p-4 rounded-r-lg animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <AlertCircle className="text-red-500 mr-3" size={20} />
          <div>
            <h3 className="text-red-800 font-semibold bengali-font">জরুরি বিজ্ঞপ্তি</h3>
            <p className="text-red-700 text-sm bengali-font mt-1">
              আজ রাত ১০টা থেকে সকাল ৬টা পর্যন্ত লোডশেডিং থাকবে। জরুরি প্রয়োজনে ০১৭১১-১২৩৪৫৬ নম্বরে যোগাযোগ করুন।
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default EmergencyNotice;
