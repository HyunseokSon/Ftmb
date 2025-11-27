import { FileText, Upload, MessageCircle, Video as VideoIcon, Star, Award, ArrowLeft, PlayCircle, Clock, ThumbsUp, Eye, X } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CoachingPage() {
  const [activeTab, setActiveTab] = useState<'request' | 'community'>('request');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [focusArea, setFocusArea] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState<number | null>(null);

  // Community feedback sessions
  const communityFeedbacks = [
    {
      id: 1,
      title: 'Gold Tier Yasuo Teamfight Review',
      game: 'League of Legends',
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
      player: 'MidLaneMain',
      tier: 'Gold 2',
      coach: 'Coach_Sarah',
      views: 234,
      upvotes: 45,
      duration: '12:34',
      timeAgo: '2 hours ago',
      keyHighlights: [
        { timestamp: '02:30', note: 'Bad engage - should wait for frontline' },
        { timestamp: '07:45', note: 'Missed ultimate opportunity' },
        { timestamp: '10:15', note: 'Perfect windwall timing' }
      ],
      description: 'Comprehensive teamfight review focusing on positioning and ult timing in ranked gameplay.'
    },
    {
      id: 2,
      title: 'Diamond Jett Main - Positioning Analysis',
      game: 'Valorant',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      player: 'TacticalShooter',
      tier: 'Diamond 1',
      coach: 'ProGamer_Kim',
      views: 512,
      upvotes: 89,
      duration: '15:22',
      timeAgo: '5 hours ago',
      keyHighlights: [
        { timestamp: '03:12', note: 'Overpeek - exposed to crossfire' },
        { timestamp: '08:45', note: 'Excellent off-angle setup' },
        { timestamp: '12:20', note: 'Dash usage too aggressive' }
      ],
      description: 'Entry fragging and positioning review with focus on Jett dash optimization.'
    },
    {
      id: 3,
      title: 'Silver ADC Laning Phase Breakdown',
      game: 'League of Legends',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
      player: 'BotLaneCarry',
      tier: 'Silver 4',
      coach: 'Sensei_Lee',
      views: 156,
      upvotes: 28,
      duration: '10:45',
      timeAgo: '1 day ago',
      keyHighlights: [
        { timestamp: '01:45', note: 'Missed CS under tower' },
        { timestamp: '05:30', note: 'Good trade pattern' },
        { timestamp: '08:10', note: 'Overextended without vision' }
      ],
      description: 'Early game wave management and trading stance review for ADC players.'
    },
    {
      id: 4,
      title: 'CS2 Mirage - Smoke Fails & Fixes',
      game: 'CS2',
      thumbnail: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400',
      player: 'TacticalGamer',
      tier: 'MG2',
      coach: 'FPS_Coach_Alex',
      views: 423,
      upvotes: 67,
      duration: '8:15',
      timeAgo: '1 day ago',
      keyHighlights: [
        { timestamp: '01:20', note: 'CT smoke lineup incorrect' },
        { timestamp: '04:35', note: 'Timing too slow - smokes faded' },
        { timestamp: '06:50', note: 'Perfect jungle smoke' }
      ],
      description: 'Utility usage review focusing on A-site executes and retakes.'
    },
    {
      id: 5,
      title: 'Elden Ring - Malenia No-Hit Attempt',
      game: 'Elden Ring',
      thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400',
      player: 'SoloPlayer',
      tier: 'RL 155',
      coach: 'BossHunter',
      views: 892,
      upvotes: 134,
      duration: '18:42',
      timeAgo: '2 days ago',
      keyHighlights: [
        { timestamp: '02:15', note: 'Dodge timing 0.2s too early' },
        { timestamp: '09:30', note: 'Waterfowl Dance - perfect positioning' },
        { timestamp: '15:45', note: 'Phase 2 transition - missed punish' }
      ],
      description: 'Frame-by-frame analysis of dodge timings and punish windows for Malenia boss fight.'
    },
    {
      id: 6,
      title: 'Platinum Support Roaming Guide',
      game: 'League of Legends',
      thumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400',
      player: 'SupportMain',
      tier: 'Platinum 3',
      coach: 'RoamSpecialist',
      views: 278,
      upvotes: 52,
      duration: '11:20',
      timeAgo: '3 days ago',
      keyHighlights: [
        { timestamp: '02:45', note: 'Roam timing - ADC wave crashed' },
        { timestamp: '06:10', note: 'Ward placement before roam' },
        { timestamp: '09:35', note: 'Late roam - scuttle already dead' }
      ],
      description: 'Support roaming patterns and vision control in mid-game.'
    }
  ];

  const selectedFeedback = selectedFeedbackId ? communityFeedbacks.find(f => f.id === selectedFeedbackId) : null;

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
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 flex items-center justify-center border border-[#00ff88]/30">
              <FileText className="w-6 h-6 text-[#00ff88]" />
            </div>
            <div>
              <h1 className="text-3xl text-[#00ff88]">VOD Feedback Community</h1>
              <p className="text-gray-400">Upload your gameplay and get feedback from coaches and top players</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('request')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === 'request'
                  ? 'bg-[#00ff88] text-[#0a0a0f]'
                  : 'bg-[#1a1a24] border border-white/10 hover:border-[#00ff88]'
              }`}
            >
              Request Feedback
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-lg transition-all ${
                activeTab === 'community'
                  ? 'bg-[#00ff88] text-[#0a0a0f]'
                  : 'bg-[#1a1a24] border border-white/10 hover:border-[#00ff88]'
              }`}
            >
              Community Reviews
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Request Feedback Tab */}
        {activeTab === 'request' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl mb-6">Upload Your Replay</h2>

              {/* File Upload Area */}
              <div className="mb-6">
                <div 
                  className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[#00ff88] transition-colors cursor-pointer"
                  onClick={() => !uploadedFile && setUploadedFile('competitive_match_2024.mp4')}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  {uploadedFile ? (
                    <div>
                      <p className="text-[#00ff88] mb-2">✓ File Uploaded</p>
                      <p className="text-sm text-gray-400">{uploadedFile}</p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedFile(null);
                        }}
                        className="mt-2 text-sm text-[#ff006e] hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-2">Drag & drop your replay file here</p>
                      <p className="text-sm text-gray-400 mb-4">or click to browse</p>
                      <div className="px-6 py-2 bg-[#00ff88] text-[#0a0a0f] rounded-lg text-sm inline-block hover:bg-[#00ff88]/90 transition-colors">
                        Select File
                      </div>
                      <p className="text-xs text-gray-500 mt-3">Supports: MP4, MOV, AVI (Max 2GB)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Replay Details */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Game</label>
                    <select 
                      value={selectedGame}
                      onChange={(e) => setSelectedGame(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer focus:outline-none focus:border-[#00ff88]"
                    >
                      <option value="">Select Game</option>
                      <option value="valorant">Valorant</option>
                      <option value="lol">League of Legends</option>
                      <option value="cs2">CS2</option>
                      <option value="overwatch">Overwatch 2</option>
                      <option value="elden">Elden Ring</option>
                      <option value="dota">Dota 2</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Rank/Level</label>
                    <input
                      type="text"
                      value={selectedTier}
                      onChange={(e) => setSelectedTier(e.target.value)}
                      placeholder="e.g., Diamond 2, Gold 3, RL 155"
                      className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00ff88]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Role / Character</label>
                  <input
                    type="text"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    placeholder="e.g., Mid Lane, Duelist, AWPer"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00ff88]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">What to analyze?</label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {['Macro', 'Laning', 'Team Fight', 'Positioning', 'Aim', 'Utility Usage', 'Decision Making'].map((area) => (
                      <button
                        key={area}
                        onClick={() => setFocusArea(area)}
                        className={`px-4 py-2 rounded-lg text-sm transition-all ${
                          focusArea === area
                            ? 'bg-[#00ff88]/20 border-2 border-[#00ff88] text-[#00ff88]'
                            : 'bg-[#0a0a0f] border border-white/10 hover:border-[#00ff88]'
                        }`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Additional Notes (Optional)</label>
                  <textarea
                    placeholder="e.g., I want feedback on my positioning and decision making in teamfights..."
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00ff88] resize-none"
                    rows={3}
                  />
                </div>

                {/* Public/Private Toggle */}
                <div className="flex items-center gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/10">
                  <input
                    type="checkbox"
                    id="publicToggle"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    className="w-5 h-5 rounded bg-[#1a1a24] border-white/20 text-[#00ff88] focus:ring-[#00ff88]"
                  />
                  <label htmlFor="publicToggle" className="flex-1">
                    <p className="text-sm">Make this feedback session public</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Public sessions appear in Community Reviews and help others learn
                    </p>
                  </label>
                </div>

                {/* Submit Button */}
                <button className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-[#0a0a0f] rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all">
                  Submit for Review
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Reviews typically completed within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Community Reviews Tab */}
        {activeTab === 'community' && (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityFeedbacks.map((feedback) => (
                <div
                  key={feedback.id}
                  className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden hover:border-[#00ff88]/50 transition-all cursor-pointer"
                  onClick={() => setSelectedFeedbackId(feedback.id)}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0a0a0f]">
                    <ImageWithFallback
                      src={feedback.thumbnail}
                      alt={feedback.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                      {feedback.duration}
                    </div>
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-[#00ff88] flex items-center justify-center">
                        <PlayCircle className="w-8 h-8 text-[#0a0a0f]" fill="currentColor" />
                      </div>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded text-xs">
                        {feedback.game}
                      </span>
                      <span className="text-xs text-gray-400">{feedback.tier}</span>
                      <span className="text-xs text-gray-400 ml-auto">{feedback.timeAgo}</span>
                    </div>

                    <h3 className="mb-2 line-clamp-2">{feedback.title}</h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{feedback.description}</p>

                    {/* Coach */}
                    <div className="flex items-center gap-2 mb-3 pb-3 border-b border-white/10">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-xs">
                        {feedback.coach.charAt(0)}
                      </div>
                      <span className="text-sm text-[#00ff88]">{feedback.coach}</span>
                      <Award className="w-4 h-4 text-[#00ff88]" />
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {feedback.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {feedback.upvotes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {feedback.keyHighlights.length} notes
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Feedback Detail Modal */}
      {selectedFeedback && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFeedbackId(null)}
        >
          <div 
            className="bg-[#1a1a24] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#1a1a24] border-b border-white/10 p-6 flex items-center justify-between z-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded text-sm">
                    {selectedFeedback.game}
                  </span>
                  <span className="text-sm text-gray-400">{selectedFeedback.tier}</span>
                </div>
                <h2 className="text-2xl">{selectedFeedback.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedFeedbackId(null)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Player Placeholder */}
            <div className="relative aspect-video bg-[#0a0a0f]">
              <ImageWithFallback
                src={selectedFeedback.thumbnail}
                alt={selectedFeedback.title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-[#00ff88] flex items-center justify-center hover:scale-110 transition-transform">
                  <PlayCircle className="w-12 h-12 text-[#0a0a0f]" fill="currentColor" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Coach Info */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-xl">
                    {selectedFeedback.coach.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#00ff88]">{selectedFeedback.coach}</span>
                      <Award className="w-4 h-4 text-[#00ff88]" />
                    </div>
                    <p className="text-sm text-gray-400">Coach • {selectedFeedback.timeAgo}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-5 h-5" />
                    {selectedFeedback.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-5 h-5" />
                    {selectedFeedback.upvotes}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg mb-2">Overview</h3>
                <p className="text-gray-400">{selectedFeedback.description}</p>
              </div>

              {/* Timeline Comments */}
              <div>
                <h3 className="text-lg mb-4">Timeline Annotations</h3>
                <div className="space-y-3">
                  {selectedFeedback.keyHighlights.map((highlight, index) => (
                    <div 
                      key={index}
                      className="bg-[#0a0a0f] border border-white/10 rounded-lg p-4 hover:border-[#00ff88]/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <button className="px-3 py-1 bg-[#00ff88]/20 text-[#00ff88] rounded text-sm hover:bg-[#00ff88]/30 transition-colors">
                          {highlight.timestamp}
                        </button>
                        <div className="flex-1">
                          <p className="text-gray-300">{highlight.note}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Section */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="text-lg mb-4">Community Discussion</h3>
                <div className="bg-[#0a0a0f] border border-white/10 rounded-lg p-4">
                  <textarea
                    placeholder="Add your thoughts or ask questions about this review..."
                    className="w-full bg-transparent border-none focus:outline-none resize-none text-gray-300 placeholder-gray-600"
                    rows={3}
                  />
                  <div className="flex justify-end mt-3">
                    <button className="px-6 py-2 bg-[#00ff88] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88]/90 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
