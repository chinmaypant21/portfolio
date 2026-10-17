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

/*
 * Text fields marked "inline" support [label](href) links, `code` and **bold**.
 */

export type Work = {
  title: string;
  /** The project or organisation the work was for. */
  project?: string;
  /** Inline. */
  summary: string;
  /** Short supporting points shown as a list. Inline. */
  highlights?: string[];
  tags: string[];
  year: string;
  kind: "Research" | "Engineering" | "Tooling" | "Supply chain" | "CTF / Lab";
  /** Shows an "In progress" marker in place of the year. */
  ongoing?: boolean;
  /** Spans the full width of the grid. */
  featured?: boolean;
  links?: Link[];
};

const NOIR = "https://github.com/owasp-noir/noir";
const OSHP = "https://github.com/OWASP/www-project-secure-headers";

export const securityWork: Work[] = [
  {
    title: "ActionLens: a security scanner for GitHub Actions",
    project: "Personal project",
    summary:
      "CI/CD pipelines hold source code, cloud credentials and release keys. ActionLens audits GitHub Actions workflows for the flaws that let attackers reach them.",
    highlights: [
      "Taint analysis traces untrusted input, such as PR titles and issue bodies, into `run:` scripts to catch script injection, and flags `pull_request_target` workflows that check out untrusted fork code.",
      "Lint rules catch unpinned and typo-squatted third-party actions, missing or over-scoped token permissions, and self-hosted runners on public repos.",
      "Each rule maps to the OWASP Top 10 CI/CD Security Risks and a CWE. A Go parser built on actionlint feeds a Python analysis engine.",
      "Next: a dynamic verification stage that runs flagged workflows in a sandboxed test repo with a harmless canary payload and checks the runner logs, so only exploitable findings are reported.",
    ],
    tags: ["CI/CD security", "SAST", "DAST", "Supply chain", "Python", "Go"],
    year: "2026",
    kind: "Tooling",
    ongoing: true,
    links: [{ label: "Repository", href: "https://github.com/chinmaypant21/actionlens" }],
  },
  {
    title: "Improving endpoint discovery in OWASP Noir",
    summary:
      "Noir maps a codebase's endpoints and inputs so testers know what to attack. I improved its Next.js analysis and am working on a secure npm release path.",
    highlights: [
      "Noir now detects headers and cookies read through constants, such as webhook signature headers, in Next.js, Express, Koa and Hono apps. Previously these inputs were missed entirely.",
      "Next.js Server Actions are now reported as their own endpoint type, and form-data bodies list each field.",
      "Found and reported four gaps in Noir's Next.js analysis, and added regression tests that keep commented-out code out of scan results.",
      "Documented 10 GitHub Action inputs that had no documentation, in English and Korean.",
      "In progress: an npm release (`npx @owasp-noir/noir`) published with Trusted Publishing and signed provenance.",
    ],
    tags: ["Attack surface", "Static analysis", "Supply chain", "Next.js"],
    year: "2026",
    kind: "Tooling",
  },
  {
    title: "Scaling the OWASP Secure Headers web scan",
    project: "OWASP Secure Headers Project",
    summary:
      "OSHP reports how widely the web's top sites use security headers like CSP and HSTS. A 6-hour CI limit capped its monthly scan at 150K domains.",
    highlights: [
      "Rewrote the scanner with `asyncio`: ~2.2× faster, coverage up from 150K to 250K domains.",
      "Fixed failures that only appeared at scale: DNS rate limits, pool exhaustion, oversized CSP headers.",
      "Moved generated datasets from Git to versioned releases, ending merge conflicts.",
    ],
    tags: ["HTTP security headers", "Python", "asyncio", "GitHub Actions"],
    year: "2026",
    kind: "Engineering",
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
    title: "Engineer – Systems & Security",
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
      "Engineered a modular analytics SDK processing 100M+ events monthly across 5+ products.",
      "Led incident response for a live botnet attack: analysed logs to identify the attack, then mitigated it with rate limiting and normalized API error responses.",
    ],
    stack: ["\n"],
  },
  {
    company: "Growagro",
    title: "SDE-1",
    period: "Jun 2023 — Jul 2024",
    highlights: [
      "Built an in-house dashboard for employee and analytics data, with strict role-based access control over sensitive records.",
      "Built backend services and REST APIs in Python to process data and integrate in-house ML models into production.",
      "Implemented Auth0-based identity and access management with MFA, SSO, and token-based authentication",
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

export type NoteBlock =
  /** Paragraph. Inline. */
  | { type: "p"; text: string }
  /** Bulleted list. Inline. */
  | { type: "list"; items: string[] }
  /** Monospace block. `highlight` takes 1-based line numbers. */
  | { type: "code"; code: string; caption?: string; highlight?: number[] }
  /** Row of headline numbers. */
  | { type: "stats"; items: { value: string; label: string }[] };

export type Note = {
  /** The note opens at #note-<id>; link work cards there. */
  id: string;
  title: string;
  project: string;
  date: string;
  ongoing?: boolean;
  excerpt: string;
  sections: { heading: string; blocks: NoteBlock[] }[];
  links?: Link[];
};

export const notes: Note[] = [
  {
    id: "oshp-scan",
    title: "Scanning 250,000 sites in one CI job",
    project: "OWASP Secure Headers Project",
    date: "May — Jun 2026",
    excerpt:
      "How OSHP's monthly security-header scan grew from 150K to 250K domains: an async rewrite, a reverted first merge, and the problems that only show up at scale.",
    sections: [
      {
        heading: "At a glance",
        blocks: [
          {
            type: "stats",
            items: [
              { value: "2.2×", label: "Faster on a 2,000-domain benchmark" },
              { value: "250K", label: "Domains per monthly scan, up from 150K" },
              { value: "~3 h", label: "For a full 250K scan on GitHub Actions" },
            ],
          },
        ],
      },
      {
        heading: "Context",
        blocks: [
          {
            type: "p",
            text: "The [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/) publishes statistics on how the most-linked sites on the web use HTTP security headers such as `Content-Security-Policy` and `Strict-Transport-Security`. Once a month, a GitHub Actions job fetches the response headers of the top sites on the Majestic Million list.",
          },
          {
            type: "p",
            text: `That job has to finish within GitHub's 6-hour limit. At 200K domains it sometimes ran over, so the scan was capped at 150K. I [asked the maintainers](${OSHP}/discussions/296) whether a larger sample would be useful. They said yes, if it fit.`,
          },
        ],
      },
      {
        heading: "The rewrite",
        blocks: [
          {
            type: "p",
            text: "The original scanner fetched one domain at a time with `requests`. I rebuilt it on `asyncio` and `aiohttp`:",
          },
          {
            type: "list",
            items: [
              "A semaphore caps concurrent requests, and the scanner pauses briefly every 10,000 domains, so it never floods target sites or the runner.",
              "Fetch tasks put results on a queue, and a single writer task commits them to SQLite in batches. Only one task ever touches the database.",
              "If the job is cancelled or times out, in-flight requests stop, the queue drains and pending rows are saved. Checkpoints let an interrupted run resume where it stopped.",
              "The database schema and row format stayed the same, so nothing downstream had to change.",
            ],
          },
          {
            type: "p",
            text: "On a 2,000-domain benchmark it finished in about 1.8 minutes instead of 4, and captured slightly more records.",
          },
        ],
      },
      {
        heading: "What only broke at scale",
        blocks: [
          {
            type: "p",
            text: "The first version was merged quickly, then failed its first CI run with hundreds of timeouts from sites that loaded fine in a browser. We reverted it and kept the rewrite beside the old script while I found out why. None of these showed up on a laptop:",
          },
          {
            type: "list",
            items: [
              "**DNS.** Above about 20K domains, the runner's resolver started rate-limiting lookups. A single public resolver didn't help; rotating across four did.",
              "**Connection pool.** Each domain is visited once, so keep-alive connections are never reused, and timed-out ones were holding pool slots. Closing every connection after use freed them.",
              "**Header size.** Some sites send a `Content-Security-Policy` longer than aiohttp's 8 KB limit, which failed the whole request. The limit is now 64 KB.",
              "**Compression.** The scanner advertised Brotli support without the library to decode it, so some modern sites failed to parse.",
            ],
          },
          {
            type: "p",
            text: "The remaining failures came from TLS fingerprinting: some sites reject any handshake that doesn't look like a browser's. The original script had the same blind spot. `curl_cffi` can imitate a browser handshake, but it's a heavy dependency, so I documented the trade-off and left that call to the maintainers.",
          },
          {
            type: "p",
            text: `The second version ([PR #300](${OSHP}/pull/300)) completed a 250K-domain scan on GitHub Actions in about 3 hours, collecting around 850K header records. It has run every monthly scan since June.`,
          },
        ],
      },
      {
        heading: "Getting data out of Git",
        blocks: [
          {
            type: "p",
            text: `Each monthly run committed a fresh SQLite database and a million-line CSV back to the repository. That bloated history and caused merge conflicts on files nobody edits by hand. I [proposed](${OSHP}/discussions/306) publishing them as dated GitHub Release assets instead, with the scanner downloading its own input when it's missing.`,
          },
          {
            type: "p",
            text: `That shipped in [PR #307](${OSHP}/pull/307). Every run since has published a \`statistics-dataset-YYYY-MM-DD\` release, which also gives the project a versioned history of its data.`,
          },
        ],
      },
      {
        heading: "Takeaway",
        blocks: [
          {
            type: "p",
            text: "Benchmarks on my laptop measured the wrong thing. DNS limits, pool exhaustion and fingerprinting only appeared on shared CI infrastructure at full scale. Testing in the target environment earlier would have saved a revert.",
          },
        ],
      },
    ],
    links: [
      { label: "PR #297", href: `${OSHP}/pull/297` },
      { label: "PR #300", href: `${OSHP}/pull/300` },
      { label: "PR #307", href: `${OSHP}/pull/307` },
    ],
  },
  {
    id: "noir-nextjs",
    title: "What Noir missed in Next.js apps",
    project: "OWASP Noir",
    date: "May — Jun 2026",
    excerpt:
      "An attack-surface tool is only as good as the inputs it reports. Four gaps I found running OWASP Noir on Next.js code, and how they were closed.",
    sections: [
      {
        heading: "Context",
        blocks: [
          {
            type: "p",
            text: `[OWASP Noir](${NOIR}) reads source code and lists every endpoint with its parameters, headers and cookies. Testers and DAST tools use that list as a map of what to attack, so a missing input is worse than a noisy one: nobody tests what they can't see.`,
          },
          {
            type: "p",
            text: `Running Noir on Next.js code, I filed four issues ([#1791](${NOIR}/issues/1791), [#1792](${NOIR}/issues/1792), [#1793](${NOIR}/issues/1793), [#1794](${NOIR}/issues/1794)) where its output was incomplete or misleading, then worked through them.`,
          },
        ],
      },
      {
        heading: "Inputs read through constants",
        blocks: [
          {
            type: "p",
            text: 'Noir found `req.headers["x-token"]` but silently dropped `req.headers[SIGNATURE_HEADER]`. Constants are common for exactly the headers that matter most, like webhook signatures and auth tokens.',
          },
          {
            type: "p",
            text: `A static analyzer can't always resolve a constant's value, so instead of guessing, Noir now reports the identifier with an \`unresolved\` tag. The tester sees that the endpoint reads a signature header and can look up its name in the source. I applied the same patterns to the shared JavaScript extractor used for Express, Koa and Hono-style handlers ([PR #1858](${NOIR}/pull/1858)).`,
          },
          {
            type: "code",
            code: [
              "GET /api/users/{id}",
              "  ○ headers:",
              "    ├── x-token",
              "    └── SIGNATURE_HEADER [unresolved]",
              "  ○ cookies:",
              "    ├── session",
              "    └── SESSION_COOKIE [unresolved]",
              "  ○ path: id",
            ].join("\n"),
            caption: "Noir output for one route. Highlighted inputs were previously dropped.",
            highlight: [4, 7],
          },
        ],
      },
      {
        heading: "Output that matches the framework",
        blocks: [
          {
            type: "p",
            text: `Next.js Server Actions were listed as \`POST /banUser\`. That route doesn't exist: the browser calls an action by ID on the page's own URL, so a tester who requests the path gets nothing. Actions now have their own \`server-action\` kind in the endpoint model, and the console shows it ([PR #1859](${NOIR}/pull/1859)).`,
          },
          {
            type: "code",
            code: ["# before", "POST /banUser", "", "# after", "POST [server-action] banUser"].join("\n"),
            highlight: [5],
          },
          {
            type: "p",
            text: "`formData` bodies had a similar problem. They printed as `file=&description=&folder=`, which reads like empty query parameters, and now print as a list of form fields.",
          },
          {
            type: "code",
            code: [
              "# before",
              "  ○ body: file=&description=&folder=",
              "",
              "# after",
              "  ○ body:",
              "    ├── file",
              "    ├── description",
              "    └── folder",
            ].join("\n"),
            highlight: [5, 6, 7, 8],
          },
        ],
      },
      {
        heading: "Commented-out code",
        blocks: [
          {
            type: "p",
            text: `Handlers that had been commented out still showed up as live endpoints. A parallel fix landed upstream while my PR was open, so the maintainers merged my regression test instead, to keep the bug from coming back ([PR #1823](${NOIR}/pull/1823)).`,
          },
        ],
      },
      {
        heading: "Takeaway",
        blocks: [
          {
            type: "p",
            text: "For attack-surface tools, being explicit beats looking clean. Reporting an input the analyzer can't fully resolve, and saying so, is more useful than a tidy map with holes in it.",
          },
        ],
      },
    ],
    links: [
      { label: "PR #1858", href: `${NOIR}/pull/1858` },
      { label: "PR #1859", href: `${NOIR}/pull/1859` },
      { label: "PR #1823", href: `${NOIR}/pull/1823` },
    ],
  },
  {
    id: "noir-npm",
    title: "Publishing a security tool to npm, safely",
    project: "OWASP Noir",
    date: "Jul 2026",
    ongoing: true,
    excerpt:
      "npm would make Noir easier to install, and it's also one of the most targeted package registries. Working notes from a design that's still in progress.",
    sections: [
      {
        heading: "Context",
        blocks: [
          {
            type: "p",
            text: `Noir ships as prebuilt binaries for Linux and macOS. Many of its users work in JavaScript, so \`npx @owasp-noir/noir\` is a natural install path ([#1861](${NOIR}/issues/1861)).`,
          },
          {
            type: "p",
            text: "The lead maintainer was hesitant, with good reason. A new distribution channel is new attack surface, and npm has seen repeated account takeovers and malicious package versions. The question wasn't whether npm is convenient, but whether it could be done without becoming the weakest link.",
          },
        ],
      },
      {
        heading: "The draft",
        blocks: [
          {
            type: "p",
            text: `[PR #2244](${NOIR}/pull/2244) adds a thin wrapper package whose install script downloads the release binary for the user's platform, and a workflow that publishes it whenever a GitHub release goes out. The security work is in how it publishes:`,
          },
          {
            type: "list",
            items: [
              "**No stored token.** It's built for npm Trusted Publishing: the workflow proves its identity to npm with a short-lived OIDC token, so there's no long-lived publish token in the repo to steal.",
              "**Provenance.** `npm publish --provenance` attaches a signed statement linking each version to the repository, commit and workflow that built it. Users can check it with `npm audit signatures`.",
              "**Least privilege.** The publish job only gets `contents: read` and `id-token: write`.",
            ],
          },
        ],
      },
      {
        heading: "Still open",
        blocks: [
          {
            type: "p",
            text: "Provenance proves where the npm package came from, but the binary is downloaded by the install script, outside that chain. Two ways to close the gap:",
          },
          {
            type: "list",
            items: [
              "Pin each binary's SHA-256 into the package at publish time and check it before installing, so the signed package vouches for the binary.",
              "Publish each platform's binary as its own npm package, as esbuild does. Every binary is then covered by provenance, and installs work with `--ignore-scripts`.",
            ],
          },
          {
            type: "p",
            text: "The second is stronger but means more packages to maintain. The maintainers are on board with the direction, and I'm picking the work back up.",
          },
        ],
      },
    ],
    links: [
      { label: "Draft PR #2244", href: `${NOIR}/pull/2244` },
      { label: "Issue #1861", href: `${NOIR}/issues/1861` },
    ],
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
      "Participated in and mentored at 30+ national hackathons, reviewing over 300 projects across software engineering, cybersecurity, and AI.\n\nCo-organised two editions of India's largest student-run hackathon, managing operations for 2,500+ attendees.",
  },
  {
    title: "Volunteer contributor",
    org: "CSI Linux",
    period: "Aug 2022 — May 2024",
    summary:
      "Contributed to the open-source CSI Linux project, improving its OSINT and digital forensics tooling alongside a global community of security professionals.",
  },
];
