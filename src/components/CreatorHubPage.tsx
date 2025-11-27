import { Users, Briefcase, ArrowLeft, Calendar, Coins, TrendingUp, Play, Clock, Award, CheckCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { navigateTo } from '../utils/navigation';

export function CreatorHubPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isPlayerCampaignModalOpen, setIsPlayerCampaignModalOpen] = useState(false);
  const [isStudioCampaignModalOpen, setIsStudioCampaignModalOpen] = useState(false);
  const [playerCampaignStep, setPlayerCampaignStep] = useState(1);
  const [studioCampaignStep, setStudioCampaignStep] = useState(1);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Player Campaign Form Data
  const [playerGame, setPlayerGame] = useState('');
  const [playerTitle, setPlayerTitle] = useState('');
  const [playerDescription, setPlayerDescription] = useState('');
  const [playerMinLength, setPlayerMinLength] = useState('');
  const [playerMaxLength, setPlayerMaxLength] = useState('');
  const [playerRequirements, setPlayerRequirements] = useState('');
  const [playerRewardType, setPlayerRewardType] = useState('credits');
  const [playerRewardAmount, setPlayerRewardAmount] = useState('');
  const [playerCreatorCount, setPlayerCreatorCount] = useState('1');
  const [playerDeadline, setPlayerDeadline] = useState('');
  const [playerMissionType, setPlayerMissionType] = useState('');

  // Studio Campaign Form Data
  const [studioGame, setStudioGame] = useState('');
  const [studioObjective, setStudioObjective] = useState('');
  const [studioScenario, setStudioScenario] = useState('');
  const [studioMissionType, setStudioMissionType] = useState('');
  const [studioContentReq, setStudioContentReq] = useState('');
  const [studioBudget, setStudioBudget] = useState('');
  const [studioRewardPolicy, setStudioRewardPolicy] = useState('');
  const [studioMinSubs, setStudioMinSubs] = useState('');
  const [studioMinViews, setStudioMinViews] = useState('');

  const campaigns = [
    {
      id: 1,
      game: 'Elden Ring',
      gameLogo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200',
      title: 'Kill Malenia with bare hands (no armor)',
      type: 'player',
      reward: '30,000 KRW',
      deadline: 'D-7',
      description: 'My character: Lv 155, 2H sword, low defense. Show me how to clear this boss under 3 minutes.',
      requirements: '3 min highlight, show stats at start, show clear kill',
      slots: 'Looking for 1 creator',
      status: 'recruiting',
      submissions: 3,
      author: 'Tarnished_Player'
    },
    {
      id: 2,
      game: 'AION2',
      gameLogo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200',
      title: 'Pre-registration Viral Coupon Campaign',
      type: 'studio',
      reward: '200,000 Credits',
      deadline: 'D-14',
      description: 'Promote AION2 pre-registration with exclusive coupon code distribution.',
      requirements: '60–90s promo video with CTA to use coupon code and pre-register',
      slots: 'Top 5 creators get rewards',
      status: 'recruiting',
      submissions: 12,
      author: 'NCsoft Studio'
    },
    {
      id: 3,
      game: 'League of Legends',
      gameLogo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=200',
      title: 'Mid Lane Outplay Compilation',
      type: 'player',
      reward: '5,000 Credits',
      deadline: 'D-3',
      description: 'Looking for a compilation of my best mid lane outplays from ranked games.',
      requirements: 'Edit 10-15 clips into 4-5 min video with music and effects',
      slots: 'Looking for 1 creator',
      status: 'in-progress',
      submissions: 2,
      author: 'MidLanePro'
    },
    {
      id: 4,
      game: 'Valorant',
      gameLogo: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=200',
      title: 'Episode 7 Act 3 Launch Hype Campaign',
      type: 'studio',
      reward: '$5,000 USD',
      deadline: 'D-21',
      description: 'Create hype content for new episode launch featuring new agent and map.',
      requirements: 'Showcase new agent abilities, map features, battle pass highlights',
      slots: 'Unlimited submissions, top 10 rewarded',
      status: 'recruiting',
      submissions: 28,
      author: 'Riot Games'
    },
    {
      id: 5,
      game: 'Lost Ark',
      gameLogo: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=200',
      title: 'No-hit Valtan Hard Mode Guide',
      type: 'player',
      reward: '15,000 Credits',
      deadline: 'D-10',
      description: 'Create a tutorial showing how to no-hit Valtan HM with Gunslinger.',
      requirements: 'Full run with build explanation, timestamps for each gate',
      slots: 'Looking for 2 creators',
      status: 'recruiting',
      submissions: 0,
      author: 'RaidMaster_KR'
    },
    {
      id: 6,
      game: 'Diablo 4',
      gameLogo: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200',
      title: 'Season 3 Launch Event Campaign',
      type: 'studio',
      reward: '100,000 Credits',
      deadline: 'D-5',
      description: 'Highlight Season 3 new features: Vampiric Powers, new zones, endgame content.',
      requirements: 'Include season theme, show new powers in action, mention limited event rewards',
      slots: 'Top 3 by views get rewards',
      status: 'in-progress',
      submissions: 45,
      author: 'Blizzard Entertainment'
    },
    {
      id: 7,
      game: 'MapleStory',
      gameLogo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200',
      title: 'Meso Farming Guide for Beginners',
      type: 'player',
      reward: '8,000 Credits',
      deadline: 'D-2',
      description: 'Step-by-step guide for players with 1-5B capital to farm efficiently.',
      requirements: 'Show 3 different farming spots, explain Legion setup, show hourly rates',
      slots: 'Looking for 1 creator',
      status: 'review',
      submissions: 5,
      author: 'MapleWhale'
    },
    {
      id: 8,
      game: 'Fortnite',
      gameLogo: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=200',
      title: 'OG Map Return Anniversary Event',
      type: 'studio',
      reward: '150,000 Credits',
      deadline: 'Completed',
      description: 'Celebrate the return of OG Fortnite map with nostalgic content.',
      requirements: 'Highlight classic POIs, show throwback skins, mention limited-time rewards',
      slots: 'Top 5 creators rewarded',
      status: 'completed',
      submissions: 67,
      author: 'Epic Games'
    }
  ];

  const filteredCampaigns = campaigns.filter(c => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'player') return c.type === 'player';
    if (activeFilter === 'studio') return c.type === 'studio';
    if (activeFilter === 'my') return false; // No campaigns created yet
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recruiting': return 'bg-[#00ff88]/20 text-[#00ff88]';
      case 'in-progress': return 'bg-[#00d9ff]/20 text-[#00d9ff]';
      case 'review': return 'bg-[#FFD700]/20 text-[#FFD700]';
      case 'completed': return 'bg-gray-500/20 text-gray-400';
      default: return 'bg-[#b968ff]/20 text-[#b968ff]';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'recruiting': return 'Recruiting Creators';
      case 'in-progress': return 'In Progress';
      case 'review': return 'Under Review';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />
      
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl mb-3">Creator Hub – Campaign Marketplace</h1>
              <p className="text-gray-400 text-lg">
                Players and game studios open campaigns. Creators submit videos and earn credits.
              </p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setIsPlayerCampaignModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-xl hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all hover:scale-105 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                Open Player Campaign
              </button>
              <button 
                onClick={() => setIsStudioCampaignModalOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-[#0a0a0f] rounded-xl hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all hover:scale-105 flex items-center gap-2"
              >
                <Briefcase className="w-5 h-5" />
                Open Studio Campaign
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex gap-3 mt-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'all' ? 'bg-[#b968ff] text-white' : 'bg-[#0a0a0f] border border-white/10 text-gray-400 hover:border-[#b968ff]'}`}
            >
              All Campaigns
            </button>
            <button 
              onClick={() => setActiveFilter('player')}
              className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'player' ? 'bg-[#b968ff] text-white' : 'bg-[#0a0a0f] border border-white/10 text-gray-400 hover:border-[#b968ff]'}`}
            >
              Player Requests
            </button>
            <button 
              onClick={() => setActiveFilter('studio')}
              className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'studio' ? 'bg-[#00ff88] text-[#0a0a0f]' : 'bg-[#0a0a0f] border border-white/10 text-gray-400 hover:border-[#00ff88]'}`}
            >
              Studio Campaigns
            </button>
            <button 
              onClick={() => setActiveFilter('my')}
              className={`px-4 py-2 rounded-lg transition-all ${activeFilter === 'my' ? 'bg-[#ff006e] text-white' : 'bg-[#0a0a0f] border border-white/10 text-gray-400 hover:border-[#ff006e]'}`}
            >
              My Campaigns
            </button>
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-[#1a1a24] rounded-xl border border-white/10 p-6 hover:border-[#ff006e]/50 transition-all">
              <div className="flex items-start gap-3 mb-4">
                <ImageWithFallback
                  src={campaign.gameLogo}
                  alt={`${campaign.game} Logo`}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff006e] to-[#b968ff] flex items-center justify-center text-2xl"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg">{campaign.title}</h3>
                    {campaign.type === 'player' && (
                      <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{campaign.game}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                      <span className="text-sm">{campaign.reward}</span>
                    </div>
                    <span className="text-xs text-gray-400">({campaign.slots})</span>
                  </div>
                </div>
              </div>

              {/* Portfolio */}
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-2">Description:</p>
                <p className="text-sm text-gray-300">{campaign.description}</p>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 py-3 border-t border-b border-white/10">
                <div>
                  <p className="text-xs text-gray-400">Requirements</p>
                  <p className="text-sm text-[#00ff88]">{campaign.requirements}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Deadline</p>
                  <p className="text-sm">{campaign.deadline}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="flex-1 py-2 bg-gradient-to-r from-[#ff006e] to-[#b968ff] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(255,0,110,0.3)] transition-all"
                >
                  Submit Video
                </button>
                <button 
                  onClick={() => navigateTo('/campaign-detail')}
                  className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#ff006e] transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player Campaign Modal */}
      {isPlayerCampaignModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 max-w-3xl w-full relative">
            <button
              onClick={() => setIsPlayerCampaignModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl mb-6">Open Player Campaign</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Game</label>
                <select
                  value={playerGame}
                  onChange={(e) => setPlayerGame(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                >
                  <option>Select Game</option>
                  <option>Elden Ring</option>
                  <option>Valorant</option>
                  <option>League of Legends</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Campaign Title</label>
                <input
                  type="text"
                  value={playerTitle}
                  onChange={(e) => setPlayerTitle(e.target.value)}
                  placeholder="e.g., Defeat Elden Ring Boss Barehanded"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Description</label>
                <textarea
                  value={playerDescription}
                  onChange={(e) => setPlayerDescription(e.target.value)}
                  placeholder="Describe exactly what you want in the video..."
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e] resize-none"
                  rows={6}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Video Length (min)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={playerMinLength}
                      onChange={(e) => setPlayerMinLength(e.target.value)}
                      placeholder="1"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      value={playerMaxLength}
                      onChange={(e) => setPlayerMaxLength(e.target.value)}
                      placeholder="5"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Video Type</label>
                  <select
                    value={playerMissionType}
                    onChange={(e) => setPlayerMissionType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                  >
                    <option>Tutorial/Guide</option>
                    <option>Challenge Run</option>
                    <option>Montage/Edit</option>
                    <option>Promo/Trailer</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Budget (Credits)</label>
                  <input
                    type="number"
                    value={playerRewardAmount}
                    onChange={(e) => setPlayerRewardAmount(e.target.value)}
                    placeholder="150"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Delivery Time</label>
                  <select
                    value={playerDeadline}
                    onChange={(e) => setPlayerDeadline(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                  >
                    <option>2-3 days</option>
                    <option>5-7 days</option>
                    <option>1-2 weeks</option>
                    <option>No rush</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#0a0a0f] rounded-lg p-4 border border-[#ff006e]/20">
                <p className="text-sm text-gray-400 mb-2">Estimated Cost:</p>
                <p className="text-2xl text-[#ff006e]">150 credits</p>
                <p className="text-xs text-gray-500 mt-1">Creators will bid on your request</p>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#ff006e] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(255,0,110,0.5)] transition-all">
                Post Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Studio Campaign Modal */}
      {isStudioCampaignModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 max-w-3xl w-full relative">
            <button
              onClick={() => setIsStudioCampaignModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl mb-6">Open Studio Campaign</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Game</label>
                <select
                  value={studioGame}
                  onChange={(e) => setStudioGame(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                >
                  <option>Select Game</option>
                  <option>Elden Ring</option>
                  <option>Valorant</option>
                  <option>League of Legends</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Campaign Title</label>
                <input
                  type="text"
                  value={studioObjective}
                  onChange={(e) => setStudioObjective(e.target.value)}
                  placeholder="e.g., Defeat Elden Ring Boss Barehanded"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Description</label>
                <textarea
                  value={studioScenario}
                  onChange={(e) => setStudioScenario(e.target.value)}
                  placeholder="Describe exactly what you want in the video..."
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e] resize-none"
                  rows={6}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Video Length (min)</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={playerMinLength}
                      onChange={(e) => setPlayerMinLength(e.target.value)}
                      placeholder="1"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                    />
                    <span className="text-gray-400">to</span>
                    <input
                      type="number"
                      value={playerMaxLength}
                      onChange={(e) => setPlayerMaxLength(e.target.value)}
                      placeholder="5"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Video Type</label>
                  <select
                    value={playerMissionType}
                    onChange={(e) => setPlayerMissionType(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                  >
                    <option>Tutorial/Guide</option>
                    <option>Challenge Run</option>
                    <option>Montage/Edit</option>
                    <option>Promo/Trailer</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Budget (Credits)</label>
                  <input
                    type="number"
                    value={playerRewardAmount}
                    onChange={(e) => setPlayerRewardAmount(e.target.value)}
                    placeholder="150"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Delivery Time</label>
                  <select
                    value={playerDeadline}
                    onChange={(e) => setPlayerDeadline(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer"
                  >
                    <option>2-3 days</option>
                    <option>5-7 days</option>
                    <option>1-2 weeks</option>
                    <option>No rush</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#0a0a0f] rounded-lg p-4 border border-[#ff006e]/20">
                <p className="text-sm text-gray-400 mb-2">Estimated Cost:</p>
                <p className="text-2xl text-[#ff006e]">150 credits</p>
                <p className="text-xs text-gray-500 mt-1">Creators will bid on your request</p>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-[#ff006e] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(255,0,110,0.5)] transition-all">
                Post Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}