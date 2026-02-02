export const PROJECT_KEYS = {
  SOCIAL_METRICA: "social_metrica",
  ALCHEMIST_ACADEMY: "alchemist_academy",
  YUMYUM: "yumyum_myanmar",
  LIFI_AI: "lifi_ai",
  KEYBOARD_QUIZ: "keyboard_quiz",
  ZAY_MARKETS: "zay_markets",
  BAHOZAY: "bahozay",
  FLAIM: "flaim",
} as const;

type ProjectKey = (typeof PROJECT_KEYS)[keyof typeof PROJECT_KEYS];

export type ProjectData = {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  url?: string;
  dialog: {
    description: string;
    images?: string[];
    responsibilities?: string[];
    demoUrl?: {
      play?: string;
      appstore?: string;
      web?: string;
    };
    disclaimer?: string;
  };
};

export const projects: Record<ProjectKey, ProjectData> = {
  social_metrica: {
    title: "📊 Social Metrica",
    tech: "React.js • TypeScript • Ant Design • NestJS",
    description: `Chart yer course with Social Metrica, the mighty analytics galleon that sails beyond the horizon of ordinary tools like Social Insider. While other ships only dock at Facebook and Instagram, our crew braves the stormy seas of TikTok, bringing the fastest-growing ocean of social treasure right to yer map. ⚔️`,
    tags: ["Fleet Management", "Charts & Insights", "Ad Treasure Map"],
    url: "https://web.socialmetrica.com",
    dialog: {
      description: `Social Metrica is a cross-platform analytics dashboard. Tracks Facebook, Instagram, and TikTok. Built for campaign monitoring and reporting.`,
      images: [
        "social-metrica/overview.png",
        "social-metrica/engagement-stats.png",
        "social-metrica/benchmark.png",
      ],
      responsibilities: [
        "Frontend architecture in React + TypeScript",
        "Built scalable NestJS APIs",
        "Integrated Facebook and TikTok data pipelines",
        "Ensure data accuracy and performance for large datasets",
      ],
      demoUrl: {
        web: "https://web.socialmetrica.com",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },

  alchemist_academy: {
    title: "⚔️ Alchemist Academy",
    tech: "ReactJs • WebSocket • TailwindCSS • AntDesign",
    description: `Set sail on the high seas of knowledge! 🏴‍☠️ Alchemist Academy is an AI-powered learning vessel where students sharpen their skills for the PTE exam. From Reading to Writing and Speaking, adventurers practice with real-time feedback, guided by clever algorithms instead of old sea maps.`,
    tags: ["Reading Quests", "Speaking Adventures", "AI Navigator Feedback"],
    url: "https://pte.alchemistacademy.com.au/",
    dialog: {
      description: `An AI-driven education platform for PTE learners with real-time scoring and adaptive feedback.`,
      images: [
        "alchemist-academy/home.png",
        "alchemist-academy/writing.png",
        "alchemist-academy/speaking.png",
        "alchemist-academy/subscription.png",
      ],
      responsibilities: [
        "Built real-time speaking evaluation system",
        "Designed WebSocket communication",
        "Frontend architecture",
      ],
      demoUrl: {
        web: "https://pte.alchemistacademy.com.au/",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },

  yumyum_myanmar: {
    title: "🗺️ YumYum Myanmar",
    tech: "React • MongoDB",
    description: `Crafted a **QR-code treasure system** with Nexxus: users buy YumYum, scan QR codes, and win phone bill rewards. Integrated admin panel and telecom APIs like Telenor and KPay, ensuring smooth and fair loot distribution. The crew can track each treasure in real time and claim their bounty safely. ⚓`,
    tags: ["QR Coupons", "Real-time Tracking", "API Integration"],
    url: "https://appget.yumyummyanmar.com",
    dialog: {
      description: `Built a QR reward and telecom integration platform handling high-volume scans.`,
      responsibilities: ["QR validation system", "Real-time reward tracking"],
      images: ["yum-yum/landing.png"],
      demoUrl: {
        web: "https://appget.yumyummyanmar.com",
        appstore: "https://apps.apple.com/us/app/nexxus/id1637587509",
        play: "https://play.google.com/store/apps/details?id=com.nexxus.app",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },

  lifi_ai: {
    title: "🤖 LiFi AI",
    tech: "React Native • NestJS • TypeScript • AI",
    description: `Developed **LiFi AI**, a real-time conversational mobile assistant combining live video rooms and intelligent dialogue powered by advanced language models. Built cross-platform with React Native & NestJS, integrating live communicaton, JWT-secured room access, and AI-driven speech/text interaction for fluid user experiences across devices.`,
    tags: ["Real-time Chat", "AI Assistants", "React Native", "WebRTC"],
    url: "https://www.lifi.cool/",
    dialog: {
      description: `A cross-platform AI assistant app that connects users to interactive, AI-powered video/voice chat experiences.`,
      responsibilities: [
        "Real-time communication architecture with Daily.co rooms",
        "Backend AI integration and token orchestration",
        "Mobile interface and UX for AI interactions",
      ],
      images: [
        "lifi/lifi-tablet.webp",
        "lifi/lifi-appstore.png",
        "lifi/lifi-playstore.png",
      ],
      demoUrl: {
        web: "https://www.lifi.cool/",
        play: "https://play.google.com/store/apps/details?id=com.lifi.app",
        appstore: "https://apps.apple.com/gb/app/lifi-ai/id6756911692",
      },
    },
  },

  keyboard_quiz: {
    title: "⌨️ Keyboard Quiz",
    tech: "ReactJs • TailwindCss • TypeScript",
    description: `Developed an interactive **Keyboard Shortcut Quiz** that teaches and tests essential typing and productivity skills. Users answer questions about common keyboard shortcuts and key functions to reinforce familiarity with PC and browser shortcuts. The design emphasizes learning through playful challenge and quick feedback.`,
    tags: ["Quiz Game", "Keyboard Shortcuts", "Interactive UI", "Web"],
    url: "https://keyboardquiz.com",
    dialog: {
      description: `An engaging web quiz to help users learn and practice essential keyboard shortcuts and typing knowledge.`,
      images: [
        "keyboard-quiz/landing.png",
        "keyboard-quiz/onboarding.png",
        "keyboard-quiz/correct.png",
        "keyboard-quiz/incorrect.png",
        "keyboard-quiz/review.png",
      ],
      responsibilities: [
        "Designed interactive quiz flows",
        "Built UI with responsive ReactJs and TailwindCss",
        "Implemented quiz logic in TypeScript",
        "Ensured accessibility and keyboard interactions",
      ],
      demoUrl: {
        web: "https://keyboardquiz.com",
      },
    },
  },

  zay_markets: {
    title: "🛍️ Zay Markets",
    tech: "React.js • NestJS • Supabase (PostgreSQL) • DevOps",
    description: `Built **Zay Markets**, a full-stack e-commerce marketplace connecting buyers and sellers through a fast, modern shopping experience. Architected the system end-to-end — from React frontend and NestJS APIs to Supabase PostgreSQL database and production server deployment — ensuring performance, scalability, and secure transactions.`,
    tags: [
      "E-commerce",
      "Full-Stack",
      "Marketplace",
      "Supabase",
      "API Architecture",
    ],
    url: "https://zay.markets",
    dialog: {
      description: `A production-ready marketplace platform with custom backend services, database architecture, and server deployment handled end-to-end.`,
      images: ["zay/landing.png", "zay/order.png", "zay/categories.png"],
      responsibilities: [
        "Designed and developed full React frontend architecture",
        "Built scalable REST APIs with NestJS",
        "Designed relational database schema in Supabase (PostgreSQL)",
        "Implemented authentication, cart, orders, and checkout logic",
        "Handled server setup, deployment, and environment configuration",
        "Optimized performance and API response times",
      ],
      demoUrl: {
        web: "https://zay.markets",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },

  bahozay: {
    title: "🛒 Bahozay",
    tech: "React.js • NestJS • Supabase/PostgreSQL • Mobile Apps",
    description: `Developed **Bahozay**, a wholesale marketplace platform under Myanmar Zarla Distribution that empowers shops and retailers through streamlined product browsing and bulk ordering. Built full-stack with React on the web, scalable NestJS APIs, and Supabase-backed database, with native mobile apps for Android and iOS to reach users on the go.`,
    tags: [
      "Wholesale Marketplace",
      "Retailer App",
      "React",
      "NestJS",
      "Supabase",
      "Mobile",
    ],
    url: "https://zarladistribution.com/bahozay/",
    dialog: {
      description: `A comprehensive B2B & B2R wholesale commerce platform connecting brands, distributors, and retail outlets across Myanmar with web and mobile experiences.`,
      images: ["bahozay/bahozay-playstore.png", "bahozay/bahozay-appstore.png"],
      responsibilities: [
        "Built responsive web marketplace with React.js",
        "Designed and implemented NestJS REST APIs",
        "Managed Supabase (PostgreSQL) database design and queries",
        "Developed mobile app integration for Android & iOS",
        "Handled authentication, product catalog, cart & order workflows",
        "Optimized performance and backend scalability",
      ],
      demoUrl: {
        web: "https://zarladistribution.com/bahozay/",
        play: "https://play.google.com/store/apps/details?id=com.bahozay.app&hl=en&gl=US",
        appstore: "https://apps.apple.com/us/app/bahozay-shop/id1636506063",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },

  flaim: {
    title: "🎓 Flaim",
    tech: "React • Frontend Development • Developer Education • Content Creation",
    description: `Worked as both a **developer and instructor** at **Flaim**, a Gen-Z focused coding community that helps learners become real builders. Contributed to platform growth by developing landing pages and web experiences while also creating educational tech content and guiding learners through practical development skills.`,
    tags: [
      "EdTech",
      "Instructor",
      "Frontend Development",
      "Community",
      "Content Creation",
    ],
    url: "https://flaim.fun",
    dialog: {
      description: `A developer learning community where I contributed to both product development and education, combining technical implementation with mentorship and content creation.`,
      images: ["flaim/faq.png", "flaim/landing.png", "flaim/roadmap.png"],
      responsibilities: [
        "Developed landing pages and frontend experiences for the platform",
        "Created technical educational video content",
        "Mentored learners and provided coding guidance",
        "Explained real-world development concepts through structured lessons",
        "Helped grow the developer community through engagement and support",
      ],
      demoUrl: {
        web: "https://flaim.fun",
      },
      disclaimer:
        "I was hired solely as a developer for this project. I am not the owner. All branding, content, and claims are the responsibility of the project owners.",
    },
  },
};
