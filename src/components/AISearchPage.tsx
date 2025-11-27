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

    // Simulate typing delay and return hardcoded response
    setTimeout(() => {
      const aiResponse = getHardcodedResponse(messageText);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Rule-based chatbot - hardcoded responses
  const getHardcodedResponse = (query: string): Message => {
    const lowerQuery = query.toLowerCase();

    // Jett super jump
    if ((lowerQuery.includes('jett') || lowerQuery.includes('제트')) && 
        (lowerQuery.includes('jump') || lowerQuery.includes('점프') || lowerQuery.includes('timing'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `🪂 **Jett Super Jump Guide** (Clip 00:14–00:21)\n\nThe Jett super jump is a momentum-based technique that combines Dash + Jump buffering:\n\n**Step-by-Step Execution:**\n1️⃣ Cast **Tailwind (Dash)** toward wall or desired direction\n2️⃣ **Within 0.15s**, press Jump + W together (timing is critical!)\n3️⃣ **Slightly tilt camera downward** for maximum lift\n4️⃣ **Glide by holding Space** to maintain momentum\n\n**Common Mistakes to Avoid:**\n☒ Jumping before Dash — ruins momentum\n☒ Holding W too long — reduces height gain\n☒ Camera facing forward — no vertical lift\n☒ Not practicing the 0.15s timing window\n\n**Pro Tips:**\n✔ Practice on Haven A site boxes first\n✔ Bind jump to scroll wheel for faster input\n✔ Combine with updraft for triple-height jumps\n✔ Works best at 60+ FPS for consistent timing`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'TenZ Jett Super Jump Tutorial',
            game: 'Valorant',
            timestampStart: '00:14',
            timestampEnd: '00:21',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'Perfect execution: Dash → Jump + W within 0.15s → Camera tilt downward.',
            confidence: 98
          },
          {
            id: '2',
            title: 'Super Jump on Every Map',
            game: 'Valorant',
            timestampStart: '02:34',
            timestampEnd: '02:48',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'Map-specific spots: Haven A, Bind Showers, Ascent Mid with slow-motion.',
            confidence: 96
          }
        ],
        followUpQuestions: [
          "Show me on Haven A site specifically",
          "Can you show a slow-motion version?",
          "Is this allowed in ranked/competitive?"
        ]
      };
    }

    // Elden Ring parry timing
    if ((lowerQuery.includes('elden') || lowerQuery.includes('엘든')) && 
        (lowerQuery.includes('parry') || lowerQuery.includes('패링') || lowerQuery.includes('timing'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `⚔️ **Elden Ring Parry Timing Guide** (Clip 00:21–00:26)\n\nParry timing is all about reading enemy animation frames. Here are the windows:\n\n**Enemy Parry Windows:**\n• **Light enemies (Godrick Soldier)**: 0.33s after swing start — Easy\n• **Knights (Crucible Knight)**: 0.26s after swing — Medium\n• **Assassins (Black Knife)**: 0.18s after swing — Hard\n• **Tree Sentinel**: 0.35s after swing — Easy (huge wind-up)\n\n**When to Parry:**\n1️⃣ Watch for **arm extension** (not weapon swing start)\n2️⃣ Press parry **0.1s before impact**\n3️⃣ Listen for audio cue (weapon whoosh sound)\n\n**Best Parry Tools:**\n🔥 **Buckler Shield** — Adds +18% parry frames (easiest for beginners)\n🔥 **Parry Dagger** — +15% frames, faster animation\n🔥 **Golden Parry** (Ash of War) — +30% range\n\n**Pro Tips:**\n✔ Disable motion blur in settings for clearer animation reading\n✔ Practice on Limgrave soldiers first (most forgiving)\n✔ Use target lock to maintain camera stability\n✔ Two-handed weapons CANNOT be parried\n\n**Common Mistakes:**\n☒ Parrying too early (react to arm extension, not wind-up)\n☒ Using medium shields (slower parry frames)\n☒ Trying to parry jump attacks (most are unparryable)`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'Parry Frame Analysis - All Enemies',
            game: 'Elden Ring',
            timestampStart: '00:21',
            timestampEnd: '00:26',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'Frame-by-frame breakdown: Godrick Soldier, Crucible Knight, Tree Sentinel.',
            confidence: 97
          },
          {
            id: '2',
            title: 'Buckler vs Golden Parry Comparison',
            game: 'Elden Ring',
            timestampStart: '01:45',
            timestampEnd: '02:03',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'Side-by-side comparison showing extended parry windows with different tools.',
            confidence: 95
          }
        ],
        followUpQuestions: [
          "Which bosses cannot be parried at all?",
          "Can you show parry training drills?",
          "Best parry build for PvP?"
        ]
      };
    }

    // CS2 smoke lineup
    if ((lowerQuery.includes('cs2') || lowerQuery.includes('counter') || lowerQuery.includes('카스')) && 
        (lowerQuery.includes('smoke') || lowerQuery.includes('mirage') || lowerQuery.includes('lineup'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `💣 **Mirage A Site Smoke Lineup** (T Ramp)\n\nThese three smokes give you full site control and cut off CT rotations:\n\n**Critical Smokes:**\n\n| Target | Timestamp | Throw Type | Position |\n|--------|-----------|------------|----------|\n| **CT Spawn** | 00:12–00:18 | Jump Throw | T Stairs (2nd step) |\n| **Jungle** | 00:21–00:27 | Stand Throw | Top Mid connector |\n| **Stairs** | 00:28–00:35 | Crouch Throw | Bottom Ramp |\n\n**Execution Guide:**\n\n**1️⃣ CT Smoke** (Most Critical)\n• Position: Stand on **second stair from top** at T Stairs\n• Aim: Top-left corner of Palace window\n• Throw: **Jump Throw bind** (essential for consistency)\n• ⚠️ Throw this **LAST** to avoid early AWP peek\n\n**2️⃣ Jungle Smoke**\n• Position: Top Mid connector near wall\n• Aim: Lamp post above Jungle entrance\n• Throw: **Standing throw** with left-click\n• Timing: Throw FIRST to block rotations\n\n**3️⃣ Stairs Smoke**\n• Position: Bottom of Ramp\n• Aim: Top-right corner of Balcony ledge\n• Throw: **Crouch + Left-click**\n\n**Pro Tips:**\n✔ Coordinate with **Ramp Flash + Balcony Molotov**\n✔ Have teammate ready to trade if CT pushes smoke\n\n**Common Mistakes:**\n☒ Throwing CT smoke too early\n☒ Not using jump throw bind (inconsistent)\n☒ Rushing before smokes bloom (1.5s delay)`,
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
            description: 'Full execute: Jungle + Stairs + CT smoke with flash/molotov timing.',
            confidence: 97
          }
        ],
        followUpQuestions: [
          "Show me Molotov spots for A site",
          "How to counter this execute as CT?",
          "Jump throw bind setup guide?"
        ]
      };
    }

    // LoL wave management
    if ((lowerQuery.includes('league') || lowerQuery.includes('lol') || lowerQuery.includes('롤')) && 
        (lowerQuery.includes('wave') || lowerQuery.includes('laning') || lowerQuery.includes('basic'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `🌊 **League of Legends Wave Management Guide**\n\nWave control is one of the most important fundamentals. Here are the three core strategies:\n\n**Wave Control Strategies:**\n\n| Strategy | Use Case | Method | Risk |\n|----------|----------|--------|------|\n| **Freeze** | Avoid ganks, deny CS | Keep 3-4 minions alive near tower | Low |\n| **Slow Push** | Setup dive, recall | Stack 2+ waves | Medium |\n| **Fast Push** | Quick recall, roam | Clear wave ASAP | High |\n\n**(Clip 01:12–01:27)** shows all three techniques in a real game.\n\n**1️⃣ FREEZE (Defensive Control)**\n• **When:** Enemy jungler nearby, you're ahead\n• **How:** Let enemy push, tank minions, keep exactly 3-4 enemy minions alive\n• **Position:** Just outside your tower range\n• **Duration:** Can hold indefinitely if done correctly\n\n**2️⃣ SLOW PUSH (Setup Play)**\n• **When:** Planning to dive, recall, or roam\n• **How:** Kill 1-2 caster minions, leave melee minions\n• **Result:** Wave stacks 2-3 waves, crashes into enemy tower\n• **Timing:** Takes ~30-40 seconds to build\n• 💡 **Pro Tip:** Start slow push 45s before dragon spawn\n\n**3️⃣ FAST PUSH (Quick Reset)**\n• **When:** Need to recall immediately or match roam\n• **How:** Use all abilities to clear wave fast\n• **Goal:** Crash wave, minimize CS loss\n\n**Advanced: Cheater Recall** (Clip 00:45–01:02)\n1. Fast push first 3 waves\n2. Recall immediately\n3. Return with item advantage\n4. Enemy loses CS to tower\n\n**Common Mistakes:**\n☒ Too many minions when freezing (wave bounces)\n☒ Freezing when you need to recall\n☒ Not warding while freezing (vulnerable)`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'Wave Management Masterclass',
            game: 'League of Legends',
            timestampStart: '01:12',
            timestampEnd: '01:27',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'All three wave states: Freeze → Slow Push → Fast Push with timing.',
            confidence: 98
          },
          {
            id: '2',
            title: 'Cheater Recall Tutorial',
            game: 'League of Legends',
            timestampStart: '00:45',
            timestampEnd: '01:02',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'Perfect cheater recall: Fast push 3 waves → Recall → Item advantage.',
            confidence: 96
          }
        ],
        followUpQuestions: [
          "Explain cheater recall in more detail",
          "Wave control specifically for bot lane ADC",
          "How to break an enemy freeze?"
        ]
      };
    }

    // Diablo 4 Sorcerer leveling
    if ((lowerQuery.includes('diablo 4') || lowerQuery.includes('d4')) && 
        (lowerQuery.includes('sorcerer') || lowerQuery.includes('sorc') || lowerQuery.includes('leveling'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `🔥 **Diablo 4 Sorcerer XP Route** (Nightmare Difficulty)\n\nFastest leveling route for Sorcerer in Nightmare tier:\n\n**Best XP Farm Locations:**\n\n| Location | XP/Hour | Difficulty |\n|----------|---------|------------|\n| **Champion's Demise** | 7.2M | Medium |\n| Blind Burrows | 6.8M | Easy |\n| Guulrahn Slums | 5.9M | Hard |\n\n**Recommended Skill Rotation:**\n1️⃣ **Teleport** → Position into pack\n2️⃣ **Flame Shield** → Auto-trigger for protection\n3️⃣ **Chain Lightning** spam → Main DPS\n\n**Required Setup:**\n🔥 **Must equip:** Flame Shield Enchantment (auto-trigger)\n🔥 **Primary stat:** Intelligence + Critical Strike Chance\n🔥 **Defense:** At least 40% damage reduction\n\n**Gear Recommendations:**\n• **Weapon:** Staff with +Chain Lightning damage\n• **Armor:** Flame Shield cooldown reduction\n• **Amulet:** +Intelligence, +Critical Strike\n• **Rings:** +Damage to Close/Distant enemies\n\n**Route Optimization:**\n1. Teleport to Champion's Demise\n2. Clear entire dungeon (2-3 minutes)\n3. Reset and repeat\n4. Expected: 7.2M XP/hour\n\n**Pro Tips:**\n✔ Use Flame Shield Enchantment for auto-protection\n✔ Stack cooldown reduction for faster Teleport\n✔ Prioritize density over elite kills for XP\n✔ Group up enemies before Chain Lightning`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'Sorcerer 7.2M XP/Hour Route',
            game: 'Diablo 4',
            timestampStart: '00:15',
            timestampEnd: '00:32',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'Champion\'s Demise full clear with optimal skill rotation.',
            confidence: 96
          },
          {
            id: '2',
            title: 'Budget Gear Setup for Leveling',
            game: 'Diablo 4',
            timestampStart: '01:20',
            timestampEnd: '01:45',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'Affordable gear setup that works for Nightmare tier farming.',
            confidence: 93
          }
        ],
        followUpQuestions: [
          "Hell difficulty version?",
          "Best budget gear setup?",
          "How to optimize for Torment tier?"
        ]
      };
    }

    // Diablo 2 Resurrected - Barbarian Mephisto (Korean + English)
    if ((lowerQuery.includes('diablo 2') || lowerQuery.includes('d2') || lowerQuery.includes('디아블로') || lowerQuery.includes('디아2')) && 
        (lowerQuery.includes('mephisto') || lowerQuery.includes('메피스토')) && 
        (lowerQuery.includes('barb') || lowerQuery.includes('바바'))) {
      return {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `⚔️ **Diablo 2 Resurrected: Barbarian vs Mephisto** (Nightmare)\n\n**(Clip 00:18–00:35)** Full clear sequence with optimal positioning\n\n**Recommended Skill Build:**\n\n| Skill | Points | Purpose |\n|-------|--------|----------|\n| **Whirlwind** | 20 (Max) | Main DPS |\n| **Battle Orders** | 20 (Max) | +HP/Mana |\n| **Shout** | 10+ | +Defense |\n| **Leap** | 1 | Skip moat |\n\n**Combat Sequence:**\n\n**1️⃣ Pre-Battle Preparation**\n• Cast **Battle Orders** (lasts 5 min)\n• Cast **Shout** for defense\n• Drink **Thawing Potion** (prevents freeze)\n• Equip **Crushing Blow weapon**\n\n**2️⃣ Council Members** (00:18–00:24)\n• Use **Leap** to jump over moat\n• Pull Council **one at a time** (critical!)\n• Whirlwind in circles\n• Keep moving to avoid hydra\n\n**3️⃣ Mephisto Fight** (00:25–00:35)\n• Position near **pillar or wall**\n• Whirlwind in **tight circles**\n• Watch for lightning nova → move!\n• Use **moat trick** if HP < 30%\n\n**Moat Trick:**\n• Stand opposite side of moat from Mephisto\n• He can't cross, but you can WW across\n• Resets potions safely\n\n**Gear Setup:**\n\n**Weapon:**\n🗡️ **Oath Runeword** (Budget) — Shael + Pul + Mal + Lum\n🗡️ **Grief Phase Blade** (Endgame)\n\n**Armor:**\n🛡️ **Smoke Runeword** — Huge resist bonus\n🛡️ **Duress** — More damage\n\n**Other:**\n• **Laying of Hands** Gloves → +350% demon damage!\n• **Gore Rider** Boots → Crushing Blow\n• **Raven Frost** Ring → Cannot be Frozen\n• **Arreat's Face** Helmet (or Guillaume's)\n\n**Mercenary:**\n🧙 **Act 2 Nightmare Defensive**\n• Provides Holy Freeze aura\n• Equip: **Insight** (mana regen)\n• Armor: **Treachery**\n• Helmet: **Tal Rasha's Mask**\n\n**Common Mistakes:**\n☒ Fighting all Council at once\n☒ Not using Thawing Potion (frozen = death)\n☒ Standing still while WWing\n☒ Forgetting Battle Orders after death\n\n**Farm Route:**\n1. Waypoint → Durance 3\n2. Clear Council (30s)\n3. Kill Mephisto (20s)\n4. Town portal → Sell\n5. Repeat (~2 min/run)`,
        timestamp: new Date(),
        videoResults: [
          {
            id: '1',
            title: 'Barbarian Mephisto Full Clear',
            game: 'Diablo 2 Resurrected',
            timestampStart: '00:18',
            timestampEnd: '00:35',
            thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
            description: 'Council pull strategy + Moat trick + Whirlwind positioning.',
            confidence: 97
          },
          {
            id: '2',
            title: 'Budget Gear Barbarian',
            game: 'Diablo 2 Resurrected',
            timestampStart: '01:12',
            timestampEnd: '01:28',
            thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
            description: 'Oath weapon + Smoke armor setup. Total cost: ~Ist rune.',
            confidence: 95
          }
        ],
        followUpQuestions: [
          "Best farming route for Barbarian in Nightmare?",
          "How to transition to Hell difficulty?",
          "Best runewords for budget build?"
        ]
      };
    }

    // Default fallback - no match
    return {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: `I don't have information for that yet.\n\nI can help you with:\n• Jett super jump timing (Valorant)\n• Elden Ring parry timing\n• CS2 smoke lineups (Mirage)\n• League of Legends wave management\n• Diablo 4 Sorcerer leveling routes\n• Diablo 2 Barbarian strategies\n\nTry asking one of the suggested questions below!`,
      timestamp: new Date(),
      followUpQuestions: [
        "Jett super jump timing",
        "Elden Ring parry timing",
        "CS2 Mirage smoke lineup",
        "LoL laning basics"
      ]
    };
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
                <p className="text-xs text-gray-400">Rule-based gaming knowledge chatbot</p>
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
                    I'm your AI gaming assistant. Ask me about game mechanics, strategies, or timestamp-based tutorials.
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
                Rule-based responses. Verify critical techniques with experts. Each message costs 10 credits.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
