import { Video, Star, Clock, DollarSign, ArrowLeft, Briefcase, Award, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';

export function CreatorHubPage() {
  const [activeTab, setActiveTab] = useState<'request' | 'browse' | 'orders'>('browse');

  const featuredCreators = [
    {
      id: 1,
      name: 'VideoMaster_Pro',
      specialty: 'FPS Games',
      rating: 4.9,
      reviews: 234,
      price: '50-200',
      deliveryTime: '2-5 days',
      avatar: '🎮',
      verified: true,
      portfolio: ['Valorant Guide', 'CS2 Tutorial', 'Apex Movement']
    },
    {
      id: 2,
      name: 'RPG_Creator_99',
      specialty: 'RPG & MMO',
      rating: 4.8,
      reviews: 189,
      price: '40-150',
      deliveryTime: '3-7 days',
      avatar: '⚔️',
      verified: true,
      portfolio: ['Elden Ring Boss', 'MapleStory Guide', 'Lost Ark Build']
    },
    {
      id: 3,
      name: 'EditQueen_Studios',
      specialty: 'Montages & Promos',
      rating: 5.0,
      reviews: 156,
      price: '100-500',
      deliveryTime: '5-10 days',
      avatar: '✨',
      verified: true,
      portfolio: ['Game Trailer', 'Pro Montage', 'Launch Promo']
    }
  ];

  const campaigns = [
    {
      id: 1,
      company: 'Riot Games',
      title: 'Valorant Act 5 Promo Content',
      budget: '500-2000 credits',
      deadline: '2 weeks',
      type: 'Campaign',
      requirements: '30-60s highlight video showcasing new map'
    },
    {
      id: 2,
      company: 'Indie Studio XYZ',
      title: 'New Game Launch Trailer',
      budget: '1000-3000 credits',
      deadline: '1 month',
      type: 'Featured',
      requirements: 'Cinematic gameplay trailer with voiceover'
    }
  ];

  const myOrders = [
    {
      id: 1,
      title: 'Defeat Malenia Barehanded',
      creator: 'RPG_Creator_99',
      status: 'in-progress',
      progress: 65,
      deadline: '3 days',
      price: 150
    },
    {
      id: 2,
      title: 'Jett Montage Edit',
      creator: 'EditQueen_Studios',
      status: 'delivered',
      progress: 100,
      deadline: 'Completed',
      price: 200
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff006e]/20 to-[#ff006e]/5 flex items-center justify-center border border-[#ff006e]/30">
              <Video className="w-6 h-6 text-[#ff006e]" />
            </div>
            <div>
              <h1 className="text-3xl text-[#ff006e]">Creator Hub</h1>
              <p className="text-gray-400">Request custom video content from talented creators</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'browse' ? 'border-[#ff006e] text-[#ff006e]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Browse Creators
          </button>
          <button
            onClick={() => setActiveTab('request')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'request' ? 'border-[#ff006e] text-[#ff006e]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Request Video
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-6 py-3 border-b-2 transition-colors ${
              activeTab === 'orders' ? 'border-[#ff006e] text-[#ff006e]' : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            My Orders
          </button>
        </div>

        {/* Browse Creators Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-8">
            {/* Featured Campaigns */}
            <div>
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#ff006e]" />
                Featured Campaigns
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="bg-gradient-to-r from-[#ff006e]/10 to-[#b968ff]/10 rounded-xl border border-[#ff006e]/30 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="px-3 py-1 bg-[#ff006e] text-white rounded text-sm">{campaign.type}</span>
                        <h3 className="text-xl mt-2 mb-1">{campaign.title}</h3>
                        <p className="text-sm text-gray-400">{campaign.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{campaign.requirements}</p>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-[#00ff88]" />
                        <span>{campaign.budget}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[#00d9ff]" />
                        <span>{campaign.deadline}</span>
                      </div>
                    </div>
                    <button className="w-full py-3 bg-gradient-to-r from-[#ff006e] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(255,0,110,0.3)] transition-all">
                      Apply for Campaign
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Creator Profiles */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Top Creators</h2>
                <div className="flex gap-2">
                  <select className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm cursor-pointer">
                    <option>All Categories</option>
                    <option>FPS Games</option>
                    <option>RPG & MMO</option>
                    <option>Montages</option>
                  </select>
                  <select className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm cursor-pointer">
                    <option>Highest Rated</option>
                    <option>Lowest Price</option>
                    <option>Fastest Delivery</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {featuredCreators.map((creator) => (
                  <div key={creator.id} className="bg-[#1a1a24] rounded-xl border border-white/10 p-6 hover:border-[#ff006e]/50 transition-all">
                    {/* Creator Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#ff006e] to-[#b968ff] flex items-center justify-center text-2xl">
                        {creator.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg">{creator.name}</h3>
                          {creator.verified && (
                            <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                          )}
                        </div>
                        <p className="text-sm text-gray-400">{creator.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                            <span className="text-sm">{creator.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">({creator.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-2">Recent Work:</p>
                      <div className="flex flex-wrap gap-1">
                        {creator.portfolio.map((work, i) => (
                          <span key={i} className="px-2 py-1 bg-[#0a0a0f] rounded text-xs">
                            {work}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4 py-3 border-t border-b border-white/10">
                      <div>
                        <p className="text-xs text-gray-400">Price Range</p>
                        <p className="text-sm text-[#00ff88]">{creator.price} credits</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Delivery</p>
                        <p className="text-sm">{creator.deliveryTime}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-gradient-to-r from-[#ff006e] to-[#b968ff] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(255,0,110,0.3)] transition-all">
                        Hire Creator
                      </button>
                      <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#ff006e] transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Request Video Tab */}
        {activeTab === 'request' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl mb-6">Request Custom Video</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Video Title/Description</label>
                  <input
                    type="text"
                    placeholder="e.g., Defeat Elden Ring Boss Barehanded"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Detailed Requirements</label>
                  <textarea
                    placeholder="Describe exactly what you want in the video..."
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e] resize-none"
                    rows={6}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Game/Category</label>
                    <select className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer">
                      <option>Select Game</option>
                      <option>Elden Ring</option>
                      <option>Valorant</option>
                      <option>League of Legends</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Video Type</label>
                    <select className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer">
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
                      placeholder="150"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#ff006e]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Delivery Time</label>
                    <select className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer">
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

        {/* My Orders Tab */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="text-2xl mb-6">My Orders</h2>
            <div className="space-y-4">
              {myOrders.map((order) => (
                <div key={order.id} className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl mb-1">{order.title}</h3>
                      <p className="text-sm text-gray-400">Creator: {order.creator}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded text-sm ${
                        order.status === 'delivered' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-[#00d9ff]/20 text-[#00d9ff]'
                      }`}>
                        {order.status === 'delivered' ? 'Delivered' : 'In Progress'}
                      </span>
                      <p className="text-sm text-gray-400 mt-2">{order.price} credits</p>
                    </div>
                  </div>

                  {order.status === 'in-progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span>{order.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00d9ff] to-[#b968ff]"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-400 mt-2">Deadline: {order.deadline}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {order.status === 'delivered' ? (
                      <>
                        <button className="flex-1 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] rounded-lg text-sm">
                          Download Video
                        </button>
                        <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm">
                          Leave Review
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="flex-1 py-2 bg-[#1a1a24] border border-[#00d9ff] rounded-lg text-sm">
                          Message Creator
                        </button>
                        <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm">
                          View Details
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}