import { Users, Award, Star, Shield } from 'lucide-react';

export function Community() {
  const roles = [
    {
      icon: Users,
      title: 'Expert Contributors',
      description: 'Experienced players share knowledge and earn credits by answering questions',
      stats: '25K+ Active',
      color: '#00d9ff',
      benefits: ['Earn credits', 'Build reputation', 'Get verified badge']
    },
    {
      icon: Award,
      title: 'Content Creators',
      description: 'Video makers fulfill custom requests and create tutorial content',
      stats: '15K+ Creating',
      color: '#b968ff',
      benefits: ['Set your rates', 'Direct payments', 'Portfolio showcase']
    },
    {
      icon: Star,
      title: 'Pro Coaches',
      description: 'Professional players provide VOD reviews and gameplay feedback',
      stats: '10K+ Coaching',
      color: '#ff006e',
      benefits: ['Premium pricing', 'Verified credentials', 'Booking system']
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00d9ff] tracking-wide uppercase mb-4">Community Power</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Built By Gamers,
            <br />
            <span className="bg-gradient-to-r from-[#00d9ff] via-[#b968ff] to-[#ff006e] bg-clip-text text-transparent">
              For Gamers
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of experts, creators, and coaches making a difference
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 hover:border-opacity-100 transition-all duration-300 group"
                style={{ borderColor: `${role.color}40` }}
              >
                <div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f] flex items-center justify-center border-2 mb-6 group-hover:scale-110 transition-transform"
                  style={{ borderColor: role.color }}
                >
                  <Icon className="w-8 h-8" style={{ color: role.color }} />
                </div>

                <h3 className="text-2xl mb-2" style={{ color: role.color }}>
                  {role.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {role.description}
                </p>

                <div className="inline-block px-4 py-2 bg-[#0a0a0f] rounded-lg border border-white/10 mb-6">
                  <p className="text-sm" style={{ color: role.color }}>
                    {role.stats}
                  </p>
                </div>

                <div className="space-y-2">
                  {role.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: role.color }}
                      ></span>
                      <span className="text-sm text-gray-400">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Badge Section */}
        <div className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24] rounded-2xl border border-[#00ff88]/30 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 flex items-center justify-center border-2 border-[#00ff88] flex-shrink-0">
              <Shield className="w-12 h-12 text-[#00ff88]" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl mb-3 text-[#00ff88]">
                Verified Expert Program
              </h3>
              <p className="text-gray-400 mb-4">
                Prove your expertise and get verified. Verified users earn higher credits, get priority visibility, and unlock exclusive features.
              </p>
              <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
                  Higher credit rates
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
                  Priority search ranking
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88]"></span>
                  Exclusive badge
                </li>
              </ul>
            </div>

            <button className="px-8 py-4 bg-[#00ff88] text-[#0a0a0f] rounded-lg hover:bg-[#00ff88]/90 transition-all hover:scale-105 flex-shrink-0">
              Apply for Verification
            </button>
          </div>
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-[#1a1a24] rounded-xl border border-white/10">
            <div className="text-4xl mb-2 text-[#00d9ff]">98%</div>
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