import { Search, MessageSquare, Video, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Navigation } from './Navigation';

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
          <p className="text-[#00d9ff] tracking-wide uppercase">Gaming Knowledge & Creation Platform</p>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 max-w-5xl mx-auto">
          <span className="block text-6xl md:text-7xl lg:text-8xl mb-4">
            FIND, TELL, MAKE
          </span>
          <span className="block text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#00d9ff] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
            GIVE FEEDBACK
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          AI-powered video search, expert Q&A, creator marketplace, and professional coaching—all in one platform
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          {/* AI Search Button */}
          <div className="relative group">
            <button 
              className="relative px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('search')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => window.location.href = '/ai-search'}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Search className="w-5 h-5" />
                Start Searching
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a24] border border-[#00d9ff] rounded-lg p-3 transition-all ${activeTooltip === 'search' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#00d9ff] mb-1">AI Search</p>
              <p className="text-xs text-gray-400">Search inside videos using AI | Find exact timestamps and highlights</p>
              <p className="text-xs text-[#00d9ff] mt-2">→ Navigate to /ai-search</p>
            </div>
          </div>

          {/* Expert Q&A Button */}
          <div className="relative group">
            <button 
              className="px-8 py-4 bg-[#1a1a24] border-2 border-[#b968ff] rounded-lg transition-all hover:bg-[#b968ff]/10 hover:shadow-[0_0_30px_rgba(185,104,255,0.3)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('experts')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => window.location.href = '/expert-qa'}
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Ask Experts
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a24] border border-[#b968ff] rounded-lg p-3 transition-all ${activeTooltip === 'experts' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#b968ff] mb-1">Expert Q&A</p>
              <p className="text-xs text-gray-400">Ask humans when AI can't answer | Earn or spend credits through answers</p>
              <p className="text-xs text-[#b968ff] mt-2">→ Navigate to /expert-qa</p>
            </div>
          </div>

          {/* Creator Hub Button */}
          <div className="relative group">
            <button 
              className="px-8 py-4 bg-[#1a1a24] border-2 border-[#ff006e] rounded-lg transition-all hover:bg-[#ff006e]/10 hover:shadow-[0_0_30px_rgba(255,0,110,0.3)] hover:scale-105"
              onMouseEnter={() => setActiveTooltip('creators')}
              onMouseLeave={() => setActiveTooltip(null)}
              onClick={() => window.location.href = '/creator-hub'}
            >
              <span className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                Hire Creators
              </span>
            </button>
            {/* Tooltip */}
            <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 bg-[#1a1a24] border border-[#ff006e] rounded-lg p-3 transition-all ${activeTooltip === 'creators' ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <p className="text-sm text-[#ff006e] mb-1">Creator Hub (Make It)</p>
              <p className="text-xs text-gray-400">Request custom video content | Personalized gameplay, guides, or promo videos</p>
              <p className="text-xs text-[#ff006e] mt-2">→ Navigate to /creator-hub</p>
            </div>
          </div>
        </div>

        {/* Quick Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* AI Search Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#1a1a24] transition-all group cursor-pointer"
            onClick={() => window.location.href = '/ai-search'}
          >
            <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center border border-[#00d9ff] group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 text-[#00d9ff]" />
            </div>
            <p className="text-sm text-[#00d9ff]">AI Search</p>
            <p className="text-xs text-gray-500 text-center">Find exact timestamps in videos</p>
          </button>

          {/* Expert Q&A Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#1a1a24] transition-all group cursor-pointer"
            onClick={() => window.location.href = '/expert-qa'}
          >
            <div className="w-12 h-12 rounded-full bg-[#b968ff]/20 flex items-center justify-center border border-[#b968ff] group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6 text-[#b968ff]" />
            </div>
            <p className="text-sm text-[#b968ff]">Expert Q&A</p>
            <p className="text-xs text-gray-500 text-center">Ask community experts</p>
          </button>

          {/* Creator Hub Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#1a1a24] transition-all group cursor-pointer"
            onClick={() => window.location.href = '/creator-hub'}
          >
            <div className="w-12 h-12 rounded-full bg-[#ff006e]/20 flex items-center justify-center border border-[#ff006e] group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6 text-[#ff006e]" />
            </div>
            <p className="text-sm text-[#ff006e]">Creator Hub</p>
            <p className="text-xs text-gray-500 text-center">Request custom videos</p>
          </button>

          {/* Coaching Feature */}
          <button 
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-[#1a1a24] transition-all group cursor-pointer"
            onClick={() => window.location.href = '/coaching'}
          >
            <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center border border-[#00d9ff] group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-[#00d9ff]" />
            </div>
            <p className="text-sm text-[#00d9ff]">Coaching</p>
            <p className="text-xs text-gray-500 text-center">Get VOD review & feedback</p>
          </button>
        </div>
      </div>
    </section>
  );
}