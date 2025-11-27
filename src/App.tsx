import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { CreditEconomy } from './components/CreditEconomy';
import { Community } from './components/Community';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { AISearchPage } from './components/AISearchPage';
import { ExpertQAPage } from './components/ExpertQAPage';
import { QuestionDetailPage } from './components/QuestionDetailPage';
import { CreatorHubPage } from './components/CreatorHubPage';
import { CampaignDetailPage } from './components/CampaignDetailPage';
import { CoachingPage } from './components/CoachingPage';
import { PagesOverview } from './components/PagesOverview';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    // Function to handle route changes
    const handleRouteChange = () => {
      const path = window.location.pathname;
      if (path === '/ai-search') setCurrentPage('ai-search');
      else if (path === '/expert-qa') setCurrentPage('expert-qa');
      else if (path === '/question-detail') setCurrentPage('question-detail');
      else if (path === '/creator-hub') setCurrentPage('creator-hub');
      else if (path === '/campaign-detail') setCurrentPage('campaign-detail');
      else if (path === '/coaching') setCurrentPage('coaching');
      else if (path === '/pages-overview') setCurrentPage('pages-overview');
      else setCurrentPage('home');
    };

    // Initial route check
    handleRouteChange();

    // Listen for custom navigation events
    window.addEventListener('navigateApp', handleRouteChange);
    
    // Listen for browser back/forward buttons
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('navigateApp', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentPage]);

  // Render detail pages
  if (currentPage === 'ai-search') return <AISearchPage />;
  if (currentPage === 'expert-qa') return <ExpertQAPage />;
  if (currentPage === 'question-detail') return <QuestionDetailPage />;
  if (currentPage === 'creator-hub') return <CreatorHubPage />;
  if (currentPage === 'campaign-detail') return <CampaignDetailPage />;
  if (currentPage === 'coaching') return <CoachingPage />;
  if (currentPage === 'pages-overview') return <PagesOverview />;

  // Render home page
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Hero />
      <Features />
      <HowItWorks />
      <CreditEconomy />
      <Community />
      <Pricing />
      <Footer />
    </div>
  );
}