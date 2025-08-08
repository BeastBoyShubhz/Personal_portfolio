import React, { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Summary",
    content: `Cybersecurity graduate with hands-on experience in security operations, IT support, and penetration testing. Skilled in identifying vulnerabilities, managing secure infrastructures, and providing timely technical solutions. Strong command of tools like Nessus, Kali, and Burp Suite Pro for assessments and web app testing. Experienced with incident response, access control evaluation, and server configuration. Quick to adapt and continuously learning in dynamic tech environments.`,
  },
  {
    title: "Core Skills",
    content: `Cybersecurity Operations, Pen testing & Vulnerability Assessment, Incident Response & Threat Detection, Web Application Security (Burp Suite), Risk Assessment and Compliance, Linux Administration, Server & Network Configuration, API & Web App Testing, Version Control & Deployment, Scripting & Automation, Effective Communication & Collaboration, Problem Solving & Analytical Thinking, Mobile Testing, Technical Documentation & Reporting, Bug Reporting & Developer Collaboration, SDLC Awareness.`,
  },
  {
    title: "Education",
    content: `Bachelors in Networking (Cybersecurity), MIT Melbourne, Graduated December 2024.
Relevant Coursework: Advanced Network Security, Ethical Hacking, Cybersecurity Risk Management.
Professional year – ICT, Monash College, Melbourne, VIC (June 2024 - current).`,
  },
  {
    title: "Employment History",
    content: `
Web Alive – Cyber Security Analyst Intern (June 2025 – Current)
- Web app security testing (Burp Suite Pro, manual testing SQL/XSS)
- Data access control checks
- Kali tools for brute forcing & HTTP header analysis
- Nessus scans and server setup on Rocky Linux 9
- API testing with Postman
- Learned React, Node.js, git, GitHub, Vercel

24 Hours Disability Care – IT Help Desk (Sept 2023 – Apr 2025)
- Technical support via phone/email
- Account setup, user management
- Ticketing system with Zendesk
- Activity monitoring and reporting

NAB Security Operations Centre Operator (Feb 2024 – Mar 2025)
- Managed security incident calls
- Ticket prioritization and technical support
- Implemented security protocols

Technetics Consulting – Volunteer Technical Support (Aug 2023 – Jan 2024)
- Network switch installation
- Server setup (Windows Server)
- Firewall deployment and troubleshooting
`,
  },
  {
    title: "Certifications",
    content: `
- Palo Alto Networks Cybersecurity Professional Certification
- Google Crash Course on Python Professional Certification
- ISC2 Security Principles Professional Certification
    `,
  },
  {
    title: "Contact",
    content: `
Email: shubhamsingla2310@gmail.com
Phone: 0416168258
LinkedIn: linkedin.com/in/shubham-singla-66405223b/
Website: shubhamsingla.tech
    `,
  },
];

export default function Resume() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", padding: "0 1rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Shubham (Sam) Singla - Resume</h1>
      {sections.map((section, i) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 16, boxShadow: "0 3px 6px rgba(0,0,0,0.1)" }}
        >
          <button
            onClick={() => toggleSection(i)}
            style={{
              width: "100%",
              padding: "1rem",
              background: "#0077cc",
              color: "white",
              fontSize: "1.25rem",
              border: "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              textAlign: "left",
              outline: "none",
            }}
          >
            {section.title}
          </button>
          {openIndex === i && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              style={{ padding: "1rem", background: "#f9f9f9", whiteSpace: "pre-wrap", fontSize: "1rem", lineHeight: 1.5 }}
            >
              {section.content}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
