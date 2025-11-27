import { Search, Users, Video, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Search with AI',
      description: 'Find exact gameplay knowledge using AI semantic search — timestamps, builds, mechanics.',
      color: '#00FFC6'
    },
    {
      icon: Users,
      number: '02',
      title: 'Ask or Upload Video',
      description: 'Post text questions or upload gameplay clips in the Game Knowledge Hub for expert feedback.',
      color: '#b968ff'
    },
    {
      icon: Video,
      number: '03',
      title: 'Creators & Coaches Answer',
      description: 'Community members, coaches, and creators respond with timestamped video clips and detailed feedback.',
      color: '#ff006e'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Improve or Create',
      description: 'Level up your skills with insights, or create more content through campaign marketplace.',
      color: '#00ff88'
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00FFC6] tracking-wide uppercase mb-4">How It Works</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Simple Process,
            <br />
            <span className="bg-gradient-to-r from-[#00FFC6] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              Powerful Results
            </span>
          </h2>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00FFC6] via-[#b968ff] via-[#ff006e] to-[#00ff88] opacity-30 -translate-y-1/2"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  {/* Icon Container */}
                  <div className="relative inline-block mb-6">
                    {/* Number Badge */}
                    <div
                      className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center border-2 bg-[#0a0a0f] z-10"
                      style={{ borderColor: step.color, color: step.color }}
                    >
                      <span className="text-sm font-medium">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-24 h-24 rounded-2xl bg-[#1a1a24] flex items-center justify-center border-2 relative"
                      style={{ borderColor: `${step.color}40` }}
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-20"
                        style={{ backgroundColor: step.color }}
                      ></div>
                      <Icon className="w-10 h-10 relative z-10" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl mb-3" style={{ color: step.color }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-[#00FFC6]/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] bg-clip-text text-transparent">
              10M+
            </div>
            <p className="text-gray-400">Video Timestamps Indexed</p>
          </div>
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-[#b968ff]/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              50K+
            </div>
            <p className="text-gray-400">Active Creators & Coaches</p>
          </div>
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-[#ff006e]/20">
            <div className="text-4xl mb-2 bg-gradient-to-r from-[#ff006e] to-[#00ff88] bg-clip-text text-transparent">
              500K+
            </div>
            <p className="text-gray-400">Questions Answered</p>
          </div>
        </div>
      </div>
    </section>
  );
}