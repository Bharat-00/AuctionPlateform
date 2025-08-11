import { User, AuctionItem, Bid } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    type: 'trainer',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Professional equestrian trainer with 15+ years experience in dressage and show jumping.',
    rating: 4.9,
    reviewCount: 127,
    joinDate: '2021-03-15',
    location: 'Wellington, FL',
    verified: true
  },
  {
    id: '2',
    name: 'James Rodriguez',
    email: 'james@example.com',
    type: 'provider',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Trail guide and ranch owner offering authentic western riding experiences.',
    rating: 4.8,
    reviewCount: 89,
    joinDate: '2020-08-22',
    location: 'Jackson Hole, WY',
    verified: true
  },
  {
    id: '3',
    name: 'Emma Thompson',
    email: 'emma@example.com',
    type: 'rider',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    bio: 'Passionate rider seeking new adventures and learning opportunities.',
    rating: 4.7,
    reviewCount: 23,
    joinDate: '2022-01-10',
    location: 'Lexington, KY',
    verified: false
  }
];

export const mockAuctions: AuctionItem[] = [
  {
    id: '1',
    title: 'Sunrise Trail Ride Through Yellowstone',
    description: 'Experience the breathtaking beauty of Yellowstone National Park on horseback during the golden hour. This exclusive 3-hour guided trail ride takes you through pristine wilderness with stunning mountain vistas and wildlife viewing opportunities.',
    category: 'trail-ride',
    images: [
      'https://images.pexels.com/photos/1996338/pexels-photo-1996338.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    startingBid: 150,
    currentBid: 280,
    bidCount: 12,
    endTime: '2024-12-25T10:00:00Z',
    location: 'Yellowstone, WY',
    seller: mockUsers[1],
    featured: true,
    duration: '3 hours',
    maxParticipants: 6,
    skillLevel: 'intermediate'
  },
  {
    id: '2',
    title: 'Private Dressage Training Session',
    description: 'One-on-one personalized dressage training with a certified FEI trainer. Perfect for riders looking to improve their technique and advance their skills in classical dressage.',
    category: 'training',
    images: [
      'https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805162/pexels-photo-1805162.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    startingBid: 100,
    currentBid: 165,
    bidCount: 8,
    endTime: '2024-12-24T15:30:00Z',
    location: 'Wellington, FL',
    seller: mockUsers[0],
    featured: false,
    duration: '1.5 hours',
    maxParticipants: 1,
    skillLevel: 'intermediate'
  },
  {
    id: '3',
    title: 'Championship Arabian Horse Lease',
    description: 'Exclusive 6-month lease opportunity for a championship Arabian mare. Perfect for experienced riders looking to compete in regional shows.',
    category: 'leasing',
    images: [
      'https://images.pexels.com/photos/1996334/pexels-photo-1996334.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    startingBid: 2500,
    currentBid: 3200,
    bidCount: 5,
    endTime: '2024-12-26T20:00:00Z',
    location: 'Scottsdale, AZ',
    seller: mockUsers[0],
    featured: true,
    duration: '6 months',
    maxParticipants: 1,
    skillLevel: 'advanced'
  },
  {
    id: '4',
    title: 'Western Riding Clinic Weekend',
    description: 'Intensive 2-day western riding clinic covering ranch work, cattle cutting, and barrel racing techniques. Includes accommodation and meals.',
    category: 'event',
    images: [
      'https://images.pexels.com/photos/1996337/pexels-photo-1996337.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    startingBid: 450,
    currentBid: 520,
    bidCount: 9,
    endTime: '2024-12-27T12:00:00Z',
    location: 'Austin, TX',
    seller: mockUsers[1],
    featured: false,
    duration: '2 days',
    maxParticipants: 12,
    skillLevel: 'all'
  }
];

export const mockBids: Bid[] = [
  {
    id: '1',
    auctionId: '1',
    userId: '3',
    user: mockUsers[2],
    amount: 280,
    timestamp: '2024-12-20T14:30:00Z'
  },
  {
    id: '2',
    auctionId: '1',
    userId: '2',
    user: mockUsers[1],
    amount: 260,
    timestamp: '2024-12-20T13:15:00Z'
  },
  {
    id: '3',
    auctionId: '2',
    userId: '3',
    user: mockUsers[2],
    amount: 165,
    timestamp: '2024-12-20T16:45:00Z'
  }
];