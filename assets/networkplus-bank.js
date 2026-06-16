// CompTIA Network+ (N10-009) question bank. Vanilla JS, no dependencies.
window.EXAM_BANK = [
  /* Domain 1 — Networking Concepts */
  { d:"Networking Concepts", q:"At which OSI layer does a router operate?", o:["Layer 2","Layer 3","Layer 4","Layer 7"], a:1, e:"Routers forward packets by IP at Layer 3." },
  { d:"Networking Concepts", q:"How many usable hosts does a /26 subnet provide?", o:["30","62","126","254"], a:1, e:"/26 = 6 host bits → 2^6 − 2 = 62." },
  { d:"Networking Concepts", q:"Which DNS record maps a name to an IPv6 address?", o:["A","AAAA","CNAME","MX"], a:1, e:"AAAA records resolve to IPv6." },
  { d:"Networking Concepts", q:"Which protocol synchronizes device clocks?", o:["SNMP","NTP","SMTP","DHCP"], a:1, e:"NTP (UDP 123) synchronizes time." },
  { d:"Networking Concepts", q:"What is the PDU at the Data Link layer?", o:["Bit","Frame","Packet","Segment"], a:1, e:"Layer 2 uses frames." },
  { d:"Networking Concepts", q:"Which mask corresponds to a /30 prefix?", o:["255.255.255.0","255.255.255.192","255.255.255.252","255.255.255.128"], a:2, e:"/30 = 255.255.255.252, 2 usable hosts." },
  { d:"Networking Concepts", q:"Which record directs email for a domain?", o:["A","MX","TXT","NS"], a:1, e:"MX records route mail to a mail server." },

  /* Domain 2 — Network Implementation */
  { d:"Network Implementation", q:"Which standard tags VLAN traffic on a trunk?", o:["802.11ac","802.1Q","802.3af","802.1X"], a:1, e:"802.1Q is the VLAN tagging standard." },
  { d:"Network Implementation", q:"Which protocol prevents Layer 2 switching loops?", o:["OSPF","STP","BGP","NAT"], a:1, e:"Spanning Tree Protocol blocks loops." },
  { d:"Network Implementation", q:"Which routing protocol runs between autonomous systems on the internet?", o:["RIP","OSPF","BGP","EIGRP"], a:2, e:"BGP is the internet's path-vector protocol." },
  { d:"Network Implementation", q:"For the longest fiber run, which cable is best?", o:["Multimode","Single-mode","Cat 6a","Coax"], a:1, e:"Single-mode fiber supports the longest distances." },
  { d:"Network Implementation", q:"A switch port assigned to one VLAN for a PC is a(n)…", o:["Trunk port","Access port","Console port","Uplink"], a:1, e:"An access port carries a single VLAN." },
  { d:"Network Implementation", q:"Which bundles physical links for more bandwidth?", o:["STP","LACP","FHRP","DHCP"], a:1, e:"LACP aggregates links." },

  /* Domain 3 — Network Operations */
  { d:"Network Operations", q:"Which metric is the maximum acceptable data loss?", o:["RTO","RPO","MTTR","MTBF"], a:1, e:"RPO is how far back the last recoverable point can be." },
  { d:"Network Operations", q:"An unsolicited device alert on port 162 is a…", o:["Syslog message","SNMP trap","NetFlow record","DNS query"], a:1, e:"SNMP traps are device-initiated (162)." },
  { d:"Network Operations", q:"Which recovery site can take over almost immediately?", o:["Cold site","Warm site","Hot site","Mobile site"], a:2, e:"A hot site is fully provisioned." },
  { d:"Network Operations", q:"Which system correlates logs for security analysis?", o:["IPAM","SIEM","DHCP","STP"], a:1, e:"A SIEM aggregates and correlates logs." },
  { d:"Network Operations", q:"Which metric most affects VoIP quality variation?", o:["Jitter","Throughput","MTBF","RPO"], a:0, e:"Jitter (delay variation) degrades real-time audio." },
  { d:"Network Operations", q:"Which document defines guaranteed service levels?", o:["AUP","SLA","NDA","MOU"], a:1, e:"An SLA specifies service levels." },

  /* Domain 4 — Network Security */
  { d:"Network Security", q:"Which feature blocks a rogue DHCP server?", o:["Port mirroring","DHCP snooping","STP","NAT"], a:1, e:"DHCP snooping trusts only authorized ports." },
  { d:"Network Security", q:"An attacker maps their MAC to the gateway IP to intercept LAN traffic. This is…", o:["DNS poisoning","ARP poisoning","VLAN hopping","MAC flooding"], a:1, e:"ARP poisoning links the attacker MAC to a victim IP." },
  { d:"Network Security", q:"Which standard provides port-based authentication via RADIUS?", o:["802.1Q","802.1X","802.11ax","802.3af"], a:1, e:"802.1X authenticates devices at the port." },
  { d:"Network Security", q:"Which VPN suite operates in tunnel or transport mode?", o:["RDP","IPsec","SNMP","HTTP"], a:1, e:"IPsec secures IP traffic in tunnel/transport mode." },
  { d:"Network Security", q:"Which attack overflows a switch's MAC table?", o:["MAC flooding","DDoS","Evil twin","On-path"], a:0, e:"MAC flooding overwhelms the CAM table." },
  { d:"Network Security", q:"Which mitigation specifically defeats ARP spoofing?", o:["BPDU guard","Dynamic ARP inspection","Root guard","Port aggregation"], a:1, e:"DAI validates ARP against trusted bindings." },

  /* Domain 5 — Network Troubleshooting */
  { d:"Network Troubleshooting", q:"A user can ping 8.8.8.8 but not google.com. The problem is…", o:["Bad cable","DNS resolution","Duplex mismatch","Dead NIC"], a:1, e:"Reaching IP but not name is DNS." },
  { d:"Network Troubleshooting", q:"What is the FIRST troubleshooting step?", o:["Establish a theory","Identify the problem","Document outcome","Verify functionality"], a:1, e:"Step 1 is identify the problem." },
  { d:"Network Troubleshooting", q:"A 1 Gbps link crawls with late collisions. Likely cause?", o:["DNS poisoning","Duplex mismatch","APIPA","Wrong VLAN"], a:1, e:"Duplex mismatch causes slow throughput and late collisions." },
  { d:"Network Troubleshooting", q:"Which tool locates a fault in fiber?", o:["Cable tester","OTDR","Toner probe","Multimeter"], a:1, e:"An OTDR locates faults/measures loss in fiber." },
  { d:"Network Troubleshooting", q:"A workstation shows 169.254.10.5. What failed?", o:["DNS","DHCP","Gateway","NIC driver"], a:1, e:"APIPA appears when no DHCP responds." },
  { d:"Network Troubleshooting", q:"Max standard run length for twisted-pair Ethernet?", o:["55 m","100 m","185 m","305 m"], a:1, e:"Twisted-pair Ethernet is limited to 100 m." },

  /* ===== Expansion to ~15 per domain ===== */
  /* Networking Concepts (+8) */
  { d:"Networking Concepts", q:"At which OSI layer does TLS/SSL primarily operate?", o:["Transport","Session","Presentation","Application"], a:2, e:"Encryption/encoding is the Presentation layer (6)." },
  { d:"Networking Concepts", q:"Which port does HTTPS use?", o:["80","443","8080","21"], a:1, e:"HTTPS uses TCP 443." },
  { d:"Networking Concepts", q:"Which protocol resolves a name to an IP address?", o:["DHCP","DNS","SNMP","NTP"], a:1, e:"DNS resolves names to IPs (port 53)." },
  { d:"Networking Concepts", q:"Which is a private IPv4 range?", o:["8.8.8.0/24","172.16.0.0/12","169.254.0.0/16","224.0.0.0/4"], a:1, e:"172.16.0.0/12 is private." },
  { d:"Networking Concepts", q:"Which record is an alias pointing one name to another name?", o:["A","CNAME","MX","PTR"], a:1, e:"CNAME is a canonical-name alias." },
  { d:"Networking Concepts", q:"Which topology is most common for a modern LAN?", o:["Bus","Ring","Star","Mesh"], a:2, e:"Star (switched) is the common LAN topology." },
  { d:"Networking Concepts", q:"Which transport protocol is connectionless and used by DNS queries?", o:["TCP","UDP","ICMP","ARP"], a:1, e:"UDP is connectionless; DNS lookups use it." },
  { d:"Networking Concepts", q:"A /24 network provides how many usable hosts?", o:["128","254","256","512"], a:1, e:"/24 = 8 host bits → 2^8 − 2 = 254." },
  /* Network Implementation (+9) */
  { d:"Network Implementation", q:"Which Wi-Fi generation corresponds to 802.11ax?", o:["Wi-Fi 4","Wi-Fi 5","Wi-Fi 6","Wi-Fi 7"], a:2, e:"802.11ax is Wi-Fi 6/6E." },
  { d:"Network Implementation", q:"Which non-overlapping 2.4 GHz channels are standard?", o:["1,5,9","1,6,11","2,7,12","3,6,9"], a:1, e:"Channels 1, 6, 11 do not overlap." },
  { d:"Network Implementation", q:"Which connector is used with fiber-optic cabling?", o:["RJ45","LC","BNC","RJ11"], a:1, e:"LC (and SC/ST) are fiber connectors." },
  { d:"Network Implementation", q:"Which routing protocol is link-state and an interior gateway protocol?", o:["RIP","OSPF","BGP","PAT"], a:1, e:"OSPF is a link-state IGP." },
  { d:"Network Implementation", q:"Which provides a redundant default gateway?", o:["STP","FHRP/VRRP","LACP","NAT"], a:1, e:"FHRP (e.g., VRRP) provides gateway redundancy." },
  { d:"Network Implementation", q:"What translates many private IPs to one public IP using ports?", o:["DNS","PAT","STP","ARP"], a:1, e:"PAT (NAT overload) multiplexes via port numbers." },
  { d:"Network Implementation", q:"Which cabling supports 10 Gbps over 100 m of copper?", o:["Cat 5","Cat 5e","Cat 6a","Cat 3"], a:2, e:"Cat 6a supports 10 Gbps to 100 m." },
  { d:"Network Implementation", q:"Which standard delivers power to devices over Ethernet?", o:["802.1Q","802.3af/at (PoE)","802.11ac","802.1X"], a:1, e:"PoE standards (802.3af/at/bt) deliver power over Ethernet." },
  { d:"Network Implementation", q:"Which wireless feature serves multiple clients simultaneously?", o:["MU-MIMO","WEP","NAT","STP"], a:0, e:"MU-MIMO serves multiple users at once." },
  /* Network Operations (+9) */
  { d:"Network Operations", q:"Which metric defines maximum acceptable downtime?", o:["RPO","RTO","MTBF","SLE"], a:1, e:"RTO is the target recovery time." },
  { d:"Network Operations", q:"Which protocol/port polls device status (manager → agent)?", o:["SNMP / 161","Syslog / 514","NTP / 123","FTP / 21"], a:0, e:"SNMP polling uses UDP 161." },
  { d:"Network Operations", q:"Which backup type stores only changes since the last full backup?", o:["Incremental","Differential","Synthetic","Snapshot"], a:1, e:"Differential = changes since the last full." },
  { d:"Network Operations", q:"Which document is a vendor-to-customer service guarantee?", o:["MOU","SLA","NDA","SOW"], a:1, e:"An SLA guarantees service levels." },
  { d:"Network Operations", q:"Which establishes a normal performance reference for comparison?", o:["Baseline","Honeypot","DMZ","VLAN"], a:0, e:"A baseline captures normal behavior." },
  { d:"Network Operations", q:"Which provides battery backup during a power outage?", o:["PDU","UPS","NIC","AP"], a:1, e:"A UPS supplies power through outages." },
  { d:"Network Operations", q:"Which recovery site has space and power but no equipment staged?", o:["Hot","Warm","Cold","Cloud"], a:2, e:"A cold site is a bare facility." },
  { d:"Network Operations", q:"Which tool centralizes log messages on UDP 514?", o:["SNMP","Syslog","NetFlow","DNS"], a:1, e:"Syslog centralizes logs (UDP 514)." },
  { d:"Network Operations", q:"Which change-management element lets you undo a failed change?", o:["Approval","Rollback/backout plan","Impact analysis","Maintenance window"], a:1, e:"A rollback/backout plan reverts a failed change." },
  /* Network Security (+9) */
  { d:"Network Security", q:"Which zone hosts public-facing servers separated from the LAN?", o:["VLAN 1","DMZ/screened subnet","Loopback","Trunk"], a:1, e:"A DMZ isolates public-facing services." },
  { d:"Network Security", q:"Which admits devices only if they meet a security policy?", o:["NAC","NAT","STP","PoE"], a:0, e:"Network Access Control enforces posture before access." },
  { d:"Network Security", q:"Which protects STP by disabling ports receiving unexpected BPDUs?", o:["DHCP snooping","BPDU guard","DAI","Port mirroring"], a:1, e:"BPDU guard shuts ports that receive BPDUs on edge ports." },
  { d:"Network Security", q:"Which is the strongest current Wi-Fi security?", o:["WEP","WPA","WPA2","WPA3"], a:3, e:"WPA3 (SAE) is the strongest." },
  { d:"Network Security", q:"Which secure protocol replaces Telnet for CLI access?", o:["FTP","SSH","HTTP","SNMPv1"], a:1, e:"SSH encrypts remote CLI (port 22)." },
  { d:"Network Security", q:"A rogue AP impersonating a legitimate SSID is a(n)…", o:["Evil twin","On-path","Smurf","Replay"], a:0, e:"An evil twin mimics a real SSID." },
  { d:"Network Security", q:"Which attack denies service by overwhelming a target?", o:["DDoS","ARP poisoning","VLAN hopping","Phishing"], a:0, e:"DDoS floods a target to deny availability." },
  { d:"Network Security", q:"Which limits which MAC addresses can use a switch port?", o:["Port security","Trunking","LACP","Jumbo frames"], a:0, e:"Port security restricts allowed MACs per port." },
  { d:"Network Security", q:"Which VPN style connects two offices permanently?", o:["Client-to-site","Site-to-site","Split tunnel","Always-on user VPN"], a:1, e:"Site-to-site VPNs link networks/offices." },
  /* Network Troubleshooting (+9) */
  { d:"Network Troubleshooting", q:"Which command shows the path packets take to a destination?", o:["ping","traceroute","arp","netstat"], a:1, e:"traceroute/tracert reveals the hop-by-hop path." },
  { d:"Network Troubleshooting", q:"After establishing a theory, what is the NEXT step?", o:["Document","Test the theory","Implement","Verify"], a:1, e:"Test the theory to confirm the cause." },
  { d:"Network Troubleshooting", q:"Two hosts share the same IP and both lose connectivity. This is a…", o:["Duplex mismatch","Duplicate IP","DNS failure","Bad SFP"], a:1, e:"A duplicate IP causes conflicts." },
  { d:"Network Troubleshooting", q:"Which captures and inspects packets for deep analysis?", o:["Cable tester","Protocol analyzer (Wireshark)","Toner probe","Multimeter"], a:1, e:"A protocol analyzer inspects packets." },
  { d:"Network Troubleshooting", q:"Signal bleed between adjacent wire pairs is called…", o:["Attenuation","Crosstalk","Latency","Jitter"], a:1, e:"Crosstalk is interference between pairs." },
  { d:"Network Troubleshooting", q:"Cabling longer than 100 m most likely causes…", o:["Attenuation/signal loss","Higher security","Faster speed","Lower latency"], a:0, e:"Excess length attenuates the signal." },
  { d:"Network Troubleshooting", q:"Which tool identifies a specific cable within a bundle?", o:["Loopback plug","Toner probe","OTDR","Crimper"], a:1, e:"A toner probe traces a cable run." },
  { d:"Network Troubleshooting", q:"A user has no link light on the NIC. First to check?", o:["DNS server","Cable/port and speed-duplex","Default route","Firewall rules"], a:1, e:"No link = physical layer: cable, port, NIC, duplex." },
  { d:"Network Troubleshooting", q:"High latency and packet loss across one ISP hop suggests…", o:["DNS misconfig","Congestion/issue at that hop","Wrong VLAN","Bad subnet mask"], a:1, e:"traceroute pinpointing a slow hop indicates congestion/fault there." }
];
