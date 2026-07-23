export const identity = {
  greeting: "Hello, I'm",
  name: 'Zara',
  tagline: 'A Full-Stack Alchemist.',
};

// "2026 Update" badge shown over the hero intro card.
export const badge = {
  label: '2026 Update',
  html: `<strong>Degree unlocked</strong>, officially and enthusiastically in 2026.<br /><br /><strong>Left the management side of things</strong> to follow what actually excites me. Currently going deeper into <strong>cybersecurity</strong>, following curiosity and gut feeling, one rabbit hole at a time. Also doing some <strong>very serious R&amp;D</strong> with <strong>"My Sassy Boss 😇"</strong> on what the next chapter looks like, either <strong>business or life</strong>, probably both.<br /><br /><strong>Currently: figuring it out.</strong> But make it deliberate.`,
};

// Intro paragraphs (contain inline <strong> emphasis).
export const heroParagraphs = [
  `I'm diving deep into <strong>cybersecurity</strong> and <strong>DevSecOps</strong> — learning how systems think, how they break, and how to keep them safe. Currently looking for my next opportunity where I can put that mindset to work.`,
  `Outside of tech, I run <strong>Arunika Gaming Shop</strong>, a digital game account store I've been building since 2021, and still have <strong>Matchako.dalamkampus</strong> close to heart, a matcha thing I helped build from the ground up. Different worlds, same mindset. <strong>Curiosity</strong>, <strong>systems thinking</strong>, and a bias for getting things done.`,
];

// Quick-facts grid. (The "Toolbox" fact lives in stack.js / EssentialStack.)
export const facts = [
  { heading: 'Location', lines: ['Bandung, Indonesia'] },
  { heading: 'Experience', lines: ['1+ year building fullstack systems end-to-end'] },
  {
    heading: 'Superpower',
    lines: ['Tracing where systems break and building solutions that fit the people using them'],
  },
  { heading: 'Reading', lines: ['Start With Why', 'by Simon Sinek'] },
  {
    heading: 'Learning',
    indent: true,
    lines: [
      '• System Analysis methodology',
      '• Cybersecurity fundamentals',
      '• DevSecOps practices',
      '• Multi-agent AI orchestration, building role-specific agents (marketing, HRD, ops) with fine-tuned prompts per position',
    ],
  },
  { heading: 'Favorite Matcha', lines: ['Signature Matcha Latte 🍵', 'with extra creamy foam'] },
  {
    heading: 'Currently Building',
    lines: ['Arunika Gaming Shop', 'matchako.dalamkampus', 'MatchaKo Indonesia internal tools'],
  },
];

// Warm intro shown in readme.js (ported from the old About page).
export const aboutHeadline = 'Why hello there!';
export const aboutParagraphs = [
  'I believe that most problems, whether in code, business, or daily life, are really just systems waiting to be understood. That curiosity to figure out how things actually work, and why they sometimes don\u2019t, is what gets me going every day.',
  'I learn by doing and by getting close to the problem. That means sitting with business teams to understand their pain, tracing where systems break, and building solutions that fit the people using them. I move between tech and operations naturally, because to me they\u2019re just two sides of the same question.',
  'Right now I\u2019m a fresh grad from Telkom University, actively looking for my next opportunity as a <strong>Fullstack Developer</strong> or in <strong>cybersecurity / DevSecOps</strong>. Outside of that, I run Arunika Gaming Shop and co-own matchako.dalamkampus. Different worlds, same approach.',
];
