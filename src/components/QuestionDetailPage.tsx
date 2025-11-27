import { MessageSquare, ThumbsUp, Clock, Coins, ArrowLeft, Play, Bookmark, MessageCircle, Save } from 'lucide-react';
import { useState } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function QuestionDetailPage() {
  const [answerText, setAnswerText] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [timestampStart, setTimestampStart] = useState('');
  const [timestampEnd, setTimestampEnd] = useState('');

  // Sample question data
  const question = {
    id: 1,
    question: 'Best crosshair for Sheriff one-tap in ranked?',
    description: 'I\'m trying to improve my Sheriff accuracy in Valorant ranked matches. I can hit body shots consistently but struggle with headshots. What crosshair settings work best for precision one-taps? I currently use the default crosshair but it feels too large for precise aiming at medium range.',
    game: 'Valorant',
    credits: 120,
    answers: 7,
    upvotes: 42,
    timeAgo: '3 hours ago',
    status: 'answered',
    author: 'TacticalShooter',
    tags: ['Mechanics', 'Strategy', 'Build Guide']
  };

  // Sample answers data with VIDEO FIRST design
  const answers = [
    {
      id: 1,
      author: 'ProGamer_Kim',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
      upvotes: 35,
      timeAgo: '2 hours ago',
      videoThumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600',
      timestampStart: '2:34',
      timestampEnd: '2:48',
      content: `**Best Crosshair Settings for Sheriff One-Taps:**

• **Color:** Cyan or White for maximum visibility
• **Outline:** 1.0 opacity with 1.0 thickness
• **Inner Lines:** 1-4-2-2 (Width-Height-Offset-Thickness)
• **Center Dot:** Disabled (keeps view clear)

**Why this works:**
1️⃣ Small inner lines keep your focus tight on the head hitbox
2️⃣ Offset of 2 creates just enough gap to see enemy model
3️⃣ Cyan color contrasts well against most backgrounds
4️⃣ No center dot prevents crosshair clutter

**Pro Tip:** 
Practice in the Range for 10 minutes before ranked. Aim for 20+ consistent headshots on bots before queuing.

**Common Mistakes:**
🚫 Using crosshair that's too large (blocks vision)
🚫 No outline (hard to see on light backgrounds)
🚫 Too much offset (loses precision reference)

**When to use Sheriff:**
• Eco rounds (1st or 2nd round)
• Mixed buy rounds (pair with light armor)
• Clutch situations (high damage, accurate)`,
      replies: 3
    },
    {
      id: 2,
      author: 'AimCoach_Tyler',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100',
      upvotes: 28,
      timeAgo: '2 hours ago',
      videoThumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600',
      timestampStart: '1:15',
      timestampEnd: '1:42',
      content: `**Alternative Setup (Works for TenZ and other pros):**

• **Color:** Yellow/Cyan (changes based on map)
• **Settings:** 1-3-3-2 with center dot ENABLED
• **Outline:** 0.5 opacity (subtle but visible)

**Key Differences:**
This setup uses a center dot which some players prefer for:
• Tracking moving targets
• Quick flick reference point
• Spray transfer precision

**Crosshair Placement Drill:**
1️⃣ Always pre-aim at head level (2:36 shows this perfectly)
2️⃣ Use horizontal lines of walls as reference
3️⃣ Keep crosshair 45° from corners (reduce exposure time)

**Sheriff vs Ghost Decision:**
• Sheriff = High risk, high reward (156 headshot damage)
• Ghost = Forgiving, spam-friendly (105 headshot damage)
• Use Sheriff if your HS% is above 30% consistently

**Practice Routine:**
→ 15 min aim lab (Sixshot or Precision)
→ 10 min Range bots (Armor on, Eliminate 50)
→ 1-2 Deathmatch (Sheriff only)`,
      replies: 5
    },
    {
      id: 3,
      author: 'RadiantPlayer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      upvotes: 19,
      timeAgo: '1 hour ago',
      videoThumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600',
      timestampStart: '0:45',
      timestampEnd: '1:10',
      content: `**What I learned climbing from Gold to Radiant:**

The crosshair matters LESS than you think. What really matters:

**Positioning (60% of success):**
• Off-angles to force enemies to adjust aim
• Distance control (Sheriff is accurate at 15-30m)
• Never peek the same angle twice

**Timing (30% of success):**
• Right-click at close range (slower but accurate)
• Tap fire at medium range (0.4s between shots)
• Never spam (accuracy resets to zero)

**Crosshair (10% of success):**
• Use whatever feels comfortable
• Consistency > "pro settings"
• Test for 3+ games before changing

I personally use 1-5-2-1 with green color. It's larger than most pros but works for MY playstyle.

**Bottom line:** 
Practice fundamentals > copying crosshair settings.`,
      replies: 2
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white pt-16">
      <Navigation />
      
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Q&A
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Question Section */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-[#b968ff]/20 text-[#b968ff] rounded-lg text-sm">{question.game}</span>
                <span className={`px-3 py-1 rounded-lg text-sm ${question.status === 'answered' ? 'bg-[#00ff88]/20 text-[#00ff88]' : 'bg-[#ff006e]/20 text-[#ff006e]'}`}>
                  {question.status === 'answered' ? 'Answered' : 'Open'}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {question.timeAgo}
                </span>
              </div>
              
              <h1 className="text-3xl mb-4">{question.question}</h1>
              <p className="text-gray-400 mb-6 leading-relaxed">{question.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#b968ff] to-[#ff006e] flex items-center justify-center text-sm">
                    {question.author.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-400">Asked by {question.author}</span>
                </div>
                <span className="text-sm text-gray-400">{question.answers} Answers</span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {question.upvotes}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {question.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right ml-6">
              <div className="text-3xl text-[#b968ff] mb-2 flex items-center gap-2">
                <Coins className="w-8 h-8" />
                {question.credits}
              </div>
              <div className="text-xs text-gray-400">Credit Reward</div>
            </div>
          </div>
        </div>

        {/* Answers Section */}
        <div className="mb-8">
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-[#00ff88]" />
            {answers.length} Answers
          </h2>

          <div className="space-y-6">
            {answers.map((answer) => (
              <div key={answer.id} className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden">
                {/* VIDEO THUMBNAIL - ALWAYS FIRST */}
                <div className="relative group cursor-pointer">
                  <ImageWithFallback 
                    src={answer.videoThumbnail}
                    alt="Video preview"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#00FFC6] flex items-center justify-center">
                      <Play className="w-8 h-8 text-[#0a0a0f]" fill="currentColor" />
                    </div>
                  </button>

                  {/* Timestamp Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-[#00FFC6] text-[#0a0a0f] rounded-lg text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    ⏱ Appears at {answer.timestampStart} - {answer.timestampEnd}
                  </div>
                </div>

                {/* Answer Content - BELOW VIDEO */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src={answer.avatar}
                        alt={answer.author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#00ff88]"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-[#00ff88]">{answer.author}</p>
                          {answer.upvotes > 30 && (
                            <span className="px-2 py-0.5 bg-[#FFD700]/20 text-[#FFD700] rounded text-xs">Top Answer</span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500">{answer.timeAgo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{answer.upvotes}</span>
                    </div>
                  </div>

                  {/* Answer Text */}
                  <div className="prose prose-invert max-w-none mb-4">
                    {answer.content.split('\n').map((line, i) => (
                      <p key={i} className="mb-2 text-gray-300 text-sm leading-relaxed">
                        {line.includes('**') ? (
                          line.split('**').map((part, j) => 
                            j % 2 === 0 ? part : <strong key={j} className="text-white">{part}</strong>
                          )
                        ) : line}
                      </p>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <button className="px-4 py-2 bg-gradient-to-r from-[#00FFC6] to-[#00d9ff] text-[#0a0a0f] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] transition-all flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Clip
                    </button>
                    <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#00ff88] hover:text-[#00ff88] transition-all flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      Upvote
                    </button>
                    <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#b968ff] hover:text-[#b968ff] transition-all flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Reply ({answer.replies})
                    </button>
                    <button className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#FF5EAC] hover:text-[#FF5EAC] transition-all">
                      <Save className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Your Answer Section */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8">
          <h3 className="text-2xl mb-6">📝 Submit Your Answer</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Your Answer</label>
              <textarea
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                placeholder="Share your knowledge... Include strategies, tips, and detailed explanations."
                className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors resize-none text-white"
                rows={8}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Video Link (Optional)</label>
                <input
                  type="text"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  placeholder="YouTube or direct video URL"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Timestamp (Optional)</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={timestampStart}
                    onChange={(e) => setTimestampStart(e.target.value)}
                    placeholder="02:14"
                    className="flex-1 px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                  />
                  <span className="flex items-center text-gray-500">-</span>
                  <input
                    type="text"
                    value={timestampEnd}
                    onChange={(e) => setTimestampEnd(e.target.value)}
                    placeholder="02:40"
                    className="flex-1 px-4 py-3 bg-[#0a0a0f] border border-white/20 rounded-lg focus:outline-none focus:border-[#b968ff] transition-colors text-white"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Format: MM:SS - MM:SS</p>
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#00ff88] to-[#00d9ff] text-[#0a0a0f] rounded-xl hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all text-lg">
              Submit Answer (Earn {question.credits} Credits)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
