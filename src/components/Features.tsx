import { Search, Users, Video } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export function Features() {
  const features = [
    {
      icon: Search,
      title: 'AI SEARCH',
      subtitle: 'Semantic Video Analysis',
      color: '#00FFC6',
      gradient: 'from-[#00FFC6]/20 to-[#00FFC6]/5',
      borderColor: 'border-[#00FFC6]/30',
      description: 'Find exact gameplay knowledge using AI — accurate timestamps, builds, mechanics.',
      features: [
        'Multimodal AI analysis (vision + audio + subtitles)',
        'Exact timestamp detection',
        'Chat-style results with actionable insights',
        'Credit-based usage model'
      ],
      example: {
        query: '"How to Jett Super Jump in Valorant?"',
        result: 'AI shows exact 15-second clips where it happens and summarizes the technique.'
      },
      buttonText: 'Search Gameplay',
      onClick: () => navigateTo('/ai-search')
    },
    {
      icon: Users,
      title: 'GAME KNOWLEDGE HUB',
      subtitle: 'Community Q&A + VOD Feedback',
      color: '#b968ff',
      gradient: 'from-[#b968ff]/20 to-[#b968ff]/5',
      borderColor: 'border-[#b968ff]/30',
      description: 'Ask questions, upload gameplay clips, and get timestamped feedback from experts.',
      features: [
        'Text questions answered by community',
        'Upload gameplay videos for analysis',
        'Timestamped feedback from coaches',
        'Earn credits by helping others'
      ],
      example: {
        query: '"Review my Diamond Yasuo teamfight at 02:30"',
        result: 'Coaches provide frame-by-frame analysis with strategic insights and improvement tips.'
      },
      buttonText: 'Ask or Upload Video',
      onClick: () => navigateTo('/community')
    },
    {
      icon: Video,
      title: 'CREATOR HUB',
      subtitle: 'Campaign Marketplace',
      color: '#ff006e',
      gradient: 'from-[#ff006e]/20 to-[#ff006e]/5',
      borderColor: 'border-[#ff006e]/30',
      description: 'Players and studios open campaigns. Creators submit videos and earn rewards.',
      features: [
        'Player campaigns for custom content',
        'Game studio promotional campaigns',
        'Creator marketplace with ratings',
        'Flexible reward structures'
      ],
      example: {
        query: 'User requests "Defeat Elden Ring Boss Barehanded"',
        result: 'Or game studio asks "Create a viral promo for our new launch."'
      },
      buttonText: 'Browse Campaigns',
      onClick: () => navigateTo('/creator-hub')
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#131318]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00FFC6] tracking-wide uppercase mb-4">Platform Features</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Three Powerful Tools,
            <br />
            <span className="bg-gradient-to-r from-[#00FFC6] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              One Unified Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From AI-powered search to community expertise and creative campaigns
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-[#1a1a24] rounded-2xl border ${feature.borderColor} p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] group flex flex-col`}
              >
                {/* Icon & Title */}
                <div className="flex flex-col items-center gap-4 mb-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border ${feature.borderColor} group-hover:scale-110 transition-transform`}
                    style={{ boxShadow: `0 0 20px ${feature.color}30` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-1" style={{ color: feature.color }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">{feature.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 text-center">
                  {feature.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: feature.color }}
                      ></span>
                      <span className="text-sm text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Example */}
                <div className="bg-[#0a0a0f] rounded-lg p-4 border border-white/10 mb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Example Use Case
                  </p>
                  <p className="text-sm mb-2" style={{ color: feature.color }}>
                    {feature.example.query}
                  </p>
                  <p className="text-sm text-gray-400">
                    → {feature.example.result}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={feature.onClick}
                  className="w-full py-3 rounded-lg transition-all hover:scale-105"
                  style={{
                    backgroundColor: `${feature.color}20`,
                    border: `2px solid ${feature.color}`,
                    color: feature.color
                  }}
                >
                  {feature.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}