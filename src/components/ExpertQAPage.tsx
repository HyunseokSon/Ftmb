import { MessageSquare, TrendingUp, Award, ThumbsUp, Clock, Coins, ArrowLeft, Send, X, Play } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { navigateTo } from '../utils/navigation';

export function ExpertQAPage() {
  const [questionText, setQuestionText] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [creditBudget, setCreditBudget] = useState('100');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitAnswerModalOpen, setIsSubmitAnswerModalOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [answerText, setAnswerText] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [timestampStart, setTimestampStart] = useState('');
  const [timestampEnd, setTimestampEnd] = useState('');
  const [filterMode, setFilterMode] = useState<'latest' | 'unanswered' | 'highest'>('latest');
  const [questionDetailText, setQuestionDetailText] = useState('');

  const topContributors = [
    { rank: 1, name: 'ProGamer_Kim', answers: 342, earned: 45200, avatar: '🏆' },
    { rank: 2, name: 'Coach_Sarah', answers: 298, earned: 38500, avatar: '⭐' },
    { rank: 3, name: 'Sensei_Lee', answers: 256, earned: 32100, avatar: '🎯' }
  ];

  const recentQuestions = [
    {
      id: 1,
      question: 'Best crosshair for Sheriff one-tap in ranked?',
      game: 'Valorant',
      credits: 120,
      answers: 7,
      upvotes: 42,
      timeAgo: '3 hours ago',
      status: 'answered',
      author: 'TacticalShooter',
      topAnswer: {
        author: 'ProGamer_Kim',
        text: 'Use small cyan crosshair with 1-4-2-2 settings. Keeps your focus tight for headshot precision.',
        timestamp: '2:34-2:48',
        videoThumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        upvotes: 35
      }
    },
    {
      id: 2,
      question: 'Optimal NG+ Faith build for Malenia fight?',
      game: 'Elden Ring',
      credits: 200,
      answers: 0,
      upvotes: 28,
      timeAgo: '5 hours ago',
      status: 'open',
      author: 'Tarnished_Warrior',
      topAnswer: null
    },
    {
      id: 3,
      question: 'Fastest way to farm Mesos with 2B capital?',
      game: 'MapleStory',
      credits: 180,
      answers: 12,
      upvotes: 56,
      timeAgo: '8 hours ago',
      status: 'answered',
      author: 'MapleWhale',
      topAnswer: {
        author: 'Coach_Sarah',
        text: 'Invest in Kanna + full Legion setup. Farm Arcana Cavern Lower Path for 800M/hour.',
        timestamp: '1:20-1:45',
        videoThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        upvotes: 48
      }
    },
    {
      id: 4,
      question: 'How to counter Zed as Lux in mid?',
      game: 'League of Legends',
      credits: 130,
      answers: 9,
      upvotes: 38,
      timeAgo: '12 hours ago',
      status: 'answered',
      author: 'MidlaneMain',
      topAnswer: {
        author: 'Sensei_Lee',
        text: 'Save your Q for post-ult. Use barrier instead of ignite. Rush Zhonya\'s after Luden\'s.',
        timestamp: '3:12-3:35',
        videoThumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
        upvotes: 32
      }
    },
    {
      id: 5,
      question: 'Best Mirage A-site retake strategy for 3 players?',
      game: 'CS2',
      credits: 160,
      answers: 0,
      upvotes: 19,
      timeAgo: '1 day ago',
      status: 'open',
      author: 'TacticalGamer',
      topAnswer: null
    },
    {
      id: 6,
      question: 'Whirlwind Barbarian gear priority for WT3?',
      game: 'Diablo 4',
      credits: 150,
      answers: 6,
      upvotes: 31,
      timeAgo: '1 day ago',
      status: 'answered',
      author: 'BarbarianMain',
      topAnswer: {
        author: 'DiabloVet',
        text: 'Priority: Weapon DPS > Crit Chance > Fury Cost Reduction. Get Aspect of Berserk Fury ASAP.',
        timestamp: '0:45-1:10',
        videoThumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
        upvotes: 26
      }
    },
    {
      id: 7,
      question: 'Best drop spots in Erangel for Duo ranked?',
      game: 'PUBG',
      credits: 90,
      answers: 8,
      upvotes: 22,
      timeAgo: '2 days ago',
      status: 'answered',
      author: 'BattleRoyalePro',
      topAnswer: {
        author: 'PUBGMaster',
        text: 'Georgopol containers or School. High loot density, good rotation options to circle.',
        timestamp: '1:55-2:18',
        videoThumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
        upvotes: 18
      }
    },
    {
      id: 8,
      question: 'How to edit faster on controller (no paddles)?',
      game: 'Fortnite',
      credits: 110,
      answers: 0,
      upvotes: 15,
      timeAgo: '2 days ago',
      status: 'open',
      author: 'ConsoleBuilder',
      topAnswer: null
    },
    {
      id: 9,
      question: 'How to increase DPS as Reaper in Legion raids?',
      game: 'Lost Ark',
      credits: 140,
      answers: 5,
      upvotes: 27,
      timeAgo: '3 days ago',
      status: 'answered',
      author: 'ReaperMain',
      topAnswer: {
        author: 'RaidLeader',
        text: 'Prioritize Grudge + Cursed Doll engravings. Always back-attack. Use Dark Axel for positioning.',
        timestamp: '4:20-4:55',
        videoThumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400',
        upvotes: 24
      }
    },
    {
      id: 10,
      question: 'Best way to defeat Mohg without summons?',
      game: 'Elden Ring',
      credits: 175,
      answers: 11,
      upvotes: 63,
      timeAgo: '3 days ago',
      status: 'answered',
      author: 'SoloPlayer',
      topAnswer: {
        author: 'BossHunter',
        text: 'Use Mohg\'s Shackle for phase 1. Bring Purifying Crystal Tear to negate Nihil. Bleed build recommended.',
        timestamp: '2:15-2:40',
        videoThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        upvotes: 58
      }
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button 
            onClick={() => window.location.href = '/'}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b968ff]/20 to-[#b968ff]/5 flex items-center justify-center border border-[#b968ff]/30">
                <MessageSquare className="w-6 h-6 text-[#b968ff]" />
              </div>
              <div>
                <h1 className="text-3xl text-[#b968ff]">Expert Q&A</h1>
                <p className="text-gray-400">Ask the community when AI can't help</p>
              </div>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-xl hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all hover:scale-105 flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Ask a Question
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recent Questions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Recent Questions</h2>
                <div className="flex gap-2">
                  <button 
                    className={`px-4 py-2 ${filterMode === 'latest' ? 'bg-[#b968ff] text-white' : 'bg-[#1a1a24] border border-white/10 text-gray-400 hover:border-[#b968ff]'} rounded-lg text-sm`}
                    onClick={() => setFilterMode('latest')}
                  >
                    Latest
                  </button>
                  <button 
                    className={`px-4 py-2 ${filterMode === 'unanswered' ? 'bg-[#b968ff] text-white' : 'bg-[#1a1a24] border border-white/10 text-gray-400 hover:border-[#b968ff]'} rounded-lg text-sm`}
                    onClick={() => setFilterMode('unanswered')}
                  >
                    Unanswered
                  </button>
                  <button 
                    className={`px-4 py-2 ${filterMode === 'highest' ? 'bg-[#b968ff] text-white' : 'bg-[#1a1a24] border border-white/10 text-gray-400 hover:border-[#b968ff]'} rounded-lg text-sm`}
                    onClick={() => setFilterMode('highest')}
                  >
                    Highest Reward
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {recentQuestions
                  .filter(q => {
                    if (filterMode === 'unanswered') return q.status === 'open';
                    return true;
                  })
                  .sort((a, b) => {
                    if (filterMode === 'highest') return b.credits - a.credits;
                    return 0; // Latest is default order
                  })
                  .map((q) => (
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
                      <button 
                        onClick={() => {
                          if (q.status === 'answered') {
                            navigateTo('/question-detail');
                          } else {
                            setIsSubmitAnswerModalOpen(true);
                          }
                        }}
                        className="ml-auto px-4 py-2 bg-[#b968ff]/20 text-[#b968ff] rounded-lg text-sm hover:bg-[#b968ff]/30 transition-colors"
                      >
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

      {/* Modal for Asking a Question */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a24] border border-white/10 rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#b968ff] flex items-center gap-2">
                <Send className="w-6 h-6" />
                Ask a Question
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Question Title */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Question Title</label>
                <input
                  type="text"
                  placeholder="e.g., How to counter Riven as Yasuo?"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                />
              </div>

              {/* Question Details */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Question Details</label>
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Describe your question in detail... What are you trying to learn or solve?"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors resize-none text-white"
                  rows={5}
                />
              </div>

              {/* Game Selection & Credit Reward */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Game / Category</label>
                  <select 
                    value={selectedGame}
                    onChange={(e) => setSelectedGame(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] cursor-pointer text-white"
                  >
                    <option value="">Select Game</option>
                    <option value="valorant">Valorant</option>
                    <option value="lol">League of Legends</option>
                    <option value="maplestory">MapleStory</option>
                    <option value="elden">Elden Ring</option>
                    <option value="cs2">CS2</option>
                    <option value="diablo">Diablo 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Credit Reward (Optional)</label>
                  <div className="relative">
                    <Coins className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b968ff]" />
                    <input
                      type="number"
                      value={creditBudget}
                      onChange={(e) => setCreditBudget(e.target.value)}
                      placeholder="100"
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] text-white"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Higher rewards attract better answers</p>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tags (Select up to 3)</label>
                <div className="flex flex-wrap gap-2">
                  {['Strategy', 'Mechanics', 'Build Guide', 'PvP', 'Farming', 'Boss Fight'].map((tag) => (
                    <button
                      key={tag}
                      className={`px-4 py-2 border rounded-lg text-sm transition-colors ${
                        selectedTags.includes(tag) 
                          ? 'bg-[#b968ff]/20 border-[#b968ff] text-[#b968ff]' 
                          : 'bg-[#0a0a0f] border-white/10 hover:border-[#b968ff] hover:bg-[#b968ff]/10'
                      }`}
                      onClick={() => {
                        if (selectedTags.includes(tag)) {
                          setSelectedTags(selectedTags.filter(t => t !== tag));
                        } else if (selectedTags.length < 3) {
                          setSelectedTags([...selectedTags, tag]);
                        }
                      }}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all"
                  onClick={() => {
                    // Handle form submission here
                    setIsModalOpen(false);
                    // Reset form
                    setQuestionText('');
                    setSelectedGame('');
                    setCreditBudget('100');
                    setSelectedTags([]);
                  }}
                >
                  Post Question ({creditBudget} credits)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Submitting an Answer */}
      {isSubmitAnswerModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsSubmitAnswerModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a24] border border-white/10 rounded-2xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl text-[#b968ff] flex items-center gap-2">
                <Send className="w-6 h-6" />
                Submit an Answer
              </h2>
              <button 
                onClick={() => setIsSubmitAnswerModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Answer Text */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Answer Text</label>
                <textarea
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  placeholder="Provide your answer in detail... What is the solution to the question?"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors resize-none text-white"
                  rows={5}
                />
              </div>

              {/* Video Link */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Video Link (Optional)</label>
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                />
              </div>

              {/* Timestamp */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timestamp Start (Optional)</label>
                  <input
                    type="text"
                    value={timestampStart}
                    onChange={(e) => setTimestampStart(e.target.value)}
                    placeholder="e.g., 2:34"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timestamp End (Optional)</label>
                  <input
                    type="text"
                    value={timestampEnd}
                    onChange={(e) => setTimestampEnd(e.target.value)}
                    placeholder="e.g., 2:48"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setIsSubmitAnswerModalOpen(false)}
                  className="flex-1 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  className="flex-1 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all"
                  onClick={() => {
                    // Handle form submission here
                    setIsSubmitAnswerModalOpen(false);
                    // Reset form
                    setAnswerText('');
                    setVideoLink('');
                    setTimestampStart('');
                    setTimestampEnd('');
                  }}
                >
                  Submit Answer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}