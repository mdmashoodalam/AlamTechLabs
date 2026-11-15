export const agencyInfo = {
  name: "Alam TechLabs",
  brandUrdu: "عالم",
  tagline: "Software & Web Development Agency",
  subheading: "We build modern, high-speed websites and custom software for local businesses, clinics, showrooms, and companies. Complete mobile-friendly websites starting at just ₹3,000 with 24–48 hour delivery.",
  logo: "/assets/images/logo.jpg",
  founder: {
    name: "Md Mashood Alam",
    role: "Founder & Full-Stack Software Engineer",
    bio: "Full-Stack Software Engineer & Web Developer with expertise in building fast, mobile-friendly websites for local businesses, clinics, and enterprises using React, Spring Boot, and modern cloud technologies.",
    email: "mashoodalam05@gmail.com",
    phone: "+91 9572879110",
    whatsapp: "919572879110",
    location: "Pupri, Bihar / Bengaluru (Serving Clients Worldwide)",
    github: "https://github.com/mdmashoodalam",
    linkedin: "https://linkedin.com/in/mdmashoodalam",
    calendarUrl: "https://calendly.com",
  },
  stats: [
    { label: "Starting Price", value: "₹3,000", desc: "Complete static website" },
    { label: "Turnaround Time", value: "24-48 Hrs", desc: "Fast local delivery" },
    { label: "Live Client Sites", value: "3+ Deployed", desc: "Real businesses online" },
    { label: "Mobile Responsive", value: "100%", desc: "Optimized for all screens" },
  ]
};

export const services = [
  {
    id: "static-website",
    title: "Static Business & Shop Website",
    startingPrice: "₹3,000",
    timeline: "24–48 Hours",
    shortDesc: "High-speed, professional website for local shops, showrooms, clinics, schools, and personal brands.",
    longDesc: "Get your business found on Google and WhatsApp. Includes modern mobile-friendly design, services showcase, photo gallery, Google Maps location, and direct 1-click WhatsApp inquiry button.",
    icon: "Layout",
    tags: ["HTML5/CSS3", "React", "Tailwind CSS", "WhatsApp Chat", "Google Maps"],
    features: [
      "100% mobile, tablet & desktop responsive design",
      "Direct 1-click WhatsApp chat & click-to-call buttons",
      "Google Maps location embed for local store walk-ins",
      "SEO friendly setup so local customers find you on Google",
      "Free domain & hosting guidance + SSL certificate"
    ],
    highlight: "Popular for Local Shops (₹3,000)"
  },
  {
    id: "clinic-doctor-portal",
    title: "Clinics & Healthcare Web Portals",
    startingPrice: "₹5,000",
    timeline: "2–4 Days",
    shortDesc: "Dedicated website for doctors, clinics, physiotherapists, and diagnostic labs with patient inquiry.",
    longDesc: "Empower your medical practice like Hayat Health Care Clinic and FitAndPhysioAfzal. Showcase doctor profiles, timings, treatments, patient testimonials, and online appointment booking.",
    icon: "ShieldCheck",
    tags: ["Healthcare", "Appointment Booking", "Doctor Profiles", "Patient Reviews"],
    features: [
      "Specialist doctor profiles & OPD consultation schedules",
      "Online appointment inquiry & WhatsApp booking flow",
      "Patient testimonials, treatment gallery & FAQs",
      "Emergency contact helpline and hospital directions",
      "Fast load speed on mobile 4G/5G networks"
    ],
    highlight: "Doctors & Clinics"
  },
  {
    id: "catalog-ecommerce",
    title: "Product Catalog & Online Store",
    startingPrice: "₹9,999",
    timeline: "5–7 Days",
    shortDesc: "Digital product showcase or full e-commerce store with WhatsApp ordering and online payments.",
    longDesc: "Showcase your entire inventory online like CMT Tools Riyadh. Allow customers to browse products, send automated WhatsApp quotes, or pay directly via UPI, PhonePe, Google Pay, and cards.",
    icon: "Rocket",
    tags: ["E-Commerce", "Product Catalog", "UPI / Razorpay", "WhatsApp Orders"],
    features: [
      "Categorized product inventory with high-res photos & specs",
      "1-click 'Order on WhatsApp' button with pre-filled product details",
      "Payment gateway integration (UPI, Razorpay, Cards)",
      "Customer reviews, discount badges & search filters",
      "Easy admin dashboard to add/update products"
    ],
    highlight: "Showrooms & Retailers"
  },
  {
    id: "dynamic-cms",
    title: "Dynamic Business Website & CMS",
    startingPrice: "₹7,500",
    timeline: "3–5 Days",
    shortDesc: "Easily update your website content, blogs, photos, and notices without writing any code.",
    longDesc: "Ideal for schools, colleges, institutes, real estate agencies, and consulting firms who need an easy-to-use admin panel to publish news, brochures, and announcements.",
    icon: "Database",
    tags: ["Admin Panel", "CMS", "React", "Node / Spring Boot"],
    features: [
      "Password-protected admin dashboard to update content",
      "Lead collection form with instant email & WhatsApp notifications",
      "Notice board, circulars, and downloadable PDF brochures",
      "Photo gallery management and event updates",
      "Fast database storage with automated backups"
    ],
    highlight: "Schools & Institutes"
  },
  {
    id: "backend-software",
    title: "Custom Software & Web Applications",
    startingPrice: "₹18,000+",
    timeline: "2–4 Weeks",
    shortDesc: "Enterprise-grade custom web portals, billing systems, and APIs engineered with Java & Spring Boot.",
    longDesc: "Bespoke software tailored to your specific business processes: inventory management, student portals, booking engines, and multi-tenant platforms with bank-grade security.",
    icon: "Server",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "AWS Cloud"],
    features: [
      "Custom business logic, billing & invoice generation",
      "Role-based access control (Admin, Manager, Staff, Customer)",
      "Secure database architecture (MySQL / PostgreSQL)",
      "High-speed RESTful APIs with sub-100ms response",
      "Cloud deployment on AWS with automated backups"
    ],
    highlight: "Enterprise Software"
  },
  {
    id: "redesign-maintenance",
    title: "Website Redesign & Speed Optimization",
    startingPrice: "₹2,500",
    timeline: "24–48 Hours",
    shortDesc: "Upgrade an old, slow, or broken website to modern, sleek, mobile-friendly design.",
    longDesc: "Is your existing website outdated, slow, or not working on mobile phones? We revamp it completely, boost Google search ranking, and fix security vulnerabilities.",
    icon: "Cloud",
    tags: ["Speed Boost", "Mobile Revamp", "SEO Audit", "SSL Security"],
    features: [
      "Transform outdated designs into modern premium aesthetics",
      "Fix mobile responsiveness issues and broken layout grids",
      "Compress images & optimize code for 95+ Google PageSpeed score",
      "Add SSL security padlock (https://) to build customer trust",
      "Google Business Profile & SEO ranking optimization"
    ],
    highlight: "Fast Revamp"
  }
];

export const caseStudies = [
  {
    id: "sabicmttools",
    title: "CMT Tools — Professional Automotive Tools Catalog",
    client: "CMT Tools (Riyadh, Saudi Arabia)",
    category: "Commercial Product Catalog",
    image: "/assets/images/project-cmt-tools.jpg",
    summary: "A modern automotive equipment and workshop tool catalog website developed for an established industrial supplier in Riyadh, Saudi Arabia.",
    liveUrl: "https://sabicmttools.com/",
    challenge: "Client needed a clean digital catalog to showcase high-precision automotive diagnostic tools, garage equipment, and hand tools with fast load times across the Gulf region.",
    solution: "Engineered a high-performance web platform featuring a structured product catalog, mobile-optimized browsing, direct quotation inquiry buttons, and industrial brand positioning.",
    metrics: [
      { label: "Target Market", value: "Saudi Arabia" },
      { label: "Mobile Speed", value: "98/100" },
      { label: "Inquiry Flow", value: "Direct Quote" }
    ],
    tech: ["HTML5", "Modern CSS", "JavaScript", "Responsive Design", "Industrial UI/UX", "SEO"],
    featured: true,
    badge: "Live Client Website"
  },
  {
    id: "hhcc",
    title: "Hayat Health Care Clinic (HHCC) — Healthcare Portal",
    client: "Hayat Health Care Clinic (Pupri, Bihar)",
    category: "Clinic & Healthcare Portal",
    image: "/assets/images/project-hhcc.jpg",
    summary: "Complete official clinic website for Hayat Health Care Clinic in Pupri, featuring specialist doctor directories, OPD timings, healthcare services, and online patient inquiries.",
    liveUrl: "https://www.hhcc.online/",
    challenge: "Patients in the local region needed an accessible way to check doctor availability, clinic consultation hours, emergency helpline numbers, and treatment facilities from their mobile phones.",
    solution: "Designed and launched an intuitive, mobile-first healthcare portal with clean medical aesthetics, click-to-call emergency triggers, Google Maps directions, and WhatsApp consultation booking.",
    metrics: [
      { label: "Location", value: "Pupri, Bihar" },
      { label: "Mobile Reach", value: "100% Responsive" },
      { label: "Booking Mode", value: "WhatsApp / Call" }
    ],
    tech: ["Healthcare UI", "Appointment Form", "Google Maps", "WhatsApp Integration", "Local SEO"],
    featured: true,
    badge: "Live Client Website"
  },
  {
    id: "fitandphysio",
    title: "FitAndPhysioAfzal — Physiotherapy & Rehab Platform",
    client: "FitAndPhysioAfzal Clinic",
    category: "Physiotherapy & Appointment Booking",
    image: "/assets/images/project-fitandphysio.jpg",
    summary: "Dedicated clinic website for a professional physiotherapy and rehabilitation specialist, providing home visit support details, pain management therapy info, and instant booking.",
    liveUrl: "https://www.fitandphysioafzal.online/",
    challenge: "The practitioner needed a high-trust digital presence to explain physiotherapy treatments (neuro, ortho, sports injury) and allow patients or their families to book home visits and clinic appointments easily.",
    solution: "Built a warm, professional physiotherapy platform with structured service cards, patient recovery testimonials, WhatsApp appointment scheduler, and local search visibility.",
    metrics: [
      { label: "Specialty", value: "Physio & Rehab" },
      { label: "Patient Action", value: "1-Click Booking" },
      { label: "Device Support", value: "All Phones" }
    ],
    tech: ["Modern Web", "Physiotherapy UX", "WhatsApp Scheduler", "SEO Friendly", "Fast Hosting"],
    featured: true,
    badge: "Live Client Website"
  },
  {
    id: "skill-swap",
    title: "SkillSwap — Real-Time Peer Learning Platform",
    client: "Full-Stack EdTech Project",
    category: "Full Stack Application",
    image: null,
    summary: "A peer-to-peer talent & skill exchange ecosystem with Spring Boot 3.5, STOMP/WebSocket real-time messaging, and WebRTC audio/video consultations.",
    liveUrl: "https://github.com/mdmashoodalam",
    challenge: "Enabling synchronous two-way communication between students and professionals with sub-second message delivery and stable WebRTC video channels.",
    solution: "Engineered REST APIs in Spring Boot 3.5 with Spring Security, JWT, MySQL, WebSocket/STOMP, and WebRTC peer-to-peer streaming.",
    metrics: [
      { label: "Real-Time Latency", value: "< 50ms" },
      { label: "Connections", value: "STOMP WebSocket" },
      { label: "Architecture", value: "Spring Boot 3.5" }
    ],
    tech: ["Java", "Spring Boot 3.5", "WebSocket / STOMP", "WebRTC", "Spring Security", "JWT", "MySQL"],
    featured: false,
    badge: "Full-Stack WebRTC"
  },
  {
    id: "secure-file-vault",
    title: "VaultShare — Enterprise Zero-Knowledge File Vault",
    client: "Cybersecurity & Data Privacy",
    category: "Security & Cloud Backend",
    image: null,
    summary: "An enterprise-grade secure file management platform featuring AES-256-CBC encryption, token-based time-locked sharing, and brute-force rate-limiting.",
    liveUrl: "https://github.com/mdmashoodalam",
    challenge: "Protecting sensitive corporate documents against unauthorized access while maintaining frictionless sharing capabilities.",
    solution: "Designed a 3-layer MVC architecture in Spring Boot with AES-256-CBC encryption, BCrypt password hashing, and JWT/OAuth2 authentication.",
    metrics: [
      { label: "Encryption", value: "AES-256-CBC" },
      { label: "Rate Limit", value: "Protected" },
      { label: "Compliance", value: "OWASP Hardened" }
    ],
    tech: ["Spring Boot", "React", "MySQL", "JWT & OAuth2", "AES-256-CBC", "BCrypt"],
    featured: false,
    badge: "Enterprise Security"
  },
  {
    id: "quickbite-logistics",
    title: "QuickBite — Food Ordering & Dispatch Engine",
    client: "Hospitality & Restaurant Tech",
    category: "Backend RESTful Microservice",
    image: null,
    summary: "A fault-tolerant online food ordering and kitchen dispatch backend capable of handling high-velocity concurrent food orders and real-time inventory updates.",
    liveUrl: "https://github.com/mdmashoodalam",
    challenge: "Eliminating order race conditions during peak hours and maintaining consistent transactional integrity across multiple menus.",
    solution: "Engineered scalable REST APIs in Spring Boot with fine-grained relational transaction controls in MySQL, reducing peak checkout duration by 40%.",
    metrics: [
      { label: "Checkout Speed", value: "-40% Time" },
      { label: "Safety", value: "ACID Guaranteed" },
      { label: "Uptime", value: "99.98%" }
    ],
    tech: ["Spring Boot", "RESTful APIs", "MySQL", "HikariCP", "Postman"],
    featured: false,
    badge: "High Concurrency"
  }
];

export const techStack = [
  {
    category: "Frontend & Mobile-First Web",
    description: "Lightning-fast, mobile-optimized websites designed to convert visitors into paying clients.",
    skills: [
      { name: "React.js & Next.js", level: "Expert", desc: "Interactive modern web apps and dynamic interfaces" },
      { name: "Tailwind CSS & Modern CSS", level: "Expert", desc: "Pixel-perfect mobile responsiveness across every smartphone" },
      { name: "HTML5 & JavaScript ES6+", level: "Expert", desc: "Clean semantic markup, animations, and high Google PageSpeed" },
      { name: "WhatsApp & Call Triggers", level: "Expert", desc: "1-click customer contact links for high local conversions" }
    ]
  },
  {
    category: "Backend & Custom Software",
    description: "Robust, scalable backends built with Java, Spring Boot, and modern REST APIs.",
    skills: [
      { name: "Java (8 / 17 / 21 LTS)", level: "Expert", desc: "Core & Advanced Java, OOP, concurrency, enterprise stability" },
      { name: "Spring Boot 3.x", level: "Expert", desc: "Microservices, RESTful APIs, high-throughput business logic" },
      { name: "Spring Security & JWT", level: "Expert", desc: "User logins, password protection, role management" },
      { name: "Hibernate & JPA", level: "Advanced", desc: "Database modeling, query speed optimization" }
    ]
  },
  {
    category: "Databases & Local Integrations",
    description: "Safe data storage, online payments, and local search integrations.",
    skills: [
      { name: "MySQL & PostgreSQL", level: "Expert", desc: "Customer records, inventory, and transaction security" },
      { name: "UPI & Razorpay Payments", level: "Expert", desc: "Accept Google Pay, PhonePe, Paytm, cards, and net banking" },
      { name: "Google Maps & Local SEO", level: "Expert", desc: "Get listed on Google Maps so local customers find your store" },
      { name: "Domain & SSL Setup", level: "Expert", desc: "Free HTTPS green padlock, .com / .in / .online domain configuration" }
    ]
  },
  {
    category: "Cloud, Hosting & Maintenance",
    description: "Fast hosting, 24/7 uptime, and hassle-free technical maintenance.",
    skills: [
      { name: "Fast Cloud Hosting & CDN", level: "Expert", desc: "Sub-second loading times for visitors across India & globally" },
      { name: "AWS Cloud (EC2, S3, RDS)", level: "Advanced", desc: "Cloud infrastructure for scalable software applications" },
      { name: "Docker & CI/CD", level: "Advanced", desc: "Containerized deployments and automated zero-downtime updates" },
      { name: "24/7 Monitoring & Backups", level: "Expert", desc: "Regular website backups and quick maintenance support" }
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Quick Chat & Requirement Discussion",
    desc: "We discuss your business type (shop, clinic, service, startup), your products or services, and what you want on the website over a quick WhatsApp or phone call.",
    deliverables: "Exact Fixed Price (Starting ₹3,000) & Delivery Date"
  },
  {
    step: "02",
    title: "Design & Content Setup",
    desc: "We design a clean, modern, 100% mobile-friendly layout with your business photos, contact numbers, services, and Google Maps location.",
    deliverables: "Live Preview Link on Your Mobile Phone"
  },
  {
    step: "03",
    title: "Review & Fast Revisions",
    desc: "You review the preview on your phone or computer. We make any text or photo adjustments you need until you are 100% satisfied.",
    deliverables: "Fine-Tuned Website Ready to Launch"
  },
  {
    step: "04",
    title: "Launch & Google Setup",
    desc: "We connect your domain (.com / .in), activate free SSL security, test WhatsApp buttons, and submit the site to Google search.",
    deliverables: "Live Website + 30 Days Free Support"
  }
];

export const estimatorData = {
  projectTypes: [
    { 
      id: "static", 
      name: "Basic Static Business Website", 
      baseDays: "1–2 Days", 
      basePrice: 3000, 
      desc: "Perfect for local shops, clinics, traders, and personal portfolios. Fast, clean & mobile responsive." 
    },
    { 
      id: "clinic", 
      name: "Clinic / Healthcare / Booking Website", 
      baseDays: "2–4 Days", 
      basePrice: 5000, 
      desc: "For doctors, physiotherapists, clinics & consultants with online appointment and inquiry flow." 
    },
    { 
      id: "dynamic", 
      name: "Dynamic Business Website + Admin CMS", 
      baseDays: "3–6 Days", 
      basePrice: 7500, 
      desc: "For schools, institutes, real estate & firms needing an easy panel to update photos & notices." 
    },
    { 
      id: "ecommerce", 
      name: "Online Store / Product Catalog", 
      baseDays: "5–8 Days", 
      basePrice: 12000, 
      desc: "Product catalog with 1-click WhatsApp orders, UPI payments, and inventory management." 
    },
    { 
      id: "custom", 
      name: "Custom Full-Stack Web Application", 
      baseDays: "2–3 Weeks", 
      basePrice: 20000, 
      desc: "Tailored software, billing portals, and database systems built with Java, Spring Boot & React." 
    }
  ],
  featureAddons: [
    { id: "whatsapp", name: "Floating WhatsApp Chat Button", price: 0, desc: "FREE Included" },
    { id: "maps", name: "Google Maps & Business Location", price: 500, desc: "+ ₹500" },
    { id: "domain", name: "Domain & Cloud Hosting Setup", price: 1000, desc: "+ ₹1,000" },
    { id: "payment", name: "UPI / Razorpay / Online Payment", price: 1500, desc: "+ ₹1,500" },
    { id: "admin", name: "Custom Admin Panel to Edit Text/Photos", price: 2000, desc: "+ ₹2,000" },
    { id: "express", name: "Express 24-Hour Urgent Delivery", price: 1000, desc: "+ ₹1,000" }
  ],
  timelines: [
    { id: "standard", name: "Standard Delivery (2–4 Days)", multiplier: 1.0 },
    { id: "urgent", name: "Urgent Priority (24–48 Hours)", multiplier: 1.15 }
  ]
};

export const testimonials = [
  {
    name: "Dr. Afzal",
    role: "Physiotherapist & Founder, FitAndPhysioAfzal",
    content: "Md Mashood Alam built our clinic website fitandphysioafzal.online with great care. Patients easily check our services and book appointments directly through WhatsApp. The website is very fast and works smoothly on every mobile phone.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&auto=format&fit=crop&q=80"
  },
  {
    name: "Management Team",
    role: "Hayat Health Care Clinic (HHCC), Pupri",
    content: "Our clinic needed a trustworthy online presence for local patients. Mashood delivered hhcc.online quickly with doctor details, emergency contact, and Google Maps directions. Highly recommended for any clinic or local business!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&auto=format&fit=crop&q=80"
  },
  {
    name: "CMT Tools Operations",
    role: "Automotive Tools Supplier, Riyadh",
    content: "We required a professional digital catalog sabicmttools.com for our automotive and garage tools in Saudi Arabia. The website layout is clean, fast, and makes it easy for clients to browse and request quotes.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  }
];

export const faqs = [
  {
    question: "Can I really get a complete website starting at just ₹3,000?",
    answer: "Yes, absolutely! Our ₹3,000 package is specifically designed for local shops, clinics, traders, and personal brands who need a fast, professional, 100% mobile-friendly website with their business information, services, photos, Google Maps location, and a 1-click WhatsApp inquiry button. There are no hidden fees."
  },
  {
    question: "How long will it take to complete my website?",
    answer: "A basic static business website takes only 24 to 48 hours once you provide your business details and photos. For clinics, dynamic websites, or e-commerce stores, it typically takes 3 to 7 days."
  },
  {
    question: "Will my website work properly on mobile phones?",
    answer: "Yes, 100%! Over 85% of local customers browse from mobile phones. Every website we create is thoroughly tested across Android and iPhone screens to ensure lightning-fast speed, readable text, and easy tap buttons."
  },
  {
    question: "What do I need to provide to start?",
    answer: "You just need to share your business name, contact phone number, address, services/products list, and any photos or logos you have. If you don't have a logo or photos, don't worry—we will help you source high-quality royalty-free graphics and design a clean presentation."
  },
  {
    question: "How will local customers contact me from the website?",
    answer: "We include prominent, sticky 1-click WhatsApp chat buttons and Click-to-Call buttons. When a customer taps the button, your WhatsApp opens instantly with a pre-typed inquiry message so they can reach you in one second!"
  },
  {
    question: "Do you also build custom software or web applications?",
    answer: "Yes! In addition to local business websites, we engineer full-scale custom web portals, billing systems, and backend microservices using Java, Spring Boot, React, and MySQL for companies needing custom automation."
  }
];
