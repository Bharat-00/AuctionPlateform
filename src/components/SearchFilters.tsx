import React from 'react';
import { Search, Filter, MapPin, DollarSign } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
}

export default function SearchFilters({
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  locationFilter,
  setLocationFilter,
  priceRange,
  setPriceRange
}: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 text-amber-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filter Auctions</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search experiences..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Category */}
        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            <option value="trail-ride">Trail Rides</option>
            <option value="training">Training</option>
            <option value="leasing">Leasing</option>
            <option value="event">Events</option>
          </select>
        </div>

        {/* Location */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            placeholder="Location..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>

        {/* Price Range */}
        <div className="flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-gray-400" />
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
            placeholder="Min"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          <span className="text-gray-400">-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
            placeholder="Max"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}