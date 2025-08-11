import React, { useState } from 'react';
import { X, Clock, MapPin, Users, Star, Award, Heart, Share2, Calendar } from 'lucide-react';
import { AuctionItem } from '../types';
import { mockBids } from '../data/mockData';

interface AuctionModalProps {
  auction: AuctionItem | null;
  onClose: () => void;
  currentUser: any;
}

export default function AuctionModal({ auction, onClose, currentUser }: AuctionModalProps) {
  const [bidAmount, setBidAmount] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showBidHistory, setShowBidHistory] = useState(false);

  if (!auction) return null;

  const timeRemaining = new Date(auction.endTime).getTime() - new Date().getTime();
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  const auctionBids = mockBids.filter(bid => bid.auctionId === auction.id);
  const minBid = auction.currentBid + 10;

  const handlePlaceBid = () => {
    if (!currentUser) {
      alert('Please sign in to place a bid');
      return;
    }
    
    const amount = parseFloat(bidAmount);
    if (amount < minBid) {
      alert(`Bid must be at least $${minBid}`);
      return;
    }
    
    alert(`Bid of $${amount} placed successfully!`);
    setBidAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Auction Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Image Gallery */}
            <div className="lg:w-1/2 p-6">
              <div className="mb-4">
                <img 
                  src={auction.images[selectedImage]} 
                  alt={auction.title}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
              </div>
              {auction.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {auction.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-amber-500' : 'border-gray-200'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:w-1/2 p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{auction.title}</h1>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {auction.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {auction.maxParticipants} max participants
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {auction.duration}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {auction.description}
              </p>

              {/* Seller Info */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <img 
                    src={auction.seller.avatar} 
                    alt={auction.seller.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900">{auction.seller.name}</span>
                      {auction.seller.verified && (
                        <Award className="h-4 w-4 text-amber-500 ml-2" />
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      {auction.seller.rating} ({auction.seller.reviewCount} reviews)
                    </div>
                  </div>
                </div>
              </div>

              {/* Bidding Section */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">
                      ${auction.currentBid.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      Current highest bid • {auction.bidCount} bids
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-900 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {days}d {hours}h {minutes}m
                    </div>
                    <div className="text-sm text-gray-600">remaining</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your bid (minimum ${minBid})
                    </label>
                    <input
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      placeholder={`$${minBid}`}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={handlePlaceBid}
                    disabled={!bidAmount || parseFloat(bidAmount) < minBid}
                    className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Place Bid
                  </button>
                </div>

                {/* Bid History */}
                <div className="mt-6">
                  <button
                    onClick={() => setShowBidHistory(!showBidHistory)}
                    className="text-amber-600 hover:text-amber-700 font-medium"
                  >
                    {showBidHistory ? 'Hide' : 'Show'} Bid History
                  </button>
                  
                  {showBidHistory && (
                    <div className="mt-4 space-y-3 max-h-40 overflow-y-auto">
                      {auctionBids.map((bid) => (
                        <div key={bid.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex items-center">
                            <img 
                              src={bid.user.avatar} 
                              alt={bid.user.name}
                              className="h-6 w-6 rounded-full object-cover mr-2"
                            />
                            <span className="text-sm font-medium">{bid.user.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-semibold">${bid.amount.toLocaleString()}</div>
                            <div className="text-xs text-gray-500">
                              {new Date(bid.timestamp).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}