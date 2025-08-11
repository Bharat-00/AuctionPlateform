export interface User {
  id: string;
  name: string;
  email: string;
  type: 'rider' | 'trainer' | 'provider';
  avatar?: string;
  bio?: string;
  rating: number;
  reviewCount: number;
  joinDate: string;
  location: string;
  verified: boolean;
}

export interface AuctionItem {
  id: string;
  title: string;
  description: string;
  category: 'trail-ride' | 'training' | 'leasing' | 'event';
  images: string[];
  startingBid: number;
  currentBid: number;
  bidCount: number;
  endTime: string;
  location: string;
  seller: User;
  featured: boolean;
  duration: string;
  maxParticipants: number;
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'all';
}

export interface Bid {
  id: string;
  auctionId: string;
  userId: string;
  user: User;
  amount: number;
  timestamp: string;
}

export interface Review {
  id: string;
  userId: string;
  user: User;
  auctionId: string;
  rating: number;
  comment: string;
  timestamp: string;
}