import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroProps {
  onSearchClick: () => void;
}

export default function Hero({ onSearchClick }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-orange-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              Premium Equestrian Experiences
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bid on Exclusive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}Horse Riding{' '}
            </span>
            Experiences
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover and bid on unique equestrian adventures, from sunrise trail rides 
            to championship training sessions. Connect with world-class trainers and 
            experience the thrill of horse riding like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onSearchClick}
              className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Search className="h-5 w-5 mr-2" />
              Explore Auctions
            </button>
            
            <button className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-semibold rounded-lg transition-colors">
              List Your Experience
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-600">500+</div>
              <div className="text-gray-600">Active Auctions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">50k+</div>
              <div className="text-gray-600">Happy Riders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">200+</div>
              <div className="text-gray-600">Expert Trainers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </div>
  );
}