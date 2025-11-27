import { Users, MessageSquare, Video, ThumbsUp, Eye } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export function Community() {
  // Sample posts from Game Knowledge Hub
  const spotlightPosts = [
    {
      type: 'text',
      title: 'Best crosshair for Sheriff one-tap in ranked?',
      game: 'Valorant',
      author: 'TacticalShooter',
      timeAgo: '3 hours ago',
      answers: 7,
      upvotes: 42,
      previewAnswer: 'Use small cyan crosshair with 1-4-2-2 settings. Keeps your focus tight...',
      answerAuthor: 'ProGamer_Kim'
    },
    {
      type: 'video',
      title: 'Gold Tier Yasuo Teamfight Review',
      game: 'League of Legends',
      author: 'MidLaneMain',
      timeAgo: '5 hours ago',
      answers: 4,
      upvotes: 28,
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
      previewAnswer: 'At 02:30 you engaged too early without checking if your frontline was in position...',
      answerAuthor: 'Coach_Sarah',
      timestamp: '02:30 - 02:45'
    },
    {
      type: 'video',
      title: 'Diamond Jett Positioning on Ascent',
      game: 'Valorant',
      author: 'TacticalShooter',
      timeAgo: '8 hours ago',
      answers: 2,
      upvotes: 15,
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
      previewAnswer: 'Your dash usage at 03:12 was too aggressive. Wait for team support before entry...',
      answerAuthor: 'FPS_Coach_Alex',
      timestamp: '03:12 - 03:45'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00FFC6] tracking-wide uppercase mb-4">Community Spotlight</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Real Questions,
            <br />
            <span className="bg-gradient-to-r from-[#00FFC6] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              Real Experts
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how our community shares knowledge through Q&A and video feedback
          </p>
        </div>

        {/* Sample Posts from Game Knowledge Hub */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {spotlightPosts.map((post, index) => (
            <div
              key={index}
              className="bg-[#1a1a24] rounded-xl border border-white/10 overflow-hidden hover:border-[#b968ff]/50 transition-all cursor-pointer group"
              onClick={() => navigateTo('/community')}
            >
              {/* Video Thumbnail if applicable */}
              {post.type === 'video' && post.thumbnail && (
                <div className="relative aspect-video bg-[#0a0a0f]">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] to-transparent"></div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-xs">
                    {post.timestamp}
                  </div>
                </div>
              )}

              <div className="p-5">
                {/* Type Badge & Game */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded text-xs ${
                    post.type === 'text' 
                      ? 'bg-[#b968ff]/20 text-[#b968ff]' 
                      : 'bg-[#00FFC6]/20 text-[#00FFC6]'
                  }`}>
                    {post.type === 'text' ? '📄 Text' : '🎥 Video'}
                  </span>
                  <span className="px-2 py-1 bg-[#ff006e]/20 text-[#ff006e] rounded text-xs">
                    {post.game}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 line-clamp-2 group-hover:text-[#b968ff] transition-colors">
                  {post.title}
                </h3>

                {/* Answer Preview */}
                <div className="bg-[#0a0a0f] rounded-lg p-3 mb-4 border border-[#00ff88]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d9ff] flex items-center justify-center text-xs">
                      {post.answerAuthor.charAt(0)}
                    </div>
                    <span className="text-xs text-[#00ff88]">{post.answerAuthor}</span>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-2">{post.previewAnswer}</p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-400 pt-3 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" />
                    {post.answers}
                  </span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {post.upvotes}
                  </span>
                  <span className="text-xs ml-auto">{post.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Join */}
        <div className="text-center">
          <button
            onClick={() => navigateTo('/community')}
            className="px-8 py-4 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-lg hover:shadow-[0_0_30px_rgba(185,104,255,0.4)] transition-all hover:scale-105"
          >
            View All Posts in Game Knowledge Hub →
          </button>
        </div>

        {/* Community Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-white/10">
            <div className="text-4xl mb-2 text-[#00FFC6]">98%</div>
            <p className="text-sm text-gray-400">Answer Rate</p>
          </div>
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-white/10">
            <div className="text-4xl mb-2 text-[#b968ff]">4.8★</div>
            <p className="text-sm text-gray-400">Avg Rating</p>
          </div>
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-white/10">
            <div className="text-4xl mb-2 text-[#ff006e]">{"<2h"}</div>
            <p className="text-sm text-gray-400">Response Time</p>
          </div>
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-white/10">
            <div className="text-4xl mb-2 text-[#00ff88]">50K+</div>
            <p className="text-sm text-gray-400">Experts Online</p>
          </div>
        </div>
      </div>
    </section>
  );
}