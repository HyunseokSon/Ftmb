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
  const [messages, setMessages] = useState<Message[]>([]);
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

    // Generate detailed AI response based on question
    setTimeout(() => {
      let aiResponse: Message;
      const lowerQuery = messageText.toLowerCase();

      // Jett super jump question
      if (lowerQuery.includes('jett') && (lowerQuery.includes('super jump') || lowerQuery.includes('jump'))) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Great question! The **Jett Super Jump** is a momentum trick using Dash + Jump buffering. This technique is essential for aggressive entry fragging and unexpected angles.\n\nHere's the exact sequence you need to master **(Timestamp: Clip #1 — 00:14–00:21)**:\n\n**Step-by-Step Execution:**\n1️⃣ **Cast Tailwind (Dash)** toward wall or direction you want to go\n2️⃣ **Within 0.15s**, press Jump + W together (timing is critical!)\n3️⃣ **Slightly tilt camera downward** for maximum lift\n4️⃣ **Glide by holding Space** to maintain momentum\n\n**Common Mistakes to Avoid:**\n☒ Jumping before Dash — ruins momentum\n☒ Holding W too long — reduces height\n☒ Camera facing forward — no vertical lift\n☒ Using Dash without charges — practice in custom games first\n\n**Pro Tips:**\n✔ Practice on Haven A site boxes first\n✔ Bind jump to scroll wheel for faster input\n✔ Combine with updraft for triple-height jumps\n✔ Works best at 60+ FPS for consistent timing\n\nI've found multiple pro player VODs demonstrating this technique perfectly:`,
          timestamp: new Date(),
          videoResults: [
            {
              id: '1',
              title: 'TenZ Jett Super Jump Tutorial',
              game: 'Valorant',
              timestampStart: '00:14',
              timestampEnd: '00:21',
              thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
              description: 'Perfect execution: Dash → Jump + W within 0.15s → Camera tilt downward for lift.',
              confidence: 98
            },
            {
              id: '2',
              title: 'Super Jump on Every Map',
              game: 'Valorant',
              timestampStart: '02:34',
              timestampEnd: '02:48',
              thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
              description: 'Map-specific spots: Haven A, Bind Showers, Ascent Mid. Slow-motion breakdown included.',
              confidence: 96
            },
            {
              id: '3',
              title: 'Competitive Match Usage',
              game: 'Valorant',
              timestampStart: '05:12',
              timestampEnd: '05:30',
              thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
              description: 'Tournament example: TenZ uses super jump for A site entry on Ascent.',
              confidence: 94
            }
          ],
          followUpQuestions: [
            "Show me on Haven A site specifically",
            "Can you show a slow-motion version?",
            "Is this allowed in ranked/competitive?",
            "How to combine with updraft for triple jump?"
          ]
        };
      }
      // Elden Ring parry timing
      else if (lowerQuery.includes('elden ring') && lowerQuery.includes('parry')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Excellent question! **Parry timing in Elden Ring** is all about reading enemy animation frames. Most enemies give you a **0.30–0.35s parry window**, but this varies significantly by enemy type.\n\n**(Clip #1 — 00:21–00:26)** shows the exact frame timing for common enemies:\n\n**Enemy Parry Windows:**\n\n| Enemy Type | Parry Window | Difficulty | Notes |\n|------------|-------------|------------|-------|\n| Godrick Soldier | 0.33s | Easy | Wide swing telegraphs |\n| Crucible Knight | 0.26s | Medium | Fast combo strings |\n| Black Knife Assassin | 0.18s | Hard | Delayed attacks |\n| Tree Sentinel | 0.35s | Easy | Huge wind-up |\n\n**Critical Technique Breakdown:**\n\n**When to Parry:**\n1️⃣ Watch for the **arm extension** (not weapon swing start)\n2️⃣ Press parry **0.1s before impact**\n3️⃣ Listen for audio cue (weapon whoosh sound)\n\n**Best Parry Tools:**\n✔ **Buckler** — Adds +18% parry frames (easiest)\n✔ **Parry Dagger** — +15% frames, faster animation\n✔ Golden Parry (Ash of War) — +30% range\n\n**Pro Tips for Consistent Parries:**\n✔ Disable motion blur in settings for clearer animation reading\n✔ Practice on Limgrave soldiers first (most forgiving)\n✔ Use target lock to maintain camera stability\n✔ Two-handed weapons cannot be parried (watch for this!)\n\n**Common Mistakes:**\n☒ Parrying too early (react to arm, not wind-up)\n☒ Using medium shields (slower parry frames)\n☒ Trying to parry jump attacks (most are unparryable)\n\nLet me show you the exact frame-by-frame breakdowns:`,
          timestamp: new Date(),
          videoResults: [
            {
              id: '1',
              title: 'Parry Frame Analysis - All Enemies',
              game: 'Elden Ring',
              timestampStart: '00:21',
              timestampEnd: '00:26',
              thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
              description: 'Frame-by-frame breakdown: Godrick Soldier, Crucible Knight, Tree Sentinel parry windows.',
              confidence: 97
            },
            {
              id: '2',
              title: 'Buckler vs Golden Parry Comparison',
              game: 'Elden Ring',
              timestampStart: '01:45',
              timestampEnd: '02:03',
              thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
              description: 'Side-by-side frame comparison showing extended parry windows with different tools.',
              confidence: 95
            },
            {
              id: '3',
              title: 'Boss Parry Guide - Margit to Malenia',
              game: 'Elden Ring',
              timestampStart: '03:12',
              timestampEnd: '03:38',
              thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
              description: 'Which boss attacks can be parried? Complete breakdown with timestamps.',
              confidence: 93
            }
          ],
          followUpQuestions: [
            "Can you show parry training drills?",
            "Which bosses cannot be parried at all?",
            "How to parry Malenia's Waterfowl Dance?",
            "Best parry build for PvP?"
          ]
        };
      }
      // CS2 smoke lineup
      else if ((lowerQuery.includes('cs2') || lowerQuery.includes('counter strike')) && lowerQuery.includes('smoke')) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Perfect timing! Let me break down the **essential smoke lineups for Mirage A site execute**. These three smokes will give you full site control and cut off CT rotations.\n\n**Critical Smokes for A Site Execute:**\n\n| Target | Throw Type | Position | Timestamp |\n|--------|-----------|----------|----------|\n| **CT Spawn** | Jump Throw | T Stairs | Clip #1 — 00:12–00:18 |\n| **Jungle** | Stand Throw | Top Mid | Clip #2 — 00:21–00:27 |\n| **Stairs** | Crouch Throw | Ramp | Clip #3 — 00:28–00:35 |\n\n**Detailed Execution Guide:**\n\n**1️⃣ CT Smoke (Most Critical)**\n- Position: Stand on **second stair from top** at T Stairs\n- Aim: Top-left corner of Palace window\n- Throw: **Jump Throw bind** (essential for consistency)\n- Timing: Throw this **LAST** to avoid early AWP peek\n\n**2️⃣ Jungle Smoke**\n- Position: Top Mid connector near wall\n- Aim: Lamp post above Jungle entrance  \n- Throw: **Standing throw** with left-click\n- Timing: Throw first to block rotations\n\n**3️⃣ Stairs Smoke**\n- Position: Bottom of Ramp\n- Aim: Top-right corner of Balcony ledge\n- Throw: **Crouch + Left-click**\n- Timing: Throw second, before CT smoke\n\n**Pro Execution Tips:**\n✔ **Throw CT smoke LAST** to prevent early AWP peeks from CT spawn\n✔ Coordinate with **Ramp Flash + Balcony Molotov** for best timing\n✔ Have teammate ready to trade if CT pushes through smoke\n✔ Use **Tetris smoke** as backup if Jungle smoke fails\n\n**Common Mistakes:**\n☒ Throwing CT smoke too early (gives CT time to setup)\n☒ Not using jump throw bind (inconsistent smokes)\n☒ Forgetting to check Sandwich after smokes land\n☒ Rushing in before smokes fully bloom (1.5s delay)\n\n**Alternative Setup:**\nIf playing without jump throw bind, use **one-way smoke** on Stairs instead (Clip #3 shows positioning).\n\nHere are the exact lineup demonstrations:`,
          timestamp: new Date(),
          videoResults: [
            {
              id: '1',
              title: 'Mirage A Site - CT Smoke Lineup',
              game: 'CS2',
              timestampStart: '00:12',
              timestampEnd: '00:18',
              thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
              description: 'CT Spawn smoke: Jump throw from T Stairs, aim at Palace window corner.',
              confidence: 99
            },
            {
              id: '2',
              title: 'Complete A Execute Strategy',
              game: 'CS2',
              timestampStart: '00:21',
              timestampEnd: '00:35',
              thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
              description: 'Full execute sequence: Jungle + Stairs + CT smoke with flash/molotov coordination.',
              confidence: 97
            },
            {
              id: '3',
              title: 'Pro Team A Execute - Tournament VOD',
              game: 'CS2',
              timestampStart: '01:12',
              timestampEnd: '01:32',
              thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
              description: 'FaZe Clan executing A site with perfect smoke timing and trades.',
              confidence: 95
            }
          ],
          followUpQuestions: [
            "Show me Molotov spots for A site",
            "How to counter this execute as CT?",
            "B site smoke lineups for Mirage?",
            "Jump throw bind setup guide?"
          ]
        };
      }
      // LoL wave management
      else if ((lowerQuery.includes('league') || lowerQuery.includes('lol')) && (lowerQuery.includes('wave') || lowerQuery.includes('laning'))) {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Excellent question! **Wave management** is one of the most important fundamentals in League of Legends. Mastering this will help you control lane pressure, avoid ganks, and setup dives.\n\n**Three Core Wave Strategies:**\n\n| Strategy | Use Case | Method | Risk Level |\n|----------|----------|--------|------------|\n| **Freeze** | Avoid ganks, deny CS | Keep 3-4 enemy minions alive near your tower | Low |\n| **Slow Push** | Setup dive, recall timing | Stack 2+ waves then let them push | Medium |\n| **Fast Push** | Quick recall, roam | Kill entire wave ASAP, crash into tower | High |\n\n**(Clip #3 — 01:12–01:27)** demonstrates all three techniques in a real game scenario.\n\n**Detailed Breakdown:**\n\n**1️⃣ FREEZE (Defensive Control)**\n- **When:** Enemy jungler nearby, you're ahead and want to deny CS\n- **How:** Let enemy push, tank minions, keep exactly 3-4 enemy minions alive\n- **Position:** Just outside your tower range\n- **Duration:** Can hold indefinitely if done correctly\n\n**Common Mistakes:**\n☒ Having too many minions (wave will bounce back)\n☒ Freezing when you need to recall (lose wave)\n☒ Not warding when freezing (vulnerable to gank)\n\n**2️⃣ SLOW PUSH (Setup Play)**\n- **When:** Planning to dive, recalling, or roaming\n- **How:** Kill 1-2 enemy caster minions, leave melee minions\n- **Result:** Wave stacks 2-3 waves, then crashes into enemy tower\n- **Timing:** Takes ~30-40 seconds to build\n\n**Pro Tip:** Start slow push 45s before dragon spawn to ensure lane crashes before you rotate.\n\n**3️⃣ FAST PUSH (Quick Reset)**\n- **When:** Need to recall immediately, match enemy roam\n- **How:** Use all abilities to clear wave as fast as possible\n- **Goal:** Crash wave into tower, minimize CS loss\n- **Warning:** Vulnerable during push, need vision\n\n**Advanced Techniques:**\n\n**Cheater Recall:**\n1. Fast push first 3 waves\n2. Recall immediately\n3. Return with item advantage\n4. Enemy loses CS to tower\n\n**(Clip #2 — 00:45–01:02)** shows perfect cheater recall execution.\n\n**Role-Specific Tips:**\n\n**Top Lane:** Freeze is king, denies enemy more effectively\n**Mid Lane:** Fast push for roams, match enemy recalls\n**Bot Lane (ADC):** Coordinate slow push with support roams\n**Bot Lane (Support):** Help ADC freeze, poke when enemy tries to break it\n\nLet me show you pro players demonstrating these techniques:`,
          timestamp: new Date(),
          videoResults: [
            {
              id: '1',
              title: 'Wave Management Masterclass',
              game: 'League of Legends',
              timestampStart: '01:12',
              timestampEnd: '01:27',
              thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
              description: 'All three wave states demonstrated: Freeze → Slow Push → Fast Push with timing.',
              confidence: 98
            },
            {
              id: '2',
              title: 'Cheater Recall Tutorial',
              game: 'League of Legends',
              timestampStart: '00:45',
              timestampEnd: '01:02',
              thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
              description: 'Perfect cheater recall execution: Fast push 3 waves → Recall → Return with item lead.',
              confidence: 96
            },
            {
              id: '3',
              title: 'Faker\'s Wave Control - Pro VOD',
              game: 'League of Legends',
              timestampStart: '02:34',
              timestampEnd: '03:05',
              thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
              description: 'Faker using wave manipulation to create roam opportunities and deny enemy CS.',
              confidence: 94
            }
          ],
          followUpQuestions: [
            "Explain cheater recall in more detail",
            "Wave control specifically for bot lane ADC",
            "How to break an enemy freeze?",
            "When should I give up CS to maintain freeze?"
          ]
        };
      }
      // Generic detailed response for other queries
      else {
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Great question! Let me break down **${messageText}** for you with a detailed analysis.\n\n**Strategic Overview:**\n\nThis technique requires understanding the core mechanics, timing, and situational application. I've analyzed multiple high-level player VODs and found the exact moments where this is executed perfectly.\n\n**Key Steps to Master:**\n\n1️⃣ **Understanding the Fundamentals**\n- Learn the base mechanic and prerequisites\n- Identify the optimal conditions for execution\n- Practice the timing in low-pressure environments\n\n2️⃣ **Execution Breakdown**\n- Start with proper positioning (Clip #1 — 00:14–00:21)\n- Execute the core technique with precise timing\n- Follow through with supporting actions\n\n3️⃣ **Advanced Applications**\n- Situational adaptations for different scenarios\n- Combining with other techniques for maximum effectiveness\n- Reading opponent reactions and adjusting\n\n**Common Mistakes to Avoid:**\n☒ Attempting the technique without proper setup\n☒ Poor timing that telegraphs your intention\n☒ Not practicing in controlled environments first\n☒ Ignoring matchup-specific adjustments\n\n**Pro Tips for Improvement:**\n✔ Record your gameplay to analyze execution\n✔ Watch top-tier players in similar situations\n✔ Practice specific scenarios in custom games\n✔ Focus on consistency before attempting in ranked\n\n**Recommended Setup/Build:**\n- Primary tools/abilities needed for optimal execution\n- Secondary options that complement the strategy\n- Situational adjustments based on game state\n\nLet me show you professional demonstrations of this technique:`,
          timestamp: new Date(),
          videoResults: [
            {
              id: '1',
              title: 'Professional Tutorial - Technique Breakdown',
              game: 'Valorant',
              timestampStart: '00:14',
              timestampEnd: '00:26',
              thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
              description: 'Step-by-step execution with clear timing markers and positioning requirements.',
              confidence: 96
            },
            {
              id: '2',
              title: 'Competitive Application - Tournament VOD',
              game: 'Valorant',
              timestampStart: '02:34',
              timestampEnd: '02:48',
              thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
              description: 'High-pressure execution in competitive setting, showing decision-making process.',
              confidence: 92
            },
            {
              id: '3',
              title: 'Advanced Guide - Multiple Scenarios',
              game: 'Valorant',
              timestampStart: '05:12',
              timestampEnd: '05:30',
              thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400',
              description: 'Situational variations and adaptations for different matchups and maps.',
              confidence: 89
            }
          ],
          followUpQuestions: [
            "Can you show a slow-motion breakdown?",
            "What are the best practice drills for this?",
            "How do pro players adapt this in different situations?",
            "Common counters and how to deal with them?"
          ]
        };
      }

      setMessages(prev => [...prev, aiResponse]);
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
          {/* Initial State - New Chat Intro Banner */}
          {messages.length === 0 && (
            <div className="flex items-center justify-center min-h-[70vh]">
              <div className="max-w-3xl w-full">
                {/* Minimal Welcome Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00FFC6] via-[#B968FF] to-[#FF5EAC] flex items-center justify-center mx-auto mb-5">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                    I'm your AI gaming assistant. Ask me anything about game mechanics, strategies, or timestamp-based tutorials.
                  </p>
                </div>

                {/* Main Prompt Input - Centered and Prominent */}
                <div className="mb-6">
                  <div className="flex gap-3">
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask about any game mechanic, technique, or strategy..."
                        className="w-full pl-6 pr-24 py-5 bg-[#1a1a24] border-2 border-white/20 rounded-2xl focus:outline-none focus:border-[#00FFC6] transition-colors text-white placeholder-gray-500 text-lg shadow-lg"
                      />
                      <div className="absolute right-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#00FFC6]/20 text-[#00FFC6] rounded text-xs border border-[#00FFC6]/30">
                        10 credits
                      </div>
                    </div>
                    <button
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                      className="px-7 py-5 bg-gradient-to-r from-[#00FFC6] to-[#B968FF] rounded-2xl hover:shadow-[0_0_30px_rgba(0,255,198,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none shadow-lg"
                    >
                      <Send className="w-6 h-6 text-[#0a0a0f]" />
                    </button>
                  </div>
                </div>

                {/* Compact Suggested Questions Chips */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-4">Try asking:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      "Jett super jump timing",
                      "Elden Ring parry timing",
                      "LoL laning basics",
                      "CS2 Mirage smoke lineup"
                    ].map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(suggestion)}
                        className="px-4 py-2 bg-[#1a1a24] border border-white/10 rounded-full text-sm text-gray-400 hover:border-[#00FFC6] hover:text-[#00FFC6] hover:bg-[#1a1a24]/80 transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Messages */}
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
          {/* Only show footer input if conversation has started */}
          {messages.length > 0 && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}