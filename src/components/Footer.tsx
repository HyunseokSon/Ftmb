import { Twitter, Youtube, Twitch, Instagram, Mail } from 'lucide-react';
import { navigateTo } from '../utils/navigation';

export function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] bg-clip-text text-transparent">
              찾아줘 알려줘<br />만들어줘 피드백해줘
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              The ultimate gaming knowledge and creation platform. Search with AI, get community feedback, and join creator campaigns.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a24] border border-white/10 flex items-center justify-center hover:border-[#00FFC6] hover:bg-[#00FFC6]/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a24] border border-white/10 flex items-center justify-center hover:border-[#ff006e] hover:bg-[#ff006e]/10 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a24] border border-white/10 flex items-center justify-center hover:border-[#b968ff] hover:bg-[#b968ff]/10 transition-colors"
              >
                <Twitch className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-[#1a1a24] border border-white/10 flex items-center justify-center hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-[#00FFC6]">Product</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => navigateTo('/ai-search')} className="text-gray-400 hover:text-white transition-colors text-left">
                  AI Search
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/community')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Game Knowledge Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/creator-hub')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Creator Hub
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-[#b968ff]">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-[#ff006e]">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Creator Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Community Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API Docs
                </a>
              </li>
              <li>
                <button onClick={() => navigateTo('/community')} className="text-gray-400 hover:text-white transition-colors text-left">
                  Community
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#1a1a24] to-[#1a1a24] rounded-2xl border border-[#00FFC6]/30 p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-2xl mb-2">Ready to Level Up?</h4>
              <p className="text-gray-400">
                Join thousands of gamers finding answers, creating content, and improving their skills
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <button 
                onClick={() => navigateTo('/ai-search')}
                className="px-8 py-4 bg-gradient-to-r from-[#00FFC6] to-[#b968ff] rounded-lg hover:shadow-[0_0_30px_rgba(0,255,198,0.5)] transition-all hover:scale-105 whitespace-nowrap text-[#0a0a0f] font-medium"
              >
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-[#1a1a24] border-2 border-[#b968ff] rounded-lg transition-all hover:bg-[#b968ff]/10 hover:scale-105 whitespace-nowrap">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#1a1a24] rounded-2xl border border-white/10 p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl mb-2 flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-5 h-5 text-[#00FFC6]" />
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm">
                Get the latest features, tips, and community highlights
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-lg focus:outline-none focus:border-[#00FFC6] transition-colors"
              />
              <button className="px-6 py-3 bg-[#00FFC6] text-[#0a0a0f] rounded-lg hover:bg-[#00FFC6]/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 찾아줘 알려줘 만들어줘 피��백해줘. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}