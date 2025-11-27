import { Search, Sparkles, Send, User, Zap, MessageSquare, Bookmark, Copy, Play, Clock, ChevronRight, RefreshCw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Navigation } from './Navigation';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { navigateTo } from '../utils/navigation';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  videoResults?: VideoResult[];
  followUpQuestions?: string[];
  isStreaming?: boolean;
};

type VideoResult = {
  id: string;
  title: string;
  game: string;
  timestampStart: string;
  timestampEnd: string;
  thumbnail: string;
  description: string;
  confidence: number;
};

export function AISearchPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "👋 Hey! I'm your AI gaming assistant. Ask me anything about game mechanics, strategies, or specific techniques. I'll find the exact timestamps in videos and explain them to you.",
      timestamp: new Date(),
      followUpQuestions: [
        "How do I do a Jett super jump in Valorant?",
        "Show me Elden Ring parry timing",
        "CS2 smoke lineup for Mirage A site",
        "League of Legends wave management basics"
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message?: string) => {
    const messageText = message || input.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with streaming effect
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `Great question! Let me break down **${messageText}** for you:\n\nThis technique requires precise timing and specific button inputs. I've analyzed multiple pro player VODs and found the exact moments where this is executed perfectly.\n\nThe key steps are:\n1. **Positioning**: Make sure you're in the right spot\n2. **Timing**: Press the ability at the exact moment\n3. **Follow-through**: Complete the combo without hesitation\n\nLet me show you the video clips where this technique is demonstrated:`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'Pro Player Tutorial',
            game: 'Valorant',
            timestampStart: '00:14',
            timestampEnd: '00:26',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'Use Q skill right after dash. Jump + crouch + dash combo required.',
            confidence: 96
          },
          {
            id: '2',
            title: 'Competitive Match Example',
            game: 'Valorant',
            timestampStart: '02:34',
            timestampEnd: '02:48',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'TenZ demonstrates the technique in a tournament setting.',
            confidence: 92
          },
          {
            id: '3',
            title: 'Advanced Movement Guide',
            game: 'Valorant',
            timestampStart: '05:12',
            timestampEnd: '05:30',
            thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
            description: 'Slow-motion breakdown of the mechanic with input display.',
            confidence: 89
          }
        ],
        followUpQuestions: [
          "Can you show me a slow-motion version?",
          "What are common mistakes when learning this?",
          "Are there alternative techniques?",
          "How do pro players practice this?"
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleCopyTimestamp = (start: string, end: string) => {
    navigator.clipboard.writeText(`${start} - ${end}`);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  const suggestedPrompts = [
    "Show slow-motion version",
    "Different character variants",
    "Common mistakes to avoid",
    "Practice drills"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col pt-16">
      <Navigation />
      
      {/* Header */}
      <div className="bg-[#131318] border-b border-white/10 flex-shrink-0">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FFC6]/20 to-[#00FFC6]/5 flex items-center justify-center border border-[#00FFC6]/30">
                <Sparkles className="w-5 h-5 text-[#00FFC6]" />
              </div>
              <div>
                <h1 className="text-xl text-[#00FFC6]">AI Gaming Assistant</h1>
                <p className="text-xs text-gray-400">Powered by multimodal AI</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs text-gray-400">Your Credits</p>
                <p className="text-[#00FFC6]">8,500</p>
              </div>
              <button className="px-4 py-2 bg-[#00FFC6] text-[#0a0a0f] rounded-lg text-sm hover:bg-[#00FFC6]/90 transition-colors">
                Buy Credits
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-8">
          {messages.map((message) => (
            <div key={message.id} className={`mb-8 ${message.role === 'user' ? 'flex justify-end' : ''}`}>
              {message.role === 'assistant' ? (
                <div className="flex gap-4 max-w-full">
                  {/* AI Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FFC6] via-[#B968FF] to-[#FF5EAC] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* AI Message Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-[#00FFC6]">AI Assistant</span>
                      <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    </div>
                    
                    {/* AI Text Response */}
                    <div className="bg-[#1a1a24] border border-white/10 rounded-2xl rounded-tl-sm p-5 mb-4">
                      <div className="prose prose-invert max-w-none">
                        {message.content.split('\n').map((line, i) => (
                          <p key={i} className="mb-2 last:mb-0 text-gray-300 text-sm leading-relaxed">
                            {line.includes('**') ? (
                              line.split('**').map((part, j) => 
                                j % 2 === 0 ? part : <strong key={j} className="text-white">{part}</strong>
                              )
                            ) : line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Video Results Cards */}
                    {message.videoResults && message.videoResults.length > 0 && (
                      <div className="space-y-3 mb-4">
                        {message.videoResults.map((video) => (
                          <div key={video.id} className="bg-[#131318] border border-white/10 rounded-xl overflow-hidden hover:border-[#00FFC6]/50 transition-all group">
                            <div className="flex gap-4 p-4">
                              {/* Thumbnail */}
                              <div className="relative w-48 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-[#0a0a0f]">
                                <ImageWithFallback
                                  src={video.thumbnail}
                                  alt={video.title}
                                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent"></div>
                                <div className="absolute top-2 right-2 px-2 py-1 bg-[#00FFC6] text-[#0a0a0f] rounded text-xs">
                                  {video.confidence}%
                                </div>
                                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-10 h-10 rounded-full bg-[#00FFC6] flex items-center justify-center">
                                    <Play className="w-5 h-5 text-[#0a0a0f]" fill="currentColor" />
                                  </div>
                                </button>
                              </div>

                              {/* Video Info */}
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h4 className="text-white mb-1">{video.title}</h4>
                                    <span className="px-2 py-1 bg-[#B968FF]/20 text-[#B968FF] rounded text-xs">
                                      {video.game}
                                    </span>
                                  </div>
                                </div>
                                
                                {/* Timestamp */}
                                <div className="flex items-center gap-2 mb-2 text-[#00FFC6]">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">⏱ Appears at {video.timestampStart} - {video.timestampEnd}</span>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-400 mb-3">{video.description}</p>

                                {/* Action Buttons */}
                                <div className="flex gap-2">
                                  <button className="px-4 py-2 bg-gradient-to-r from-[#00FFC6] to-[#B968FF] rounded-lg text-sm hover:shadow-[0_0_20px_rgba(0,255,198,0.3)] transition-all text-[#0a0a0f]">
                                    Watch Clip
                                  </button>
                                  <button 
                                    onClick={() => navigateTo('/expert-qa')}
                                    className="px-4 py-2 bg-[#0a0a0f] border border-[#B968FF] text-[#B968FF] rounded-lg text-sm hover:bg-[#B968FF]/10 transition-all"
                                  >
                                    Ask Experts
                                  </button>
                                  <button className="p-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#FF5EAC] hover:text-[#FF5EAC] transition-colors">
                                    <Bookmark className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => handleCopyTimestamp(video.timestampStart, video.timestampEnd)}
                                    className="p-2 bg-[#0a0a0f] border border-white/10 rounded-lg hover:border-[#00FFC6] hover:text-[#00FFC6] transition-colors"
                                  >
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Follow-up Questions */}
                    {message.followUpQuestions && message.followUpQuestions.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs text-gray-500 mb-3">💡 Try asking:</p>
                        <div className="flex flex-wrap gap-2">
                          {message.followUpQuestions.map((question, i) => (
                            <button
                              key={i}
                              onClick={() => handleSend(question)}
                              className="px-4 py-2 bg-[#0a0a0f] border border-white/10 rounded-lg text-sm hover:border-[#00FFC6] hover:text-[#00FFC6] transition-all group"
                            >
                              <span className="flex items-center gap-2">
                                {question}
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 max-w-2xl">
                  {/* User Message Content */}
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-2 mb-2 justify-end">
                      <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                      <span className="text-sm text-gray-300">You</span>
                    </div>
                    <div className="bg-gradient-to-r from-[#00FFC6] to-[#B968FF] rounded-2xl rounded-tr-sm p-4 inline-block">
                      <p className="text-[#0a0a0f]">{message.content}</p>
                    </div>
                  </div>
                  
                  {/* User Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FFC6] via-[#B968FF] to-[#FF5EAC] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div className="bg-[#1a1a24] border border-white/10 rounded-2xl rounded-tl-sm p-5">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FFC6] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#B968FF] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#FF5EAC] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-[#131318] border-t border-white/10 flex-shrink-0">
        <div className="max-w-5xl mx-auto px-6 py-4">
          {/* Suggested Prompts */}
          <div className="mb-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 bg-[#1a1a24] border border-white/10 rounded-full text-xs hover:border-[#00FFC6] hover:text-[#00FFC6] transition-all whitespace-nowrap"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about any game mechanic, technique, or strategy..."
                className="w-full pl-5 pr-12 py-4 bg-[#1a1a24] border border-white/20 rounded-xl focus:outline-none focus:border-[#00FFC6] transition-colors text-white placeholder-gray-500"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                10 credits
              </div>
            </div>
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="px-6 py-4 bg-gradient-to-r from-[#00FFC6] to-[#B968FF] rounded-xl hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              <Send className="w-5 h-5 text-[#0a0a0f]" />
            </button>
          </div>

          {/* Info Text */}
          <p className="text-xs text-gray-500 mt-3 text-center">
            AI can make mistakes. Verify critical techniques with experts. Each message costs 10 credits.
          </p>
        </div>
      </div>
    </div>
  );
}
