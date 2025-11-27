import { ArrowLeft, Coins, Calendar, Users, Play, ThumbsUp, Bookmark, CheckCircle, Clock, Award } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CampaignDetailPage() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [platform, setPlatform] = useState('YouTube');
  const [videoUrl, setVideoUrl] = useState('');
  const [keyTimestamp, setKeyTimestamp] = useState('');
  const [explanation, setExplanation] = useState('');

  // Sample campaign data
  const campaign = {
    id: 1,
    game: 'Elden Ring',
    gameLogo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200',
    title: 'Kill Malenia with bare hands (no armor)',
    type: 'player',
    reward: '30,000 KRW',
    deadline: 'D-7',
    daysRemaining: 7,
    description: 'My character: Lv 155, 2H sword, low defense. Show me how to clear this boss under 3 minutes with minimal equipment.',
    requirements: [
      'Video must be 2-4 minutes long',
      'Show character stats and equipment at the start',
      'Must show successful boss kill (no deaths)',
      'Clear audio commentary explaining strategy',
      'Include timestamps for key moments'
    ],
    editingGuidelines: [
      'Clean cuts, no filler content',
      'Background music allowed (low volume)',
      'Text overlays for key strategies encouraged',
      'Must be original content (no AI-generated footage)'
    ],
    notAllowed: [
      'No cheat codes or mods',
      'No AI-generated voice commentary',
      'No copyrighted music without permission',
      'No footage from other creators'
    ],
    status: 'recruiting',
    slots: 'Looking for 1 creator',
    submissions: 3,
    author: 'Tarnished_Player',
    createdAt: '2 days ago'
  };

  // Sample submissions
  const submissions = [
    {
      id: 1,
      videoThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
      timestampStart: '01:24',
      timestampEnd: '02:57',
      title: 'Bare-hand Malenia kill with RL120 character',
      description: 'Successfully defeated Malenia using only bare fists and dodge rolls. Build focuses on max stamina and light equip load for fast rolls. No spirit ash, no summons.',
      creator: 'EldenProGamer',
      creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      platform: 'YouTube',
      views: '12.5K views',
      likes: 856,
      uploadedAt: '1 day ago',
      status: 'submitted'
    },
    {
      id: 2,
      videoThumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
      timestampStart: '00:45',
      timestampEnd: '03:12',
      title: 'Malenia No-Hit Run | Bare Hands Only',
      description: 'Perfect execution with zero hits taken. Utilized charged R2 attacks and critical timings. Shows complete build setup and Malenia\'s attack pattern guide.',
      creator: 'SoulsVeteran',
      creatorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100',
      platform: 'YouTube',
      views: '8.2K views',
      likes: 624,
      uploadedAt: '18 hours ago',
      status: 'under-review'
    },
    {
      id: 3,
      videoThumbnail: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=600',
      timestampStart: '02:10',
      timestampEnd: '04:05',
      title: 'Budget Build Malenia Defeat Guide',
      description: 'Accessible strategy for lower level characters (RL120-130). Shows positioning tricks, dodge timing windows, and punish opportunities. Easy to replicate.',
      creator: 'CasualSoulsPlayer',
      creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      platform: 'Twitch',
      views: '5.1K views',
      likes: 412,
      uploadedAt: '12 hours ago',
      status: 'approved'
    }
  ];

  const getSubmissionStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-[#00d9ff]/20 text-[#00d9ff]';
      case 'under-review': return 'bg-[#FFD700]/20 text-[#FFD700]';
      case 'approved': return 'bg-[#00ff88]/20 text-[#00ff88]';
      case 'rejected': return 'bg-[#ff006e]/20 text-[#ff006e]';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getSubmissionStatusText = (status: string) => {
    switch (status) {
      case 'submitted': return 'Submitted';
      case 'under-review': return 'Under Review';
      case 'approved': return 'Approved';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />

      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Campaign Marketplace
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Campaign Header */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4 flex-1">
              <ImageWithFallback
                src={campaign.gameLogo}
                alt={campaign.game}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-[#b968ff]/20 text-[#b968ff] rounded-lg text-sm">{campaign.game}</span>
                  <span className={`px-3 py-1 rounded-lg text-sm ${campaign.type === 'player' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-[#00d9ff]/20 text-[#00d9ff]'}`}>
                    {campaign.type === 'player' ? 'Player Request' : 'Studio Campaign'}
                  </span>
                  <span className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-lg text-sm">Recruiting Creators</span>
                </div>
                
                <h1 className="text-3xl mb-4">{campaign.title}</h1>
                
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {campaign.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Posted {campaign.createdAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {campaign.daysRemaining} days remaining
                  </span>
                </div>

                <p className="text-gray-400 mt-4 leading-relaxed">{campaign.description}</p>
              </div>
            </div>

            <div className="text-right ml-6">
              <div className="text-4xl text-[#b968ff] mb-2 flex items-center gap-2 justify-end">
                <Award className="w-10 h-10" fill="currentColor" />
                {campaign.reward}
              </div>
              <div className="text-xs text-gray-400 mb-6">Reward</div>
              
              <div className="space-y-2">
                <button 
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-xl hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all"
                >
                  Submit Video
                </button>
                <button className="w-full px-6 py-3 bg-[#0a0a0f] border border-white/10 rounded-xl hover:border-[#b968ff] transition-colors flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" />
                  Save Campaign
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 mb-8">
          <h2 className="text-2xl mb-6">📋 Campaign Requirements</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-[#00ff88] mb-3">✅ Required Elements</h3>
              <ul className="space-y-2">
                {campaign.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-lg text-[#00d9ff] mb-3">🎨 Editing & Style Guidelines</h3>
              <ul className="space-y-2">
                {campaign.editingGuidelines.map((guideline, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#00d9ff] flex-shrink-0 mt-2" />
                    <span>{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <h3 className="text-lg text-[#ff006e] mb-3">🚫 Not Allowed</h3>
              <ul className="space-y-2">
                {campaign.notAllowed.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-[#ff006e] flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Submissions Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl flex items-center gap-2">
              🎬 Submissions ({submissions.length})
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{campaign.slots}</span>
            </div>
          </div>

          <div className="space-y-6">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden">
                {/* VIDEO THUMBNAIL - ALWAYS FIRST */}
                <div className="relative group cursor-pointer">
                  <ImageWithFallback 
                    src={submission.videoThumbnail}
                    alt={submission.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-[#00FFC6] flex items-center justify-center">
                      <Play className="w-10 h-10 text-[#0a0a0f]" fill="currentColor" />
                    </div>
                  </button>

                  {/* Timestamp Badge */}
                  <div className="absolute bottom-4 left-4 px-4 py-2 bg-[#00FFC6] text-[#0a0a0f] rounded-lg flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Key moment: {submission.timestampStart} – {submission.timestampEnd}
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-lg ${getSubmissionStatusColor(submission.status)}`}>
                    {getSubmissionStatusText(submission.status)}
                  </div>
                </div>

                {/* Submission Content - BELOW VIDEO */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src={submission.creatorAvatar}
                        alt={submission.creator}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#b968ff]"
                      />
                      <div>
                        <p className="text-lg text-[#b968ff]">{submission.creator}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span>{submission.platform}</span>
                          <span>•</span>
                          <span>{submission.views}</span>
                          <span>•</span>
                          <span>{submission.uploadedAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{submission.likes}</span>
                    </div>
                  </div>

                  <h3 className="text-xl mb-3">{submission.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{submission.description}</p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button className="px-6 py-2 bg-gradient-to-r from-[#00FFC6] to-[#00d9ff] text-[#0a0a0f] rounded-lg hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] transition-all flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Clip
                    </button>
                    <button className="px-6 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Upvote
                    </button>
                    <button className="px-6 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#b968ff] hover:text-[#b968ff] transition-all">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Video Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
          <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl">📤 Submit Your Video</h2>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Platform</label>
                <div className="flex gap-3">
                  {['YouTube', 'Twitch', 'TikTok'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`flex-1 py-3 rounded-lg border transition-all ${
                        platform === p
                          ? 'bg-[#b968ff] border-[#b968ff] text-white'
                          : 'bg-[#0a0a0f] border-white/10 text-gray-400 hover:border-[#b968ff]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Video URL</label>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] text-white"
                />
                <p className="text-xs text-gray-500 mt-1">Paste your video link from {platform}</p>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Key Timestamps</label>
                <input
                  type="text"
                  value={keyTimestamp}
                  onChange={(e) => setKeyTimestamp(e.target.value)}
                  placeholder="01:24 - 02:57"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] text-white"
                />
                <p className="text-xs text-gray-500 mt-1">Example: Boss kill at 01:24 - 02:57</p>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Short Explanation</label>
                <textarea
                  value={explanation}
                  onChange={(e) => setExplanation(e.target.value)}
                  placeholder="Explain what makes this run special, build details, any constraints followed..."
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] resize-none text-white"
                  rows={4}
                />
              </div>

              <div className="bg-[#0a0a0f] rounded-lg p-4 border border-[#b968ff]/20">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-gray-300">
                    I confirm this video follows all campaign rules and requirements. I understand that submissions not meeting the criteria may be rejected.
                  </span>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setIsSubmitModalOpen(false)}
                  className="flex-1 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#ff006e] transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.5)] transition-all">
                  Submit Video
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
