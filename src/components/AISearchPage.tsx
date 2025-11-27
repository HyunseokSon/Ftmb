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
  showAskExpertsButton?: boolean;
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

type QAEntry = {
  keywords: string[];
  question: string;
  answer: string;
  videoResults?: VideoResult[];
  followUpQuestions?: string[];
};

// Static Q&A Database - Rule-based chatbot (no API/backend)
const qaDatabase: QAEntry[] = [
  {
    keywords: ["jett", "super", "jump", "valorant", "제트", "점프", "발로란트"],
    question: "How do I do a Jett super jump in Valorant?",
    answer: `**📺 Video Clip Preview: 00:14–00:21**

────────────────────────────────────

🪂 **Jett Super Jump in Valorant** (Full Guide)

🎯 **Goal:** Reach elevated positions using Dash + Jump timing for surprise attacks and aggressive entry fragging.

🕒 **Key Clip:** 00:14–00:21 (video shown below)

**🔹 How to perform:**

1️⃣ **Face the wall** and use Tailwind (Dash ability)
2️⃣ **Within 0.10–0.15 seconds**, press Jump + Forward (W) together
3️⃣ **Slightly flick camera downward** to increase vertical lift
4️⃣ **Land and instantly swap to weapon** for peek advantage

**⚠️ Common mistakes:**

🚫 **Jumping BEFORE Dash** — This completely ruins momentum
🚫 **Holding W too long** — Reduces height significantly
🚫 **Using normal jump instead of quick tap** — Timing is critical
🚫 **Camera facing forward** — You need the downward tilt for lift

✔ **Fix:** Practice in the Range with slow-motion version (Clip 00:30–00:36)

**💡 When to use:**

• **Flank entry** on Bind, Haven, or Split
• **Quick vertical escape** from ground-level fights
• **Fake jump** to bait enemy shots
• **Aggressive site takes** — Unexpected angles

**🎮 Pro Tips:**

• Bind jump to scroll wheel for faster input
• Practice on Haven A site boxes first (easiest spot)
• Combine with Updraft for triple-height jumps
• Works best at 60+ FPS for consistent timing
• Use in ranked for site entry, not for showing off

**📊 Success Rate:**
• Beginner: 30-40% (needs practice)
• Intermediate: 70-80% (after 30 minutes)
• Pro: 95%+ (muscle memory)

👉 **Try asking:**
• "Show me slow-motion tutorial"
• "Can this be used in ranked?"
• "Haven A site super jump spots?"`,
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
      "Show slow-motion version",
      "Can you show a Haven A site version?",
      "Is this allowed in ranked?"
    ]
  },
  {
    keywords: ["elden", "parry", "패링", "엘든", "timing", "타이밍"],
    question: "Show me Elden Ring parry timing",
    answer: `**📺 Video Clip Preview: 00:21–00:26**

────────────────────────────────────

⚔️ **Elden Ring Parry Timing Guide** (Complete Breakdown)

🎯 **Goal:** Master parry timing for different enemy types to stagger and riposte for massive damage.

🕒 **Key Clip:** 00:21–00:26 (frame-by-frame analysis shown below)

**🔹 Parry Windows by Enemy Type:**

| Enemy Type | Parry Window | Difficulty | Visual Cue |
|------------|-------------|------------|------------|
| **Godrick Soldier** | 0.33s | Easy | Wide swing telegraph |
| **Crucible Knight** | 0.26s | Medium | Fast overhead |
| **Black Knife Assassin** | 0.18s | Hard | Delayed blade |
| **Tree Sentinel** | 0.35s | Easy | Huge wind-up |

**🔹 When to press parry:**

1️⃣ **Watch for arm extension** (NOT weapon swing start)
2️⃣ Press parry **0.08–0.10s BEFORE impact**
3️⃣ Listen for **audio cue** (weapon whoosh sound)
4️⃣ **Don't panic parry** — Wait for the right frame

**⚠️ Common mistakes:**

🚫 **Parrying too early** — Reacting to wind-up instead of arm extension
🚫 **Using medium shields** — Slower parry frames (25% slower)
🚫 **Trying to parry jump attacks** — Most are unparryable
🚫 **Spamming parry** — You'll get hit during recovery frames

✔ **Fix:** Practice on Limgrave soldiers (most forgiving timing)

**🛡 Best Parry Tools:**

**Buckler Shield** (RECOMMENDED)
• +18% parry window extension
• Fastest parry frames in game
• Low weight (2.0)

**Parry Dagger**
• +15% parry frames
• Ultra-light (0.8 weight)
• Good for DEX builds

**Golden Parry (Ash of War)**
• +30% range extension
• Can parry from further distance
• Best for laggy online play

**💡 Advanced Tips:**

• **Disable motion blur** in settings for clearer animation reading
• **Use target lock** to maintain camera stability
• **Two-handed weapons CANNOT be parried** (watch for this!)
• **Practice parry chains** — Some enemies have 3-hit combos
• **Riposte immediately** after successful parry for max damage

**📊 Parryable vs Unparryable:**

✔ Parryable:
• Standard melee attacks
• Most humanoid enemies
• Some boss attacks (Margit, Godrick)

❌ Unparryable:
• Jump attacks (most)
• Colossal weapons (two-handed)
• Dragon attacks
• Grabbing attacks

**🎮 Training Regimen:**

1. Limgrave soldiers (5 minutes) — Build confidence
2. Crucible Knight (15 minutes) — Learn tight timing
3. Black Knife Assassin (20 minutes) — Master hard parries

👉 **Try asking:**
• "Which bosses cannot be parried?"
• "Show me parry training drills"
• "Best parry build for PvP?"`,
    videoResults: [
      {
        id: '1',
        title: 'Parry Frame Analysis - All Enemies',
        game: 'Elden Ring',
        timestampStart: '00:21',
        timestampEnd: '00:26',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        description: 'Frame-by-frame: Godrick Soldier, Crucible Knight, Tree Sentinel parry windows.',
        confidence: 97
      },
      {
        id: '2',
        title: 'Buckler vs Golden Parry Comparison',
        game: 'Elden Ring',
        timestampStart: '01:45',
        timestampEnd: '02:03',
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        description: 'Side-by-side comparison showing extended parry windows.',
        confidence: 95
      }
    ],
    followUpQuestions: [
      "Which bosses cannot be parried?",
      "Show me parry training drills",
      "Best parry build for PvP?"
    ]
  },
  {
    keywords: ["cs2", "counter", "smoke", "mirage", "lineup", "카스", "스모크", "미라지"],
    question: "CS2 Mirage A site smoke lineup",
    answer: `**📺 Video Clip Preview: 00:12–00:35**

────────────────────────────────────

💣 **Mirage A Site Smoke Lineup** (Complete Execute Strategy)

🎯 **Goal:** Cut off CT rotations and safely take A site with 3 coordinated smokes.

🕒 **Key Clips:** CT (00:12), Jungle (00:21), Stairs (00:28)

**🔹 The 3 Essential Smokes:**

| Target | Timestamp | Throw Type | Position | Mouse Aim |
|--------|-----------|------------|----------|-----------|
| **CT Spawn** | 00:12–00:18 | Jump Throw | T Stairs (2nd step) | Palace window corner |
| **Jungle** | 00:21–00:27 | Stand Throw | Top Mid wall | Lamp post above entrance |
| **Stairs** | 00:28–00:35 | Crouch Throw | Bottom Ramp | Balcony ledge top-right |

**🔹 Execution Order (CRITICAL):**

1️⃣ **Jungle Smoke FIRST** (00:21)
   • Position: Top Mid connector near left wall
   • Aim: Lamp post above Jungle entrance
   • Throw: Standing left-click
   • Purpose: Block early CT rotation

2️⃣ **Stairs Smoke SECOND** (00:28)
   • Position: Bottom of Ramp
   • Aim: Top-right corner of Balcony ledge
   • Throw: Crouch + left-click
   • Purpose: Cut off close angle

3️⃣ **CT Smoke LAST** (00:12)
   • Position: T Stairs, second step from top
   • Aim: Top-left corner of Palace window
   • Throw: **Jump Throw bind** (essential!)
   • Purpose: Block AWP peek from CT spawn
   • ⚠️ **Why last?** Prevents early AWP setup

**⚠️ Common mistakes:**

🚫 **Throwing CT smoke first** — Gives CT time to setup AWP
🚫 **Not using jump throw bind** — Inconsistent CT smoke (50% fail rate)
🚫 **Forgetting to check Sandwich** after smokes land
🚫 **Rushing before smokes bloom** — Takes 1.5 seconds to fully form
🚫 **Solo executing** — Need at least 2 players for trades

✔ **Fix:** Practice in offline mode with grenade trajectory enabled (sv_grenade_trajectory 1)

**💡 Coordination Tips:**

• **Flash timing:** Ramp Flash at 00:19 (before Stairs smoke)
• **Molotov:** Balcony Molly at 00:25 (forces CT off angle)
• **Entry:** Have teammate ready to trade if CT pushes smoke
• **Backup:** Use Tetris smoke if Jungle smoke fails

**🎮 Jump Throw Bind Setup:**

Console command:

alias "+jumpthrow" "+jump;-attack"
alias "-jumpthrow" "-jump"
bind "x" "+jumpthrow"

**📊 Success Rate by Rank:**

• Silver-Gold: 40% (timing issues)
• MG-LE: 65% (better coordination)
• Supreme-Global: 85% (perfect execution)
• Pro Play: 95% (full team sync)

**🔹 How to Counter (CT Side):**

• **Push Ramp early** before smokes (00:10)
• **Hold off-angle** on Stairs (behind default box)
• **AWP from CT spawn** (pre-aim Palace)
• **Molotov Ramp** to delay T push
• **Fast rotate** from B when smokes land

**Alternative Lineups:**

If CT smoke fails:
• **Tetris smoke** from T Spawn (safer but slower)
• **Connector smoke** to block mid rotation

👉 **Try asking:**
• "Show Molotov lineup too"
• "How to counter this execute as CT?"
• "B site smoke lineups?"`,
    videoResults: [
      {
        id: '1',
        title: 'Mirage A Site - CT Smoke Lineup',
        game: 'CS2',
        timestampStart: '00:12',
        timestampEnd: '00:18',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        description: 'CT Spawn smoke: Jump throw from T Stairs, Palace window corner.',
        confidence: 99
      },
      {
        id: '2',
        title: 'Complete A Execute Strategy',
        game: 'CS2',
        timestampStart: '00:21',
        timestampEnd: '00:35',
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        description: 'Full execute: Jungle + Stairs + CT smoke with perfect timing.',
        confidence: 97
      }
    ],
    followUpQuestions: [
      "Show Molotov lineup too",
      "How to counter this execute as CT?",
      "B site smoke lineups?"
    ]
  },
  {
    keywords: ["league", "lol", "wave", "laning", "management", "롤", "웨이브", "라인", "basic"],
    question: "League of Legends wave management basics",
    answer: `**📺 Video Clip Preview: 01:12–01:27**

────────────────────────────────────

🌊 **League of Legends Wave Management** (Complete Guide)

🎯 **Goal:** Control lane pressure, deny CS, setup dives, and avoid ganks through strategic wave manipulation.

🕒 **Key Clips:** Freeze (01:12), Slow Push (00:45), Fast Push (01:20)

**🔹 The Three Core Strategies:**

**1️⃣ FREEZE (Defensive Control)**

**When to use:**
• Enemy jungler nearby (spotted on ward)
• You're ahead and want to deny CS
• Forcing enemy to overextend for farm

**How to execute:**
1. Let enemy push towards you
2. Tank minions briefly outside tower range
3. Keep **exactly 3-4 enemy minions alive**
4. Position: Just outside tower range
5. Last-hit only, don't use abilities

**Duration:** Can hold indefinitely if done correctly

⏱ **Clip 01:12–01:16** shows perfect freeze setup

**Common mistakes:**
🚫 Having too many minions (5+) — Wave will bounce back
🚫 Freezing when you need to recall — Lose entire wave
🚫 Not warding while freezing — Vulnerable to gank
🚫 Using AoE abilities — Accidentally breaks freeze

✔ **Fix:** Count minions carefully, only last-hit

**2️⃣ SLOW PUSH (Setup Play)**

**When to use:**
• Planning to dive enemy tower
• Want to recall with minimal CS loss
• Setting up roam to other lanes
• Before objective spawns (Dragon/Baron)

**How to execute:**
1. Kill **1-2 caster minions** (back line)
2. Leave melee minions alive
3. Let your minions slowly accumulate
4. Wave stacks 2-3 waves over 30-40 seconds
5. Crashes into enemy tower with huge wave

⏱ **Clip 00:45–01:02** demonstrates cheater recall slow push

**💡 Pro Tip:** Start slow push **45 seconds before dragon spawn** to ensure lane crashes before rotation

**Common mistakes:**
🚫 Killing too many minions — Wave pushes too fast
🚫 Starting slow push too late — Doesn't crash in time
🚫 Not tracking enemy jungler — Get caught in bad spot

**3️⃣ FAST PUSH (Quick Reset)**

**When to use:**
• Need to recall immediately (low HP/mana)
• Match enemy roam to other lane
• Prevent enemy freeze setup
• Quick base after kill

**How to execute:**
1. Use **all abilities** to clear wave ASAP
2. Hit tower if possible (extra gold)
3. Recall immediately after wave crashes
4. Return with item advantage

⏱ **Clip 01:20–01:24** shows fast push execution

**⚠️ Warning:** Vulnerable during push, need vision!

**🔹 Advanced Technique: Cheater Recall**

**(Clip 00:45–01:02)**

**Step-by-step:**
1. **Fast push first 3 waves** (level 1-2)
2. **Recall immediately** at 3:00-3:15
3. Return to lane with **item advantage** (Long Sword, Amplifying Tome)
4. Enemy loses CS to tower (3-6 minions)

**Why it works:**
• Enemy can't match recall (loses too much CS)
• You get item spike before them
• Creates early game advantage

**Timing:** Works best waves 1-3, before jungler arrives

**🔹 Role-Specific Applications:**

**Top Lane:**
• **Freeze is king** — Long lane, easy to deny CS
• Slow push before TP plays
• Fast push to match roam

**Mid Lane:**
• **Fast push for roams** — Short lane, quick shove
• Match enemy recalls
• Slow push before scuttle (3:30)

**Bot Lane (ADC):**
• Coordinate slow push with support roams
• Freeze when ahead
• Fast push when support is missing

**Bot Lane (Support):**
• Help ADC freeze by tanking minions
• Don't accidentally break freeze with spells
• Poke enemy when they try to break freeze

**📊 Wave Management Impact:**

| Strategy | CS Advantage | Gank Safety | Recall Timing |
|----------|--------------|-------------|---------------|
| **Freeze** | +15-20 CS | Very High | Poor |
| **Slow Push** | +5-10 CS | Medium | Excellent |
| **Fast Push** | 0 CS | Low | Good |

**💡 When to Intentionally Break Freeze:**

• Enemy freeze denying you CS → Hard shove and reset
• Need to recall urgently → Fast push
• Objective spawning soon → Clear and rotate

👉 **Try asking:**
• "Explain cheater recall in detail"
• "Wave control for bot lane ADC"
• "How to break an enemy freeze?"`,
    videoResults: [
      {
        id: '1',
        title: 'Wave Management Masterclass',
        game: 'League of Legends',
        timestampStart: '01:12',
        timestampEnd: '01:27',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        description: 'All three wave states: Freeze → Slow Push → Fast Push.',
        confidence: 98
      },
      {
        id: '2',
        title: 'Cheater Recall Tutorial',
        game: 'League of Legends',
        timestampStart: '00:45',
        timestampEnd: '01:02',
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        description: 'Perfect cheater recall execution with item advantage.',
        confidence: 96
      }
    ],
    followUpQuestions: [
      "Explain cheater recall",
      "Wave control for bot lane ADC",
      "How to break an enemy freeze?"
    ]
  },
  {
    keywords: ["diablo 2", "d2", "디아블로", "디아2", "mephisto", "메피스토", "barbarian", "barb", "바바리안", "바바", "nightmare", "악몽"],
    question: "Diablo 2 Barbarian Mephisto Nightmare Strategy",
    answer: `**📺 Video Clip Preview: 00:18–00:35**

────────────────────────────────────

🔥 **Diablo 2: Barbarian vs Mephisto** (Nightmare Complete Strategy)

🎯 **Goal:** Efficiently farm Mephisto on Nightmare difficulty for gear upgrades using Whirlwind Barbarian.

🕒 **Key Clips:** Council (00:18–00:24), Mephisto (00:25–00:35)

**🔹 Recommended Skill Build:**

| Skill | Points | Priority | Purpose |
|-------|--------|----------|---------|
| **Whirlwind** | 20 (MAX) | Primary | Main DPS skill |
| **Battle Orders** | 20 (MAX) | Essential | +HP/Mana survivability |
| **Shout** | 10+ | High | +Defense vs Council |
| **Battle Cry** | 5+ | Medium | -Enemy Defense |
| **Taunt** | 1 | Utility | Pull enemies |
| **Leap** | 1 | Movement | Skip moat safely |
| **Find Item** | 1 | Optional | Extra loot |

**🔹 Combat Sequence (Step-by-Step):**

**PHASE 1: Pre-Battle Preparation**

1️⃣ Cast **Battle Orders** (lasts 5 minutes)
2️⃣ Cast **Shout** for defense buff (+200% defense)
3️⃣ Drink **Thawing Potion** (prevents freeze — CRITICAL!)
4️⃣ Equip **Crushing Blow weapon** (Oath or Grief)
5️⃣ Position mercenary behind you

**PHASE 2: Clearing Council Members** ⏱ (00:18–00:24)

1️⃣ Use **Leap** to jump over moat to safe corner
2️⃣ **Taunt** to pull Council members **one at a time** (CRITICAL!)
3️⃣ **Whirlwind in circles** to avoid conviction aura stack
4️⃣ **Keep moving** constantly to avoid hydra damage
5️⃣ Use **Battle Cry** to reduce their defense
6️⃣ Clear all 3 Council before engaging Mephisto

**⚠️ Common mistakes:**
🚫 Fighting all Council at once — You WILL die
🚫 Standing still while Whirlwinding — Hydra hits you
🚫 Not using Thawing Potion — Frozen = death

**PHASE 3: Mephisto Engagement** ⏱ (00:25–00:35)

1️⃣ Position Mephisto near **pillar or wall** (limits his movement)
2️⃣ Activate **Berserk** for magic damage (if available)
3️⃣ **Whirlwind in tight circles** around him
4️⃣ Watch for **lightning nova** — move immediately when you see it
5️⃣ **Move diagonally** to avoid Cold Ball projectiles
6️⃣ Use **moat trick** if health drops below 30%

**💡 Moat Trick Technique:**
• Stand on opposite side of moat from Mephisto
• He cannot cross water, but you can Whirlwind across
• Lets you reset potions safely
• Use when low on HP or out of mana

**🔹 Recommended Gear Setup:**

**WEAPON:**
🗡️ **Oath Runeword** (Budget) — Shael + Pul + Mal + Lum
   • +50% Indestructible
   • +10 Magic Absorb
   • Cost: ~Pul-Um rune

🗡️ **Grief Phase Blade** (Endgame)
   • +30-40 damage
   • -25% enemy poison resist
   • Cost: ~Vex-Ohm rune

**Alternative:** Blade of Ali Baba (for Magic Find runs)

**ARMOR:**
🛡️ **Smoke Runeword** (Nef + Lum) — RECOMMENDED
   • +50% All Resistances (HUGE!)
   • +75% Defense
   • Cost: Very cheap (Nef + Lum)

🛡️ **Duress** (Shael + Um + Thul)
   • More damage
   • Less defense
   • For faster clears

**HELMET:**
🪖 **Arreat's Face** — Best in slot
   • +2 Barbarian skills
   • +20 Strength
   • Life leech

🪖 **Guillaume's Face** (Budget)
   • 35% Crushing Blow
   • Deadly Strike
   • Very cheap alternative

**OTHER GEAR:**
• **Laying of Hands Gloves** — +350% damage to demons (MANDATORY!)
• **Gore Rider Boots** — Crushing Blow + movement speed
• **Raven Frost Ring** — Cannot be Frozen (ESSENTIAL!)
• **Dwarf Star Ring** — Fire absorb + max HP
• **Highlord's Wrath Amulet** — Deadly Strike

**Resistances:** Need **75% all resists** for Nightmare (check with -Resist items equipped)

**🔹 Mercenary Recommendation:**

**Best Choice: Act 2 Nightmare Defensive Merc**

**Why this merc:**
• Provides **Holy Freeze aura** (slows all enemies by 50%)
• Tanks Council members
• Good survivability

**Mercenary Gear:**

**Weapon:**
💠 **Insight Runeword** (Ral + Tir + Tal + Sol)
   • Meditation aura (infinite mana for WW)
   • Critical for mana sustain

**Armor:**
💠 **Treachery Runeword** (Shael + Thul + Lem)
   • Fade proc (huge resist boost)
   • Attack speed
   • Cheap to make

💠 **Duriel's Shell** (Alternative)
   • Cannot be Frozen
   • +15 Strength

**Helmet:**
💠 **Tal Rasha's Mask**
   • Life leech
   • Resistances

**🔹 Battle Tactics:**

**Movement Pattern:**
1. Enter from waypoint
2. **Leap to safe corner** (avoids initial aggro)
3. **Diagonal movement** to dodge Cold Ball
4. **Circle Mephisto clockwise** while WWing
5. Watch for lightning nova (bright yellow flash)

**Cold Ball Evasion:**
• **Move diagonally** (not straight back)
• Cold Ball has slow projectile speed
• Can outrun it with increased run/walk speed
• If hit: use Full Rejuvenation Potion immediately

**Lightning Nova:**
• Bright yellow expanding circle
• Instant damage if you're in range
• **Move away immediately** when you see cast animation

**📊 Clear Time & Efficiency:**

| Difficulty | Clear Time | XP Gain | Loot Quality |
|------------|-----------|---------|--------------|
| Nightmare | 1:30-2:00 | 15K XP | Exceptional items |
| Hell (preview) | 3:00-4:00 | 40K XP | Elite items |

**Farm Route:**
1. **Waypoint** → Durance Level 3 (30s)
2. **Clear Council** (30s)
3. **Kill Mephisto** (15-20s)
4. **Loot + Town portal** (20s)
5. **Sell loot** (10s)
6. **Repeat** (~2 minutes/run)

**Expected drops:**
• Unique items (5% chance)
• Set items (8% chance)
• Rare items (15% chance)
• Runes up to Ist (very rare)

**💡 Advanced Tips:**

✔ Keep **antidote potions** for Council poison clouds
✔ Use **Prevent Monster Heal** if fight takes too long
✔ If dying often, farm **Nightmare Baal** for better gear first
✔ Swap to **Magic Find gear** BEFORE final hit for better drops
✔ Use **Find Item** on Mephisto's corpse for 2nd chance at loot

**🔹 Hell Difficulty Preview:**

To transition to Hell difficulty, you'll need:
• 75% all resistances (mandatory)
• Life leech (8%+)
• Cannot be Frozen (Raven Frost)
• +Skills from gear (+4 minimum)
• Better weapon (Grief recommended)

👉 **Try asking:**
• "Hell difficulty version"
• "Best farming route for Barbarian?"
• "Best runewords for budget build?"`,
    videoResults: [
      {
        id: '1',
        title: 'Barbarian Mephisto Full Clear',
        game: 'Diablo 2 Resurrected',
        timestampStart: '00:18',
        timestampEnd: '00:35',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400',
        description: 'Council pull + Moat trick + Whirlwind positioning.',
        confidence: 97
      },
      {
        id: '2',
        title: 'Budget Gear Barbarian',
        game: 'Diablo 2 Resurrected',
        timestampStart: '01:12',
        timestampEnd: '01:28',
        thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400',
        description: 'Oath weapon + Smoke armor. Cost: ~Ist rune.',
        confidence: 95
      }
    ],
    followUpQuestions: [
      "Hell difficulty version",
      "Best farming route for Barbarian?",
      "Best runewords for budget build?"
    ]
  }
];

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

  // Match user query against Q&A database
  const findMatchingAnswer = (query: string): QAEntry | null => {
    const lowerQuery = query.toLowerCase();
    
    for (const entry of qaDatabase) {
      // Check if query contains any of the keywords
      const hasMatch = entry.keywords.some(keyword => 
        lowerQuery.includes(keyword.toLowerCase())
      );
      
      if (hasMatch) {
        return entry;
      }
    }
    
    return null; // No match found
  };

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
      const matchedEntry = findMatchingAnswer(messageText);
      
      let aiResponse: Message;
      
      if (matchedEntry) {
        // Found a match in Q&A database
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: matchedEntry.answer,
          timestamp: new Date(),
          videoResults: matchedEntry.videoResults,
          followUpQuestions: matchedEntry.followUpQuestions
        };
      } else {
        // No match - fallback response with Ask Experts button
        aiResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `❓ I don't have information for that yet.\n\nHere are some topics I can help with:\n• Jett super jump (Valorant)\n• Elden Ring parry timing\n• CS2 Mirage smoke lineup\n• League of Legends wave management\n• Diablo 2 Barbarian strategies\n\n👉 If you want to ask humans or expert players instead, click the button below to post your question.`,
          timestamp: new Date(),
          showAskExpertsButton: true,
          followUpQuestions: [
            "How do I do a Jett super jump in Valorant?",
            "Show me Elden Ring parry timing",
            "CS2 Mirage A site smoke lineup",
            "League of Legends wave management basics"
          ]
        };
      }
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
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

  // The exact 5 recommended questions
  const recommendedQuestions = [
    "How do I do a Jett super jump in Valorant?",
    "Show me Elden Ring parry timing",
    "CS2 Mirage A site smoke lineup",
    "League of Legends wave management basics",
    "Diablo 2 Barbarian Mephisto Nightmare Strategy"
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

                {/* Recommended Questions - Exact 5 buttons */}
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-4">Try asking:</p>
                  <div className="flex flex-col gap-2">
                    {recommendedQuestions.map((question, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(question)}
                        className="w-full px-4 py-3 bg-[#1a1a24] border border-white/10 rounded-xl text-sm text-gray-300 hover:border-[#00FFC6] hover:text-[#00FFC6] hover:bg-[#1a1a24]/80 transition-all text-left"
                      >
                        {question}
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
                        {/* Ask Experts Button - Only shown when AI doesn't have an answer */}
                        {message.showAskExpertsButton && (
                          <div className="mb-4">
                            <button
                              onClick={() => navigateTo('/expert-qa')}
                              className="px-6 py-3 bg-gradient-to-r from-[#B968FF] to-[#FF5EAC] rounded-xl hover:shadow-[0_0_30px_rgba(185,104,255,0.4)] transition-all flex items-center gap-2 text-white"
                            >
                              <MessageSquare className="w-5 h-5" />
                              <span>Ask Experts →</span>
                            </button>
                          </div>
                        )}
                        
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