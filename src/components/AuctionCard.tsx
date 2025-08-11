import React from 'react';
import { Clock, MapPin, Users, Star, Award } from 'lucide-react';
import { AuctionItem } from '../types';

interface AuctionCardProps {
  auction: AuctionItem;
  onBidClick: (auction: AuctionItem) => void;
}

export default function AuctionCard({ auction, onBidClick }: AuctionCardProps) {
  const timeRemaining = new Date(auction.endTime).getTime() - new Date().getTime();
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'trail-ride': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-blue-100 text-blue-800';
      case 'leasing': return 'bg-purple-100 text-purple-800';
      case 'event': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'trail-ride': return 'Trail Ride';
      case 'training': return 'Training';
      case 'leasing': return 'Leasing';
      case 'event': return 'Event';
      default: return category;
    }
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      case 'all': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {auction.featured && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold flex items-center">
          <Award className="h-4 w-4 mr-2" />
          Featured Auction
        </div>
      )}
      
      <div className="relative">
        <img 
          src={auction.images[0]} 
          alt={auction.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(auction.category)}`}>
            {getCategoryLabel(auction.category)}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSkillLevelColor(auction.skillLevel)}`}>
            {auction.skillLevel}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {auction.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {auction.description}
        </p>
        
        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {auction.location}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {auction.maxParticipants} max
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {auction.duration}
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <img 
            src={auction.seller.avatar} 
            alt={auction.seller.name}
            className="h-8 w-8 rounded-full object-cover mr-3"
          />
          <div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-900">{auction.seller.name}</span>
              {auction.seller.verified && (
                <Award className="h-4 w-4 text-amber-500 ml-1" />
              )}
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
              <span className="text-xs text-gray-600">
                {auction.seller.rating} ({auction.seller.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-3">
            <div>
              <div className="text-2xl font-bold text-gray-900">
                ${auction.currentBid.toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">
                {auction.bidCount} bids
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                {days}d {hours}h {minutes}m
              </div>
              <div className="text-xs text-gray-500">remaining</div>
            </div>
          </div>
          
          <button 
            onClick={() => onBidClick(auction)}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}