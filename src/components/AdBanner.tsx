import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AdBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const ads = [
    {
      id: 1,
      title: "স্বাগতম ধুনট অ্যাপে",
      subtitle: "আপনার সকল প্রয়োজনীয় সেবা এখানে",
      imageUrl: "https://i.postimg.cc/pTmxQF4s/images-2.jpg",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "জরুরি সেবা পেতে",
      subtitle: "আমাদের সাথে যোগাযোগ করুন",
      imageUrl: "https://i.postimg.cc/d0tJ1XBP/images-3.jpg",
      textColor: "text-white"
    },
    {
      id: 3,
      title: "নিরাপদ ও দ্রুত সেবা",
      subtitle: "২৪/৭ সেবা পাবেন এখানে",
      imageUrl: "https://i.postimg.cc/BvY41gY8/images-4.jpg",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % ads.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, ads.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % ads.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + ads.length) % ads.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div 
      className="relative h-64 overflow-hidden rounded-lg shadow-lg mx-4 my-4"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {ads.map((ad) => (
          <div 
            key={ad.id} 
            className="w-full flex-shrink-0 relative"
          >
            <img 
              src={ad.imageUrl} 
              alt={`Banner ${ad.id}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center ${ad.textColor}`}>
              <div className="text-center px-6">
                <h2 className="text-2xl font-bold mb-2 bengali-font">{ad.title}</h2>
                <p className="text-lg opacity-90 bengali-font">{ad.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>
      
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            } focus:outline-none focus:ring-2 focus:ring-white`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdBanner;
