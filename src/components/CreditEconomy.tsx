import { Coins, ArrowRightLeft, TrendingUp, Gift } from 'lucide-react';

export function CreditEconomy() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#131318] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00d9ff] tracking-wide uppercase mb-4">Credit Economy</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Earn, Spend, Grow
            <br />
            <span className="bg-gradient-to-r from-[#ff006e] to-[#00ff88] bg-clip-text text-transparent">
              Marketplace Model
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A balanced ecosystem where knowledge seekers, creators, and coaches thrive together
          </p>
        </div>

        {/* Main Economy Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Earn Credits */}
          <div className="bg-[#1a1a24] rounded-2xl border border-[#00ff88]/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00ff88]/5 flex items-center justify-center border border-[#00ff88]/30">
                <TrendingUp className="w-8 h-8 text-[#00ff88]" />
              </div>
              <div>
                <h3 className="text-3xl text-[#00ff88]">Earn Credits</h3>
                <p className="text-gray-400">Help others and get rewarded</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Answer Community Questions</p>
                  <p className="text-sm text-gray-500">Earn credits when your answers are marked helpful</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Create Custom Content</p>
                  <p className="text-sm text-gray-500">Fulfill "Make It" requests and earn payment</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Provide Coaching Feedback</p>
                  <p className="text-sm text-gray-500">Analyze replays and VODs for players</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Contribute Video Timestamps</p>
                  <p className="text-sm text-gray-500">Help build the knowledge database</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Spend Credits */}
          <div className="bg-[#1a1a24] rounded-2xl border border-[#ff006e]/30 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff006e]/20 to-[#ff006e]/5 flex items-center justify-center border border-[#ff006e]/30">
                <Coins className="w-8 h-8 text-[#ff006e]" />
              </div>
              <div>
                <h3 className="text-3xl text-[#ff006e]">Spend Credits</h3>
                <p className="text-gray-400">Unlock premium features</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Advanced AI Searches</p>
                  <p className="text-sm text-gray-500">Deep multimodal analysis with detailed insights</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Request Custom Videos</p>
                  <p className="text-sm text-gray-500">Commission creators for personalized content</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Professional Coaching Sessions</p>
                  <p className="text-sm text-gray-500">Get VOD reviews and real-time guidance</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-4 bg-[#0a0a0f] rounded-lg border border-white/5">
                <span className="w-2 h-2 rounded-full bg-[#ff006e] mt-2 flex-shrink-0"></span>
                <div>
                  <p className="mb-1">Priority Support</p>
                  <p className="text-sm text-gray-500">Fast-tracked answers from top experts</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Economy Flow Visualization */}
        <div className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24] rounded-2xl border border-[#b968ff]/30 p-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <ArrowRightLeft className="w-8 h-8 text-[#b968ff]" />
            <h3 className="text-3xl text-[#b968ff]">How Credits Flow</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-[#0a0a0f] rounded-xl border border-[#00d9ff]/20">
              <div className="w-12 h-12 rounded-full bg-[#00d9ff]/20 flex items-center justify-center mx-auto mb-4 border border-[#00d9ff]">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl text-[#00d9ff] mb-2">Seekers</h4>
              <p className="text-sm text-gray-400">Pay credits for AI searches, custom content, and coaching</p>
            </div>

            <div className="text-center p-6 bg-[#0a0a0f] rounded-xl border border-[#b968ff]/20">
              <div className="w-12 h-12 rounded-full bg-[#b968ff]/20 flex items-center justify-center mx-auto mb-4 border border-[#b968ff]">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-xl text-[#b968ff] mb-2">Creators</h4>
              <p className="text-sm text-gray-400">Earn credits by making videos and answering questions</p>
            </div>

            <div className="text-center p-6 bg-[#0a0a0f] rounded-xl border border-[#ff006e]/20">
              <div className="w-12 h-12 rounded-full bg-[#ff006e]/20 flex items-center justify-center mx-auto mb-4 border border-[#ff006e]">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl text-[#ff006e] mb-2">Coaches</h4>
              <p className="text-sm text-gray-400">Earn credits by providing professional feedback</p>
            </div>
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mt-8 bg-gradient-to-r from-[#00d9ff]/10 to-[#b968ff]/10 rounded-2xl border border-[#00d9ff]/30 p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00d9ff] to-[#b968ff] flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl mb-2">Welcome Bonus</h4>
              <p className="text-gray-400">New users get 1000 free credits to start exploring the platform</p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all hover:scale-105">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
