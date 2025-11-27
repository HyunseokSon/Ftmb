import { Search, MessageSquare, Video, FileText, ArrowRight } from 'lucide-react';

export function PagesOverview() {
  const pages = [
    {
      id: 1,
      title: 'AI Search',
      path: '/ai-search',
      icon: Search,
      color: '#00d9ff',
      gradient: 'from-[#00d9ff]/20 to-[#00d9ff]/5',
      description: 'Search inside videos using multimodal AI',
      features: ['Video timestamp search', 'Chat-style AI results', 'Smart filters', 'Clip preview cards']
    },
    {
      id: 2,
      title: 'Expert Q&A',
      path: '/expert-qa',
      icon: MessageSquare,
      color: '#b968ff',
      gradient: 'from-[#b968ff]/20 to-[#b968ff]/5',
      description: 'Ask the community when AI can\'t help',
      features: ['Question submission form', 'Community answers', 'Top contributors', 'Credit rewards']
    },
    {
      id: 3,
      title: 'Creator Hub',
      path: '/creator-hub',
      icon: Video,
      color: '#ff006e',
      gradient: 'from-[#ff006e]/20 to-[#ff006e]/5',
      description: 'Request custom video content from creators',
      features: ['Browse creators', 'Request custom videos', 'Order management', 'Featured campaigns']
    },
    {
      id: 4,
      title: 'Coaching',
      path: '/coaching',
      icon: FileText,
      color: '#00ff88',
      gradient: 'from-[#00ff88]/20 to-[#00ff88]/5',
      description: 'Get professional feedback on your gameplay',
      features: ['Upload replay files', 'VOD review service', 'Coach selection', 'Annotated feedback']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-[#00d9ff] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              All Platform Pages
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Click any card below to navigate to the full functional page
          </p>
          <a 
            href="/"
            className="inline-block px-6 py-3 bg-[#1a1a24] border border-white/10 rounded-lg hover:border-[#00d9ff] transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        {/* Pages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <a
                key={page.id}
                href={page.path}
                className="block bg-[#1a1a24] rounded-2xl border border-white/10 p-8 hover:border-opacity-100 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)] group"
                style={{ borderColor: `${page.color}40` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${page.gradient} flex items-center justify-center border group-hover:scale-110 transition-transform`}
                      style={{ borderColor: `${page.color}40`, boxShadow: `0 0 20px ${page.color}30` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: page.color }} />
                    </div>
                    <div>
                      <h2 className="text-3xl mb-2" style={{ color: page.color }}>
                        {page.title}
                      </h2>
                      <p className="text-gray-400">{page.description}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3">Key Features:</p>
                  <ul className="space-y-2">
                    {page.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: page.color }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 group-hover:bg-opacity-20 transition-all"
                  style={{ borderColor: page.color, backgroundColor: `${page.color}10` }}
                >
                  <span className="text-sm" style={{ color: page.color }}>
                    Open {page.title} →
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 bg-gradient-to-r from-[#1a1a24] to-[#1a1a24] rounded-2xl border border-[#00d9ff]/30 p-8">
          <h3 className="text-2xl mb-6 text-center">Quick Navigation</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <a
                  key={page.id}
                  href={page.path}
                  className="flex items-center gap-2 px-6 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-white/30 transition-colors"
                >
                  <Icon className="w-5 h-5" style={{ color: page.color }} />
                  <span>{page.title}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-[#1a1a24] rounded-xl border border-white/10 p-6 text-center">
          <p className="text-gray-400">
            💡 <strong>Tip:</strong> All pages are fully functional with interactive forms, filters, and components. 
            Use the navigation bar at the top to switch between pages at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
