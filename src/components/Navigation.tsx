import { Search, MessageSquare, Video, FileText, Home } from 'lucide-react';

// Helper function to navigate without page reload
const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event('navigateApp'));
};

export function Navigation() {
  const currentPath = window.location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/ai-search', label: 'AI Search', icon: Search, color: '#00d9ff' },
    { path: '/expert-qa', label: 'Expert Q&A', icon: MessageSquare, color: '#b968ff' },
    { path: '/creator-hub', label: 'Creator Hub', icon: Video, color: '#ff006e' },
    { path: '/coaching', label: 'Coaching', icon: FileText, color: '#00ff88' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigateTo('/')}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#00d9ff] to-[#b968ff] flex items-center justify-center">
              <span className="text-sm">🎮</span>
            </div>
            <span className="text-lg bg-gradient-to-r from-[#00d9ff] to-[#b968ff] bg-clip-text text-transparent">
              Gaming Platform
            </span>
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => navigateTo(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-sm cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border border-white/20'
                      : 'hover:bg-white/5'
                  }`}
                  style={isActive && item.color ? { borderColor: item.color + '40' } : {}}
                >
                  {Icon ? (
                    <Icon 
                      className="w-4 h-4" 
                      style={item.color ? { color: item.color } : {}}
                    />
                  ) : (
                    <span style={item.color ? { color: item.color } : {}}></span>
                  )}
                  <span className="text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              Credits: <span className="text-[#00d9ff]">8,500</span>
            </div>
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00d9ff] to-[#b968ff] flex items-center justify-center">
              <span className="text-sm">U</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}