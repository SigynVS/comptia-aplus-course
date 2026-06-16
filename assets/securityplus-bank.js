// CompTIA Security+ (SY0-701) question bank. Vanilla JS, no dependencies.
window.EXAM_BANK = [
  /* Domain 1 — General Security Concepts */
  { d:"General Security Concepts", q:"An attacker alters database values so reports are wrong. Which CIA pillar is violated?", o:["Confidentiality","Integrity","Availability","Non-repudiation"], a:1, e:"Unauthorized alteration violates integrity." },
  { d:"General Security Concepts", q:"A visible camera that discourages intruders is which control type?", o:["Preventive","Detective","Deterrent","Corrective"], a:2, e:"A visible deterrent discourages attackers." },
  { d:"General Security Concepts", q:"Which provides integrity AND non-repudiation?", o:["Symmetric encryption","Hashing alone","A digital signature","Salting"], a:2, e:"A digital signature signs a hash with the private key." },
  { d:"General Security Concepts", q:"Locks, fences, and bollards are which control category?", o:["Technical","Managerial","Operational","Physical"], a:3, e:"These are physical controls." },
  { d:"General Security Concepts", q:"What is the core principle of Zero Trust?", o:["Trust the internal network","Never trust, always verify","Trust signed certs only","Trust after login"], a:1, e:"Zero Trust grants no implicit trust by location." },
  { d:"General Security Concepts", q:"Random data added before hashing a password is called…", o:["A nonce","Salt","A token","Key escrow"], a:1, e:"Salting defeats rainbow tables." },

  /* Domain 2 — Threats, Vulnerabilities & Mitigations */
  { d:"Threats, Vulnerabilities & Mitigations", q:"Trying one common password across many accounts is…", o:["Brute force","Password spraying","Dictionary attack","Rainbow table"], a:1, e:"Spraying avoids lockouts by limiting attempts per account." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"A flaw exploited before any patch exists is a…", o:["Logic bomb","Zero-day","Replay attack","Race condition"], a:1, e:"A zero-day has no vendor fix yet." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Which actor is stealthy, well-funded, often nation-state backed?", o:["Script kiddie","Hacktivist","APT","Insider"], a:2, e:"An APT is sophisticated and persistent." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Malicious input manipulating a backend database is…", o:["XSS","SQL injection","CSRF","Buffer overflow"], a:1, e:"SQL injection targets the database." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Which mitigation limits users to only needed access?", o:["Least privilege","Full trust","Open sharing","SSO"], a:0, e:"Least privilege reduces risk." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Compromising a site a target group frequents is a…", o:["Watering hole attack","Smishing","On-path attack","Logic bomb"], a:0, e:"A watering hole poisons a frequently visited site." },

  /* Domain 3 — Security Architecture */
  { d:"Security Architecture", q:"Which replaces a card number with a reversible value via a vault?", o:["Masking","Tokenization","Hashing","Obfuscation"], a:1, e:"Tokenization maps data to a token via a vault." },
  { d:"Security Architecture", q:"Which device protects web apps at Layer 7?", o:["NGFW","WAF","IDS","Proxy"], a:1, e:"A WAF inspects HTTP/S for web apps." },
  { d:"Security Architecture", q:"Which data state is protected primarily by TLS?", o:["At rest","In transit","In use","Archived"], a:1, e:"TLS protects data in transit." },
  { d:"Security Architecture", q:"A design that denies access when a control fails is…", o:["Fail-open","Fail-closed","Open by default","Trust-on-first-use"], a:1, e:"Fail-closed is a secure default." },
  { d:"Security Architecture", q:"Which prevents sensitive data from leaving the organization?", o:["DLP","DHCP","DNS","DMARC"], a:0, e:"DLP blocks exfiltration." },
  { d:"Security Architecture", q:"Which gives the BEST resilience to a regional outage?", o:["A single UPS","Geographic redundancy","A faster CPU","More RAM"], a:1, e:"Cross-region replication survives a regional failure." },

  /* Domain 4 — Security Operations */
  { d:"Security Operations", q:"Which access model uses system-enforced labels and is most rigid?", o:["DAC","MAC","RBAC","ABAC"], a:1, e:"MAC enforces labels centrally." },
  { d:"Security Operations", q:"During collection, what is captured FIRST?", o:["Disk image","System RAM","Offsite backups","Printed logs"], a:1, e:"Order of volatility: capture RAM first." },
  { d:"Security Operations", q:"Which platform automates response with playbooks?", o:["SIEM","SOAR","IDS","DLP"], a:1, e:"SOAR orchestrates/automates response." },
  { d:"Security Operations", q:"Correct order of the first three IR phases?", o:["Containment, Detection, Recovery","Preparation, Detection & Analysis, Containment","Recovery, Lessons, Preparation","Eradication, Recovery, Detection"], a:1, e:"Preparation → Detection & Analysis → Containment." },
  { d:"Security Operations", q:"Which model grants access by attributes like department and time?", o:["RBAC","ABAC","DAC","MAC"], a:1, e:"ABAC evaluates attributes/policy." },
  { d:"Security Operations", q:"Which documents who handled evidence and when?", o:["SLA","Chain of custody","CVSS","Playbook"], a:1, e:"Chain of custody preserves admissibility." },

  /* Domain 5 — Program Management */
  { d:"Program Management", q:"Buying cyber-insurance is which risk response?", o:["Accept","Avoid","Transfer","Mitigate"], a:2, e:"Insurance transfers risk to a third party." },
  { d:"Program Management", q:"Which formula gives Annualized Loss Expectancy?", o:["SLE − ARO","SLE × ARO","ARO ÷ SLE","SLE + ARO"], a:1, e:"ALE = SLE × ARO." },
  { d:"Program Management", q:"Which document defines specific vendor deliverables and timeline?", o:["NDA","SOW","MOU","AUP"], a:1, e:"A Statement of Work specifies scope and schedule." },
  { d:"Program Management", q:"Which regulation governs payment-card data?", o:["HIPAA","PCI DSS","SOX","GDPR"], a:1, e:"PCI DSS protects cardholder data." },
  { d:"Program Management", q:"Discontinuing a risky service entirely is which response?", o:["Accept","Avoid","Transfer","Mitigate"], a:1, e:"Eliminating the activity avoids the risk." },
  { d:"Program Management", q:"Which analysis identifies critical processes and drives RTO/RPO?", o:["BIA","CVSS","SIEM","DLP"], a:0, e:"A Business Impact Analysis sets recovery objectives." }
];
