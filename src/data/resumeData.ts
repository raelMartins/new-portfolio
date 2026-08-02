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
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
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
    'Senior Full-Stack Engineer with 7+ years of experience architecting high-performance, data-intensive web applications using React, Next.js, TypeScript, and Express. Deep expertise in full-cycle software ownership, multi-tenant architectures, interactive 3D rendering engines, AI-augmented workflows (Cursor/Antigravity), and multi-region payment systems.',
  experience: [
    {
      title: 'Senior Full-Stack Developer',
      company: 'BeautyNBrushes',
      startDate: 'Jan 2026',
      endDate: 'Present',
      location: 'Remote',
      bullets: [
        'Architected and executed full-stack migration from legacy infrastructure to a modern React, Next.js, TypeScript, and Express.js stack deployed on Railway.',
        'Built a multi-region payment processing engine supporting Stripe and Paystack to handle localized payments and automated recurring seat-based subscription billing.',
        'Developed a dynamic location-based marketplace platform powering localized service discovery, intelligent routing, and regional merchant listings.',
        'Designed and built a custom A/B testing platform dashboard within the admin suite to run real-time conversion experiments and track feature adoption.',
        'Integrated enterprise telemetry (GTM, Microsoft Clarity, Meta Pixel) and WhatsApp Business API endpoints for automated platform notifications.'
      ]
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Myxellia',
      startDate: 'Jan 2024',
      endDate: 'May 2026',
      location: 'Remote',
      bullets: [
        'Exercised full-cycle frontend ownership across 2 multi-tenant real estate investment platforms facilitating over $6M+ in total capital gains and transactions.',
        'Engineered an interactive, real-time 3D unit allocation engine, enabling investors to visually navigate, inspect, and select specific real estate units within digital models.',
        'Architected a modular theme engine and administrative dashboards for real-time asset tracking, role-based user management, and automated payment reconciliation.',
        'Led the end-to-end rebuild of the corporate web portal, significantly improving brand positioning, site performance, and user acquisition.'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Micserah Ltd',
      startDate: 'Dec 2021',
      endDate: 'Apr 2024',
      location: 'Remote',
      bullets: [
        'Architected and built a real-time social platform from the ground up for 10,000+ active users, incorporating live chat, community tools, and dynamic user profiles.',
        'Optimized social feed and image rendering performance, reducing initial load times and improving key metrics by over 30%.'
      ]
    },
    {
      title: 'Remote Full-Stack Developer (Contract)',
      company: 'Classy Touch Laundry Services',
      startDate: 'Jun 2019',
      endDate: 'Mar 2022',
      location: 'Remote',
      bullets: [
        'Integrated Paystack API for secure multi-currency payments and Google One Tap for frictionless client onboarding.'
      ]
    },
    {
      title: 'Front End Engineer',
      company: 'FireSwitch Technologies',
      startDate: 'Jun 2021',
      endDate: 'Dec 2021',
      location: 'Hybrid/Remote',
      bullets: [
        'Redesigned the primary web application for IBErrands and integrated an in-app real-time customer support chat feature.'
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
      degree: 'B.Sc. in Computer Engineering (4-Year Program)',
      institution: 'University of Lagos',
      startDate: 'Oct 2017',
      endDate: 'Sep 2021'
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
