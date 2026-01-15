import { useState } from 'react';
import { BottomNav } from '@/components/layout/BottomNav';
import { Header } from '@/components/home/Header';
import { OffersCarousel } from '@/components/home/OffersCarousel';
import { FuelSection } from '@/components/home/FuelSection';
import { BestSellers } from '@/components/home/BestSellers';
import { SearchHeader } from '@/components/search/SearchHeader';
import { CategoryGrid } from '@/components/search/CategoryGrid';
import { OnlineFeed } from '@/components/online/OnlineFeed';
import { ProfilePage } from '@/components/profile/ProfilePage';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <main className="min-h-screen bg-background animate-fade-in">
            <Header />
            <OffersCarousel />
            <FuelSection />
            <BestSellers />
          </main>
        );
      
      case 'search':
        return (
          <main className="min-h-screen bg-background animate-fade-in">
            <SearchHeader onSearch={handleSearch} />
            <CategoryGrid searchQuery={searchQuery} />
          </main>
        );
      
      case 'online':
        return (
          <main className="min-h-screen bg-background animate-fade-in">
            <OnlineFeed />
          </main>
        );
      
      case 'profile':
        return (
          <main className="min-h-screen bg-background animate-fade-in">
            <ProfilePage />
          </main>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-lg mx-auto relative">
      {renderContent()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
