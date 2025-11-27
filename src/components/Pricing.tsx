import { Check, Zap, Crown, Rocket } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: '0',
      credits: '1,000',
      color: '#00d9ff',
      gradient: 'from-[#00d9ff]/20 to-[#00d9ff]/5',
      description: 'Perfect for casual users',
      features: [
        'Basic AI searches (10/month)',
        'Community Q&A access',
        'Browse marketplace',
        'Standard support',
        'Limited timestamp access'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '19',
      credits: '10,000',
      color: '#b968ff',
      gradient: 'from-[#b968ff]/20 to-[#b968ff]/5',
      description: 'For active gamers & learners',
      features: [
        'Unlimited AI searches',
        'Priority Q&A responses',
        'Request custom videos',
        'Basic coaching (2 sessions/month)',
        'Full timestamp library',
        '10% marketplace discount',
        'Priority support'
      ],
      cta: 'Start Pro Trial',
      popular: true
    },
    {
      name: 'Elite',
      icon: Rocket,
      price: '49',
      credits: '30,000',
      color: '#ff006e',
      gradient: 'from-[#ff006e]/20 to-[#ff006e]/5',
      description: 'For serious competitors',
      features: [
        'Everything in Pro',
        'Unlimited custom video requests',
        'Unlimited coaching sessions',
        'Advanced AI analysis',
        'Private expert access',
        '25% marketplace discount',
        'White-glove support',
        'Early feature access'
      ],
      cta: 'Go Elite',
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#131318] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-[#00d9ff] tracking-wide uppercase mb-4">Pricing Plans</p>
          <h2 className="text-5xl md:text-6xl mb-6">
            Choose Your Level
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Subscription + credit model for maximum flexibility
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-[#1a1a24] p-2 rounded-lg border border-white/10">
            <button className="px-6 py-2 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-md">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-400 hover:text-white transition-colors">
              Yearly <span className="text-[#00ff88] text-sm">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-[#1a1a24] rounded-2xl border p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-[#b968ff] shadow-[0_0_40px_rgba(185,104,255,0.3)]'
                    : 'border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#b968ff] to-[#ff006e] rounded-full text-sm">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center border mb-6`}
                  style={{ borderColor: `${plan.color}40` }}
                >
                  <Icon className="w-8 h-8" style={{ color: plan.color }} />
                </div>

                {/* Plan Name & Price */}
                <h3 className="text-3xl mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <div className="inline-block px-4 py-2 bg-[#0a0a0f] rounded-lg border border-white/10">
                    <p className="text-sm">
                      <span style={{ color: plan.color }}>{plan.credits}</span> credits included
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: plan.color }}
                      />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#b968ff] to-[#ff006e] hover:shadow-[0_0_30px_rgba(185,104,255,0.5)]'
                      : 'bg-[#0a0a0f] border-2 hover:bg-white/5'
                  }`}
                  style={{
                    borderColor: !plan.popular ? plan.color : 'transparent'
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Credit Packs */}
        <div className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24] rounded-2xl border border-[#00d9ff]/30 p-8">
          <h3 className="text-3xl mb-2 text-center text-[#00d9ff]">
            Need More Credits?
          </h3>
          <p className="text-center text-gray-400 mb-8">
            Purchase additional credit packs anytime
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-white/10 text-center hover:border-[#00d9ff]/50 transition-colors">
              <div className="text-3xl mb-2 text-[#00d9ff]">5K</div>
              <p className="text-gray-400 mb-4">Credits</p>
              <p className="text-2xl mb-2">$9</p>
              <button className="w-full py-2 bg-[#00d9ff]/10 border border-[#00d9ff] rounded-lg text-sm hover:bg-[#00d9ff]/20 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-white/10 text-center hover:border-[#b968ff]/50 transition-colors">
              <div className="text-3xl mb-2 text-[#b968ff]">15K</div>
              <p className="text-gray-400 mb-4">Credits</p>
              <p className="text-2xl mb-2">$24</p>
              <button className="w-full py-2 bg-[#b968ff]/10 border border-[#b968ff] rounded-lg text-sm hover:bg-[#b968ff]/20 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-white/10 text-center hover:border-[#ff006e]/50 transition-colors">
              <div className="text-3xl mb-2 text-[#ff006e]">30K</div>
              <p className="text-gray-400 mb-4">Credits</p>
              <p className="text-2xl mb-2">$45</p>
              <button className="w-full py-2 bg-[#ff006e]/10 border border-[#ff006e] rounded-lg text-sm hover:bg-[#ff006e]/20 transition-colors">
                Buy Now
              </button>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-white/10 text-center hover:border-[#00ff88]/50 transition-colors">
              <div className="text-3xl mb-2 text-[#00ff88]">50K</div>
              <p className="text-gray-400 mb-4">Credits</p>
              <p className="text-2xl mb-2">$69</p>
              <button className="w-full py-2 bg-[#00ff88]/10 border border-[#00ff88] rounded-lg text-sm hover:bg-[#00ff88]/20 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise Section */}
        <div className="mt-8 bg-gradient-to-r from-[#00d9ff]/10 to-[#b968ff]/10 rounded-2xl border border-[#00d9ff]/30 p-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex-1">
              <h4 className="text-3xl mb-3 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] bg-clip-text text-transparent">
                Enterprise & Game Studios
              </h4>
              <p className="text-gray-400">
                Custom solutions for game studios, esports teams, and large organizations. Volume discounts, dedicated support, and custom integrations available.
              </p>
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(0,217,255,0.5)] transition-all hover:scale-105 flex-shrink-0">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
