// ============================================================
// PORTFOLIO DATA — Shashank R N
// All content strictly matches provided personal information.
// DO NOT add invented projects, certifications, or awards.
// ============================================================

export const personalInfo = {
  name: "Shashank R N",
  title: "B.Tech AI & Data Science Student",
  tagline: "Turning data, code, and ideas into intelligent solutions.",
  email: "shashankrn88@gmail.com",
  // Phone is intentionally not surfaced prominently in the public UI
  phone: "9741522819",
  course: "B.Tech — Artificial Intelligence & Data Science",
  university: "REVA University",
  studyPeriod: "2025–2029",
  currentSem: "3rd Semester",
  cgpa: "9.1",
  twelfthScore: "91.5%",
  bio: "I'm Shashank R N, a B.Tech Artificial Intelligence & Data Science student at REVA University. I enjoy working with programming, data, artificial intelligence, and software development. I'm continuously improving my technical skills by building projects and exploring real-world applications of technology.",
  socials: {
    github: "https://github.com/shashank8-8",
    linkedin: "https://www.linkedin.com/in/shashank-r-n-b8a21a384/",
    hackerrank: "https://www.hackerrank.com/profile/shashankrn88"
  }
};

// ============================================================
// SKILLS — Honest labels: Intermediate / Beginner
// No fake numeric percentages displayed to users
// ============================================================

export const skillsData = {
  programming: [
    {
      name: "Python",
      level: "Intermediate",
      keyCap: "Py",
      description: "Primary language used for data science, scripting, and AI exploration."
    },
    {
      name: "C",
      level: "Intermediate",
      keyCap: "C",
      description: "Used for low-level programming, data structures, and algorithms coursework."
    },
    {
      name: "Java",
      level: "Beginner",
      keyCap: "Java",
      description: "Learning object-oriented programming fundamentals."
    }
  ],
  aiml: [
    {
      name: "TensorFlow",
      level: "Intermediate",
      keyCap: "TF",
      description: "Exploring deep learning model building with TensorFlow."
    },
    {
      name: "Machine Learning",
      level: "Intermediate",
      keyCap: "ML",
      description: "Studying classification, regression, and ML fundamentals."
    },
    {
      name: "Artificial Intelligence",
      level: "Intermediate",
      keyCap: "AI",
      description: "Coursework and projects in AI concepts and applications."
    }
  ],
  data: [
    {
      name: "Data Science",
      level: "Intermediate",
      keyCap: "DS",
      description: "Core major area — applying statistical and ML methods to real datasets."
    },
    {
      name: "Data Analysis",
      level: "Intermediate",
      keyCap: "EDA",
      description: "Exploratory data analysis, visualization, and insight extraction."
    },
    {
      name: "Data Structures & Algorithms",
      level: "Intermediate",
      keyCap: "DSA",
      description: "Studying algorithms, complexity analysis, and problem solving."
    }
  ],
  development: [
    {
      name: "Full-Stack Development",
      level: "Beginner",
      keyCap: "FS",
      description: "Learning web development — frontend and backend fundamentals."
    },
    {
      name: "Git",
      level: "Intermediate",
      keyCap: "Git",
      description: "Version control, branching, commits, and collaboration workflows."
    },
    {
      name: "GitHub",
      level: "Intermediate",
      keyCap: "GH",
      description: "Repository management, project hosting, and open-source contribution."
    }
  ]
};

// ============================================================
// PROJECTS — Only real, confirmed projects included.
// MediScan.ai is the only completed project.
// Placeholder slots added for future projects.
// ============================================================

export const projectsData = [
  {
    id: "mediscan-ai",
    title: "MediScan.ai",
    subtitle: "AI-powered medical information assistant",
    category: "AI & Healthcare",
    featured: true,
    role: "Developer",
    description: "MediScan.ai is an AI-powered healthcare assistance concept designed to help users understand medical information in a simpler and more accessible way. The project explores AI-assisted interpretation of medical reports, X-rays, symptoms and prescriptions, with a focus on multilingual accessibility.",
    features: [
      "Medical report understanding",
      "X-ray / image analysis",
      "Simplified explanations",
      "Multilingual support (English, Kannada, Hindi, Marathi)",
      "Image scanning",
      "AI-assisted interpretation",
      "ESP32-CAM integration",
      "Printing / output workflow"
    ],
    tech: ["Python", "AI", "Machine Learning", "ESP32-CAM", "Multilingual NLP"],
    github: "https://github.com/shashank8-8/MEDISCAN.AI",
    demo: null,
    badge: "Featured Project"
  }
];

// Clean placeholder slots for future projects
export const projectPlaceholders = [
  {
    id: "placeholder-2",
    title: "Project Coming Soon",
    description: "This slot is reserved for an upcoming project. Check back later.",
    placeholder: true
  },
  {
    id: "placeholder-3",
    title: "Project Coming Soon",
    description: "This slot is reserved for an upcoming project. Check back later.",
    placeholder: true
  }
];

// ============================================================
// EDUCATION — Accurate academic records only
// ============================================================

export const educationData = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "REVA University",
    period: "2025 – 2029",
    status: "Currently in 3rd Semester",
    grade: "9.1 CGPA",
    highlights: [
      "Specializing in Artificial Intelligence, Machine Learning, and Data Science.",
      "Maintaining a strong 9.1 CGPA across current semesters.",
      "Actively building projects and exploring real-world AI/data applications."
    ]
  },
  {
    degree: "12th / Pre-University Course (PUC)",
    institution: "Karnataka State Board",
    period: "Completed 2025",
    status: "Graduated",
    grade: "91.5%",
    highlights: [
      "Achieved 91.5% with distinction.",
      "Strong foundational background in Mathematics and Science."
    ]
  }
];

// ============================================================
// ACHIEVEMENTS — Only confirmed, real achievement included
// ============================================================

export const achievementsData = [
  {
    id: "eee-best-project",
    title: "First Place — EEE Best Project of the University",
    emoji: "🏆",
    category: "Academic Competition",
    year: "First Year",
    description: "Achieved first place in the university's EEE Best Project competition among first-year students.",
    highlight: true
  }
];

// ============================================================
// CERTIFICATIONS — 2026 vintage, placeholders only
// Real certificate names NOT invented. Easy to update.
// ============================================================

export const certificationsData = [
  {
    id: "cert-placeholder-1",
    title: "Certification — Coming Soon",
    organization: "Organization TBD",
    year: "2026",
    skills: [],
    placeholder: true,
    note: "Certificate details will be updated soon."
  },
  {
    id: "cert-placeholder-2",
    title: "Certification — Coming Soon",
    organization: "Organization TBD",
    year: "2026",
    skills: [],
    placeholder: true,
    note: "Certificate details will be updated soon."
  }
];

// ============================================================
// CURRENTLY LEARNING
// ============================================================

export const currentlyLearning = [
  {
    topic: "Data Structures & Algorithms",
    keyCap: "DSA",
    description: "Building problem-solving skills through algorithmic thinking.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    accent: "text-blue-400"
  },
  {
    topic: "Python",
    keyCap: "Py",
    description: "Deepening Python skills for data science and AI applications.",
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30",
    accent: "text-indigo-400"
  },
  {
    topic: "Data Science",
    keyCap: "DS",
    description: "Exploring data pipelines, statistics, and analytical methods.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    accent: "text-purple-400"
  },
  {
    topic: "Machine Learning",
    keyCap: "ML",
    description: "Learning core ML algorithms, model training, and evaluation.",
    color: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/30",
    accent: "text-emerald-400"
  },
  {
    topic: "TensorFlow",
    keyCap: "TF",
    description: "Building and training neural network models with TensorFlow.",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    accent: "text-amber-400"
  },
  {
    topic: "Full-Stack Development",
    keyCap: "FS",
    description: "Learning web development from frontend design to backend APIs.",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    accent: "text-sky-400"
  }
];

// ============================================================
// CAREER GOALS — Realistic student-level career aspirations
// ============================================================

export const careerGoals = [
  {
    title: "Data Scientist",
    icon: "Brain",
    description: "I aspire to work as a Data Scientist, applying machine learning and statistical methods to extract meaningful insights from complex datasets and build intelligent predictive solutions.",
    color: "from-indigo-500/15 to-purple-500/15",
    borderColor: "border-indigo-500/30",
    accentColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20"
  },
  {
    title: "Data Analyst",
    icon: "BarChart3",
    description: "I'm interested in transforming raw data into actionable business insights through exploratory analysis, visualization dashboards, and clear data storytelling.",
    color: "from-sky-500/15 to-cyan-500/15",
    borderColor: "border-sky-500/30",
    accentColor: "text-sky-400",
    iconBg: "bg-sky-500/10 border-sky-500/20"
  },
  {
    title: "Full-Stack Developer",
    icon: "Code2",
    description: "I enjoy building complete web applications — from user interfaces to backend logic — and aim to create practical, user-focused digital products.",
    color: "from-emerald-500/15 to-teal-500/15",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20"
  }
];

// ============================================================
// INTERACTIVE KEYS for Key Explorer playground
// ============================================================

export const interactiveKeys = [
  { key: "P", label: "Python", fact: "Python is Shashank's primary programming language for Data Science and AI exploration." },
  { key: "A", label: "AI & DS", fact: "Shashank is pursuing B.Tech in Artificial Intelligence & Data Science at REVA University with a 9.1 CGPA." },
  { key: "S", label: "9.1 CGPA", fact: "Currently maintaining a 9.1 CGPA in 3rd Semester of B.Tech — and 91.5% in 12th Grade!" },
  { key: "D", label: "Developer", fact: "Exploring Full-Stack Development alongside Data Science and Machine Learning." },
  { key: "R", label: "REVA Univ", fact: "Studying at REVA University, Bengaluru — Batch 2025–2029." },
  { key: "Enter", label: "Contact", fact: "Reach Shashank at: shashankrn88@gmail.com" }
];
