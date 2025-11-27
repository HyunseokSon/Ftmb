import { Search, MessageCircle, Video, FileCheck } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Search,
      title: 'FIND IT',
      subtitle: 'AI Semantic Search',
      color: '#00d9ff',
      gradient: 'from-[#00d9ff]/20 to-[#00d9ff]/5',
      borderColor: 'border-[#00d9ff]/30',
      description: 'Search inside videos using multimodal AI (vision + audio + subtitles). Finds exact timestamps where actions or skills appear.',
      features: [
        'Multimodal AI analysis (vision + audio + subtitles)',
        'Exact timestamp detection',
        'Chat-style results with actionable insights',
        'Credit-based usage & subscription model'
      ],
      example: {
        query: '"How to Jett Super Jump in Valorant?"',
        result: 'AI shows exact 15-second clips where it happens and summarizes: "Use Q skill here."'
      }
    },
    {
      icon: MessageCircle,
      title: 'TELL ME',
      subtitle: 'Human Curation Q&A',
      color: '#b968ff',
      gradient: 'from-[#b968ff]/20 to-[#b968ff]/5',
      borderColor: 'border-[#b968ff]/30',
      description: 'If AI can\'t answer, ask the community. Creators and experts reply with timestamp links to videos.',
      features: [
        'Community-powered answers',
        'Timestamp-linked video responses',
        'Users earn credits when answers are used',
        'Expert verification system'
      ],
      example: {
        query: '"Best grinding spot in MapleStory with 1B budget?"',
        result: 'Expert answers with timestamp and video reference showing optimal strategy.'
      }
    },
    {
      icon: Video,
      title: 'MAKE IT',
      subtitle: 'Creative Marketplace',
      color: '#ff006e',
      gradient: 'from-[#ff006e]/20 to-[#ff006e]/5',
      borderColor: 'border-[#ff006e]/30',
      description: 'Request personalized game content creation. Creators deliver custom videos and earn credits or payment.',
      features: [
        'Personalized video requests',
        'Game studio campaign support',
        'Creator marketplace with ratings',
        'Event & promotional content creation'
      ],
      example: {
        query: 'User requests "Defeat Elden Ring Boss Barehanded"',
        result: 'Or game studio asks "Create a viral promo for our new launch."'
      }
    },
    {
      icon: FileCheck,
      title: 'GIVE FEEDBACK',
      subtitle: 'Coaching Marketplace',
      color: '#00ff88',
      gradient: 'from-[#00ff88]/20 to-[#00ff88]/5',
      borderColor: 'border-[#00ff88]/30',
      description: 'Professional replay analysis and VOD feedback. Coaches annotate videos with voice and drawing feedback.',
      features: [
        'Async or real-time coaching',
        'Video annotation with voice & drawing',
        'Professional coach verification',
        'Detailed performance analysis'
      ],
      example: {
        query: '"Analyze why we lost this team fight"',
        result: 'Coach returns marked-up feedback video with strategic insights and improvement tips.'
      }
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0f] to-[#131318]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00d9ff] tracking-wide uppercase mb-4">Platform Features</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Four Powerful Tools,
            <br />
            <span className="bg-gradient-to-r from-[#00d9ff] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              One Unified Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From AI-powered search to human expertise, creative requests to professional coaching
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-[#1a1a24] rounded-2xl border ${feature.borderColor} p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] group`}
              >
                {/* Icon & Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center border ${feature.borderColor} group-hover:scale-110 transition-transform`}
                    style={{ boxShadow: `0 0 20px ${feature.color}30` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: feature.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl mb-1" style={{ color: feature.color }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: feature.color }}
                      ></span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Example */}
                <div className="bg-[#0a0a0f] rounded-lg p-4 border border-white/10">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
