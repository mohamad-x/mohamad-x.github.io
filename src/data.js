export const DATA = {
  name: "Mohamad Abdulazim",
  title: "Security & Compliance Analyst · GRC · Security Operations",
  blurb: "Security and compliance professional with 6+ years of progressive IT/cybersecurity experience, including 5+ years across security operations, compliance, vulnerability management, risk analysis, and remediation. Combines senior SOC leadership with hands-on GRC, NIST CSF-aligned security workflows, vulnerability management, automation, and executive-ready risk communication.",

  links: {
    email: "abdulazim.mohamad20@gmail.com",
    phone: "+1 (248) 918-6626",
    github: "https://github.com/mohamad-x",
    linkedin: "https://www.linkedin.com/in/mohamad-abdulazim-651a85199/",
    resume: "/resume.html"
  },

  skills: [
    { group: "Governance, Risk & Compliance", items: ["NIST CSF","PCI / GRC","Security Controls","Audit Support","Risk Analysis","Remediation Tracking","ServiceNow","Jira","ITIL 4"] },
    { group: "Vulnerability & Resilience", items: ["Qualys","Vulnerability Management","Findings Analysis","Remediation Prioritization","Disaster Recovery / BCP","Recovery Plan Testing","Tabletop Exercises"] },
    { group: "Security Operations & Detection", items: ["Incident Response","Threat Hunting","Detection Engineering (KQL)","Microsoft Defender","Microsoft Sentinel","SentinelOne","CrowdStrike","Splunk","Proofpoint","MITRE ATT&CK"] },
    { group: "Cloud, Automation & AppSec", items: ["Azure","AWS (EC2, IAM, S3, CloudWatch)","Microsoft 365","Entra ID","Python","PowerShell","XSS","CSRF","SQL Injection","Authentication / Authorization"] }
  ],

  jobs: [
    { role: "Senior SOC Analyst", company: "New Era Technology (MSSP)", dates: "Oct 2022 – Present", bullets: [
      "Lead Tier 2/3 incident response and serve as a primary escalation point across Microsoft Defender, SentinelOne, CrowdStrike, AWS, email, identity, endpoint, and network security environments protecting thousands of endpoints; reduced response time by 20%.",
      "Assess security findings and control/configuration exposure across customer environments, determine business risk, and provide prioritized remediation guidance to technical teams and client leadership.",
      "Develop NIST CSF-aligned security workflows, playbooks, tabletop exercises, and standardized procedures that improve investigation quality, control consistency, documentation, and SLA adherence.",
      "Lead proactive threat hunting and MITRE ATT&CK-aligned detection engineering using KQL and PowerShell, improving true-positive fidelity and reducing alert fatigue by 25%.",
      "Document technical findings, produce executive-ready risk and remediation guidance, conduct post-incident reviews, drive corrective actions, and build Python/PowerShell automation to scale high-volume investigations."
    ]},
    { role: "IT Security Analyst & Compliance (Contract)", company: "DTE Energy · Regulated Utility / Critical Infrastructure", dates: "Mar 2021 – Oct 2022", bullets: [
      "Led PCI/GRC audit activities, vulnerability tracking, remediation planning, and risk prioritization, improving compliance posture by 10%.",
      "Tracked security and compliance findings through remediation, helping stakeholders prioritize corrective actions based on risk and operational impact.",
      "Built Alteryx/SAP dashboards and analytics to improve compliance visibility, vulnerability/risk reporting, and leadership decision-making."
    ]},
    { role: "IT Specialist (Contract)", company: "USCRI", dates: "Aug 2020 – Feb 2021", bullets: [
      "Rebuilt and secured field-office infrastructure; managed endpoints, networks, systems, hardware lifecycle, and endpoint hardening to improve reliability, uptime, and security."
    ]}
  ],

  projects: [
    { title:"Threat Intelligence Scanner", desc:"Built a custom IOC enrichment and risk-analysis tool integrating VirusTotal, AbuseIPDB, and CriminalIP to accelerate investigations and contextualize suspicious indicators.", stack:["Python","APIs","IOC Enrichment","Risk Analysis"], link:"https://github.com/mohamad-x" },
    { title:"AI-Enabled Threat Detection Capstone", desc:"Graduate cybersecurity capstone focused on AI-assisted threat detection and security monitoring.", stack:["Cybersecurity","AI","Threat Detection"], link:"https://github.com/mohamad-x" },
    { title:"KQL Detection Engineering Pack", desc:"Created and deployed custom KQL detections in Microsoft Defender and Sentinel to strengthen proactive threat hunting and security-monitoring coverage.", stack:["KQL","Microsoft Defender","Microsoft Sentinel","MITRE ATT&CK"], link:"https://github.com/mohamad-x" },
    { title:"PowerShell Port Scanner", desc:"Automates multi-port scanning across multiple IP addresses to accelerate network triage and investigation workflows.", stack:["PowerShell","Network Security","Automation"], link:"https://github.com/mohamad-x" },
    { title:"Windows Log Collector", desc:"Automates collection of key forensic and security logs from Windows endpoints to support incident response and evidence gathering.", stack:["PowerShell","Windows","Incident Response"], link:"https://github.com/mohamad-x" }
  ],

  education: [
    { degree: "MBA", school: "Western Governors University", detail: "Dec 2025", logo: "wgu" },
    { degree: "M.S. Cybersecurity & Information Assurance", school: "Western Governors University", detail: "Jun 2024", logo: "wgu" },
    { degree: "B.S. Software Engineering", school: "Western Governors University", detail: "Dec 2022", logo: "wgu" }
  ],

  certs: [
    { vendor: "Microsoft", items: ["Information Security Administrator (SC-401)","Cybersecurity Architect","Security Operations Analyst","Azure Network Engineer"] },
    { vendor: "AWS", items: ["Certified Solutions Architect – Associate"] },
    { vendor: "CompTIA", items: ["PenTest+","CySA+","Linux+","Security+","Project+","A+"] },
    { vendor: "ITIL", items: ["ITIL 4 Foundation"] }
  ]
}
