import { FileText, Upload, MessageCircle, Video as VideoIcon, Star, Award, ArrowLeft, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';

export function CoachingPage() {
  const [selectedCoachingType, setSelectedCoachingType] = useState<'vod' | 'live' | 'highlight'>('vod');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const coachProfiles = [
    {
      id: 1,
      name: 'Coach_Platinum',
      tier: 'Diamond',
      specialty: 'Valorant • Apex',
      rating: 4.9,
      sessions: 342,
      price: 80,
      avatar: '💎',
      verified: true,
      expertise: ['Game Sense', 'Positioning', 'Team Play']
    },
    {
      id: 2,
      name: 'Pro_Mentor_Kim',
      tier: 'Master',
      specialty: 'League of Legends',
      rating: 5.0,
      sessions: 256,
      price: 120,
      avatar: '👑',
      verified: true,
      expertise: ['Lane Control', 'Macro', 'Champion Pool']
    },
    {
      id: 3,
      name: 'FPS_Coach_Alex',
      tier: 'Radiant',
      specialty: 'Valorant • CS2',
      rating: 4.8,
      sessions: 189,
      price: 100,
      avatar: '🎯',
      verified: true,
      expertise: ['Aim Training', 'Crosshair Placement', 'Utility']
    }
  ];

  const coachingTypes = [
    {
      id: 'vod',
      title: 'VOD Review',
      description: 'Upload replay, get annotated video feedback with voice commentary',
      time: '24-48 hours',
      icon: FileText,
      color: '#00d9ff'
    },
    {
      id: 'live',
      title: 'Live Coaching',
      description: 'Real-time session with screen share and voice chat',
      time: '60 min session',
      icon: MessageCircle,
      color: '#b968ff'
    },
    {
      id: 'highlight',
      title: 'Highlight Breakdown',
      description: 'Focus on specific moments or teamfights for detailed analysis',
      time: '12-24 hours',
      icon: PlayCircle,
      color: '#ff006e'
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 flex items-center justify-center border border-[#00ff88]/30">
              <FileText className="w-6 h-6 text-[#00ff88]" />
            </div>
            <div>
              <h1 className="text-3xl text-[#00ff88]">Coaching</h1>
              <p className="text-gray-400">Get professional feedback on your gameplay</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Coaching Type Selection */}
            <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl mb-6">Choose Coaching Type</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {coachingTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedCoachingType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedCoachingType(type.id as any)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected 
                          ? 'border-[#00ff88] bg-[#00ff88]/10' 
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      <Icon className="w-8 h-8 mb-3" style={{ color: type.color }} />
                      <h3 className="mb-2">{type.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{type.description}</p>
                      <p className="text-xs" style={{ color: type.color }}>{type.time}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl mb-6">Upload Your Replay</h2>
              
              {/* File Upload Area */}
              <div className="mb-6">
                <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-[#00ff88] transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  {uploadedFile ? (
                    <div>
                      <p className="text-[#00ff88] mb-2">✓ File Uploaded</p>
                      <p className="text-sm text-gray-400">{uploadedFile}</p>
                      <button className="mt-2 text-sm text-[#ff006e] hover:underline">
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-2">Drag & drop your replay file here</p>
                      <p className="text-sm text-gray-400 mb-4">or click to browse</p>
                      <button 
                        onClick={() => setUploadedFile('competitive_match_2024.mp4')}
                        className="px-6 py-2 bg-[#00ff88] text-[#0a0a0f] rounded-lg text-sm hover:bg-[#00ff88]/90 transition-colors"
                      >
                        Select File
                      </button>
                      <p className="text-xs text-gray-500 mt-3">Supports: MP4, MOV, AVI (Max 2GB)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Game</label>
                  <select className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg cursor-pointer">
                    <option>Valorant</option>
                    <option>League of Legends</option>
                    <option>CS2</option>
                    <option>Overwatch 2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Rank/Level</label>
                  <input
                    type="text"
                    placeholder="e.g., Diamond 2"
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00ff88]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">What to focus on? (Optional)</label>
                  <textarea
                    placeholder="e.g., I want feedback on my positioning and decision making..."
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#00ff88] resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Example Preview */}
            <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00d9ff]/10 rounded-2xl border border-[#00ff88]/30 p-8">
              <h3 className="text-xl mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#00ff88]" />
                Example Coaching Feedback
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0a0f] rounded-lg p-4 aspect-video flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <PlayCircle className="w-12 h-12 mx-auto mb-2 text-[#00ff88]" />
                    <p className="text-sm text-gray-400">Annotated Video Preview</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#ff006e] flex items-center justify-center text-xs flex-shrink-0">1</span>
                    <p className="text-sm text-gray-300">Drawing & voice annotations on key moments</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#b968ff] flex items-center justify-center text-xs flex-shrink-0">2</span>
                    <p className="text-sm text-gray-300">Timestamp markers for mistakes & good plays</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00d9ff] flex items-center justify-center text-xs flex-shrink-0">3</span>
                    <p className="text-sm text-gray-300">Written summary with actionable tips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Coach Selection */}
          <div className="space-y-6">
            <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
              <h3 className="mb-4">Choose Your Coach</h3>
              
              <div className="space-y-4">
                {coachProfiles.map((coach) => (
                  <div key={coach.id} className="bg-[#0a0a0f] rounded-lg p-4 border border-white/10 hover:border-[#00ff88]/50 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-xl">
                        {coach.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm mb-1">{coach.name}</h4>
                        <p className="text-xs text-gray-400">{coach.specialty}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-[#FFD700]" fill="#FFD700" />
                            <span className="text-xs">{coach.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">({coach.sessions} sessions)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {coach.expertise.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-[#1a1a24] rounded text-xs text-gray-400">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div>
                        <p className="text-xs text-gray-400">Price</p>
                        <p className="text-sm text-[#00ff88]">{coach.price} credits</p>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all">
                        Select
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 bg-[#1a1a24] border border-white/10 rounded-lg text-sm hover:border-[#00ff88] transition-colors">
                View All Coaches
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-[#00ff88]/10 to-[#00d9ff]/10 rounded-xl border border-[#00ff88]/30 p-6">
              <h3 className="mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Coaching Type</span>
                  <span>VOD Review</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Turnaround</span>
                  <span>24-48 hours</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Coach</span>
                  <span>Not selected</span>
                </div>
                <div className="border-t border-white/10 pt-3 flex justify-between">
                  <span>Total</span>
                  <span className="text-xl text-[#00ff88]">80 credits</span>
                </div>
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] rounded-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all">
                Book Coaching Session
              </button>
            </div>

            {/* Quick Info */}
            <div className="bg-[#1a1a24] rounded-xl border border-white/10 p-6">
              <h3 className="text-sm mb-3">What You'll Get</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">✓</span>
                  <span>Detailed video analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">✓</span>
                  <span>Voice commentary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">✓</span>
                  <span>Visual annotations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">✓</span>
                  <span>Written summary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ff88]">✓</span>
                  <span>Actionable improvement tips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}