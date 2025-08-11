import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AuctionCard from './components/AuctionCard';
import AuctionModal from './components/AuctionModal';
import AuthModal from './components/AuthModal';
import SearchFilters from './components/SearchFilters';
import { mockAuctions } from './data/mockData';
import { AuctionItem } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedAuction, setSelectedAuction] = useState<AuctionItem | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter auctions based on search criteria
  const filteredAuctions = mockAuctions.filter(auction => {
    const matchesSearch = auction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         auction.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || auction.category === categoryFilter;
    const matchesLocation = !locationFilter || auction.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesPrice = auction.currentBid >= priceRange[0] && auction.currentBid <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleAuth = (user: any) => {
    setCurrentUser(user);
  };

  const handleSearchClick = () => {
    setShowFilters(true);
    // Scroll to auctions section
    setTimeout(() => {
      document.getElementById('auctions')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBidClick = (auction: AuctionItem) => {
    setSelectedAuction(auction);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentUser={currentUser} onAuthClick={handleAuthClick} />
      
      {!showFilters && <Hero onSearchClick={handleSearchClick} />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showFilters && (
          <SearchFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            locationFilter={locationFilter}
            setLocationFilter={setLocationFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        )}
        
        <section id="auctions">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {showFilters ? 'Search Results' : 'Featured Auctions'}
            </h2>
            <div className="text-sm text-gray-600">
              {filteredAuctions.length} auction{filteredAuctions.length !== 1 ? 's' : ''} found
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAuctions.map((auction) => (
              <AuctionCard
                key={auction.id}
                auction={auction}
                onBidClick={handleBidClick}
              />
            ))}
          </div>
          
          {filteredAuctions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No auctions found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria to see more results.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('');
                  setLocationFilter('');
                  setPriceRange([0, 10000]);
                }}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>
      
      <AuctionModal
        auction={selectedAuction}
        onClose={() => setSelectedAuction(null)}
        currentUser={currentUser}
      />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuth={handleAuth}
      />
    </div>
  );
}

export default App;