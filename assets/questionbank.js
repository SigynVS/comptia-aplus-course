// Shared CompTIA A+ question bank. Vanilla JS, no dependencies.
// Used by the Final Exam mode. Each item: { d: domain, q: stem, o: options[], a: answerIndex, e: explanation }
window.EXAM_BANK = [
  /* ===== Core 1 · Mobile Devices ===== */
  { d:"Mobile Devices", q:"A user needs email synced across phone, tablet, and laptop. Which protocol?", o:["POP3","IMAP","SMTP","SNMP"], a:1, e:"IMAP syncs mail state across devices; POP3 downloads to one." },
  { d:"Mobile Devices", q:"What RAM form factor do laptops use?", o:["DIMM","SODIMM","ECC DIMM","SIMM"], a:1, e:"SODIMM is the compact laptop memory module." },
  { d:"Mobile Devices", q:"Two M.2 drives look identical but one is far faster. Why?", o:["It is mSATA","It uses NVMe over PCIe","More pins","Larger capacity"], a:1, e:"M.2 can be SATA or NVMe; NVMe uses PCIe lanes and is much faster." },
  { d:"Mobile Devices", q:"After a screen replacement, Wi-Fi is very weak. Most likely cause?", o:["Bad RAM","Disconnected antenna lead in the lid","Failed inverter","Wrong CPU"], a:1, e:"Wi-Fi antennas run through the display lid; a loose lead weakens signal." },
  { d:"Mobile Devices", q:"Which identifier lives on the SIM and identifies the subscriber?", o:["IMEI","IMSI","MAC","PRL"], a:1, e:"IMSI identifies the subscriber; IMEI identifies the device." },
  { d:"Mobile Devices", q:"Which panel emits light per-pixel with true blacks and no backlight?", o:["TN","IPS","VA","OLED"], a:3, e:"OLED pixels self-emit, so no backlight/inverter is needed." },
  { d:"Mobile Devices", q:"Which provides full desktop connectivity (monitors, Ethernet, USB) over one connection?", o:["Port replicator","Docking station","USB hub","KVM"], a:1, e:"A docking station adds full connectivity; a port replicator just multiplies existing ports." },
  { d:"Mobile Devices", q:"Which secure port does IMAP use?", o:["110","143","993","995"], a:2, e:"IMAP over SSL/TLS uses port 993." },
  { d:"Mobile Devices", q:"What disables all wireless radios at once on a mobile device?", o:["Airplane mode","Hotspot","NFC","Bluetooth pairing"], a:0, e:"Airplane mode turns off all radios simultaneously." },

  /* ===== Core 1 · Networking ===== */
  { d:"Networking", q:"Which port does HTTPS use?", o:["80","443","8080","21"], a:1, e:"HTTPS uses TCP 443." },
  { d:"Networking", q:"A host shows 169.254.12.7. What does this indicate?", o:["Valid public IP","APIPA — no DHCP reachable","IPv6 address","Static assignment"], a:1, e:"169.254.x.x is APIPA, assigned when no DHCP server responds." },
  { d:"Networking", q:"Which device forwards within a LAN by MAC address?", o:["Router","Switch","Modem","Firewall"], a:1, e:"A switch operates at Layer 2, forwarding by MAC." },
  { d:"Networking", q:"Which port does RDP use?", o:["22","443","3389","23"], a:2, e:"Remote Desktop Protocol uses TCP 3389." },
  { d:"Networking", q:"Which 2.4 GHz channels do not overlap?", o:["1,5,9","1,6,11","2,7,12","3,6,9"], a:1, e:"Channels 1, 6, and 11 are the standard non-overlapping set." },
  { d:"Networking", q:"Which is connectionless and fast, used by DNS queries and DHCP?", o:["TCP","UDP","ICMP","ARP"], a:1, e:"UDP is connectionless; DNS lookups and DHCP rely on it." },
  { d:"Networking", q:"Which port does SSH use?", o:["22","23","25","53"], a:0, e:"SSH uses TCP 22 (also SFTP/SCP)." },
  { d:"Networking", q:"Which port does DNS use?", o:["53","67","80","110"], a:0, e:"DNS uses port 53." },
  { d:"Networking", q:"Which technology delivers power and data to an access point over one cable?", o:["USB-C","PoE","Thunderbolt","SATA"], a:1, e:"Power over Ethernet powers APs, cameras, and phones over the data cable." },
  { d:"Networking", q:"Which is a private IPv4 range?", o:["8.8.8.0/24","172.16.0.0/12","169.254.0.0/16","224.0.0.0/4"], a:1, e:"172.16.0.0/12 is private (also 10.0.0.0/8 and 192.168.0.0/16)." },

  /* ===== Core 1 · Hardware ===== */
  { d:"Hardware", q:"Which RAID level uses striping with parity and survives one disk failure?", o:["RAID 0","RAID 1","RAID 5","RAID 10"], a:2, e:"RAID 5 stripes with distributed parity across 3+ disks." },
  { d:"Hardware", q:"A PC loses date/time when unplugged. Replace what?", o:["PSU","CMOS battery","RAM","SATA cable"], a:1, e:"The CR2032 CMOS battery maintains BIOS settings and the clock." },
  { d:"Hardware", q:"Which slot is used by a modern graphics card?", o:["PCIe x1","PCIe x16","PCI","M.2"], a:1, e:"GPUs use PCIe x16 for maximum bandwidth." },
  { d:"Hardware", q:"Which printer type is required for multipart carbon-copy forms?", o:["Laser","Inkjet","Thermal","Impact"], a:3, e:"Impact printers strike the page, enabling multipart forms." },
  { d:"Hardware", q:"Which memory detects and corrects errors, used in servers?", o:["SODIMM","ECC","DDR3","VRAM"], a:1, e:"ECC (Error-Correcting Code) RAM protects data integrity." },
  { d:"Hardware", q:"Which is the fastest mainstream storage interface?", o:["SATA SSD","NVMe over PCIe","7200 RPM HDD","USB 2.0 flash"], a:1, e:"NVMe over PCIe far exceeds SATA speeds." },
  { d:"Hardware", q:"Which RAID level mirrors data across two disks?", o:["RAID 0","RAID 1","RAID 5","RAID 6"], a:1, e:"RAID 1 mirrors for redundancy." },
  { d:"Hardware", q:"Order motherboard form factors largest to smallest.", o:["Mini-ITX > microATX > ATX","ATX > microATX > Mini-ITX","microATX > ATX > Mini-ITX","ATX > Mini-ITX > microATX"], a:1, e:"ATX is largest, then microATX, then Mini-ITX." },
  { d:"Hardware", q:"What is the correct laser imaging step order?", o:["Charging, processing, exposing, developing, transferring, fusing, cleaning","Processing, charging, exposing, developing, transferring, fusing, cleaning","Processing, exposing, charging, developing, fusing, transferring, cleaning","Cleaning, charging, exposing, developing, transferring, fusing, processing"], a:1, e:"Processing, charging, exposing, developing, transferring, fusing, cleaning." },
  { d:"Hardware", q:"RAID 10 requires at least how many disks?", o:["2","3","4","5"], a:2, e:"RAID 10 (mirror + stripe) needs a minimum of four disks." },

  /* ===== Core 1 · Virtualization & Cloud ===== */
  { d:"Virtualization & Cloud", q:"A firm uses Microsoft 365 in-browser, managing only data. Which model?", o:["IaaS","PaaS","SaaS","DaaS"], a:2, e:"SaaS — the provider manages everything; the customer just uses it." },
  { d:"Virtualization & Cloud", q:"Which hypervisor type runs directly on hardware?", o:["Type 1 (bare-metal)","Type 2 (hosted)","Type 3","Container"], a:0, e:"Type 1 (ESXi, Hyper-V) runs directly on hardware." },
  { d:"Virtualization & Cloud", q:"A VM won't start with a virtualization error on a capable CPU. Fix?", o:["Add storage","Enable VT-x/AMD-V in firmware","Reinstall host OS","Switch to Type 1"], a:1, e:"Enable Intel VT-x / AMD-V in BIOS/UEFI." },
  { d:"Virtualization & Cloud", q:"Which characteristic means paying only for resources consumed?", o:["Elasticity","Metered utilization","Multitenancy","High availability"], a:1, e:"Metered/measured utilization is pay-for-use billing." },
  { d:"Virtualization & Cloud", q:"In which model does the customer manage the OS and apps on provider VMs?", o:["SaaS","PaaS","IaaS","FaaS"], a:2, e:"IaaS provides raw infrastructure; the customer manages OS and apps." },
  { d:"Virtualization & Cloud", q:"What lets you roll a VM back to a prior known-good state?", o:["Snapshot","Hypervisor","Image","Elasticity"], a:0, e:"A snapshot captures VM state for rollback." },
  { d:"Virtualization & Cloud", q:"Which deployment model mixes public and private cloud?", o:["Community","Hybrid","Public","Private"], a:1, e:"Hybrid combines public and private cloud." },
  { d:"Virtualization & Cloud", q:"Which Type 2 hypervisor runs on a technician's desktop OS?", o:["ESXi","VMware Workstation / VirtualBox","Hyper-V Server","Xen bare-metal"], a:1, e:"Type 2 hypervisors run atop a host OS." },

  /* ===== Core 1 · HW & Network Troubleshooting ===== */
  { d:"HW/Network Troubleshooting", q:"What is the FIRST step of the troubleshooting methodology?", o:["Establish a theory","Identify the problem","Document outcome","Verify functionality"], a:1, e:"Step 1: identify the problem (gather info, back up data, note changes)." },
  { d:"HW/Network Troubleshooting", q:"Immediately after establishing a theory, what comes next?", o:["Document findings","Test the theory","Preventive measures","Escalate"], a:1, e:"Step 3: test the theory to determine the cause." },
  { d:"HW/Network Troubleshooting", q:"A hard drive emits rhythmic clicking. Priority action?", o:["Defragment","Back up data immediately","Update driver","Run chkdsk repeatedly"], a:1, e:"Clicking signals mechanical failure — back up now." },
  { d:"HW/Network Troubleshooting", q:"A laptop display is very dim but faintly visible. Most likely cause?", o:["Dead GPU","Backlight/inverter or brightness/power","Corrupt OS","Bad RAM"], a:1, e:"A faint image points to backlight/inverter or power, not the GPU." },
  { d:"HW/Network Troubleshooting", q:"A swollen tablet battery is found. What do you do?", o:["Keep using it","Puncture to release pressure","Stop use and replace it","Charge fully first"], a:2, e:"A swollen battery is a hazard — stop use, replace, never puncture." },
  { d:"HW/Network Troubleshooting", q:"A PC repeatedly shuts down after running a while. Likely cause?", o:["DNS misconfig","Overheating or failing PSU","Wrong subnet mask","Dead pixels"], a:1, e:"Intermittent shutdowns under load suggest overheating or a failing PSU." },
  { d:"HW/Network Troubleshooting", q:"What is the LAST step of the methodology?", o:["Verify functionality","Document findings, actions, outcomes","Test the theory","Implement the solution"], a:1, e:"Step 6: document findings, actions, and outcomes." },
  { d:"HW/Network Troubleshooting", q:"Which tool locates a specific cable within a bundle?", o:["Loopback plug","Toner probe","Multimeter","Crimper"], a:1, e:"A toner probe traces/identifies a cable run." },

  /* ===== Core 2 · Operating Systems ===== */
  { d:"Operating Systems", q:"Which command scans and repairs protected Windows system files?", o:["chkdsk /r","sfc /scannow","diskpart","gpupdate"], a:1, e:"sfc /scannow is the System File Checker." },
  { d:"Operating Systems", q:"A user can't join an AD domain on their Windows edition. Which edition?", o:["Pro","Enterprise","Home","Pro for Workstations"], a:2, e:"Windows Home can't join a domain." },
  { d:"Operating Systems", q:"Which file system handles files over 4 GB on removable media broadly?", o:["FAT32","exFAT","ext4","HFS+"], a:1, e:"FAT32 caps files at 4 GB; exFAT removes that limit." },
  { d:"Operating Systems", q:"Which partition style supports >2 TB disks and 128 partitions?", o:["MBR","GPT","FAT","Dynamic"], a:1, e:"GPT supports large disks and many partitions (requires UEFI)." },
  { d:"Operating Systems", q:"Which command clears the local DNS cache?", o:["ipconfig /renew","ipconfig /flushdns","nslookup","netstat -a"], a:1, e:"ipconfig /flushdns clears cached DNS records." },
  { d:"Operating Systems", q:"Which macOS feature provides full-disk encryption?", o:["Time Machine","Gatekeeper","FileVault","Spotlight"], a:2, e:"FileVault encrypts the macOS startup disk." },
  { d:"Operating Systems", q:"Which snap-in manages partitions and volumes?", o:["devmgmt.msc","diskmgmt.msc","services.msc","eventvwr.msc"], a:1, e:"diskmgmt.msc is Disk Management." },
  { d:"Operating Systems", q:"Which utility configures boot and startup options?", o:["regedit","msconfig","dxdiag","resmon"], a:1, e:"msconfig is System Configuration." },
  { d:"Operating Systems", q:"Which Linux command changes file permissions?", o:["chown","chmod","grep","ps"], a:1, e:"chmod changes permissions; chown changes ownership." },

  /* ===== Core 2 · Security ===== */
  { d:"Security", q:"After verifying malware, what is the NEXT step?", o:["Educate the user","Quarantine the system","Re-enable System Restore","Run Windows Update"], a:1, e:"Step 2: quarantine the system before remediation." },
  { d:"Security", q:"Which malware self-replicates across a network with no host file?", o:["Virus","Worm","Trojan","Keylogger"], a:1, e:"A worm self-propagates; a virus needs a host and user action." },
  { d:"Security", q:"Which wireless security protocol is current best practice?", o:["WEP","WPA","WPA2","WPA3"], a:3, e:"WPA3 (SAE) is the strongest current standard." },
  { d:"Security", q:"A sensitive drive is permanently decommissioned. Best action?", o:["Quick format","Recycle Bin","Physical destruction (shred/degauss)","Rename partition"], a:2, e:"Permanent disposal of sensitive data requires physical destruction." },
  { d:"Security", q:"An attacker mimics a coffee shop's Wi-Fi SSID to capture traffic. This is?", o:["Tailgating","Evil twin","Shoulder surfing","Dumpster diving"], a:1, e:"A rogue AP impersonating a legit SSID is an evil twin." },
  { d:"Security", q:"Which Windows feature encrypts the whole drive, often with a TPM?", o:["EFS","BitLocker","Defender","UAC"], a:1, e:"BitLocker provides full-disk encryption; EFS encrypts files." },
  { d:"Security", q:"Following an authorized person through a secure door is called?", o:["Phishing","Tailgating","Spoofing","Vishing"], a:1, e:"Tailgating/piggybacking is physical unauthorized entry." },
  { d:"Security", q:"What is the THIRD malware-removal step (Windows)?", o:["Quarantine","Disable System Restore","Educate user","Schedule scans"], a:1, e:"Step 3: disable System Restore before remediation." },
  { d:"Security", q:"A targeted phishing email aimed at a company executive is called?", o:["Whaling","Smishing","Pharming","Vishing"], a:0, e:"Whaling targets high-value executives." },
  { d:"Security", q:"To safely REUSE a drive, what is appropriate?", o:["Shred it","Secure erase / wipe","Degauss it","Incinerate it"], a:1, e:"Reuse → wipe/secure erase; disposal → physical destruction." },

  /* ===== Core 2 · Software Troubleshooting ===== */
  { d:"Software Troubleshooting", q:"A PC BSODs right after a new GPU driver. BEST first action?", o:["Reinstall Windows","Roll back the driver / Safe Mode","Replace motherboard","Reset BIOS"], a:1, e:"Least-invasive first: roll back the driver." },
  { d:"Software Troubleshooting", q:"A browser keeps redirecting and the home page changed. Cause?", o:["Failing RAM","Malware","Dead CMOS battery","Bad monitor cable"], a:1, e:"Redirects and a hijacked home page are classic malware." },
  { d:"Software Troubleshooting", q:"Which tool finds a process consuming excessive CPU?", o:["Disk Management","Task Manager","Device Manager","Registry Editor"], a:1, e:"Task Manager shows per-process CPU/memory." },
  { d:"Software Troubleshooting", q:"A phone battery drains fast after installing an app. Check first?", o:["Replace screen","Identify/remove the rogue app","Factory reset now","Buy new phone"], a:1, e:"Find the offending app before drastic steps." },
  { d:"Software Troubleshooting", q:"Which command repairs the Windows image when sfc fails?", o:["chkdsk","DISM","format","gpupdate"], a:1, e:"DISM repairs the Windows component store/image." },
  { d:"Software Troubleshooting", q:"A new app drives a spike in mobile data usage. This suggests?", o:["Normal behavior","Leaked data / malware","Failing battery","Weak signal"], a:1, e:"Unexpected data tied to a new app suggests leaked data/malware." },
  { d:"Software Troubleshooting", q:"What is the guiding principle when choosing an OS fix?", o:["Always reinstall","Choose the least invasive effective fix","Replace hardware first","Reset the BIOS"], a:1, e:"Try restore points/driver rollback before a full reinstall." },
  { d:"Software Troubleshooting", q:"A mobile app crashes on launch. First steps?", o:["Factory reset","Force-stop, clear cache/data, update, reinstall","Replace battery","Swap SIM"], a:1, e:"Clear cache/data and reinstall before drastic measures." },

  /* ===== Core 2 · Operational Procedures ===== */
  { d:"Operational Procedures", q:"Which must accompany every formal change?", o:["Marketing brief","Rollback (backout) plan","Sales quote","Press release"], a:1, e:"Changes require approval and a rollback plan." },
  { d:"Operational Procedures", q:"A differential backup restores from which sets?", o:["Only the differential","Last full + last differential","Every incremental","Only the full"], a:1, e:"Differential restore = last full + most recent differential." },
  { d:"Operational Procedures", q:"When should you NOT wear an anti-static wrist strap?", o:["Installing RAM","Servicing a CRT or PSU","Replacing an SSD","Seating a GPU"], a:1, e:"High-voltage devices can discharge through a grounded strap." },
  { d:"Operational Procedures", q:"Which document covers safe handling/disposal of toner?", o:["EULA","SDS/MSDS","AUP","SLA"], a:1, e:"The Safety Data Sheet covers hazardous-material handling." },
  { d:"Operational Procedures", q:"What does the 3-2-1 backup rule specify?", o:["3 servers, 2 admins, 1 site","3 copies, 2 media types, 1 offsite","3 fulls, 2 incrementals, 1 differential","3 days, 2 weeks, 1 month"], a:1, e:"3 copies, on 2 media types, with 1 offsite." },
  { d:"Operational Procedures", q:"What preserves evidence integrity during an incident?", o:["Deleting logs","Chain of custody documentation","Formatting the drive","Emailing it to yourself"], a:1, e:"Chain of custody documents who handled evidence and when." },
  { d:"Operational Procedures", q:"An incremental backup captures what?", o:["Everything","Changes since the last backup of any type","Changes since the last full","Nothing"], a:1, e:"Incremental = changes since the last backup of any type." },
  { d:"Operational Procedures", q:"Which governs how software may be used?", o:["SDS","EULA","PII","UPS"], a:1, e:"The End-User License Agreement governs software use." },
  { d:"Operational Procedures", q:"What device rides through a brief outage and allows a safe shutdown?", o:["Surge suppressor","UPS","Power strip","PoE injector"], a:1, e:"A UPS provides battery backup during outages/brownouts." },

  /* ===== Additional mixed questions ===== */
  { d:"Mobile Devices", q:"Which connector is reversible and can carry data, video, and power?", o:["USB-A","USB-C","Micro-USB","Lightning"], a:1, e:"USB-C is reversible and supports data, DisplayPort Alt Mode, and power delivery." },
  { d:"Networking", q:"Which port does SMTP use to send email?", o:["25","110","143","443"], a:0, e:"SMTP sends mail on port 25 (also 587/465)." },
  { d:"Hardware", q:"Which RAID level offers striping with NO redundancy?", o:["RAID 0","RAID 1","RAID 5","RAID 10"], a:0, e:"RAID 0 stripes for speed but has no fault tolerance." },
  { d:"Operating Systems", q:"Which command checks and repairs file-system errors on a disk?", o:["sfc","chkdsk /f","ipconfig","gpresult"], a:1, e:"chkdsk /f fixes file-system errors (/r also recovers bad sectors)." },
  { d:"Security", q:"Which principle grants users only the access they need?", o:["Defense in depth","Least privilege","Zero trust","Separation of duties"], a:1, e:"Least privilege limits access to the minimum required." },
  { d:"Software Troubleshooting", q:"An app fails to launch after an OS update. Which is a reasonable early fix?", o:["Replace the CPU","Run in compatibility mode / repair the app","Reformat the drive","Replace the PSU"], a:1, e:"Try compatibility mode, run-as-admin, or repair/reinstall before drastic steps." }
];
