export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Clients", link: "#Clients" },
  { name: "Contact", link: "#contact" },
];

// src/components/ui/Data.jsx
export const expCards = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Heapware Software Development",
    date: "June 2025 - Present",
    location: "Remote",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Developed RESTful APIs and integrated third-party services.",
      "Implemented authentication and authorization systems.",
    ],
  },
  {
    id: 2,
    title: "Freelancer",
    company: "Upwork & Freelancer",
    date: "December 2025 - Present",
    location: "Global",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Delivered 15+ successful projects with 100% client satisfaction.",
    ],
  },
  
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Appwrite",
    date: "March 2024 - November 2024",
    location: "Remote",
    review:
      "Hurayra's expertise in mobile development brought innovation and efficiency to our app development process.",
    logoPath: "/hurayracodes.png",
    responsibilities: [
      "Built cross-platform mobile apps with React Native.",
      "Implemented push notifications and real-time features.",
    ],
  },
];

export const contributions = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Building responsive, pixel-perfect UIs with React & Next.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer Intern",
    desc: "Creating robust APIs and server-side logic with Node.js & Express",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database",
    desc: "Structuring efficient MongoDB & PostgreSQL schemas.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Full Stack Developer",
    desc: "Developed and maintained user-facing features using modern Full Stack technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "Food Delivery App | MERN",
    description:
      "Problem solving platform with modern tech stack Problem solving platform with modern tech stack Problem solving platform with modern tech stack",
    duration: "Feb 2025 - Present",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/IsSolved",
    website: "https://is-solved.hurayracodes.com",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"], // ✅ Tags added
  },
  {
    id: 2,
    title: "Digital Wallet valuable",
    description:
      "Send/receive money using phone numbers with TurboRepo backend Problem solving platform with modern tech stack",
    duration: "Dec 2024 - Present",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/wallet",
    website: null,
    tech: ["TurboRepo", "Node.js", "Express", "MongoDB", "JWT"], // ✅ Tags added
  },
  {
    id: 3,
    title: "3D Solar System with Threejs",
    description:
      "Interactive 3D planets exploration with Three.js Problem solving platform with modern tech stack Problem solving platform with modern tech stack",
    duration: "Jan 2025 - Mar 2025",
    images: ["/project-img-1.png", "/project-img-2.png", "/project-img-3.png"],
    github: "https://github.com/hurayracodes/solar-system",
    website: "https://solar.hurayracodes.com",
    tech: ["Three.js", "JavaScript", "HTML5", "CSS3", "WebGL"], // ✅ Tags added
  },
];

// ============== MY KEY SKILLS ==============
export const mySkills = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Figma"],
  },
];

// Data.jsx mein yeh add karo
export const skillsData = [
  { name: "React.js", icon: "Braces", color: "#61DAFB" },
  { name: "Next.js", icon: "Code2", color: "#FFFFFF" },
  { name: "Node.js", icon: "Server", color: "#339933" },
  { name: "Express.js", icon: "FileCode", color: "#FFFFFF" },
  { name: "MongoDB", icon: "Database", color: "#47A248" },
  { name: "PostgreSQL", icon: "Database", color: "#4169E1" },
  { name: "JavaScript", icon: "Braces", color: "#F7DF1E" },
  { name: "TypeScript", icon: "Braces", color: "#3178C6" },
  { name: "Tailwind CSS", icon: "Palette", color: "#06B6D4" },
  { name: "Git", icon: "GitBranch", color: "#F05032" },
  { name: "GitHub", icon: "Github", color: "#FFFFFF" },
  { name: "VS Code", icon: "Terminal", color: "#007ACC" },
  { name: "Vercel", icon: "Cloud", color: "#FFFFFF" },
  { name: "Docker", icon: "Container", color: "#2496ED" },
  { name: "AWS", icon: "CloudCog", color: "#FF9900" },
  { name: "Firebase", icon: "Database", color: "#FFCA28" },
  { name: "Redux", icon: "Workflow", color: "#764ABC" },
  { name: "Figma", icon: "Figma", color: "#F24E1E" },
  { name: "GraphQL", icon: "Code", color: "#E10098" },
  { name: "Python", icon: "Code", color: "#3776AB" },
];

// Skills categories for cards
export const cardSkills = {
  "Frontend Engineer Intern": [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
  ],
  "Backend Engineer Intern": [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
  ],
  Database: ["MongoDB", "PostgreSQL", "Docker", "AWS", "Firebase"],
  "Lead Full Stack Developer": [
    "React.js",
    "Node.js",
    "TypeScript",
    "Git",
    "Vercel",
    "Redux",
  ],
};
