export const DATA = {
  name: "Mohamad Abdulazim",
  title: "Senior SOC Analyst · Threat Detection Engineer",
  blurb: "Defends organizations from advanced threats with SOC operations, detection engineering, and automation using KQL, Microsoft Defender, Python, and PowerShell.",
  
  links: {
    email: "abdulazim.mohamad20@gmail.com",
    phone: "+1 (248) 918-6626",
    github: "https://github.com/mohamad-x",
    linkedin: "https://www.linkedin.com/in/mohamad-abdulazim-651a85199/"
  },

  skills: [
    { group: "Security & Operations", items: ["SOC Triage","Incident Response","Threat Hunting","Detection Engineering (KQL)","Microsoft Defender","SentinelOne","CrowdStrike"] },
    { group: "Automation & Cloud", items: ["Python","PowerShell","Azure","AWS (EC2)","Microsoft 365","JAVA","Git/GitHub"] },
    { group: "Frameworks", items: ["SOC 2","MITRE","NIST","PCI DSS","ITIL"] }
  ],
  jobs: [
    { role: "Senior SOC Analyst", company: "New Era Technology (MSSP)", dates: "Oct 2022 – Present", bullets: [
      "Designed KQL detections per tenant; reduced false positives >20%.",
      "Streamlined triage and IR; reduced MTTR ~20% across clients.",
      "Improved phishing detection ~15% via ProofPoint tuning.",
      "Delivered tabletop exercises and mentored junior analysts."
    ]},
    { role: "IT Security Analyst & Compliance", company: "DTE Energy", dates: "Mar 2021 – Oct 2022", bullets: [
      "Managed GRC audits; improved compliance ~10%.",
      "Built PCI/security analytics with Alteryx and SAP for exec decisions."
    ]},
    { role: "IT Specialist (Contract)", company: "USCRI", dates: "Aug 2020 – Feb 2021", bullets: [
      "Modernized local office infrastructure for reliability and performance."
    ]}
  ],
  projects: [
    { title:"Threat Intelligence Aggregator", desc:"Consolidates IOCs from VirusTotal, AbuseIPDB, and CriminalIP; prioritizes scores for fast triage.", stack:["Python","Multithreading","APIs"], link:"https://github.com/mohamad-x" },
    { title:"PowerShell Port Scanner", desc:"Scans many ports across many IPs; reduced manual triage ~50%.", stack:["PowerShell"], link:"https://github.com/mohamad-x" },
    { title:"Windows Log Collector", desc:"Automates collection of key forensic logs from compromised devices.", stack:["PowerShell"], link:"https://github.com/mohamad-x" },
    { title:"KQL Detection Pack", desc:"Dozens of custom rules for Microsoft Defender and Sentinel.", stack:["KQL","Defender","Sentinel"], link:"https://github.com/mohamad-x" }
  ],
  education: [
    { degree: "MBA", school: "Western Governors University", detail: "Dec 2025", logo: "wgu" },
    { degree: "M.S. Cybersecurity & IA", school: "Western Governors University", detail: "Jun 2024", logo: "wgu" },
    { degree: "B.S. Software Engineering", school: "Western Governors University", detail: "Dec 2022", logo: "wgu" }
  ],

  certs: [
    { vendor: "Microsoft", items: ["Cybersecurity Architect","Security Operations Analyst","Network Engineer"] },
    { vendor: "AWS", items: ["Solutions Architect"] },
    { vendor: "CompTIA", items: ["PenTest+","CySA+","Linux+","Security+","Project+","A+"] },
    { vendor: "ITIL", items: ["ITIL 4 Foundation"] }
  ]
}
