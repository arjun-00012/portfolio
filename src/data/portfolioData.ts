/**
 * ====================================================================
 * ARJUN P. – PERSONAL PORTFOLIO DATA
 * Python Full Stack Developer • Softroniics, Kozhikode
 * Theme: Champagne & Platinum
 * ====================================================================
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Arjun P.',
  pageTitle: 'Arjun P. – Python Full Stack Developer',
  role: 'Python Full Stack Developer',
  email: 'arjunarju9747@gmail.com',
  // Digits only with country code, no + or spaces
  phone: '919074277754',
  whatsappMessage: 'Hi, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'PYTHON FULL STACK DEVELOPER • DATA SCIENCE',
  headline: 'ARJUN P.',
  roles: ['PYTHON FULL STACK DEVELOPER', 'DATA SCIENCE ENTHUSIAST'] as [string, string],
  tagline:
    'I am a Python Full Stack Developer with 2+ years of professional experience building scalable web applications, REST APIs, and database-driven solutions. I specialize in Django, Django REST Framework, React, and modern web technologies, with additional experience in Data Science, Machine Learning, and Data Analytics.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'GET IN TOUCH',
  image: '/assets/hero-champagne-bg.jpg',
  imageAlt: 'Portrait of Arjun P.',
  imagePosition: '69% center',
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING INTELLIGENT DIGITAL EXPERIENCES',
  redWords: ['INTELLIGENT', 'DIGITAL'], // words highlighted in champagne & platinum
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Developer · Problem Solver · Technology Enthusiast',
  portrait: '/media/profile.jpg',
  portraitAlt: 'Portrait of Arjun P.',
  portraitCaption: 'Python Full Stack Developer',
  paragraphs: [
    'I am a Python Full Stack Developer at Softroniics, Kozhikode, with 2+ years of professional experience in developing web applications using Python, Django, Django REST Framework, React, and relational databases.',
    'I enjoy developing practical solutions to real-world problems, designing efficient backend architectures, integrating APIs, and creating responsive user interfaces. I also explore Data Science, Machine Learning, and Data Visualization to expand my technical capabilities.',
  ],
  technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'JavaScript', 'Pandas'],
  focus: ['Full Stack Web Development', 'REST API Development', 'Data Science & Machine Learning'],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/arjun-00012' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjun-python-django' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  {
    name: 'Backend Development',
    category: 'Python · Django · Django REST Framework',
    level: 'Proficient',
  },
  {
    name: 'Frontend Development',
    category: 'HTML5 · CSS3 · JavaScript · React · Bootstrap',
    level: 'Proficient',
  },
  {
    name: 'Database Management',
    category: 'PostgreSQL · MySQL · SQLite · MongoDB',
    level: 'Proficient',
  },
  {
    name: 'Data Science',
    category: 'NumPy · Pandas · Data Cleaning · Exploratory Data Analysis',
    level: 'Proficient',
  },
  {
    name: 'Machine Learning',
    category: 'Scikit-learn · Random Forest · Data Preprocessing · Feature Engineering',
    level: 'Proficient',
  },
  {
    name: 'Data Visualization',
    category: 'Power BI · DAX · Matplotlib',
    level: 'Proficient',
  },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ───────────── */
export const TECH_STACK: string[] = [
  'Python',
  'Django',
  'Django REST Framework',
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'MongoDB',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'Power BI',
  'Matplotlib',
  'Git',
  'GitHub',
  'Postman',
  'Cloudinary',
  'Razorpay',
  'Render',
];

/* ───────────── 7. PROJECTS ───────────── */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'ashas-ecommerce',
    kind: 'software',
    title: 'ASHAS E-Commerce Platform',
    subtitle: 'Contemporary Apparel & Luxury Accessories E-Commerce Platform',
    category: 'Full Stack E-Commerce',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'Developed a complete e-commerce platform featuring customer authentication, product catalog, shopping cart, checkout, inventory management, order processing, delivery tracking, and an administrative dashboard. Integrated Razorpay payment processing, Cloudinary media storage, PostgreSQL database, email notifications, and secure payment verification.',
    tags: ['Python', 'Django', 'PostgreSQL', 'JavaScript', 'Bootstrap', 'Cloudinary', 'Razorpay', 'Render'],
    liveUrl: 'https://ashasstore.in',
  },
  {
    id: 'hr-management-payroll',
    kind: 'software',
    title: 'HR Management & Payroll System',
    subtitle: 'Employee Management, Attendance & Payroll Automation',
    category: 'Enterprise Web Application',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'Developed an HR management platform featuring employee registration, attendance tracking, payroll processing, wage calculation, and reporting. Implemented automated wage calculations, attendance validation, employee management, and payroll operations using Django.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'MySQL'],
  },
  {
    id: 'heart-failure-prediction',
    kind: 'software',
    title: 'Heart Failure Prediction',
    subtitle: 'Predictive Analytics Using Random Forest',
    category: 'Machine Learning',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'Developed a machine learning application to predict heart failure using a Kaggle dataset. Implemented data preprocessing, exploratory data analysis, feature engineering, and Random Forest classification integrated with Django.',
    tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Random Forest', 'Django'],
  },
  {
    id: 'django-rest-api',
    kind: 'software',
    title: 'Django REST API Project',
    subtitle: 'RESTful API Development and Integration',
    category: 'Backend Development',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'Built REST API functionality using Django REST Framework, implementing API endpoints, serializers, database operations, request handling, and backend application logic.',
    tags: ['Python', 'Django', 'Django REST Framework', 'REST API', 'SQLite'],
  },
  {
    id: 'django-react-todo',
    kind: 'software',
    title: 'Django + React Todo Application',
    subtitle: 'Interactive Task Management Application',
    category: 'Full Stack Web Application',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'Developed a full-stack task management application using Django REST Framework for backend API development and React for frontend interaction.',
    tags: ['Python', 'Django', 'DRF', 'React', 'JavaScript'],
  },
  {
    id: 'book-management-system',
    kind: 'software',
    title: 'Book Management System',
    subtitle: 'Database-Driven Book Management',
    category: 'CRUD Web Application',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'Developed a book management application with Create, Read, Update, and Delete functionality, integrating Django models, forms, views, and database operations.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'SQLite'],
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Full Stack Web Development', priceLabel: 'Investment', price: 'Custom Quote', featured: true },
  { id: 'service-2', title: 'Django Backend Development', priceLabel: 'Investment', price: 'Custom Quote', featured: false },
  { id: 'service-3', title: 'REST API Development', priceLabel: 'Investment', price: 'Custom Quote', featured: false },
  { id: 'service-4', title: 'E-Commerce Website Development', priceLabel: 'Investment', price: 'Custom Quote', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '+', label: 'Projects Built' },
  { id: 'stat-2', value: 2, suffix: '+', label: 'Years Professional Experience' },
  { id: 'stat-3', value: 6, suffix: '+', label: 'Technical Specialization Areas' },
] as const;

/* Derived */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
