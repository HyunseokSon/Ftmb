import { MessageSquare, Video, TrendingUp, Award, ThumbsUp, Clock, Coins, ArrowLeft, Send, X, Play, Upload, Eye, FileText, Bookmark, Flag } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

type PostType = 'text' | 'video';
type FilterMode = 'all' | 'text' | 'video' | 'trending' | 'unanswered' | 'myposts';

type Post = {
  id: number;
  type: PostType;
  title: string;
  description: string;
  game: string;
  rank?: string;
  role?: string;
  credits: number;
  status: 'open' | 'answered' | 'needs-review';
  author: string;
  timeAgo: string;
  answers: number;
  upvotes: number;
  videoThumbnail?: string;
  videoLink?: string;
  videoDuration?: string;
  tags: string[];
  focusAreas?: string[];
};

export function GameKnowledgeHub() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState<PostType>('text');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [isAnswerModalOpen, setIsAnswerModalOpen] = useState(false);
  
  // Form states
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [creditReward, setCreditReward] = useState('100');
  const [videoFile, setVideoFile] = useState<string | null>(null);
  const [videoLink, setVideoLink] = useState('');
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  
  // Answer form states
  const [answerText, setAnswerText] = useState('');
  const [answerVideoLink, setAnswerVideoLink] = useState('');
  const [answerTimestampStart, setAnswerTimestampStart] = useState('');
  const [answerTimestampEnd, setAnswerTimestampEnd] = useState('');

  const communityPosts: Post[] = [
    {
      id: 1,
      type: 'text',
      title: 'Best crosshair for Sheriff one-tap in ranked?',
      description: 'I\'m struggling with Sheriff accuracy in ranked games. My crosshair feels too big and I keep missing headshots. What settings do pro players use?',
      game: 'Valorant',
      credits: 120,
      status: 'answered',
      author: 'TacticalShooter',
      timeAgo: '3 hours ago',
      answers: 7,
      upvotes: 42,
      tags: ['Aim', 'Settings', 'Weapons']
    },
    {
      id: 2,
      type: 'video',
      title: 'Gold Tier Yasuo Teamfight Review - Am I engaging too early?',
      description: 'I keep dying first in teamfights. Please review my positioning and engage timing, especially at 02:30 and 07:45.',
      game: 'League of Legends',
      rank: 'Gold 2',
      role: 'Mid Lane',
      credits: 200,
      status: 'answered',
      author: 'MidLaneMain',
      timeAgo: '5 hours ago',
      answers: 4,
      upvotes: 28,
      videoThumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
      videoDuration: '12:34',
      tags: ['Teamfight', 'Positioning'],
      focusAreas: ['Positioning', 'Team Fight', 'Decision Making']
    },
    {
      id: 3,
      type: 'video',
      title: 'Diamond Jett Main - Please review my positioning on Ascent',
      description: 'I want feedback on my entry fragging and dash usage. Focusing on rounds 5, 8, and 12.',
      game: 'Valorant',
      rank: 'Diamond 1',
      role: 'Duelist',
      credits: 180,
      status: 'needs-review',
      author: 'TacticalShooter',
      timeAgo: '8 hours ago',
      answers: 2,
      upvotes: 15,
      videoThumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      videoDuration: '15:22',
      tags: ['Entry', 'Positioning'],
      focusAreas: ['Positioning', 'Aim', 'Utility Usage']
    },
    {
      id: 4,
      type: 'text',
      title: 'How to counter Zed as Lux in mid lane?',
      description: 'Every time I face Zed mid, I get destroyed post-6. What should my itemization and playstyle be?',
      game: 'League of Legends',
      credits: 130,
      status: 'answered',
      author: 'MageMaster',
      timeAgo: '12 hours ago',
      answers: 9,
      upvotes: 38,
      tags: ['Matchup', 'Mid Lane', 'Strategy']
    },
    {
      id: 5,
      type: 'text',
      title: 'Best Mirage A-site retake strategy for 3 players?',
      description: 'We often find ourselves retaking A with 3 players. What\'s the best smoke/molly setup and entry sequence?',
      game: 'CS2',
      credits: 160,
      status: 'open',
      author: 'TacticalGamer',
      timeAgo: '1 day ago',
      answers: 0,
      upvotes: 19,
      tags: ['Strategy', 'Utility', 'Retake']
    },
    {
      id: 6,
      type: 'video',
      title: 'Silver ADC Laning Phase - Why do I keep losing trades?',
      description: 'I need help understanding wave management and trading stance. Please review 01:45-05:30.',
      game: 'League of Legends',
      rank: 'Silver 4',
      role: 'ADC',
      credits: 150,
      status: 'answered',
      author: 'BotLaneCarry',
      timeAgo: '1 day ago',
      answers: 6,
      upvotes: 31,
      videoThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      videoDuration: '10:45',
      tags: ['Laning', 'Wave Management'],
      focusAreas: ['Macro', 'Laning', 'Decision Making']
    },
    {
      id: 7,
      type: 'video',
      title: 'Elden Ring - Malenia No-Hit Attempt Analysis',
      description: 'Frame-by-frame analysis of dodge timings needed. Struggling with Waterfowl Dance at 09:30.',
      game: 'Elden Ring',
      rank: 'RL 155',
      credits: 175,
      status: 'answered',
      author: 'SoloPlayer',
      timeAgo: '2 days ago',
      answers: 11,
      upvotes: 63,
      videoThumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
      videoDuration: '18:42',
      tags: ['Boss Fight', 'Dodge Timing'],
      focusAreas: ['Positioning', 'Decision Making']
    },
    {
      id: 8,
      type: 'text',
      title: 'How to edit faster on controller without paddles?',
      description: 'I\'m on controller with no paddles. What\'s the optimal button layout for fast edits in build battles?',
      game: 'Fortnite',
      credits: 110,
      status: 'open',
      author: 'ConsoleBuilder',
      timeAgo: '2 days ago',
      answers: 0,
      upvotes: 15,
      tags: ['Controller', 'Building', 'Settings']
    },
    {
      id: 9,
      type: 'video',
      title: 'CS2 Mirage Smoke Lineup Fails - What am I doing wrong?',
      description: 'My CT smoke keeps landing wrong. Please review my lineup at 01:20.',
      game: 'CS2',
      rank: 'MG2',
      credits: 140,
      status: 'needs-review',
      author: 'UtilityNoob',
      timeAgo: '3 days ago',
      answers: 5,
      upvotes: 27,
      videoThumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
      videoDuration: '8:15',
      tags: ['Utility', 'Lineup'],
      focusAreas: ['Utility Usage', 'Macro']
    }
  ];

  const filteredPosts = communityPosts
    .filter(post => {
      if (filterMode === 'text') return post.type === 'text';
      if (filterMode === 'video') return post.type === 'video';
      if (filterMode === 'unanswered') return post.status === 'open' || post.status === 'needs-review';
      if (filterMode === 'trending') return post.upvotes > 30;
      if (filterMode === 'myposts') return post.author === 'TacticalShooter'; // Simulated current user
      return true;
    })
    .sort((a, b) => {
      if (filterMode === 'trending') return b.upvotes - a.upvotes;
      return 0;
    });

  const selectedPost = selectedPostId ? communityPosts.find(p => p.id === selectedPostId) : null;

  const sampleAnswers = selectedPost ? [
    {
      id: 1,
      author: 'ProGamer_Kim',
      avatar: '🏆',
      timeAgo: '2 hours ago',
      upvotes: 35,
      text: selectedPost.type === 'text' 
        ? 'Use small cyan crosshair with 1-4-2-2 settings. Keeps your focus tight for headshot precision. Inner lines at 4, outer lines at 2, center gap at 2, thickness at 2.'
        : 'At 02:30 you engaged too early without checking if your frontline was in position. Wait for your tank to initiate, then follow up with your tornado. Also, your windwall was wasted on the initial poke - save it for the enemy ADC\'s ultimate.',
      videoThumbnail: selectedPost.type === 'video' ? 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' : undefined,
      timestamp: selectedPost.type === 'video' ? '02:30 - 02:45' : undefined,
      videoLink: 'Analysis Clip'
    },
    {
      id: 2,
      author: 'Coach_Sarah',
      avatar: '⭐',
      timeAgo: '4 hours ago',
      upvotes: 28,
      text: selectedPost.type === 'text'
        ? 'Pro tip: Try experimenting with different colors for different weapons. Many pros use cyan for rifles and yellow for pistols to psychologically separate the playstyles.'
        : 'Your positioning at 07:45 was much better! You waited for the enemy to blow their cooldowns. However, you could have gotten a better angle by flanking from the right side instead of going straight in.',
      videoThumbnail: selectedPost.type === 'video' ? 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400' : undefined,
      timestamp: selectedPost.type === 'video' ? '07:45 - 08:10' : undefined,
      videoLink: 'Follow-up Analysis'
    }
  ] : [];

  const resetForm = () => {
    setPostTitle('');
    setPostDescription('');
    setSelectedGame('');
    setSelectedRank('');
    setSelectedRole('');
    setCreditReward('100');
    setVideoFile(null);
    setVideoLink('');
    setSelectedFocusAreas([]);
  };

  const handleSubmitPost = () => {
    // Simulate post creation
    setIsCreateModalOpen(false);
    resetForm();
  };

  const handleSubmitAnswer = () => {
    // Simulate answer submission
    setIsAnswerModalOpen(false);
    setAnswerText('');
    setAnswerVideoLink('');
    setAnswerTimestampStart('');
    setAnswerTimestampEnd('');
  };

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
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl mb-2 bg-gradient-to-r from-[#00FFC6] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
                Game Knowledge Hub
              </h1>
              <p className="text-gray-400">Ask anything, share your gameplay, and get feedback from expert players, coaches, and creators.</p>
            </div>
            <button 
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] rounded-xl hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all hover:scale-105 flex items-center gap-2 text-[#0a0a0f] font-medium"
            >
              <Send className="w-5 h-5" />
              Create Post
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'all', label: 'All', icon: null },
              { id: 'text', label: 'Text Questions', icon: FileText },
              { id: 'video', label: 'Video Feedback', icon: Video },
              { id: 'trending', label: 'Trending', icon: TrendingUp },
              { id: 'unanswered', label: 'Unanswered', icon: MessageSquare },
              { id: 'myposts', label: 'My Posts', icon: Bookmark }
            ].map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setFilterMode(filter.id as FilterMode)}
                  className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all flex items-center gap-2 ${
                    filterMode === filter.id
                      ? 'bg-gradient-to-r from-[#00FFC6] to-[#b968ff] text-[#0a0a0f]'
                      : 'bg-[#1a1a24] border border-white/10 hover:border-[#00FFC6]'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {!selectedPostId ? (
          // Post List
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2 space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-12 text-center">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-400">No posts found for this filter.</p>
                </div>
              ) : (
                filteredPosts.map((post) => (
                  <div key={post.id} className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden hover:border-[#00FFC6]/50 transition-colors">
                    {/* Video Thumbnail (if video post) */}
                    {post.type === 'video' && post.videoThumbnail && (
                      <div className="relative aspect-video bg-[#0a0a0f]">
                        <ImageWithFallback
                          src={post.videoThumbnail}
                          alt={post.title}
                          className="w-full h-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent"></div>
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                          {post.videoDuration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-[#00FFC6] flex items-center justify-center">
                            <Play className="w-8 h-8 text-[#0a0a0f]" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Post Content */}
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`px-3 py-1 rounded text-xs font-medium ${
                              post.type === 'text' 
                                ? 'bg-[#b968ff]/20 text-[#b968ff]' 
                                : 'bg-[#00FFC6]/20 text-[#00FFC6]'
                            }`}>
                              {post.type === 'text' ? '📄 Text' : '🎥 Video'}
                            </span>
                            <span className="px-3 py-1 bg-[#ff006e]/20 text-[#ff006e] rounded text-xs">
                              {post.game}
                            </span>
                            {post.rank && (
                              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded text-xs">
                                {post.rank}
                              </span>
                            )}
                            {post.role && (
                              <span className="px-3 py-1 bg-white/10 text-gray-300 rounded text-xs">
                                {post.role}
                              </span>
                            )}
                            <span className={`px-3 py-1 rounded text-xs ${
                              post.status === 'answered' ? 'bg-[#00ff88]/20 text-[#00ff88]' :
                              post.status === 'needs-review' ? 'bg-[#ff006e]/20 text-[#ff006e]' :
                              'bg-[#00d9ff]/20 text-[#00d9ff]'
                            }`}>
                              {post.status === 'answered' ? '✓ Answered' : 
                               post.status === 'needs-review' ? '⏳ Needs Review' : 
                               '⭕ Open'}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.timeAgo}
                            </span>
                          </div>
                          <h3 
                            className="text-xl mb-2 hover:text-[#00FFC6] transition-colors cursor-pointer"
                            onClick={() => setSelectedPostId(post.id)}
                          >
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-400 line-clamp-2 mb-3">{post.description}</p>
                          
                          {/* Tags */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {post.tags.map((tag, i) => (
                                <span key={i} className="px-2 py-1 bg-[#0a0a0f] border border-white/10 rounded text-xs text-gray-400">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl text-[#00FFC6] mb-1">{post.credits}</div>
                          <div className="text-xs text-gray-400">Credits</div>
                        </div>
                      </div>

                      {/* Stats & Actions */}
                      <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                        <span className="text-sm text-gray-400">{post.answers} Answers</span>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {post.upvotes}
                        </span>
                        <button 
                          onClick={() => setSelectedPostId(post.id)}
                          className="ml-auto px-4 py-2 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] text-[#0a0a0f] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] transition-all"
                        >
                          View Details
                        </button>
                        <button className="p-2 border border-white/10 rounded-lg hover:border-[#00FFC6] hover:text-[#00FFC6] transition-colors">
                          <Bookmark className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Stats */}
              <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-[#00FFC6]" />
                  Your Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Credits Available</span>
                    <span className="text-lg text-[#00FFC6]">8,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Posts Created</span>
                    <span className="text-lg">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Answers Given</span>
                    <span className="text-lg">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Credits Earned</span>
                    <span className="text-lg text-[#00ff88]">+1,540</span>
                  </div>
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#00ff88]" />
                  Top Contributors
                </h3>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: 'ProGamer_Kim', contributions: 342, earned: 45200, avatar: '🏆' },
                    { rank: 2, name: 'Coach_Sarah', contributions: 298, earned: 38500, avatar: '⭐' },
                    { rank: 3, name: 'Sensei_Lee', contributions: 256, earned: 32100, avatar: '🎯' }
                  ].map((contributor) => (
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
                        <p className="text-xs text-gray-400">{contributor.contributions} answers</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-[#00ff88]">{contributor.earned.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">earned</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Post Detail View
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setSelectedPostId(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Posts
            </button>

            {selectedPost && (
              <div className="bg-[#1a1a24] rounded-2xl border border-white/10 overflow-hidden">
                {/* Video Player (if video post) */}
                {selectedPost.type === 'video' && selectedPost.videoThumbnail && (
                  <div className="relative aspect-video bg-[#0a0a0f]">
                    <ImageWithFallback
                      src={selectedPost.videoThumbnail}
                      alt={selectedPost.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-20 h-20 rounded-full bg-[#00FFC6] flex items-center justify-center hover:scale-110 transition-transform">
                        <Play className="w-12 h-12 text-[#0a0a0f]" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Post Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className={`px-3 py-1 rounded text-sm font-medium ${
                          selectedPost.type === 'text' 
                            ? 'bg-[#b968ff]/20 text-[#b968ff]' 
                            : 'bg-[#00FFC6]/20 text-[#00FFC6]'
                        }`}>
                          {selectedPost.type === 'text' ? '📄 Text Question' : '🎥 Video Feedback Request'}
                        </span>
                        <span className="px-3 py-1 bg-[#ff006e]/20 text-[#ff006e] rounded text-sm">
                          {selectedPost.game}
                        </span>
                        {selectedPost.rank && (
                          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded text-sm">
                            {selectedPost.rank}
                          </span>
                        )}
                        {selectedPost.role && (
                          <span className="px-3 py-1 bg-white/10 text-gray-300 rounded text-sm">
                            {selectedPost.role}
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded text-sm ${
                          selectedPost.status === 'answered' ? 'bg-[#00ff88]/20 text-[#00ff88]' :
                          selectedPost.status === 'needs-review' ? 'bg-[#ff006e]/20 text-[#ff006e]' :
                          'bg-[#00d9ff]/20 text-[#00d9ff]'
                        }`}>
                          {selectedPost.status === 'answered' ? '✓ Answered' : 
                           selectedPost.status === 'needs-review' ? '⏳ Needs Review' : 
                           '⭕ Open'}
                        </span>
                      </div>
                      <h1 className="text-3xl mb-3">{selectedPost.title}</h1>
                      <p className="text-gray-400 mb-4">{selectedPost.description}</p>
                      
                      {/* Focus Areas (if video) */}
                      {selectedPost.focusAreas && selectedPost.focusAreas.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-500 mb-2">Focus Areas:</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedPost.focusAreas.map((area, i) => (
                              <span key={i} className="px-3 py-1 bg-[#00FFC6]/10 border border-[#00FFC6]/30 text-[#00FFC6] rounded text-sm">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>By {selectedPost.author}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {selectedPost.timeAgo}
                        </span>
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {selectedPost.upvotes}
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-3xl text-[#00FFC6] mb-1">{selectedPost.credits}</div>
                      <div className="text-sm text-gray-400">Credit Reward</div>
                    </div>
                  </div>

                  {/* Answers Section */}
                  <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl">{sampleAnswers.length} Answers</h2>
                      <button 
                        onClick={() => setIsAnswerModalOpen(true)}
                        className="px-6 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-xl hover:shadow-[0_0_30px_rgba(185,104,255,0.4)] transition-all flex items-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Submit {selectedPost.type === 'text' ? 'Answer' : 'Feedback'}
                      </button>
                    </div>

                    {/* Answer Cards */}
                    <div className="space-y-6">
                      {sampleAnswers.map((answer) => (
                        <div key={answer.id} className="bg-[#0a0a0f] rounded-xl border border-white/10 p-6">
                          {/* Answer Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-xl flex-shrink-0">
                              {answer.avatar}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[#00ff88]">{answer.author}</span>
                                <Award className="w-4 h-4 text-[#00ff88]" />
                                <span className="text-xs text-gray-500">{answer.timeAgo}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                              <ThumbsUp className="w-5 h-5" />
                              <span>{answer.upvotes}</span>
                            </div>
                          </div>

                          {/* Video Thumbnail FIRST (if provided) */}
                          {answer.videoThumbnail && (
                            <div className="mb-4">
                              <div className="relative aspect-video rounded-lg overflow-hidden bg-[#0a0a0f] border border-white/10">
                                <ImageWithFallback
                                  src={answer.videoThumbnail}
                                  alt="Answer video"
                                  className="w-full h-full object-cover opacity-70"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent"></div>
                                {answer.timestamp && (
                                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-[#00FFC6] text-[#0a0a0f] rounded text-sm font-medium">
                                    ⏱ {answer.timestamp}
                                  </div>
                                )}
                                <button className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                  <div className="w-16 h-16 rounded-full bg-[#00FFC6] flex items-center justify-center">
                                    <Play className="w-8 h-8 text-[#0a0a0f]" fill="currentColor" />
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Answer Text SECOND */}
                          <p className="text-gray-300 mb-4">{answer.text}</p>

                          {/* Action Buttons */}
                          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                            {answer.videoLink && (
                              <button className="px-4 py-2 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] text-[#0a0a0f] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] transition-all flex items-center gap-2">
                                <Play className="w-4 h-4" />
                                Watch Clip
                              </button>
                            )}
                            <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#00FFC6] hover:text-[#00FFC6] transition-all flex items-center gap-2">
                              <ThumbsUp className="w-4 h-4" />
                              Like
                            </button>
                            <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] hover:text-[#b968ff] transition-all flex items-center gap-2">
                              <MessageSquare className="w-4 h-4" />
                              Comment
                            </button>
                            <button className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#ff006e] hover:text-[#ff006e] transition-all">
                              <Bookmark className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Create Post Modal */}
      {isCreateModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsCreateModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a24] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1a1a24] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl flex items-center gap-2">
                <Send className="w-6 h-6 text-[#00FFC6]" />
                Create Post
              </h2>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Step 1: Select Post Type */}
              <div>
                <label className="block text-sm text-gray-400 mb-3">Step 1: Select Post Type</label>
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedPostType('text')}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedPostType === 'text'
                        ? 'border-[#b968ff] bg-[#b968ff]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <FileText className="w-8 h-8 mb-3 text-[#b968ff]" />
                    <h3 className="text-lg mb-2">Text Question</h3>
                    <p className="text-sm text-gray-400">Ask for advice, strategies, or general help</p>
                  </button>
                  <button
                    onClick={() => setSelectedPostType('video')}
                    className={`p-6 rounded-xl border-2 transition-all text-left ${
                      selectedPostType === 'video'
                        ? 'border-[#00FFC6] bg-[#00FFC6]/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Video className="w-8 h-8 mb-3 text-[#00FFC6]" />
                    <h3 className="text-lg mb-2">Video Feedback Request</h3>
                    <p className="text-sm text-gray-400">Upload gameplay for detailed analysis and coaching</p>
                  </button>
                </div>
              </div>

              {/* Step 2: Input Fields */}
              <div>
                <label className="block text-sm text-gray-400 mb-3">Step 2: Post Details</label>
                
                {/* Title */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">
                    {selectedPostType === 'text' ? 'Question Title' : 'Video Title'}
                  </label>
                  <input
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder={selectedPostType === 'text' 
                      ? 'e.g., How to counter Zed as Lux?' 
                      : 'e.g., Please review my teamfight at 22:10'}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6] transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">
                    {selectedPostType === 'text' ? 'Question Details' : 'What to analyze?'}
                  </label>
                  <textarea
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                    placeholder={selectedPostType === 'text'
                      ? 'Describe your question in detail...'
                      : 'Describe what you want feedback on, specific timestamps, etc.'}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6] transition-colors resize-none"
                    rows={5}
                  />
                </div>

                {/* Video Upload/Link (if video post) */}
                {selectedPostType === 'video' && (
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Upload Replay or Add Video Link</label>
                    <div 
                      className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#00FFC6] transition-colors cursor-pointer mb-3"
                      onClick={() => !videoFile && setVideoFile('gameplay_replay_2024.mp4')}
                    >
                      <Upload className="w-10 h-10 mx-auto mb-3 text-gray-400" />
                      {videoFile ? (
                        <div>
                          <p className="text-[#00FFC6] mb-2">✓ File Uploaded</p>
                          <p className="text-sm text-gray-400">{videoFile}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setVideoFile(null);
                            }}
                            className="mt-2 text-sm text-[#ff006e] hover:underline"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <p className="mb-2">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-500">MP4, MOV, AVI (Max 2GB)</p>
                        </div>
                      )}
                    </div>
                    <div className="text-center text-sm text-gray-500 mb-2">or</div>
                    <input
                      type="text"
                      value={videoLink}
                      onChange={(e) => setVideoLink(e.target.value)}
                      placeholder="Paste YouTube, Twitch, or TikTok link"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6] transition-colors"
                    />
                  </div>
                )}

                {/* Game Selection */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Game / Category</label>
                    <select 
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer focus:outline-none focus:border-[#00FFC6]"
                    >
                      <option value="">Select Game</option>
                      <option value="valorant">Valorant</option>
                      <option value="lol">League of Legends</option>
                      <option value="cs2">CS2</option>
                      <option value="elden">Elden Ring</option>
                      <option value="overwatch">Overwatch 2</option>
                      <option value="dota">Dota 2</option>
                      <option value="fortnite">Fortnite</option>
                    </select>
                  </div>
                  {selectedPostType === 'video' && (
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Rank / Level</label>
                      <input
                        type="text"
                        value={selectedRank}
                        onChange={(e) => setSelectedRank(e.target.value)}
                        placeholder="e.g., Diamond 2, Gold 3"
                        className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6]"
                      />
                    </div>
                  )}
                </div>

                {/* Role (if video) */}
                {selectedPostType === 'video' && (
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Role / Character</label>
                    <input
                      type="text"
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      placeholder="e.g., Mid Lane, Duelist, AWPer"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6]"
                    />
                  </div>
                )}

                {/* Focus Areas (if video) */}
                {selectedPostType === 'video' && (
                  <div className="mb-4">
                    <label className="block text-sm text-gray-400 mb-2">Ask for:</label>
                    <div className="flex flex-wrap gap-2">
                      {['Mistake Review', 'Strategy Coaching', 'Highlight Editing', 'Positioning', 'Aim', 'Utility Usage', 'Decision Making'].map((area) => (
                        <button
                          key={area}
                          onClick={() => {
                            if (selectedFocusAreas.includes(area)) {
                              setSelectedFocusAreas(selectedFocusAreas.filter(a => a !== area));
                            } else {
                              setSelectedFocusAreas([...selectedFocusAreas, area]);
                            }
                          }}
                          className={`px-4 py-2 rounded-lg text-sm transition-all ${
                            selectedFocusAreas.includes(area)
                              ? 'bg-[#00FFC6]/20 border-2 border-[#00FFC6] text-[#00FFC6]'
                              : 'bg-[#0a0a0f] border border-white/10 hover:border-[#00FFC6]'
                          }`}
                        >
                          {area}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Credit Reward */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Credit Reward (Optional)</label>
                  <div className="relative">
                    <Coins className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#00FFC6]" />
                    <input
                      type="number"
                      value={creditReward}
                      onChange={(e) => setCreditReward(e.target.value)}
                      placeholder="100"
                      className="w-full pl-12 pr-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00FFC6]"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Higher rewards attract better answers</p>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    resetForm();
                  }}
                  className="flex-1 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmitPost}
                  className="flex-1 py-3 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] text-[#0a0a0f] rounded-lg hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all"
                >
                  Submit Post ({creditReward} credits)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Answer/Feedback Modal */}
      {isAnswerModalOpen && selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setIsAnswerModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a24] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#1a1a24] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <h2 className="text-2xl flex items-center gap-2">
                <Send className="w-6 h-6 text-[#b968ff]" />
                Submit {selectedPost.type === 'text' ? 'Answer' : 'Feedback'}
              </h2>
              <button 
                onClick={() => setIsAnswerModalOpen(false)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Answer Text */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">
                  {selectedPost.type === 'text' ? 'Your Answer' : 'Your Feedback'}
                </label>
                <textarea
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  placeholder={selectedPost.type === 'text'
                    ? 'Provide your answer in detail...'
                    : 'Provide detailed feedback. What did they do well? What can be improved?'}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors resize-none"
                  rows={6}
                />
              </div>

              {/* Video Link (Optional) */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Video Link (Optional)</label>
                <input
                  type="text"
                  value={answerVideoLink}
                  onChange={(e) => setAnswerVideoLink(e.target.value)}
                  placeholder="e.g., https://www.youtube.com/watch?v=... (analysis clip)"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors"
                />
              </div>

              {/* Timestamps (Optional) */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timestamp Start (Optional)</label>
                  <input
                    type="text"
                    value={answerTimestampStart}
                    onChange={(e) => setAnswerTimestampStart(e.target.value)}
                    placeholder="e.g., 02:30"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Timestamp End (Optional)</label>
                  <input
                    type="text"
                    value={answerTimestampEnd}
                    onChange={(e) => setAnswerTimestampEnd(e.target.value)}
                    placeholder="e.g., 02:45"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setIsAnswerModalOpen(false)}
                  className="flex-1 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg hover:border-white/40 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSubmitAnswer}
                  className="flex-1 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.4)] transition-all"
                >
                  Submit {selectedPost.type === 'text' ? 'Answer' : 'Feedback'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
