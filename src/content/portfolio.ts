/**
 * All site content lives here. Edit this file to update the portfolio —
 * no component changes required.
 */

export const profile = {
  name: "Chinmay Prawah Pant",
  role: "Software Engineer",
  study: "MSc Cybersecurity, KTH Royal Institute of Technology",
  tagline:
    "Software Engineer and Cybersecurity enthusiast, based in the Silicon Valhalla, where the startups are many and the daylight is not. I love working at the intersection of software, security, and AI.",
  location: "Stockholm, Sweden",
  availability: "Looking for something exciting to contribute to; internships or part-time opportunities",

  email: "chinmaypant21@gmail.com",
  phone: "+46 72-770 16 02",
  github: "https://github.com/chinmaypant21",
  linkedin: "https://www.linkedin.com/in/chinmaypant/",
  // resume: "/resume.pdf", // hidden for now
};

export type Link = { label: string; href: string };

export type Work = {
  title: string;
  summary: string;
  tags: string[];
  year: string;
  kind: "Research" | "Engineering" | "CTF / Lab" | "Tooling";
  links?: Link[];
};

export const securityWork: Work[] = [
  {
    title: "Authorization bypass in a multi-tenant API",
    summary:
      "Traced a tenant-scoping flaw through a shared caching layer, proved cross-tenant reads, and drove the fix plus a regression suite for the whole request path.",
    tags: ["AppSec", "Threat modeling", "Broken access control"],
    year: "2026",
    kind: "Research",
    links: [{ label: "Write-up", href: "#notes" }],
  },
  {
    title: "Supply-chain review of a CI/CD pipeline",
    summary:
      "Mapped build provenance across runners, pinned untrusted actions, and introduced artifact signing and least-privilege tokens for deploy workflows.",
    tags: ["CI/CD", "Provenance", "Least privilege"],
    year: "2025",
    kind: "Engineering",
    links: [{ label: "Repository", href: "#" }],
  },
  {
    title: "Detection lab for lateral movement",
    summary:
      "Built a reproducible lab that emulates credential reuse and remote execution, then tuned detections until noisy baselines collapsed into usable signal.",
    tags: ["Detection engineering", "Windows internals", "Purple team"],
    year: "2025",
    kind: "CTF / Lab",
    links: [{ label: "Notes", href: "#notes" }],
  },
  {
    title: "Static analysis rules for unsafe deserialization",
    summary:
      "Wrote custom query rules that surface unsafe object graphs in service code, cutting manual review time on every new pull request.",
    tags: ["Static analysis", "Secure SDLC", "Tooling"],
    year: "2024",
    kind: "Tooling",
    links: [{ label: "Source", href: "#" }],
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  summary?: string;
  highlights: string[];
  stack: string[];
};

export const engineering: Role[] = [
  {
    company: "Triplora",
    title: "Engineer — Systems & Security",
    period: "Nov 2025 — May 2026",
    summary: "TravelTech, global. A DeFi-powered travel platform with on-chain stablecoin rewards.",
    highlights: [
      "Led development of a production platform and its supporting backend services.",
      "Owned platform security, code quality, and secure development practices.",
    ],
    stack: ["\n"],
  },
  {
    company: "Gamezop",
    title: "Software Engineer",
    period: "Aug 2024 — Oct 2025",
    summary: "\n",
    highlights: [
      "Built a custom Next.js UI library that parsed and rendered Payload CMS rich text, with sanitization during serialization to mitigate XSS.",
      "Engineered a modular TypeScript analytics SDK processing 100M+ events monthly across 5+ products.",
      "Led incident response for a live botnet attack: analysed anomalous logs to find the vector, then mitigated it with rate limiting and normalized API error responses to prevent user enumeration.",
    ],
    stack: ["\n"],
  },
  {
    company: "Growagro",
    title: "SDE-1",
    period: "Jun 2023 — Jul 2024",
    highlights: [
      "Built an in-house React dashboard for employee and analytics data, with strict role-based access control over sensitive records.",
      "Developed Python backend services and REST APIs for data ingestion and ML-driven workflows, integrating models into production with the data and ML teams.",
      "Implemented Auth0-based identity and access management with MFA, SSO, and token-based authentication across users, services, and APIs.",
    ],
    stack: ["\n"],
  },
];

export type Paper = {
  title: string;
  authors?: string;
  venue: string;
  year: string;
  abstract: string;
  links?: Link[];
};

export const research: Paper[] = [
  {
    title: "SCI-IoT: A Quantitative Framework for Trust Scoring and Certification of IoT Devices",
    authors: "Shreyansh Swami, Ishwardeep Singh, Chinmay Prawah Pant",
    venue: "arXiv",
    year: "2025",
    abstract:
      "Proposed a quantitative certification framework benchmarking IoT trustworthiness via 30 weighted security tests and a six-tier grading model to standardize compliance.",
    links: [{ label: "arXiv:2511.18045", href: "https://arxiv.org/abs/2511.18045" }],
  },
  {
    title: "Adaptive Detection of Polymorphic Malware: Leveraging Mutation Engines and YARA Rules",
    authors: "Shreyansh Swami, Ishwardeep Singh, Ujjwalpreet Singh, Chinmay Prawah Pant",
    venue: "arXiv",
    year: "2025",
    abstract:
      "Analyzed 8 polymorphic behaviors against commercial AVs and EDRs, demonstrating that hybrid detection pipelines significantly outperform standalone defences with 92% coverage.",
    links: [{ label: "arXiv:2511.21764", href: "https://arxiv.org/abs/2511.21764" }],
  },
];

export type Note = {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  href: string;
};

export const notes: Note[] = [
  {
    title: "Reading a JWT library like an attacker",
    excerpt:
      "What the verification path actually checks, and the three places where defaults quietly become vulnerabilities.",
    date: "Aug 2026",
    readingTime: "8 min",
    href: "#",
  },
  {
    title: "A short field guide to SSRF in cloud environments",
    excerpt: "Metadata endpoints, redirect chains, and why network egress rules matter more than input filters.",
    date: "Jun 2026",
    readingTime: "11 min",
    href: "#",
  },
  {
    title: "Notes on writing detections you can maintain",
    excerpt: "Precision, ownership, and the documentation that keeps a rule alive twelve months after it shipped.",
    date: "Mar 2026",
    readingTime: "6 min",
    href: "#",
  },
];

export type Credential = {
  title: string;
  issuer: string;
  date: string;
};

export const credentials: Credential[] = [
  { title: "AGI & AI Safety Cohort", issuer: "BlueDot Impact", date: "Jul 2026" },
  { title: "Security+", issuer: "CompTIA", date: "Dec 2025" },
  { title: "Linux Certified Investigator", issuer: "CSI Linux", date: "Oct 2022" },
];

export type Involvement = {
  title: string;
  org?: string;
  period: string;
  /** Supports inline [label](href) links. */
  summary: string;
};

export const community: Involvement[] = [
  {
    title: "Open-source contributor",
    period: "Present",
    summary:
      "Contributed to OWASP projects including [OSHP](https://github.com/OWASP/www-project-secure-headers) and [Noir](https://github.com/owasp-noir/noir), and exploring contributions to projects such as NVIDIA Garak and Agent Memory Guard.",
  },
  {
    title: "Organising team",
    org: "KongligCTF 2026",
    period: "2026",
    summary: "Part of the organising team for KongligCTF 2026, the first CTF hosted at KTH.",
  },
  {
    title: "Volunteer",
    org: "Cybersweden '26, Cybercampus Sverige",
    period: "Sept 2026",
    summary: "Volunteered at Cybersweden '26, organised by Cybercampus Sverige.",
  },
  {
    title: "Contributor",
    org: "Stack Overflow",
    period: "May 2023 — 2025",
    summary:
      "Top 5% global [contributor](https://stackoverflow.com/users/15276488/chinz) (1,000+ reputation) in programming and security, reaching 25,000+ developers.",
  },
  {
    title: "Hackathon mentor & organiser",
    org: "National hackathons, India",
    period: "2022 — Present",
    summary:
      "Participated in and mentored at 30+ national hackathons, reviewing over 300 projects across software engineering, cybersecurity, and AI.\nCo-organised two editions of India's largest student-run hackathon, managing operations for 2,500+ attendees.",
  },
  {
    title: "Volunteer contributor",
    org: "CSI Linux",
    period: "Aug 2022 — May 2024",
    summary:
      "Contributed to the open-source CSI Linux project, improving its OSINT and digital forensics tooling alongside a global community of security professionals.",
  },
];
