export const agencyInfo = {
  name: "AlamTech Labs",
  tagline: "Software & Cloud Engineering Agency",
  subheading: "We build enterprise-grade web applications, high-throughput backend microservices, and cloud infrastructure engineered for 99.99% uptime and hyper-growth.",
  founder: {
    name: "Md Mashood Alam",
    role: "Founder & Lead Solutions Architect",
    bio: "Java Full Stack Developer & Cloud Engineer specializing in Spring Boot microservices, high-concurrency architectures, enterprise security (JWT/OAuth2/AES-256), and modern React web applications.",
    email: "mashoodalam05@gmail.com",
    phone: "+91 9572879110",
    whatsapp: "919572879110",
    location: "Bengaluru, India (Available Worldwide)",
    github: "https://github.com/mdmashoodalam",
    linkedin: "https://linkedin.com/in/mdmashoodalam",
    calendarUrl: "https://calendly.com", // can be updated by user
  },
  stats: [
    { label: "High-Throughput Uptime", value: "99.99%", desc: "Cloud & backend SLA" },
    { label: "Production Deployments", value: "25+", desc: "Web & microservice apps" },
    { label: "API Response Latency", value: "< 85ms", desc: "Optimized SQL & JPA" },
    { label: "Enterprise Security", value: "AES-256", desc: "OWASP & JWT/OAuth2" },
  ]
};

export const services = [
  {
    id: "backend-microservices",
    title: "Enterprise Backend & Microservices",
    shortDesc: "Resilient, high-concurrency RESTful architectures built with Java & Spring Boot, engineered to handle heavy traffic loads effortlessly.",
    longDesc: "We design and develop production-grade distributed backends using Spring Boot, Spring Security, Hibernate ORM, and Spring Data JPA. Every API is secured with OAuth2/JWT tokens, optimized for high throughput, and thoroughly documented with OpenAPI/Swagger.",
    icon: "Server",
    tags: ["Java", "Spring Boot", "REST APIs", "Microservices", "Spring Security", "JPA/Hibernate"],
    features: [
      "Distributed microservices architecture & 3-layer MVC",
      "High-throughput concurrency handling & rate limiting",
      "Robust RESTful API design with comprehensive error handling",
      "Database connection pooling & Hibernate query optimization",
      "WebSockets/STOMP & WebRTC for real-time streaming"
    ],
    highlight: "Backend Core"
  },
  {
    id: "web-apps",
    title: "Modern Full-Stack Web Applications",
    shortDesc: "Lightning-fast, reactive web applications built with React.js, Next.js, and modern CSS with uncompromising UX & accessibility.",
    longDesc: "Transforming complex business logic into fluid, high-converting digital interfaces. We combine React, Tailwind CSS, clean state management, and optimized asset delivery to maximize user engagement and reduce bounce rates.",
    icon: "Layout",
    tags: ["React.js", "JavaScript/TypeScript", "Tailwind CSS", "Next.js", "Redux/Zustand"],
    features: [
      "Dynamic single-page (SPA) & server-rendered applications",
      "Design systems with reusable component architecture",
      "Proven 50% increase in user retention & 25% lower bounce rates",
      "Mobile-first responsive layouts across all viewports",
      "API integrations with real-time state synchronization"
    ],
    highlight: "Frontend Excellence"
  },
  {
    id: "cloud-devops",
    title: "AWS Cloud & DevOps Engineering",
    shortDesc: "Production-ready cloud deployment, auto-scaling architectures, containerization, and automated CI/CD pipelines.",
    longDesc: "Leverage the full power of AWS without operational headaches. We architect secure Virtual Private Clouds (VPC), configure auto-scaling compute (EC2, Lambda), managed databases (RDS), storage (S3), and DNS/CDN (Route53, CloudFront).",
    icon: "Cloud",
    tags: ["AWS", "Docker", "EC2", "S3", "RDS", "VPC", "CI/CD", "Lambda"],
    features: [
      "Zero-downtime automated deployment pipelines",
      "AWS architecture: EC2, S3, RDS, Lambda, Route53, CloudWatch",
      "Docker containerization for consistent environments",
      "Auto-scaling policies with elastic load balancers",
      "Cost optimization & multi-AZ failover configurations"
    ],
    highlight: "Cloud Native"
  },
  {
    id: "security-auth",
    title: "Enterprise Security & Auth Systems",
    shortDesc: "Military-grade encryption, zero-trust token management, role-based access control, and brute-force mitigation.",
    longDesc: "Security isn't an afterthought—it's woven into our code from line one. We implement AES-256-CBC encryption for data at rest, BCrypt password hashing, JWT + OAuth2 session validation, and strict CORS/CSRF protections.",
    icon: "ShieldCheck",
    tags: ["JWT", "OAuth2", "AES-256", "BCrypt", "Spring Security", "CORS/CSRF"],
    features: [
      "OAuth2 + JWT multi-tenant authentication & refresh cycles",
      "AES-256-CBC cryptographic file & record encryption",
      "Configurable role-based access control (RBAC)",
      "Brute-force protection & dynamic rate limiting",
      "OWASP Top 10 vulnerability hardening & penetration readiness"
    ],
    highlight: "Military-Grade"
  },
  {
    id: "database-optimization",
    title: "Database Engineering & SQL Optimization",
    shortDesc: "Relational database modeling, query tuning, indexing, and migration strategies for MySQL and PostgreSQL.",
    longDesc: "A slow database kills user experience. We build normalized, index-optimized schemas in MySQL and PostgreSQL, eliminating N+1 query bottlenecks and structuring reliable transaction rollbacks.",
    icon: "Database",
    tags: ["MySQL", "PostgreSQL", "JPA/Hibernate", "Indexing", "Query Tuning"],
    features: [
      "Normalized schema architecture & entity relational design",
      "Execution plan analysis, index optimization & slow query tuning",
      "ACID-compliant transaction management & lock avoidance",
      "Automated backups, replication & migration scripts",
      "High-efficiency connection pooling (HikariCP)"
    ],
    highlight: "Data Reliability"
  },
  {
    id: "startup-mvp",
    title: "Startup MVP Launchpad (4-6 Weeks)",
    shortDesc: "From validated concept to production-ready market launch. Clean architecture that you can scale without a full rewrite.",
    longDesc: "We partner with visionary founders to turn specifications into functional, investor-ready MVPs. Built on clean code foundations so you never have to throw away your prototype when you scale.",
    icon: "Rocket",
    tags: ["MVP Development", "Rapid Prototyping", "Full Stack", "Clean Code"],
    features: [
      "End-to-end scope definition & technical architecture blueprint",
      "Rapid sprint-based delivery with weekly staging demos",
      "Payment gateway & user onboarding integrations",
      "Full intellectual property (IP) & repository transfer",
      "Post-launch 30-day dedicated warranty and monitoring"
    ],
    highlight: "Fast Time-to-Market"
  }
];

export const caseStudies = [
  {
    id: "skill-swap",
    title: "SkillSwap: Real-Time Peer Learning Platform",
    client: "EdTech Startup Solution",
    category: "Full Stack Application",
    summary: "A peer-to-peer talent & skill exchange ecosystem facilitating automated skill matching, real-time messaging, and interactive WebRTC audio/video consultations.",
    challenge: "Enabling synchronous two-way communication between students and professionals with sub-second message delivery and stable peer-to-peer WebRTC video channels while handling secure session reservations.",
    solution: "Engineered high-performance REST APIs in Spring Boot 3.5 backed by MySQL. Integrated WebSocket/STOMP protocols for instant bi-directional messaging, WebRTC for direct browser-to-browser media streaming, and Spring Security with JWT for seamless session verification.",
    metrics: [
      { label: "Real-Time Latency", value: "< 50ms" },
      { label: "Active Connections", value: "Concurrent STOMP" },
      { label: "Tech Stack", value: "Spring Boot 3.5, WebRTC, React" }
    ],
    tech: ["Java", "Spring Boot 3.5", "WebSocket / STOMP", "WebRTC", "Spring Security", "JWT", "JPA", "MySQL"],
    demoLink: "#contact",
    githubLink: "https://github.com/mdmashoodalam",
    featured: true
  },
  {
    id: "secure-file-vault",
    title: "VaultShare: Enterprise Zero-Knowledge File Vault",
    client: "Cybersecurity & Data Privacy",
    category: "Security & Cloud Backend",
    summary: "An enterprise-grade secure file management platform featuring end-to-end cryptographic protection, token-based time-locked sharing, and automated brute-force rate-limiting.",
    challenge: "Protecting sensitive corporate documents against unauthorized access, credential stuffing, and data breaches while maintaining frictionless sharing capabilities with external partners.",
    solution: "Designed a strict 3-layer MVC architecture leveraging Spring Boot and React. Implemented AES-256-CBC encryption for all stored assets, BCrypt hashing for credentials, JWT + OAuth2 authorization barriers, and token-based download links with configurable access limits and self-destruct timers.",
    metrics: [
      { label: "Encryption Standard", value: "AES-256-CBC" },
      { label: "Threat Mitigation", value: "100% Rate Limited" },
      { label: "Compliance", value: "OWASP Hardened" }
    ],
    tech: ["Spring Boot", "React", "MySQL", "JWT & OAuth2", "AES-256-CBC", "BCrypt", "Rate Limiting"],
    demoLink: "#contact",
    githubLink: "https://github.com/mdmashoodalam",
    featured: true
  },
  {
    id: "quickbite-logistics",
    title: "QuickBite: High-Throughput Food Ordering Engine",
    client: "Quick-Commerce & Hospitality",
    category: "Backend RESTful Microservice",
    summary: "A fault-tolerant online ordering and kitchen dispatch backend capable of handling high-velocity concurrent food orders, dynamic inventory updates, and multi-tenant restaurant profiles.",
    challenge: "Eliminating order race conditions during peak flash-sale hours, synchronizing restaurant menu states in real time, and maintaining consistent transactional integrity across multiple databases.",
    solution: "Engineered scalable REST APIs in Spring Boot with fine-grained relational transaction controls in MySQL. Implemented database query optimizations, preventing deadlocks and reducing peak checkout duration by 40%.",
    metrics: [
      { label: "Order Checkout Time", value: "-40%" },
      { label: "Transaction Safety", value: "ACID Guaranteed" },
      { label: "API Availability", value: "99.98%" }
    ],
    tech: ["Spring Boot", "RESTful APIs", "MySQL", "Postman Test Suites", "HikariCP"],
    demoLink: "#contact",
    githubLink: "https://github.com/mdmashoodalam",
    featured: true
  },
  {
    id: "innogenx-portal",
    title: "Innogenx: High-Conversion Enterprise Web Suite",
    client: "Digital Growth & Product Marketing",
    category: "Modern Frontend UI/UX",
    summary: "Architected and delivered 3+ enterprise React applications with high-performance interactive interfaces, structured component libraries, and optimized customer journeys.",
    challenge: "Modernizing legacy web properties that suffered from slow load times, high bounce rates (over 65%), and disjointed user conversion flows.",
    solution: "Engineered reusable, modular React component architecture with Tailwind CSS styling, optimized bundle splitting, and client-side caching. Achieved dramatic speed upgrades and streamlined sales funnel paths.",
    metrics: [
      { label: "User Engagement", value: "+50%" },
      { label: "Bounce Rate Reduction", value: "-25%" },
      { label: "Applications Delivered", value: "3+ Production Apps" }
    ],
    tech: ["React.js", "JavaScript ES6+", "Tailwind CSS", "HTML5/CSS3", "Webpack"],
    demoLink: "#contact",
    githubLink: "https://github.com/mdmashoodalam",
    featured: false
  }
];

export const techStack = [
  {
    category: "Backend & Core",
    description: "Battle-tested, enterprise-grade backends built for high concurrency and strict reliability.",
    skills: [
      { name: "Java (8+ / 17 / 21)", level: "Expert", desc: "Core & Advanced Java, OOP, Multithreading, Concurrency" },
      { name: "Spring Boot 3.x", level: "Expert", desc: "REST APIs, Microservices, Dependency Injection, Actuator" },
      { name: "Spring Security", level: "Expert", desc: "JWT, OAuth2, RBAC, Filters, CORS/CSRF Protection" },
      { name: "Hibernate & JPA", level: "Advanced", desc: "ORM, Entity Mapping, Criteria API, Query Optimization" },
      { name: "WebSocket & WebRTC", level: "Advanced", desc: "STOMP protocol, real-time messaging, peer video/audio" },
      { name: "Node.js & Express", level: "Proficient", desc: "Lightweight microservices, tooling & CLI scripts" }
    ]
  },
  {
    category: "Frontend & UI/UX",
    description: "Responsive, responsive web applications with exceptional interaction design.",
    skills: [
      { name: "React.js", level: "Expert", desc: "Hooks, Context API, Performance Profiling, Custom Components" },
      { name: "JavaScript / ES6+", level: "Expert", desc: "Async/Await, DOM, Event Loop, Modern Syntax" },
      { name: "Tailwind CSS", level: "Expert", desc: "Modern utility-first styling, design systems, dark mode" },
      { name: "HTML5 & CSS3", level: "Expert", desc: "Semantic markup, CSS Grid/Flexbox, animations" },
      { name: "Bootstrap", level: "Advanced", desc: "Rapid grid prototyping & responsive UI elements" }
    ]
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    description: "Cloud-native architectures, containerization, and automated deployments.",
    skills: [
      { name: "AWS EC2 & S3", level: "Advanced", desc: "Virtual compute instances, object storage, lifecycle rules" },
      { name: "AWS RDS & VPC", level: "Advanced", desc: "Managed relational databases, isolated subnet networks" },
      { name: "AWS Lambda & CloudWatch", level: "Advanced", desc: "Serverless execution, system metrics, alarms, logging" },
      { name: "Docker Containerization", level: "Advanced", desc: "Multi-stage Dockerfiles, Docker Compose, container orchestration" },
      { name: "CI/CD & Git/GitHub", level: "Expert", desc: "Version control workflows, branching models, automated builds" }
    ]
  },
  {
    category: "Databases & Security",
    description: "Rock-solid data persistence, high availability, and cryptographic security.",
    skills: [
      { name: "MySQL & PostgreSQL", level: "Expert", desc: "Schema design, relational indexes, ACID transactions" },
      { name: "JWT & OAuth2", level: "Expert", desc: "Stateless authentication, token rotation, social sign-ins" },
      { name: "AES-256 Encryption", level: "Advanced", desc: "Symmetric key encryption for sensitive data at rest" },
      { name: "BCrypt & Passwords", level: "Expert", desc: "Salted cryptographic password hashing standards" },
      { name: "Postman & API Testing", level: "Expert", desc: "Automated test collections, mock servers, documentation" }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Technical Blueprint",
    desc: "We analyze your requirements, business goals, and traffic projections. We define the database schema, API contracts, and cloud architecture before writing a single line of code.",
    deliverables: "Architecture Diagram, API Specifications, Project Scope & Milestones"
  },
  {
    step: "02",
    title: "UI/UX & Interactive Prototype",
    desc: "We engineer pixel-perfect, accessible component systems in React. You test real workflows on interactive staging environments to refine UX early.",
    deliverables: "Design System, Interactive Staging Previews, Responsive Layouts"
  },
  {
    step: "03",
    title: "Hardened Backend & Cloud Testing",
    desc: "We build the Spring Boot microservices, enforce Spring Security JWT/OAuth2 barriers, optimize SQL queries, and configure AWS cloud infrastructure.",
    deliverables: "Secured REST Endpoints, Database Migrations, Automated Test Suite"
  },
  {
    step: "04",
    title: "Production Launch & 24/7 Support",
    desc: "We deploy to AWS with zero-downtime CI/CD pipelines, configure CloudWatch monitoring, and hand over 100% of the source code, documentation, and IP.",
    deliverables: "Production Deployment, Source Code Transfer, 30-Day Launch Warranty"
  }
];

export const estimatorData = {
  projectTypes: [
    { id: "webapp", name: "Custom Web Application", baseWeeks: 4, basePrice: 1500, desc: "React / Full-stack app with dashboard & user management" },
    { id: "backend", name: "Enterprise Backend & REST APIs", baseWeeks: 3, basePrice: 1200, desc: "Spring Boot microservices, high concurrency, database architecture" },
    { id: "fullstack", name: "End-to-End Enterprise System", baseWeeks: 6, basePrice: 2800, desc: "Full Stack (React + Spring Boot + AWS Cloud + Security)" },
    { id: "mvp", name: "Startup MVP Launchpad", baseWeeks: 4, basePrice: 1800, desc: "Rapid concept-to-market development for early traction" }
  ],
  featureAddons: [
    { id: "auth", name: "Enterprise Auth & OAuth2/JWT", price: 300, weeks: 1 },
    { id: "encryption", name: "AES-256 Data Encryption & Vault", price: 400, weeks: 1 },
    { id: "realtime", name: "WebSockets / Real-Time Chat & WebRTC", price: 500, weeks: 1.5 },
    { id: "aws", name: "AWS Cloud Infrastructure (EC2, RDS, S3, VPC)", price: 450, weeks: 1 },
    { id: "payment", name: "Stripe / Razorpay Payment Integration", price: 350, weeks: 0.5 },
    { id: "admin", name: "SuperAdmin Dashboard & Analytics", price: 400, weeks: 1 }
  ],
  timelines: [
    { id: "standard", name: "Standard (Thorough & Agile)", multiplier: 1.0 },
    { id: "accelerated", name: "Accelerated Sprint (Priority)", multiplier: 1.25 }
  ]
};

export const testimonials = [
  {
    name: "Alexandre Mercier",
    role: "CTO, SkillBridge Global",
    content: "Working with Md Mashood Alam and AlamTech Labs transformed our platform. The Spring Boot backend handles our real-time WebSockets with zero lag, and the code quality is cleaner than what we received from 15-person agencies.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    name: "Rajesh Mathur",
    role: "Co-Founder, QuickBite Logistics",
    content: "Our online ordering system was crashing on weekend spikes. Mashood redesigned the database transactions and REST APIs with Spring Boot. Not only did our checkout time drop by 40%, but we haven't had a single outage since launch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah Lindqvist",
    role: "Product Director, Nordic SecureTech",
    content: "The AES-256 encryption and Spring Security implementation delivered for our file storage vault was flawless. Passed our external vulnerability audit on the first review. Outstanding engineering standards.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
  }
];

export const faqs = [
  {
    question: "Why hire AlamTech Labs instead of a big software agency or freelancer?",
    answer: "Big agencies assign junior developers while charging you high overhead for account managers. Freelancers often disappear or deliver unmaintainable spaghetti code. At AlamTech Labs, you work directly with a Senior Java Full Stack & Cloud Architect (Md Mashood Alam). You get enterprise-grade Spring Boot + React architectures, complete transparency, and code built to scale from day one."
  },
  {
    question: "Who owns the code and intellectual property (IP)?",
    answer: "You do—100%. Upon completion of project milestones and final settlement, all intellectual property, source code repositories, cloud environment credentials, and documentation are transferred fully and exclusively to your company."
  },
  {
    question: "What is your typical project timeline?",
    answer: "A focused MVP or backend microservice usually takes 3 to 6 weeks. Larger enterprise systems typically range from 8 to 12 weeks. We work in 1-to-2 week agile sprints with live staging demos so you see tangible progress every week."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! Every project includes 30 days of complimentary bug-fixing and monitoring support after launch. We also offer ongoing monthly SLA maintenance packages covering AWS server monitoring, security updates, database backups, and feature iterations."
  },
  {
    question: "How do we get started?",
    answer: "Simply click 'Book Discovery Call' or submit the project inquiry form below. We'll set up a 20-minute technical discovery call to review your specifications and send you a detailed architecture roadmap and fixed-price quote within 24-48 hours."
  }
];
