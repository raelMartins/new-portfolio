export interface ContactInfo {
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
}

export interface Project {
  name: string;
  role: string;
  url: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  /** Study focus / program label — not necessarily a conferred degree */
  study: string;
  institution: string;
  startDate: string;
  endDate: string;
  /** Optional clarifying note, e.g. years completed */
  note?: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  experience: WorkExperience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
  languages: Language[];
  interests: string[];
}

export const resumeData: ResumeData = {
  name: 'Martins Akeredolu',
  title: 'Senior Full-Stack Engineer',
  contact: {
    email: 'olamideakeredolu@gmail.com',
    phone: '+2349077558286',
    website: 'aboutmartins.vercel.app',
    linkedin: 'linkedin.com/in/martins-akeredolu',
    github: 'github.com/raelMartins'
  },
  summary:
    'Senior Full-Stack Engineer with 7+ years building high-performance React, Next.js, TypeScript, and Express applications. Full-cycle owner of multi-tenant products, 3D rendering engines, AI-assisted workflows (Cursor/Antigravity), A/B testing platforms, and Stripe/Paystack billing across 4 countries.',
  experience: [
    {
      title: 'Senior Full-Stack Developer',
      company: 'BeautyNBrushes',
      startDate: 'Jan 2026',
      endDate: 'Present',
      location: 'Remote',
      bullets: [
        'Migrated the platform to React, Next.js, TypeScript, and Express.js on Railway, now serving ~1,000 providers across Ghana, Nigeria, Canada, and the US.',
        'Built Stripe and Paystack billing for localized, seat-based subscriptions in 4 countries, covering 131 salon accounts and 71 staff.',
        'Launched a 4-country location-based marketplace for salon and solo providers, with localized discovery, routing, and regional merchant listings.',
        'Ran onboarding A/B tests from a custom admin dashboard that lifted real-card attach from 0% to 13.8% by adding a payment-method step at end of signup.',
        'Instrumented Google Tag Manager, Microsoft Clarity, and Meta Pixel to track the funnel, plus WhatsApp Business API alerts for bookings and payments.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Myxellia',
      startDate: 'Jan 2024',
      endDate: 'May 2026',
      location: 'Remote',
      bullets: [
        'Owned full-cycle frontend across 2 multi-tenant real estate platforms facilitating $6M+ in capital gains and transactions.',
        'Engineered an interactive 3D unit allocation engine so investors could inspect and select units inside live digital models.',
        'Delivered a modular theme engine with 8 themes (4+ in production) and admin dashboards for asset tracking, roles, and payment reconciliation.',
        'Rebuilt the realtor portal end-to-end, now the primary workspace for realtor teams across the platform.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Micserah Ltd',
      startDate: 'Dec 2021',
      endDate: 'Apr 2024',
      location: 'Remote',
      bullets: [
        'Created a real-time social platform from scratch for 10,000+ active users, with live chat, communities, and dynamic profiles.',
        'Cut social feed and image load times, improving key performance metrics by 30%+.'
      ]
    },
    {
      title: 'Remote Full-Stack Developer (Contract)',
      company: 'Classy Touch Laundry Services',
      startDate: 'Jun 2019',
      endDate: 'Mar 2022',
      location: 'Remote',
      bullets: [
        'Integrated Paystack for multi-currency checkout and Google One Tap so new clients could sign up in a single step.'
      ]
    },
    {
      title: 'Front End Engineer',
      company: 'FireSwitch Technologies',
      startDate: 'Jun 2021',
      endDate: 'Dec 2021',
      location: 'Hybrid/Remote',
      bullets: [
        'Redesigned the IBErrands web app and added in-app real-time customer support chat.',
        'Mentored 4 web development interns through production frontend work.'
      ]
    }
  ],
  projects: [
    {
      name: 'Expert Listing',
      role: 'Frontend Developer',
      url: 'https://expertlisting.ng',
      description: 'Enterprise real estate listing management portal.'
    },
    {
      name: 'Gidi Real Estate',
      role: 'Frontend Developer',
      url: 'https://app.gidirealestateinvestment.com',
      description: 'Real estate fractional investment web platform.'
    }
  ],
  skills: [
    {
      category: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'Vue.js',
        'Nuxt.js',
        'WebGL / 3D Layouts',
        'HTML5/CSS3',
        'Tailwind CSS'
      ]
    },
    {
      category: 'Backend & Architecture',
      skills: [
        'Express.js',
        'Node.js',
        'REST APIs',
        'Microservices',
        'Payment Gateways (Stripe, Paystack)'
      ]
    },
    {
      category: 'Tools & AI Workflows',
      skills: [
        'Cursor',
        'Google Antigravity',
        'Gemini',
        'Git/GitHub',
        'Railway',
        'Figma',
        'Google Tag Manager'
      ]
    },
    {
      category: 'Practices',
      skills: [
        'Full-Cycle Product Ownership',
        'A/B Testing',
        'Multi-Tenant Systems',
        'Performance Optimization',
        'Remote Collaboration'
      ]
    }
  ],
  education: [
    {
      study: 'Computer Engineering Coursework',
      institution: 'University of Lagos',
      startDate: '2017',
      endDate: '2021'
    }
  ],
  languages: [
    {
      language: 'English',
      proficiency: 'Native / Bilingual Proficiency'
    },
    {
      language: 'Yoruba',
      proficiency: 'Professional Working Proficiency'
    }
  ],
  interests: [
    'Event Planning',
    'Augmented Reality',
    'Reading & Books',
    'Harry Potter',
    'Travelling'
  ]
};
