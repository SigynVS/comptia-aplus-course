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
  { d:"Program Management", q:"Which analysis identifies critical processes and drives RTO/RPO?", o:["BIA","CVSS","SIEM","DLP"], a:0, e:"A Business Impact Analysis sets recovery objectives." },

  /* ===== Expansion to ~15 per domain ===== */
  /* General Security Concepts (+9) */
  { d:"General Security Concepts", q:"Which control fixes a system after an incident (e.g., restoring backups)?", o:["Preventive","Detective","Corrective","Deterrent"], a:2, e:"Corrective controls remediate after an event." },
  { d:"General Security Concepts", q:"An alternate control used when the primary isn't feasible is…", o:["Compensating","Directive","Physical","Managerial"], a:0, e:"A compensating control substitutes for an infeasible one." },
  { d:"General Security Concepts", q:"Which proves a sender cannot deny sending a message?", o:["Confidentiality","Availability","Non-repudiation","Redundancy"], a:2, e:"Non-repudiation (digital signatures) prevents denial." },
  { d:"General Security Concepts", q:"Which uses one shared key for encryption and decryption?", o:["Symmetric","Asymmetric","Hashing","PKI"], a:0, e:"Symmetric uses a single shared key (e.g., AES)." },
  { d:"General Security Concepts", q:"Which checks whether a certificate has been revoked?", o:["CSR","OCSP","CN","SAN"], a:1, e:"OCSP (and CRLs) report revocation status." },
  { d:"General Security Concepts", q:"A policy stating mandatory rules of behavior is a…", o:["Guideline","Directive control","Procedure","Baseline image"], a:1, e:"Directive controls mandate behavior (e.g., policy)." },
  { d:"General Security Concepts", q:"Which hardware securely stores keys on a single device?", o:["HSM","TPM","NIC","UPS"], a:1, e:"A TPM stores keys on a device; an HSM is a separate appliance." },
  { d:"General Security Concepts", q:"In Zero Trust, the component that decides access is the…", o:["Policy engine","Switch","Load balancer","DNS server"], a:0, e:"The policy engine makes access decisions." },
  { d:"General Security Concepts", q:"Which change-management item must exist before implementing a change?", o:["A press release","Approval and a backout plan","A marketing brief","A sales quote"], a:1, e:"Changes need approval and a rollback plan." },
  /* Threats, Vulnerabilities & Mitigations (+9) */
  { d:"Threats, Vulnerabilities & Mitigations", q:"Phishing via SMS text message is called…", o:["Vishing","Smishing","Whaling","Pharming"], a:1, e:"Smishing is SMS-based phishing." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Which malware encrypts files and demands payment?", o:["Worm","Ransomware","Spyware","Rootkit"], a:1, e:"Ransomware extorts via encryption." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Code that triggers when a condition is met is a…", o:["Logic bomb","Trojan","Keylogger","Botnet"], a:0, e:"A logic bomb fires on a trigger condition." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Injecting scripts that run in a victim's browser is…", o:["SQLi","XSS","CSRF","Buffer overflow"], a:1, e:"Cross-site scripting runs scripts in the browser." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Which influence principle pressures quick action?", o:["Urgency","Familiarity","Social proof","Scarcity"], a:0, e:"Urgency rushes the target into a mistake." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"A self-propagating malware needing no host file is a…", o:["Virus","Worm","Trojan","Macro"], a:1, e:"Worms self-replicate across networks." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Which mitigation only allows approved programs to run?", o:["Application allow list","Open execution","Disabling AV","Full trust"], a:0, e:"Allow-listing permits only approved apps." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Running outdated, unsupported software is which vulnerability?", o:["Zero-day","Legacy/EOL system","Race condition","Misconfiguration"], a:1, e:"EOL/legacy systems no longer receive patches." },
  { d:"Threats, Vulnerabilities & Mitigations", q:"Business Email Compromise typically targets…", o:["Random consumers","Finance/execs to authorize payments","Web servers","IoT devices"], a:1, e:"BEC fraudulently directs payments via exec impersonation." },
  /* Security Architecture (+9) */
  { d:"Security Architecture", q:"Which hides part of data, e.g., showing ****1234?", o:["Tokenization","Masking","Hashing","Encryption"], a:1, e:"Masking obscures portions of data." },
  { d:"Security Architecture", q:"Which detects intrusions but does not block them?", o:["IPS","IDS","WAF","Firewall"], a:1, e:"An IDS alerts; an IPS blocks." },
  { d:"Security Architecture", q:"Provisioning infrastructure via versioned config files is…", o:["IaC","SaaS","VDI","DLP"], a:0, e:"Infrastructure as Code uses versioned definitions." },
  { d:"Security Architecture", q:"Which protects data while it is being processed in memory?", o:["At rest","In transit","In use","Archived"], a:2, e:"Data in use protections include enclaves/secure memory." },
  { d:"Security Architecture", q:"Cloud-delivered network security combining SD-WAN and security is…", o:["SASE","SIEM","SOAR","NAC"], a:0, e:"SASE converges networking and security in the cloud." },
  { d:"Security Architecture", q:"Which design fails to a secure (deny) state on error?", o:["Fail-open","Fail-closed","Open default","TOFU"], a:1, e:"Fail-closed denies on failure." },
  { d:"Security Architecture", q:"Which backup guidance is the 3-2-1 rule?", o:["3 sites, 2 admins, 1 key","3 copies, 2 media, 1 offsite","3 fulls, 2 diffs, 1 inc","3 days, 2 weeks, 1 month"], a:1, e:"3 copies, on 2 media, 1 offsite." },
  { d:"Security Architecture", q:"Which improves availability by spreading load across servers?", o:["Load balancer","Honeypot","WAF","DLP"], a:0, e:"A load balancer distributes traffic for availability." },
  { d:"Security Architecture", q:"Replacing sensitive data with a token redeemable via a vault is…", o:["Masking","Tokenization","Obfuscation","Hashing"], a:1, e:"Tokenization maps to a token via a vault." },
  /* Security Operations (+9) */
  { d:"Security Operations", q:"Which model lets the data owner set permissions?", o:["MAC","DAC","RBAC","ABAC"], a:1, e:"Discretionary Access Control lets owners decide." },
  { d:"Security Operations", q:"Which protects and manages admin/privileged accounts?", o:["PAM","SSO","MFA","DLP"], a:0, e:"Privileged Access Management secures admin accounts." },
  { d:"Security Operations", q:"Which severity scoring system rates vulnerabilities?", o:["CVE","CVSS","CIS","CRL"], a:1, e:"CVSS scores severity; CVE is the identifier." },
  { d:"Security Operations", q:"Which IR phase removes the threat from the environment?", o:["Containment","Eradication","Recovery","Preparation"], a:1, e:"Eradication removes malware/footholds." },
  { d:"Security Operations", q:"A discussion-based IR rehearsal is a…", o:["Tabletop exercise","Penetration test","Red team op","Fuzz test"], a:0, e:"Tabletop exercises walk through scenarios." },
  { d:"Security Operations", q:"Federation/SSO standard built on OAuth 2.0 is…", o:["SAML","OIDC","RADIUS","Kerberos"], a:1, e:"OpenID Connect adds identity to OAuth 2.0." },
  { d:"Security Operations", q:"Endpoint tooling that detects and responds to threats is…", o:["EDR","DLP","WAF","IPAM"], a:0, e:"EDR = Endpoint Detection and Response." },
  { d:"Security Operations", q:"Granting access only for the time needed is…", o:["Standing access","Just-in-time access","Shared accounts","Implicit trust"], a:1, e:"JIT access limits the window of privilege." },
  { d:"Security Operations", q:"Which authentication factor is 'something you have'?", o:["Password","Hardware token","Fingerprint","Security question"], a:1, e:"A token is 'something you have'." },
  /* Program Management (+9) */
  { d:"Program Management", q:"Which lists mandatory technical rules derived from policy?", o:["Standard","Guideline","Procedure","Charter"], a:0, e:"Standards specify mandatory rules." },
  { d:"Program Management", q:"Accepting a risk because mitigation costs more than the loss is…", o:["Avoidance","Acceptance","Transfer","Mitigation"], a:1, e:"Risk acceptance retains the risk knowingly." },
  { d:"Program Management", q:"Which agreement is a non-binding statement of intent?", o:["SLA","MOU","SOW","MSA"], a:1, e:"An MOU expresses intent, often non-binding." },
  { d:"Program Management", q:"Which regulation governs EU personal data privacy?", o:["HIPAA","GDPR","SOX","PCI DSS"], a:1, e:"GDPR governs EU data protection." },
  { d:"Program Management", q:"A black-box pen test means the tester has…", o:["Full knowledge","No prior knowledge","Source code","Admin access"], a:1, e:"Black-box = unknown environment, no prior info." },
  { d:"Program Management", q:"A living record tracking risks, owners, and impact is a…", o:["Risk register","Playbook","Baseline","BIA"], a:0, e:"A risk register tracks identified risks." },
  { d:"Program Management", q:"Under GDPR, the entity deciding why/how data is processed is the…", o:["Processor","Controller","Custodian","Steward"], a:1, e:"The data controller determines purpose/means." },
  { d:"Program Management", q:"Which is the highest-ROI control against social engineering?", o:["Faster CPUs","Security awareness training","More bandwidth","Larger disks"], a:1, e:"Training reduces the human attack surface." },
  { d:"Program Management", q:"Passive reconnaissance differs from active in that it…", o:["Sends probes to targets","Avoids direct interaction with the target","Requires admin rights","Always uses malware"], a:1, e:"Passive recon gathers info without touching the target." }
];
