/**
 * =============================================================================
 *  SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
 * =============================================================================
 *  Edit this file to update the portfolio. You should NOT need to touch any
 *  component to change text, links, projects, skills, etc.
 *
 *  Leaving a link as "" simply hides that link/button. See README "Editing
 *  content" for how fields like `featured` and grouped experience behave.
 * =============================================================================
 */

export type IconName =
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "code"
  | "trophy"
  | "briefcase"
  | "graduation";

/* -------------------------------------------------------------------------- */
/*  PROFILE / HERO                                                            */
/* -------------------------------------------------------------------------- */
export const profile = {
  name: "Ramendra Kumer Singha",
  title: "Assistant Software Engineer",
  // Photo lives at public/ramendra.png (560×560). Replace that file to change it.
  photo: "/ramendra.png",
  // Short, confident, no fake metrics.
  tagline:
    "Full-stack software engineer with a competitive-programming backbone. I build clean, efficient web applications, and I'm currently focused on backend development and system architecture — while actively learning system design.",
  location: "Sylhet, Bangladesh",
  email: "ringkuxinha@gmail.com",
  github: "https://github.com/ringku1",
  linkedin: "https://www.linkedin.com/in/ringku1/",
  // Current employer (used in the hero badge, experience, and "at a glance").
  company: { name: "AppifyLab", url: "https://www.appifylab.com/" },
  // Drop your PDF at  public/Ramendra_Kumer_Singha.pdf  for this button to work.
  resumeUrl: "/Ramendra_Kumer_Singha.pdf",
};

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                     */
/* -------------------------------------------------------------------------- */
export const about = {
  // Written from your resume. Paste LinkedIn "About" text here to enrich it.
  paragraphs: [
    "I'm a Computer Science & Engineering graduate from Sylhet Engineering College, SUST (CGPA 3.84/4.00) and an Assistant Software Engineer at AppifyLab, where I work across the frontend, backend, and database layers of production products.",
    "My foundation is competitive programming — 2000+ problems solved across Codeforces, CodeChef, AtCoder, LeetCode, CSES, and LightOJ. That background shapes how I write code: I care about correctness, efficient algorithms, and keeping things simple.",
    "Day to day I build full-stack web applications with React, Next.js, and AdonisJS. Right now I'm focused on backend development and system architecture, and I'm actively learning system design.",
  ],
  // The "At a glance" card. Add a `url` to a row to render its value as a link.
  glance: [
    { label: "Role", value: "Assistant Software Engineer" },
    { label: "Currently", value: "AppifyLab", url: "https://www.appifylab.com/" },
    { label: "Focus", value: "Backend & system design" },
    { label: "Based in", value: "Sylhet, BD" },
    { label: "Problems solved", value: "2000+" },
  ] as { label: string; value: string; url?: string }[],
};

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE  (most recent first)                                           */
/* -------------------------------------------------------------------------- */
export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Assistant Software Engineer",
    company: "AppifyLab",
    companyUrl: "https://www.appifylab.com/",
    period: "Jun 2026 — Present",
    current: true,
    points: [
      "Building new features and resolving issues across EzyCourse and EzyStudio.",
      "Working end to end — frontend, backend, and database — within production codebases.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "AppifyLab",
    companyUrl: "https://www.appifylab.com/",
    period: "Nov 2025 — May 2026",
    points: [
      "Shipped features and bug fixes for EzyCourse and EzyStudio in production.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "AppifyLab",
    companyUrl: "https://www.appifylab.com/",
    period: "Jun 2025 — Oct 2025",
    points: [
      "Learned and applied frontend and backend development for production systems.",
      "Worked with relational databases and production data management.",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                  */
/* -------------------------------------------------------------------------- */
export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  liveLabel?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Bishnupriya Manipuri - English Dictionary",
    description:
      "A React + Vite web app translating Bishnupriya Manipuri words to English — diacritic-aware fuzzy search (Fuse.js) over 40,000+ entries, with live suggestions, keyboard navigation, and light/dark themes.",
    tags: ["React", "Vite", "Fuse.js", "JavaScript", "CSS"],
    github: "https://github.com/ringku1/Bishnupriya-Manipuri-Language-Dictionary",
    live: "https://bishnupriya-manipuri-language-dictionary.vercel.app/",
    liveLabel: "Live demo",
    featured: true,
  },
  {
    title: "Blood Bridge",
    description:
      "A blood-donation platform for Bangladesh — a React Native mobile app plus a Next.js admin dashboard, containerized with Docker.",
    tags: ["Next.js", "Express.js", "React Native", "Docker"],
    github: "https://github.com/ringku1/bloodbridge-bd",
    live: "https://blood-bridge-admin-dev.vercel.app",
    liveLabel: "Admin demo",
  },
  {
    title: "Dusk Duel",
    description:
      "A browser sword-duel game: silhouette swordsmen, six arenas with their own weather and rules, a six-rival tournament ladder, coins and gear, and local two-player. Plays on keyboard, gamepad, or touch — no build step or dependencies, just canvas rendering and WebAudio-synthesized sound.",
    tags: ["JavaScript", "Canvas", "WebAudio", "Gamepad API", "HTML", "CSS"],
    // Repo is private — shown with the live link only.
    github: "",
    live: "https://sword-duel-by-ringku.vercel.app/",
    liveLabel: "Play now",
  },
  {
    title: "mama — Claude Code Skill",
    description:
      "A goal-based work loop for Claude Code: it studies the codebase, asks one batch of questions, plans wide parallel work, then builds → verifies → fixes until every acceptance criterion has evidence. Installs as a plugin or one-liner on macOS, Linux, and Windows.",
    tags: ["Python", "Shell", "PowerShell", "Claude Code", "AI Agents"],
    github: "https://github.com/ringku1/claude-mama",
    live: "",
  },
  {
    title: "Roast My Code",
    description:
      "Paste a code snippet, pick a roast level (Mild, Medium, or Savage), and get it roasted by AI as the response streams in — followed by real, actionable fixes.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    // Repo is private — shown with the live link only.
    github: "",
    live: "https://roast-my-code-please.vercel.app/",
    liveLabel: "Try it",
  },
  {
    title: "Webinar App",
    description:
      "A full-stack webinar platform built on Cloudflare Realtime Kit. Users join as hosts or manage registered participants, and real meetings can be scheduled and run.",
    tags: ["React", "TypeScript", "AdonisJS", "MySQL", "Cloudflare Realtime"],
    // Shown without a link by choice (repo is private). Add a URL here to surface it.
    github: "",
    live: "",
  },
  {
    title: "Commitment Timer",
    description:
      "A browser extension that makes you commit a reason before opening a distracting site — a deliberate friction layer for staying focused.",
    tags: ["JavaScript", "Chrome Extension", "HTML", "Shell"],
    github: "https://github.com/ringku1/commitment-timer",
    live: "",
  },
  {
    title: "CSE Department Management System",
    description:
      "A Django web application to manage the activities of a university CSE department — built during my degree and a major step up in my development skills.",
    tags: ["Django", "Python", "Bootstrap", "SQLite", "HTML", "CSS"],
    github: "https://github.com/ringku1/CSE-Dept.-Management-System",
    live: "",
  },
];

/* -------------------------------------------------------------------------- */
/*  COMPETITIVE PROGRAMMING                                                   */
/* -------------------------------------------------------------------------- */
export type CpPlatform = {
  name: string;
  rank: string;
  detail: string;
  solved: string;
  url: string; // profile URL; "" renders the card without a link
  accent: string; // tailwind gradient classes
};

export const cp = {
  // Headline stats shown as big badges.
  highlights: [
    { value: "2000+", label: "Problems solved" },
    { value: "6", label: "Online judges" },
    { value: "1458", label: "Codeforces max (Specialist)" },
    { value: "1686", label: "CodeChef max (3★)" },
  ],
  platforms: [
    {
      name: "Codeforces",
      rank: "Specialist",
      detail: "Max rating 1458",
      solved: "1200+ problems",
      url: "https://codeforces.com/profile/ringku_",
      accent: "from-cyan-500 to-blue-500",
    },
    {
      name: "CodeChef",
      rank: "3★ Coder",
      detail: "Max rating 1686",
      solved: "200+ problems",
      url: "https://www.codechef.com/users/ringku_1",
      accent: "from-amber-500 to-orange-500",
    },
  ] as CpPlatform[],
  // Additional judges shown as one card with linked chips.
  otherJudges: {
    solved: "600+ problems",
    accent: "from-emerald-500 to-teal-500",
    links: [
      { name: "AtCoder", url: "https://atcoder.jp/users/ringku" },
      { name: "LeetCode", url: "https://leetcode.com/u/ringku_/" },
      { name: "CSES", url: "https://cses.fi/user/168751" },
      { name: "LightOJ", url: "https://lightoj.com/user/ringku_" },
    ],
  },
  achievements: [
    "Solved 2000+ algorithmic problems across multiple online judges",
    "Completed an Advanced DSA & Competitive Programming workshop",
    "Participated in SUST IUPC 2024",
    "Competitive Programming Trainer & Contest Organizer — SEC Programming Club (2022–2025)",
  ],
};

/* -------------------------------------------------------------------------- */
/*  SKILLS                                                                    */
/* -------------------------------------------------------------------------- */
export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["C++", "C#", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend & Backend",
    skills: ["React", "Next.js", "AdonisJS", "HTML", "CSS"],
  },
  {
    title: "Databases",
    skills: ["SQL", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Postman", "VS Code"],
  },
];

/* -------------------------------------------------------------------------- */
/*  EDUCATION                                                                 */
/* -------------------------------------------------------------------------- */
export const education = [
  {
    institution: "Sylhet Engineering College, SUST",
    location: "Sylhet, Bangladesh",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "Jan 2020 — Jul 2025",
    detail: "CGPA: 3.84 / 4.00",
  },
];

/* -------------------------------------------------------------------------- */
/*  NAVIGATION  (controls the navbar + smooth-scroll anchors)                 */
/* -------------------------------------------------------------------------- */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Competitive", href: "#competitive" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
