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
  { d:"Network Troubleshooting", q:"Max standard run length for twisted-pair Ethernet?", o:["55 m","100 m","185 m","305 m"], a:1, e:"Twisted-pair Ethernet is limited to 100 m." }
];
