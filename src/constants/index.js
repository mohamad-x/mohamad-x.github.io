import {
  // UI / icons
  iconLogo, iconGithub, iconExternal,
  // mini-tech badges (for Services icons)
  techReact, techVite, techFM, techGSAP, techKQL, techPython, techPowershell, techJava,
  // logos for skills/certs/experience/education
  logoMicrosoft, logoAWS, logoCompTIA, logoITIL,
  logoNewEra, logoDTE, logoUSCRI, logoWGU,
  logoPython, logoPowerShell, logoJava, logoKQL,
  logoAzure, logoEntra, logoDefender, logoSentinel,
  logoSentinelOne, logoCrowdStrike, logoProofpoint,
  logoLinux, logoGit, logoNetworking, logoGRC,
  // generic placeholder
  placeholderImg
} from '../assets/index.js'


/* --------------------------- Navigation --------------------------- */
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'education', title: 'Education' },
  { id: 'skills', title: 'Skills' },
  { id: 'certs', title: 'Certifications' },
  { id: 'works', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

/* ----------------------------- Brand ------------------------------ */
export const brand = {
  logo: 'iconLogo', // data URL -> always resolves
  name: 'Mohamad Abdulazim',
  title: 'Senior SOC Analyst • Threat Detection Engineer',
  location: 'West Bloomfield, MI • USA Citizen',
  summary:
    'Cybersecurity specialist focused on threat detection, SOC ops, and automation with KQL, Microsoft Defender, Python, and PowerShell. Reduced alert fatigue and sped up incident response by building proactive detections and workflows.',
  ctas: {
    primary: { label: 'Download Resume (PDF)', href: '/Mohamad_Abdulazim_Resume.pdf' },
    secondary: { label: 'Contact Me', href: '#contact' },
  },
  contact: {
    phone: '(248) 918-6626',
    email: 'abdulazim.mohamad20@gmail.com',
  },
}

/* ---------------------------- Services ---------------------------- */
export const services = [
  { title: 'Threat Detection', icon: techKQL, desc: 'KQL, Microsoft Defender, Azure Sentinel, CrowdStrike, Splunk, OpenSearch.' },
  { title: 'Automation & Scripting', icon: techPython, desc: 'Python and PowerShell to eliminate toil and accelerate triage.' },
  { title: 'Cloud & M365', icon: techVite, desc: 'Azure, AWS (EC2), Microsoft 365—secure-by-default configurations.' },
  { title: 'Frameworks & GRC', icon: techGSAP, desc: 'SOC 2, MITRE ATT&CK, NIST, PCI DSS, ITIL-aligned controls.' },
]

/* ----------------------------- Skills ----------------------------- */
export const skillsCategories = [
  { id: 'top',  title: 'Recommended', tooltip: 'Core strengths recruiters should see first' },
  { id: 'lang', title: 'Languages' },
  { id: 'siem', title: 'SIEM & Analytics' },
  { id: 'sec',  title: 'Security Stack' },
  { id: 'cloud',title: 'Cloud & Platforms' },
  { id: 'ops',  title: 'Ops & Tooling' },
  { id: 'frameworks', title: 'Frameworks & Practices' },
  { id: 'all',  title: 'All' },
]

export const skills = [
  // Core / Recommended
  { name: 'KQL (Kusto)', logo: logoKQL, level: 5, levelLabel: 'Expert', years: 3, top:true,
    cats:['lang','siem'], tags:['Detections','Threat hunting','Sentinel'] },
  { name: 'Microsoft Sentinel', logo: logoSentinel, level: 5, levelLabel: 'Expert', years: 3, top:true,
    cats:['siem','sec','cloud'], tags:['UEBA','Rules','Workbooks'] },
  { name: 'Microsoft Defender', logo: logoDefender, level: 5, levelLabel: 'Expert', years: 3, top:true,
    cats:['sec'], tags:['EDR','XDR','Hardening'] },
  { name: 'Entra ID (Azure AD)', logo: logoEntra, level: 4, levelLabel: 'Advanced', years: 3, top:true,
    cats:['cloud','sec'], tags:['Identity','Conditional Access','MFA'] },
  { name: 'Python', logo: logoPython, level: 4, levelLabel: 'Advanced', years: 3, top:true,
    cats:['lang','ops'], tags:['Automation','Data parsing'] },
  { name: 'PowerShell', logo: logoPowerShell, level: 4, levelLabel: 'Advanced', years: 4, top:true,
    cats:['lang','ops'], tags:['IR tooling','Admin'] },

  // Languages
  { name: 'Java', logo: logoJava, level: 3, levelLabel: 'Intermediate', years: 2,
    cats:['lang'], tags:['OOP','APIs'] },

  // Security Stack
  { name: 'SentinelOne', logo: logoSentinelOne, level: 4, levelLabel: 'Advanced', years: 2,
    cats:['sec'], tags:['EDR','Threat ops'] },
  { name: 'CrowdStrike', logo: logoCrowdStrike, level: 3, levelLabel: 'Intermediate', years: 2,
    cats:['sec'], tags:['EDR','Telemetry'] },
  { name: 'Proofpoint', logo: logoProofpoint, level: 4, levelLabel: 'Advanced', years: 2,
    cats:['sec'], tags:['Email sec','Tuning','DMARC'] },

  // Cloud & Platforms
  { name: 'Azure', logo: logoAzure, level: 4, levelLabel: 'Advanced', years: 3,
    cats:['cloud'], tags:['Networking','Monitor','Arc'] },
  { name: 'AWS', logo: logoAWS, level: 3, levelLabel: 'Intermediate', years: 2,
    cats:['cloud'], tags:['IAM','VPC','KMS'] },

  // Ops & Tooling
  { name: 'Git', logo: logoGit, level: 3, levelLabel: 'Intermediate', years: 3,
    cats:['ops'], tags:['PRs','Branching'] },
  { name: 'Linux', logo: logoLinux, level: 3, levelLabel: 'Intermediate', years: 3,
    cats:['ops'], tags:['Hardening','Scripting'] },
  { name: 'Networking', logo: logoNetworking, level: 3, levelLabel: 'Intermediate', years: 3,
    cats:['ops'], tags:['Segmentation','Zero Trust'] },

  // Frameworks & Practices
  { name: 'GRC & Compliance', logo: logoGRC, level: 4, levelLabel: 'Advanced', years: 3,
    cats:['frameworks'], tags:['PCI','Audit','Reporting'] },
  { name: 'ITIL 4', logo: logoITIL, level: 3, levelLabel: 'Intermediate', years: 2,
    cats:['frameworks'], tags:['Incidents','Changes','Problem mgmt'] },
  { name: 'CompTIA Security+', logo: logoCompTIA, level: 4, levelLabel: 'Advanced', years: 3,
    cats:['frameworks'], tags:['Core security'] },
  { name: 'Microsoft Security (Certs)', logo: logoMicrosoft, level: 4, levelLabel: 'Advanced', years: 3,
    cats:['frameworks'], tags:['CSA','SOA','Network Eng'] },
]

/* --------------------------- Experience --------------------------- */
export const experiences = [
  {
    title: 'Senior SOC Analyst',
    company: 'New Era Technology — Detroit, MI',
    icon: logoNewEra,
    date: 'Oct 2022 – Present',
    points: [
      'Incident response across Defender, Sentinel, Entra ID, SentinelOne, CrowdStrike; ~20% faster resolution.',
      'Customer-tailored KQL detections lowered false positives by >20%.',
      'Proactive threat hunting, Proofpoint tuning (~15% better), tabletops, and mentoring.',
    ],
  },
  {
    title: 'IT Security Analyst & Compliance',
    company: 'DTE Energy — Detroit, MI',
    icon: logoDTE,
    date: 'Mar 2021 – Oct 2022',
    points: [
      'Managed GRC audits; ~10% improvement in compliance.',
      'Analyzed PCI updates & security data (Alteryx/SAP) for clearer exec reporting.',
    ],
  },
  {
    title: 'IT Specialist (Contract)',
    company: 'USCRI — Dearborn, MI',
    icon: logoUSCRI,
    date: 'Aug 2020 – Feb 2021',
    points: [
      'Modernized local office IT; maintained printers, IoT, and security systems.',
    ],
  },
]

/* ---------------------------- Education --------------------------- */
export const education = [
  {
    school: 'Western Governors University',
    degree: 'MBA',
    date: 'Expected Aug 2025',
    range: '2024 – Present',
    logo: logoWGU,
    honors: ['Leadership, strategy, finance focus'],
  },
  {
    school: 'Western Governors University',
    degree: 'M.S. Cybersecurity & Information Assurance',
    date: 'Jun 2024',
    range: '2023 – 2024',
    logo: logoWGU,
    honors: ['Security architecture', 'Threat management', 'Governance & risk'],
  },
  {
    school: 'Western Governors University',
    degree: 'B.S. Software Engineering',
    date: 'Dec 2022',
    range: '2020 – 2022',
    logo: logoWGU,
    honors: ['OOP, data structures, web development'],
  },
]

/* ----------------------------- Projects -------------------------- */
/* Tags must be any of: ['KQL','Python','PowerShell','Java'] */
export const projects = [
  {
    name: 'IOC Aggregator',
    description: 'Python tool that merges VirusTotal, AbuseIPDB, and CriminalIP into a unified, prioritized IOC report (multithreaded).',
    tags: ['Python'],
    image: placeholderImg,
    caseStudy: '/projects/case-01.html',
    repo: '', live: ''
  },
  {
    name: 'Multi-IP Port Scanner',
    description: 'PowerShell utility to scan multiple ports across multiple public IPs—cut manual SOC effort by ~50%.',
    tags: ['PowerShell'],
    image: placeholderImg,
    caseStudy: '/projects/case-02.html',
    repo: '', live: ''
  },
  {
    name: 'Compromise Log Checker',
    description: 'PowerShell scripts to quickly verify cmd/PowerShell logs on compromised endpoints.',
    tags: ['PowerShell'],
    image: placeholderImg,
    caseStudy: '/projects/case-03.html',
    repo: '', live: ''
  },
  {
    name: 'Detection Rule Pack',
    description: 'Dozens of custom KQL rules for Microsoft Defender & Azure Sentinel—noise down, visibility up.',
    tags: ['KQL'],
    image: placeholderImg,
    caseStudy: '/projects/case-04.html',
    repo: '', live: ''
  },
  {
    name: 'RangeForce Onboarding Track',
    description: 'Structured Linux triage, phishing, MITRE, and Windows forensics curriculum; onboarding ramp cut by ~30%.',
    tags: ['KQL', 'PowerShell'],
    image: placeholderImg,
    caseStudy: '/projects/case-05.html',
    repo: '', live: ''
  },
  {
    name: 'Email Detection Tuning',
    description: 'Proofpoint fine-tuning to reduce spam/phish misses by ~15%; playbooks and dashboards included.',
    tags: ['KQL', 'Python'],
    image: placeholderImg,
    caseStudy: '/projects/case-06.html',
    repo: '', live: ''
  },
]

/* ------------------------------ Links ----------------------------- */
export const links = {
  github:  { icon: iconGithub,  href: 'https://github.com/mohamad-x' },
  external:{ icon: iconExternal, href: 'https://www.linkedin.com/in/mohamad-abdulazim-651a85199' },
}

/* ------------------------- Certifications ------------------------- */
export const certifications = [
  {
    name: 'Microsoft Certified: Cybersecurity Architect',
    issuer: 'Microsoft',
    logo: logoMicrosoft,
    url: '',
    issued: '2024',
    details: [
      'End-to-end security strategy & architecture',
      'Zero Trust, identity, data, device, infra, and app controls',
      'Risk-based prioritization and governance',
    ],
  },
  {
    name: 'Microsoft Certified: Security Operations Analyst Associate',
    issuer: 'Microsoft',
    logo: logoMicrosoft,
    url: '',
    details: [
      'KQL detections in Defender & Sentinel',
      'Threat hunting, incident response, and playbook tuning',
      'Hardening via findings & automated actions',
    ],
  },
  {
    name: 'Microsoft Certified: Network Engineer',
    issuer: 'Microsoft',
    logo: logoMicrosoft,
    url: '',
    details: [
      'Secure network design & segmentation',
      'Azure networking + hybrid connectivity',
      'Monitoring and resilience patterns',
    ],
  },
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    logo: logoAWS,
    url: '',
    details: [
      'Well-Architected Framework, security by design',
      'VPC, IAM, KMS, CloudWatch/CloudTrail',
      'Cost/perf tradeoffs & HA',
    ],
  },
  { name: 'CompTIA PenTest+', issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Planning & scoping', 'Vuln analysis', 'Exploitation & reporting'] },
  { name: 'CompTIA CySA+',   issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Threat detection & analysis', 'Incident response', 'Automation workflows'] },
  { name: 'CompTIA Linux+',  issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Linux administration', 'Security hardening', 'Scripting'] },
  { name: 'CompTIA Security+', issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Core security concepts', 'Risk, crypto, identity'] },
  { name: 'CompTIA Project+', issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Initiation to closure', 'Stakeholders & risk', 'Agile basics'] },
  { name: 'CompTIA A+', issuer: 'CompTIA', logo: logoCompTIA, url: '', details: ['Hardware & OS fundamentals', 'Troubleshooting process'] },
  { name: 'ITIL® 4 Foundation', issuer: 'AXELOS / PeopleCert', logo: logoITIL, url: '', details: ['Service value system', 'Change, incident, problem mgmt'] },
]
