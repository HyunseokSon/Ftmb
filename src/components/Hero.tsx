import { Search, MessageSquare, Video, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { navigateTo } from '../utils/navigation';

export function Hero() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <Navigation />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759692788195-b95da1f4a04c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwZGFya3xlbnwxfHx8fDE3NjQxNjg0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gaming background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/80 to-[#0a0a0f]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Korean Service Name */}
        <div className="mb-6">
          <p className="text-[#00FFC6] tracking-wide uppercase">Gaming Knowledge & Creation Platform</p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 max-w-5xl mx-auto">
          <span className="block text-5xl md:text-6xl lg:text-7xl mb-4">
            Learn, Improve, and Create
          </span>
          <span className="block text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#00FFC6] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
            Gameplay Knowledge
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Search with AI, ask the community, upload your gameplay for feedback, or join creator campaigns
        </p>

        {/* CTA Buttons - Only 3 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* AI Search Button */}
          <div className="relative group">
            <button 
              className="relative px-8 py-4 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,198,0.5)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('search')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => navigateTo('/ai-search')}
            >
              <span className="relative z-10 flex items-center gap-2 text-[#0a0a0f] font-medium">
                <Search className="w-5 h-5" />
                Try AI Search
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a24] border border-[#00FFC6] rounded-lg p-3 transition-all ${activeTooltip === 'search' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#00FFC6] mb-1">🔍 AI Search</p>
              <p className="text-xs text-gray-400">Find exact gameplay knowledge with accurate timestamps, builds, and mechanics</p>
            </div>
          </div>

          {/* Game Knowledge Hub Button */}
          <div className="relative group">
            <button 
              className="px-8 py-4 bg-[#1a1a24] border-2 border-[#b968ff] rounded-lg transition-all hover:bg-[#b968ff]/10 hover:shadow-[0_0_30px_rgba(185,104,255,0.3)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('community')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => navigateTo('/community')}
            >
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Explore Game Knowledge Hub
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 bg-[#1a1a24] border border-[#b968ff] rounded-lg p-3 transition-all ${activeTooltip === 'community' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#b968ff] mb-1">💬 Game Knowledge Hub</p>
              <p className="text-xs text-gray-400">Ask questions, upload gameplay clips, and get timestamped feedback from experts</p>
            </div>
          </div>

          {/* Creator Hub Button */}
          <div className="relative group">
            <button 
              className="px-8 py-4 bg-[#1a1a24] border-2 border-[#ff006e] rounded-lg transition-all hover:bg-[#ff006e]/10 hover:shadow-[0_0_30px_rgba(255,0,110,0.3)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('creators')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => navigateTo('/creator-hub')}
            >
              <span className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Join Creator Campaigns
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 bg-[#1a1a24] border border-[#ff006e] rounded-lg p-3 transition-all ${activeTooltip === 'creators' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#ff006e] mb-1">🚀 Creator Hub</p>
              <p className="text-xs text-gray-400">Players and studios open campaigns. Creators submit videos and earn rewards</p>
            </div>
          </div>
        </div>

        {/* Quick Feature Icons - Only 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* AI Search Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-6 rounded-xl hover:bg-[#1a1a24] border border-white/10 hover:border-[#00FFC6]/50 transition-all group cursor-pointer"
            onClick={() => navigateTo('/ai-search')}
          >
            <div className="w-14 h-14 rounded-full bg-[#00FFC6]/20 flex items-center justify-center border border-[#00FFC6] group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7 text-[#00FFC6]" />
            </div>
            <p className="text-[#00FFC6]">AI Search</p>
            <p className="text-xs text-gray-400 text-center">Find exact gameplay knowledge using AI — accurate timestamps, builds, mechanics</p>
          </button>

          {/* Game Knowledge Hub Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-6 rounded-xl hover:bg-[#1a1a24] border border-white/10 hover:border-[#b968ff]/50 transition-all group cursor-pointer"
            onClick={() => navigateTo('/community')}
          >
            <div className="w-14 h-14 rounded-full bg-[#b968ff]/20 flex items-center justify-center border border-[#b968ff] group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-[#b968ff]" />
            </div>
            <p className="text-[#b968ff]">Game Knowledge Hub</p>
            <p className="text-xs text-gray-400 text-center">Ask questions, upload gameplay clips, and get timestamped feedback from experts</p>
          </button>

          {/* Creator Hub Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-6 rounded-xl hover:bg-[#1a1a24] border border-white/10 hover:border-[#ff006e]/50 transition-all group cursor-pointer"
            onClick={() => navigateTo('/creator-hub')}
          >
            <div className="w-14 h-14 rounded-full bg-[#ff006e]/20 flex items-center justify-center border border-[#ff006e] group-hover:scale-110 transition-transform">
              <Video className="w-7 h-7 text-[#ff006e]" />
            </div>
            <p className="text-[#ff006e]">Creator Hub</p>
            <p className="text-xs text-gray-400 text-center">Players and studios open campaigns. Creators submit videos and earn rewards</p>
          </button>
        </div>
      </div>
    </section>
  );
}