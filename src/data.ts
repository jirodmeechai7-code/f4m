import { Coach, Review, ScheduleSession } from "./types";

export const HERO_IMAGE = "/src/assets/images/conscious_leader_hero_1780336544643.png";

export const coaches: Coach[] = [
  {
    id: "benjamin",
    name: "BENJAMIN SEELOS",
    role: "BUSINESS & LEADERSHIP COACH",
    quote: '"OWNERSHIP CHANGES EVERYTHING"',
    bio: "RAISED IN A SMALL AUSTRIAN TOWN, I LEARNED EARLY THAT RESPONSIBILITY AND DISCIPLINE SHAPE THE DIRECTION OF LIFE. MY CAREER HAS TAKEN ME FROM HANDS-ON ROLES SUCH AS EMERGENCY MEDICAL EMT AND CHEF TO LEADERSHIP POSITIONS IN INTERNATIONAL LUXURY HOSPITALITY, TRAVEL, AND TECHNOLOGY. TODAY, AS CO-FOUNDER OF FANTASTIC 4 MIND, I COMBINE REAL-WORLD LEADERSHIP EXPERIENCE WITH COACHING FRAMEWORKS TO HELP PEOPLE GAIN CLARITY, TAKE OWNERSHIP, AND CREATE MEANINGFUL PROGRESS IN LIFE AND CAREER.",
    focus: [
      "BUSINESS COACHING AND STRATEGIC GROWTH",
      "LEADERSHIP RESILIENCE AND HIGH-PERFORMANCE MINDSET",
      "BUILDING STRONG TEAM CULTURE AND ACCOUNTABILITY",
      "SALES MASTERY AND COMMERCIAL LEADERSHIP",
      "TURNING VISION AND GOALS INTO STRUCTURED BUSINESS RESULTS"
    ],
    image: "/src/assets/images/coach_ben_portrait_1780339285966.png",
    signatureQuote: "I BELIEVE REAL CHANGE BEGINS WHEN PEOPLE TAKE OWNERSHIP OF THEIR MINDSET, DECISIONS, AND ACTIONS."
  },
  {
    id: "aylin",
    name: "AYLIN HESTER",
    role: "EXECUTIVE LEADERSHIP & ICF PROFESSIONAL COACH",
    quote: '"MINDFUL PRESENCE BREEDS RESPECT"',
    bio: "WITH OVER 15 YEARS AS AN EXECUTIVE IN INTERNATIONAL ORGANIZATIONS, AYLIN EXPERTLY BRIDGES THE GAP BETWEEN STRATEGIC BUSINESS RESULTS AND CONSCIOUS MINDFUL LEADERSHIP. SHE SPECIALIZES IN EMOTIONAL INTELLIGENCE, GROUNDED EXECUTIVE PRESENTATION, AND MINDFUL CONFLICT STRATEGIES FOR HIGH-STAKES EXECUTIVES.",
    focus: [
      "EXECUTIVE PRESENCE AND EMOTIONAL BALANCE",
      "ICF-ACCREDITED SYSTEMIC TEAM ALIGNMENT",
      "CONSCIOUS CONFLICT RESOLUTION",
      "TRANSITIONAL CAREER MINDSET SHIFTS",
      "VALUES-DRIVEN LEADERSHIP ARCHITECTURE"
    ],
    image: "/src/assets/images/coach_aylin_portrait_1780339309648.png",
    signatureQuote: "LEADERSHIP IS NOT AN OUTWARD STATUS, BUT AN INWARD STATE OF BEING AND TOTAL ENERGETIC RESONANCE."
  },
  {
    id: "eric",
    name: "ERIC GHARAKHANIAN",
    role: "MINDFULNESS & COGNITIVE STRATEGIST",
    quote: '"STILLNESS IS A WEAPON OF HIGH DECISION"',
    bio: "ERIC COMBINES APPLIED NEUROSCIENCE WITH COGNITIVE BEHAVIORAL PATTERNS TO HELP HIGH-PRESSURE LEADERS REGULATE THEIR NERVOUS SYSTEM. HIS TECHNIQUES ENABLE EXECUTIVES TO REMAIN IN THE HIGH-PERFORMANCE 'ZONE' OF FLOW RATHER THAN FALLING INTO REACTIVE BEHAVIORS.",
    focus: [
      "APPLIED NEUROSCIENCE IN LEADERSHIP",
      "STRESS RESILIENCE & NERVOUS SYSTEM REGULATION",
      "COGNITIVE DE-BIASING FOR HIGH-VALUE DECISIONS",
      "DECOMPRESSION METHODOLOGIES FOR BUSY MINDS",
      "SUSTAINED CONCENTRATION PRACTICES FOR BOARDROOM PERFORMANCE"
    ],
    image: "/src/assets/images/coach_eric_portrait_1780339325377.png",
    signatureQuote: "HE WHO CONTROLS HIS BREATH AND ATTENTION, CONTROLS HIS DECISIONS. THEREIN LIES LIBERTY."
  }
];

export const scheduleSessions: ScheduleSession[] = [
  {
    id: "session-1",
    sessionNum: 1,
    title: "Reality Reset",
    subtitle: "Lead from clarity, not chaos",
    description: "Establish a baseline for grounded leadership.",
    topics: ["Understanding High-Stress Triggers", "Somatic Breathing Drills for Real-time Resets", "Somatic State Regulation Practices", "Transitioning from Reactivity to Response"]
  },
  {
    id: "session-2",
    sessionNum: 2,
    title: "Values & Identity Alignment",
    subtitle: "Lead from your core, not your calendar",
    description: "Align your daily actions with deeply held values.",
    topics: ["Identifying Core Inner Values", "The Alignment Test: Values vs. Outer Urgency", "Combating Outer Noise & Urgent Clutter", "Balancing Personal Integrity and Corporate Strategy"]
  },
  {
    id: "session-3",
    sessionNum: 3,
    title: "EQ in Action",
    subtitle: "Emotional mastery for modern leaders",
    description: "Build resilience and social intelligence.",
    topics: ["Developing Executive Demeanor & Posture", "The Power of Clear Silence & Measured Speech", "Managing Team Panic Styles under Pressure", "Active Empathetic Listening under Time Constraints"]
  },
  {
    id: "session-4",
    sessionNum: 4,
    title: "Break Patterns. Build Power.",
    subtitle: "Reframe & release leadership blocks",
    description: "Shift what's holding you back from reaching your potential.",
    topics: ["Identifying Subconscious Blockages & Behaviors", "Reframing Stress Responses into Focused Power", "Releasing Long-held Execution Bottlenecks", "Constructive Reflection & Growth Mindset"]
  },
  {
    id: "session-5",
    sessionNum: 5,
    title: "Purpose-Led Leadership",
    subtitle: "Lead with meaning and momentum",
    description: "Guide your team with a clear, inspiring vision.",
    topics: ["Designing Value-oriented Daily Routines", "Communicating Inspiring Shared Goals", "Injecting Psychological Safety in Project Briefings", "Building High-Trust Multiplier Teams"]
  },
  {
    id: "session-6",
    sessionNum: 6,
    title: "Your Leadership Blueprint",
    subtitle: "Anchor & activate your leadership blueprint",
    description: "From insight to integration for lasting impact.",
    topics: ["Crafting Your Custom Cohort Playbook", "Peer-led Alignment Audits and Feedback", "Establishing Deep 90-Day Renewal Cycles", "Designing Your Dynamic Sustained Blueprint"]
  }
];

export const initialReviews: Review[] = [
  {
    id: "review-1",
    name: "Kobsak Wiriyawit",
    date: "May 16, 2026",
    rating: 5,
    title: "Finding peace in leadership",
    text: "Since joining this program, my decision-making clarity has improved immensely. The teaching tone is sincere and has helped me lead my team with significantly more confidence and a grounded, quiet strength than ever before.",
    avatar: "K"
  },
  {
    id: "review-2",
    name: "Danai Pornpitak",
    date: "May 18, 2026",
    rating: 5,
    title: "Steady through the pressure",
    text: "This cohort showed me that effective team leadership begins with leading oneself first. The result is a profound stillness when facing major obstacles and a team bond that has strengthened through my own inner clarity.",
    avatar: "D"
  },
  {
    id: "review-3",
    name: "Manaswee Rattanachot",
    date: "May 20, 2026",
    rating: 5,
    title: "Pressure into positive power",
    text: "Moving away from the idea that a leader must carry everything alone was a warm and powerful experience. I am now a calmer, happier leader who feels certain in every step I take toward our collective goals for the future.",
    avatar: "M"
  },
  {
    id: "review-4",
    name: "Piyanut Chantra",
    date: "May 21, 2026",
    rating: 5,
    title: "Transformative somatic drills",
    text: "The nervous system down-regulation drill changed my executive workdays completely. Whenever the pressure spikes at 2 PM, I take 2 minutes for the physiological reset. Unbelievably effective!",
    avatar: "P"
  },
  {
    id: "review-5",
    name: "Akarin Sethapanich",
    date: "May 25, 2026",
    rating: 4,
    title: "Practical strategy, great mentoring",
    text: "Coach Benjamin's strategic alignment frames and the direct focus on executive ownership really clicked. It's not just theory; it’s highly actionable stuff for growing organization founders.",
    avatar: "A"
  }
];
