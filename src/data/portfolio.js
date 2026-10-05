// Single source of truth for portfolio content.
// LinkedIn / GitHub: add your real profile URLs below. Empty values are hidden on the site.
export const profile = {
  name: 'Sornalatha S',
  role: 'Software Developer',
  email: 'sornalathas2002@gmail.com',
  phone: '+91 9626172343',
  location: 'Namakkal, Tamil Nadu',
  linkedin: 'https://www.linkedin.com/in/sornalatha-sanmugam-a6479a330/',
  github: 'https://github.com/Sornalatha-2002',
  resume: '/resume/Sornalatha_S_Resume.pdf',
  primaryStack: ['Laravel', 'PHP', 'React.js', 'MySQL', 'REST APIs'],
  headline: 'Building reliable software for real-world business workflows.',
  summary:
    'Software Developer with hands-on experience building and supporting business applications across CRM, LMS, Inventory, POS, and pharmaceutical sales domains.',
  statement: 'I build software around business workflows, not just interfaces.',
  about: [
    'I am a Software Developer working primarily with Laravel and PHP on the backend, React.js on the frontend, and MySQL for data. My work sits inside real business operations: sales billing, reward calculations, course lifecycles, inventory movement, tax reporting and point-of-sale transactions.',
    'Beyond building features, I have migrated legacy and Excel data into production systems, deployed applications to AWS EC2 and Hostinger, configured domains and SSL, and continue to provide production support for live applications. I care about understanding the workflow first, then translating it into software that holds up in daily use.',
  ],
  focus: [
    'Backend Development',
    'Frontend Development',
    'REST API Development',
    'Database Design',
    'Data Migration',
    'Production Deployment',
    'Production Support',
  ],
};

export const heroMeta = [
  ['2+ Years', 'Professional experience'],
  ['5', 'Major projects'],
  ['Production', 'Systems & support'],
  ['Migration', 'Legacy & Excel data'],
];

export const enginePanel = {
  stack: [
    ['Backend', 'Laravel'],
    ['Language', 'PHP'],
    ['Frontend', 'React.js'],
    ['Database', 'MySQL'],
    ['Interface', 'REST APIs'],
    ['Versioning', 'Git'],
  ],
  capabilities: [
    ['Production Systems', 'CRM · LMS · POS · Inventory'],
    ['Data Migration', 'Legacy DB · Excel'],
    ['API Integration', 'REST · Webhooks · JWT'],
    ['Deployment', 'AWS EC2 · Hostinger'],
    ['Production Support', 'LMS · CRM', true],
  ],
  domains: ['CRM', 'LMS', 'Inventory', 'POS', 'Pharma'],
};

export const skills = [
  { name: 'Frontend', items: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'AJAX'] },
  { name: 'Backend', items: ['PHP', 'Laravel', 'Blade', 'Livewire', 'REST API Development'] },
  { name: 'Database', items: ['MySQL', 'Eloquent ORM', 'Database Schema Design', 'Query Optimization'] },
  { name: 'Engineering & Integration', items: ['Git', 'GitHub', 'Postman', 'RBAC', 'Webhook Integration'] },
  { name: 'Deployment', items: ['Hostinger', 'AWS EC2', 'Domain & SSL Configuration'] },
];

// Experience timeline, most recent first.
export const experience = [
  {
    id: 'pos',
    title: 'Retail POS & Inventory Management System',
    role: 'Software Developer',
    period: 'Aug 2026 – Present',
    current: true,
    tech: ['PHP (CodeIgniter)', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
    description: 'Point-of-sale and inventory system for a retail store chain, centred on the in-store sales register.',
    focus: ['Sales register', 'Cart calculations', 'Pricing', 'Discount engine', 'QR / barcode generation', 'Receipts', 'Invoices', 'Print layouts'],
  },
  {
    id: 'lms',
    title: 'Multi-Franchise Learning Management System',
    role: 'Software Developer',
    period: 'Dec 2025 – Aug 2026',
    support: 'Production support: Aug 2026 – Present',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'REST APIs', 'RBAC'],
    description: 'Multi-franchise learning platform covering courses, students, batches, payments and certification.',
    focus: ['Course lifecycle', 'Payments', 'Invoices', 'Webhooks', 'PDF certificates', 'RBAC', 'Legacy data migration', 'Database validation', 'AWS EC2 deployment', 'Production support'],
  },
  {
    id: 'inv',
    title: 'Inventory & POS Management System',
    role: 'Software Developer',
    period: 'Sep 2025 – Jul 2026',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST APIs'],
    description: 'Retail inventory, billing and purchase management with GST-compliant reporting.',
    focus: ['Customer / supplier management', 'Barcode', 'Sales', 'Purchases', 'Returns', 'Reporting', 'GSTR-related workflows', 'Excel exports', 'Tax calculations', 'Server-side validation'],
  },
  {
    id: 'crm',
    title: 'Reward-Based CRM for Pharmaceutical Sales',
    role: 'Software Developer',
    period: 'Sep 2024 – Aug 2026',
    support: 'Production support: Aug 2026 – Present',
    tech: ['PHP', 'jQuery', 'AJAX', 'MySQL'],
    description: 'CRM for pharmaceutical sales billing and distributor management, built around reward-based incentives.',
    focus: ['Sales billing', 'Customer management', 'Reward calculations', 'Sales entry', 'OBV / OPV / ODV logic', 'Reporting', 'Data migration', 'Production support'],
  },
  {
    id: 'att',
    title: 'Mobile Employee Attendance & Field Tracking App',
    role: 'Frontend Developer',
    period: 'Jan 2025 – Jun 2025',
    tech: ['React.js', 'Laravel', 'REST APIs', 'JWT', 'MySQL'],
    description: 'Workforce operations platform for attendance, leave and field-location tracking.',
    focus: ['React SPA', 'Protected routing', 'Role-based UI', 'Context API', 'Axios', 'File uploads', 'Google Maps', 'Charts', 'Lazy loading', 'Pagination'],
  },
];

// Case studies, ordered by depth of involvement.
export const projects = [
  {
    id: 'lms',
    title: 'Multi-Franchise LMS',
    fullTitle: 'Multi-Franchise Learning Management System',
    domain: 'Education / LMS',
    role: 'Software Developer',
    period: 'Dec 2025 – Present',
    status: 'Private / Production Project',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade', 'REST APIs', 'AWS EC2'],
    purpose:
      'A multi-franchise learning management platform supporting course management, payments, invoices, certificates and role-based access across franchises.',
    built: [
      'Course creation, scheduling, enrollment, student tracking and attendance',
      'Payment processing, invoice generation and webhook integration',
      'Automated PDF certificate generation',
      'Role-based access control across franchise users',
      'Caching and database tuning for performance',
      'Migration and validation of legacy student, batch and master data',
    ],
    focus: ['Legacy data migration', 'Database validation', 'REST APIs', 'RBAC', 'Production deployment', 'Production support'],
    deploy: 'Deployed on AWS EC2 with environment configuration, domain setup and SSL. Ongoing production support since Aug 2026.',
  },
  {
    id: 'crm',
    title: 'Pharmaceutical Sales CRM',
    fullTitle: 'Reward-Based CRM for Pharmaceutical Sales',
    domain: 'CRM / Pharmaceutical',
    role: 'Software Developer',
    period: 'Sep 2024 – Present',
    status: 'Private / Production Project',
    tech: ['PHP', 'jQuery', 'AJAX', 'MySQL', 'Hostinger'],
    purpose:
      'A reward-based CRM for pharmaceutical sales billing and distributor management, where rewards are calculated against sales targets using OBV, OPV and ODV models.',
    built: [
      'CRM modules for sales billing and customer configuration',
      'Sales entry workflows and rewards functionality',
      'Reward logic using OBV, OPV and ODV models',
      'Target validation and excess handling',
      'AJAX-driven filters and modals with auto-save and validation',
      'Migration of Excel and legacy data with cleansing and duplicate handling',
    ],
    focus: ['Business rules', 'Reward calculations', 'Data migration', 'Data integrity', 'Production deployment', 'Production support'],
    deploy: 'Deployed on Hostinger with environment configuration, domain and SSL. Ongoing production support since Aug 2026.',
  },
  {
    id: 'inv',
    title: 'Inventory & POS Management',
    fullTitle: 'Inventory & POS Management System',
    domain: 'Retail / Inventory',
    role: 'Software Developer',
    period: 'Sep 2025 – Jul 2026',
    status: 'Private / Client Project',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'REST APIs'],
    purpose:
      'A retail inventory, billing and purchase management solution with GST compliance, covering the full stock movement cycle from supplier to customer.',
    built: [
      'Inventory and POS functionality with barcode generation',
      'Customer and supplier management',
      'Sales, purchase and return workflows',
      'GSTR tax module with GST-compliant reports and Excel exports',
      'Automated invoice emailing, RBAC and reporting',
      'REST APIs, dashboard analytics, filters and server-side validation',
    ],
    focus: ['Tax calculations', 'GST reporting', 'REST APIs', 'RBAC', 'Server-side validation', 'Excel exports'],
    deploy: 'Private client project.',
  },
  {
    id: 'pos',
    title: 'Retail POS & Inventory',
    fullTitle: 'Retail POS & Inventory Management System',
    domain: 'Retail / Point of Sale',
    role: 'Software Developer',
    period: 'Aug 2026 – Present',
    status: 'Private / Client Project',
    tech: ['PHP (CodeIgniter)', 'MySQL', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap'],
    purpose:
      'A point-of-sale and inventory system for a retail store chain, where register speed, pricing accuracy and printed output matter at the counter.',
    built: [
      'Core sales register workflows and real-time cart calculations',
      'AJAX price verification to prevent below-cost selling',
      'Fixed-amount and percentage discount functionality',
      'QR code and barcode generation',
      'Redesigned receipts, invoices and print stylesheets',
      'Scannable QR codes on receipts',
    ],
    focus: ['Transaction handling', 'Pricing rules', 'Discount engine', 'Barcode / QR', 'Print layouts'],
    deploy: 'Private client project.',
  },
  {
    id: 'att',
    title: 'Attendance & Field Tracking',
    fullTitle: 'Mobile Employee Attendance & Field Tracking App',
    domain: 'Workforce Management',
    role: 'Frontend Developer',
    period: 'Jan 2025 – Jun 2025',
    status: 'Private / Client Project',
    tech: ['React.js', 'Laravel', 'REST APIs', 'JWT', 'MySQL'],
    purpose:
      'A workforce operations platform for attendance, leave and field-location tracking, consumed through a React single-page application backed by Laravel APIs.',
    built: [
      'React 18 SPA with protected routing and role-based UI access',
      'Reusable hooks and Context API state management',
      'Axios interceptors for authenticated API calls',
      'Dashboard, Attendance, Leave, Location, Media and User modules',
      'File uploads, Google Maps integration and charts',
      'Lazy loading and pagination',
    ],
    focus: ['React SPA', 'JWT auth flow', 'Role-based UI', 'API integration', 'Performance'],
    deploy: 'Private client project.',
  },
];

export const beyond = [
  {
    title: 'Data Migration',
    lead: 'Moving real business data from legacy databases and Excel into production systems.',
    items: ['Legacy database migration', 'Data validation', 'Duplicate handling', 'Data integrity', 'Production migration'],
    where: 'LMS · CRM',
  },
  {
    title: 'Production Engineering',
    lead: 'Getting applications live and keeping them running for the people who depend on them.',
    items: ['Deployment', 'Domain & SSL configuration', 'Production troubleshooting', 'Bug fixing', 'Live application support'],
    where: 'AWS EC2 · Hostinger',
  },
  {
    title: 'Business Workflow Engineering',
    lead: 'Turning how a business actually operates into rules, data models and screens.',
    items: ['Understanding business requirements', 'Translating workflows into software', 'Validation', 'Reporting', 'Role-based access', 'Complex business logic'],
    where: 'Rewards · GST · Payments',
  },
];

export const process = [
  'Understand the business workflow',
  'Design the data and application flow',
  'Build backend logic and APIs',
  'Develop the user interface',
  'Validate data and edge cases',
  'Test the workflow',
  'Deploy to production',
  'Monitor, troubleshoot and improve',
];

export const education = [
  { degree: 'M.Sc. Mathematics', school: 'Thiruvalluvar Government Arts College', period: 'Sep 2022 – May 2024', score: '8.1 CGPA' },
  { degree: 'B.Sc. Mathematics', school: 'Thiruvalluvar Government Arts College', period: 'Aug 2019 – May 2022', score: '8.3 CGPA' },
];
