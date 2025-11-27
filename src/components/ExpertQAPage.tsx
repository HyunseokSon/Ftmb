import { MessageSquare, TrendingUp, Award, ThumbsUp, Clock, Coins, ArrowLeft, Send } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';

export function ExpertQAPage() {
  const [questionText, setQuestionText] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [creditBudget, setCreditBudget] = useState('100');

  const topContributors = [
    { rank: 1, name: 'ProGamer_Kim', answers: 342, earned: 45200, avatar: '🏆' },
    { rank: 2, name: 'Coach_Sarah', answers: 298, earned: 38500, avatar: '⭐' },
    { rank: 3, name: 'Sensei_Lee', answers: 256, earned: 32100, avatar: '🎯' }
  ];

  const recentQuestions = [
    {
      id: 1,
      question: 'Best grinding spot in MapleStory with 1B budget?',
      game: 'MapleStory',
      credits: 250,
      answers: 5,
      upvotes: 23,
      timeAgo: '2 hours ago',
      status: 'answered',
      topAnswer: {
        author: 'ProGamer_Kim',
        text: 'Arcana is best for your budget. Focus on Cavern Lower Path with Kanna/Lara.',
        timestamp: '3:45',
        videoLink: 'Video Guide',
        upvotes: 18
      }
    },
    {
      id: 2,
      question: 'How to counter Riven as Yasuo in lane?',
      game: 'League of Legends',
      credits: 150,
      answers: 8,
      upvotes: 34,
      timeAgo: '5 hours ago',
      status: 'answered',
      topAnswer: {
        author: 'Coach_Sarah',
        text: 'Use windwall for her Q3 engage. Trade when her CDs are down. Check this timestamp.',
        timestamp: '7:23',
        videoLink: 'Watch Example',
        upvotes: 28
      }
    },
    {
      id: 3,
      question: 'Optimal Elden Ring build for NG+7?',
      game: 'Elden Ring',
      credits: 200,
      answers: 3,
      upvotes: 19,
      timeAgo: '1 day ago',
      status: 'open',
      topAnswer: null
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b968ff]/20 to-[#b968ff]/5 flex items-center justify-center border border-[#b968ff]/30">
              <MessageSquare className="w-6 h-6 text-[#b968ff]" />
            </div>
            <div>
              <h1 className="text-3xl text-[#b968ff]">Expert Q&A</h1>
              <p className="text-gray-400">Ask the community when AI can't help</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ask Question Section */}
            <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-[#b968ff]" />
                Ask a Question
              </h2>

              <div className="space-y-4">
                {/* Question Input */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Question</label>
                  <textarea
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    placeholder="Describe your question in detail... What are you trying to learn or solve?"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors resize-none"
                    rows={4}
                  />
                </div>

                {/* Game Selection & Tags */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Game</label>
                    <select 
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] cursor-pointer"
                    >
                      <option value="">Select Game</option>
                      <option value="valorant">Valorant</option>
                      <option value="lol">League of Legends</option>
                      <option value="maplestory">MapleStory</option>
                      <option value="elden">Elden Ring</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Credit Reward</label>
                    <div className="relative">
                      <Coins className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b968ff]" />
                      <input
                        type="number"
                        value={creditBudget}
                        onChange={(e) => setCreditBudget(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff]"
                      />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Tags (Select up to 3)</label>
                  <div className="flex flex-wrap gap-2">
                    {['Strategy', 'Mechanics', 'Build Guide', 'PvP', 'Farming', 'Boss Fight'].map((tag) => (
                      <button
                        key={tag}
                        className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] hover:bg-[#b968ff]/10 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all hover:scale-105">
                  Post Question (Cost: {creditBudget} credits)
                </button>
              </div>
            </div>

            {/* Recent Questions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Recent Questions</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-[#b968ff] text-white rounded-lg text-sm">Latest</button>
                  <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] transition-colors">Unanswered</button>
                  <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] transition-colors">Highest Reward</button>
                </div>
              </div>

              <div className="space-y-4">
                {recentQuestions.map((q) => (
                  <div key={q.id} className="bg-[#1a1a24] rounded-xl border border-white/10 p-6 hover:border-[#b968ff]/50 transition-colors">
                    {/* Question Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-[#b968ff]/20 text-[#b968ff] rounded text-sm">{q.game}</span>
                          <span className={`px-3 py-1 rounded text-sm ${q.status === 'answered' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-[#ff006e]/20 text-[#ff006e]'}`}>
                            {q.status === 'answered' ? 'Answered' : 'Open'}
                          </span>
                          <span className="text-sm text-gray-400 flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {q.timeAgo}
                          </span>
                        </div>
                        <h3 className="text-xl mb-2">{q.question}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-[#b968ff] mb-1">{q.credits}</div>
                        <div className="text-xs text-gray-400">Credits</div>
                      </div>
                    </div>

                    {/* Top Answer */}
                    {q.topAnswer && (
                      <div className="bg-[#0a0a0f] rounded-lg p-4 border border-[#00ff88]/20">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-sm">
                            {q.topAnswer.author.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm text-[#00ff88]">{q.topAnswer.author}</p>
                              <Award className="w-4 h-4 text-[#00ff88]" />
                            </div>
                            <p className="text-gray-300 text-sm mb-2">{q.topAnswer.text}</p>
                            <button className="px-3 py-1 bg-[#00d9ff]/20 text-[#00d9ff] rounded text-xs hover:bg-[#00d9ff]/30 transition-colors">
                              {q.topAnswer.videoLink} @ {q.topAnswer.timestamp}
                            </button>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <ThumbsUp className="w-4 h-4" />
                            {q.topAnswer.upvotes}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Question Stats */}
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                      <span className="text-sm text-gray-400">{q.answers} Answers</span>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {q.upvotes}
                      </span>
                      <button className="ml-auto px-4 py-2 bg-[#b968ff]/20 text-[#b968ff] rounded-lg text-sm hover:bg-[#b968ff]/30 transition-colors">
                        {q.status === 'answered' ? 'View All Answers' : 'Submit Answer'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Stats */}
            <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <Coins className="w-5 h-5 text-[#b968ff]" />
                Your Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Credits Available</span>
                  <span className="text-lg text-[#b968ff]">8,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Questions Asked</span>
                  <span className="text-lg">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Answers Given</span>
                  <span className="text-lg">34</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Credits Earned</span>
                  <span className="text-lg text-[#00ff88]">+2,340</span>
                </div>
              </div>
              <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(185,104,255,0.3)] transition-all">
                Earn More Credits
              </button>
            </div>

            {/* Top Contributors Leaderboard */}
            <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
              <h3 className="mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#00ff88]" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div key={contributor.rank} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                      contributor.rank === 1 ? 'bg-gradient-to-r from-[#FFD700] to-[#FFA500]' :
                      contributor.rank === 2 ? 'bg-gradient-to-r from-[#C0C0C0] to-[#A0A0A0]' :
                      'bg-gradient-to-r from-[#CD7F32] to-[#8B4513]'
                    }`}>
                      {contributor.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{contributor.name}</p>
                      <p className="text-xs text-gray-400">{contributor.answers} answers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-[#00ff88]">{contributor.earned.toLocaleString()}</p>
                      <p className="text-xs text-gray-400">earned</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-[#b968ff]/10 to-[#ff006e]/10 rounded-xl border border-[#b968ff]/30 p-6">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] transition-colors">
                  Browse by Game
                </button>
                <button className="w-full py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] transition-colors">
                  Your Questions
                </button>
                <button className="w-full py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] transition-colors">
                  Saved Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}