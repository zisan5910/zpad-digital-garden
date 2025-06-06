import React from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <HamburgerMenu />
            {/* Updated logo with image */}
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/05hF33K5/IMG-20250606-WA0001.jpg" 
                alt="Dhunat.App Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bengali-font">Dhunat.App</h1>
              <p className="text-green-100 text-sm bengali-font">লোকাল সার্ভিস ডিরেক্টরি</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
