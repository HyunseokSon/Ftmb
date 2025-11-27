import { Search, Filter, Play, MessageSquare, Bookmark, Clock, Sparkles, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AISearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => setIsSearching(false), 1500);
  };

  const sampleResults = [
    {
      id: 1,
      title: 'Jett Super Jump Tutorial',
      game: 'Valorant',
      timestamp: '2:34',
      duration: '15s',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      summary: 'Use Q skill at this exact moment. Jump + crouch + dash combo required.',
      confidence: 95
    },
    {
      id: 2,
      title: 'Advanced Movement Guide',
      game: 'Valorant',
      timestamp: '5:12',
      duration: '18s',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      summary: 'Position yourself on this ledge, activate updraft, then dash mid-air.',
      confidence: 88
    },
    {
      id: 3,
      title: 'Pro Player Jett Montage',
      game: 'Valorant',
      timestamp: '8:45',
      duration: '12s',
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
      summary: 'TenZ demonstrates the technique in competitive match.',
      confidence: 92
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d9ff]/20 to-[#00d9ff]/5 flex items-center justify-center border border-[#00d9ff]/30">
              <Search className="w-6 h-6 text-[#00d9ff]" />
            </div>
            <div>
              <h1 className="text-3xl text-[#00d9ff]">AI Search</h1>
              <p className="text-gray-400">Search inside videos using multimodal AI</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Credit Usage Banner */}
        <div className="bg-gradient-to-r from-[#00d9ff]/10 to-[#b968ff]/10 rounded-xl border border-[#00d9ff]/30 p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#00d9ff]" />
            <div>
              <p className="text-sm">Your Credits: <span className="text-[#00d9ff]">8,500</span></p>
              <p className="text-xs text-gray-400">Each search costs 10 credits</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#00d9ff] text-[#0a0a0f] rounded-lg text-sm hover:bg-[#00d9ff]/90 transition-colors">
            Buy More Credits
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl mb-6">Search for Any Game Skill or Technique</h2>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for any game skill, boss fight, or mechanic…"
                className="w-full pl-12 pr-4 py-4 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00d9ff] transition-colors"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <button 
              onClick={handleSearch}
              className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all hover:scale-105"
            >
              {isSearching ? 'Searching...' : 'Search'}
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <select 
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="px-4 py-2 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00d9ff] cursor-pointer"
            >
              <option value="all">All Games</option>
              <option value="valorant">Valorant</option>
              <option value="league">League of Legends</option>
              <option value="overwatch">Overwatch 2</option>
              <option value="apex">Apex Legends</option>
            </select>
            <select className="px-4 py-2 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00d9ff] cursor-pointer">
              <option>Skill Type</option>
              <option>Movement</option>
              <option>Combat</option>
              <option>Strategy</option>
              <option>Build/Loadout</option>
            </select>
            <select className="px-4 py-2 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00d9ff] cursor-pointer">
              <option>Difficulty</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Pro</option>
            </select>
          </div>

          {/* Quick Searches */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-3">Popular Searches:</p>
            <div className="flex flex-wrap gap-2">
              {['Jett Super Jump', 'Elden Ring Parry', 'CS2 Smoke Lineups', 'League Wave Management', 'Apex Movement'].map((term, i) => (
                <button
                  key={i}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#00d9ff] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* AI Results Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">AI Search Results</h2>
            <p className="text-gray-400 text-sm">{sampleResults.length} clips found</p>
          </div>

          {/* Chat-style AI Summary */}
          <div className="bg-gradient-to-r from-[#00d9ff]/10 to-[#b968ff]/10 rounded-xl border border-[#00d9ff]/30 p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#b968ff] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="mb-2">I found <span className="text-[#00d9ff]">3 video clips</span> demonstrating the Jett Super Jump technique:</p>
                <p className="text-gray-300 text-sm">The key is to activate updraft (Q), then immediately dash (E) while jumping. Timing is critical - practice the muscle memory. All clips below show the exact button sequence and positioning.</p>
              </div>
            </div>
          </div>

          {/* Video Results Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {sampleResults.map((result) => (
              <div key={result.id} className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden hover:border-[#00d9ff]/50 transition-all group">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[#0a0a0f] overflow-hidden">
                  <ImageWithFallback
                    src={result.thumbnail}
                    alt={result.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform"
                    fallback="https://via.placeholder.com/400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#00d9ff] text-[#0a0a0f] rounded-full text-xs">
                    {result.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    {result.timestamp}
                  </div>
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#00d9ff] flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#0a0a0f]" fill="currentColor" />
                    </div>
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-[#00d9ff]/20 text-[#00d9ff] rounded text-xs">{result.game}</span>
                    <span className="px-2 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded text-xs">{result.confidence}% Match</span>
                  </div>
                  <h3 className="mb-2">{result.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{result.summary}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all">
                      Watch Clip
                    </button>
                    <button className="p-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#b968ff] transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#ff006e] transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Actions */}
          <div className="mt-8 flex gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/expert-qa'}
              className="px-6 py-3 bg-[#1a1a24] border-2 border-[#b968ff] rounded-lg hover:bg-[#b968ff]/10 transition-all"
            >
              Can't Find It? Ask Experts
            </button>
            <button className="px-6 py-3 bg-[#1a1a24] border-2 border-[#ff006e] rounded-lg hover:bg-[#ff006e]/10 transition-all">
              Save to Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}