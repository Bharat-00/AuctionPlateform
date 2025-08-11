import React, { useState } from 'react';
import { User, Bell, Menu, X, Users as Horse } from 'lucide-react';

interface HeaderProps {
  currentUser: any;
  onAuthClick: () => void;
}

export default function Header({ currentUser, onAuthClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-2 rounded-lg">
                <Horse className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EquiAuction</h1>
                <p className="text-xs text-amber-600 font-medium">Premium Riding Experiences</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#auctions" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Auctions
            </a>
            <a href="#experiences" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Experiences
            </a>
            <a href="#trainers" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              Trainers
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
              How It Works
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <button className="relative p-2 text-gray-600 hover:text-amber-600 transition-colors">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <div className="flex items-center space-x-2">
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="hidden sm:block text-sm font-medium text-gray-700">
                    {currentUser.name}
                  </span>
                </div>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Sign In
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#auctions" className="text-gray-700 hover:text-amber-600 font-medium">
                Auctions
              </a>
              <a href="#experiences" className="text-gray-700 hover:text-amber-600 font-medium">
                Experiences
              </a>
              <a href="#trainers" className="text-gray-700 hover:text-amber-600 font-medium">
                Trainers
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-amber-600 font-medium">
                How It Works
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}