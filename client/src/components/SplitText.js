import React, { useState, useEffect } from "react";
import SplitText from "./SplitText";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: "summary",
    title: "Summary",
    text: `Cybersecurity graduate with hands-on experience in security operations, IT support, and penetration testing. Skilled in identifying vulnerabilities, managing secure infrastructures, and providing timely technical solutions. Strong command of tools like Nessus, Kali, and Burp Suite Pro for assessments and web app testing. Experienced with incident response, access control evaluation, and server configuration. Quick to adapt and continuously learning in dynamic tech environments.`,
  },
  {
    id: "skills",
    title: "Core Skills",
    text: `Cybersecurity Operations, Pen testing & Vulnerability Assessment, Incident Response & Threat Detection, Web Application Security (Burp Suite), Risk Assessment and Compliance, Linux Administration, Server & Network Configuration, API & Web App Testing, Version Control & Deployment, Scripting & Automation, Effective Communication & Collaboration, Problem Solving & Analytical Thinking, Mobile Testing, Technical Documentation & Reporting, Bug Reporting & Developer Collaboration, SDLC Awareness.`,
  },
  {
    id: "education",
    title: "Education",
    text: `Bachelors in Networking (Cybersecurity), MIT Melbourne, Graduated December 2024.
Relevant Coursework: Advanced Network Security, Ethical Hacking, Cybersecurity Risk Management.
Professional year – ICT, Monash College, Melbourne, VIC (June 2024 - current).`,
  },
  {
    id: "employment",
    title: "Employment History",
    text: `
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
    id: "certifications",
    title: "Certifications",
    text: `
- Palo Alto Networks Cybersecurity Professional Certification
- Google Crash Course on Python Professional Certification
- ISC2 Security Principles Professional Certification
    `,
  },
  {
    id: "contact",
    title: "Contact",
    text: `
Email: shubhamsingla2310@gmail.com
Phone: 0416168258
LinkedIn: linkedin.com/in/shubham-singla-66405223b/
Website: shubhamsingla.tech
    `,
  },
];

export default function Resume() {
  const [darkMode, setDarkMode] = useState(true);
  const [openId, setOpenId] = useState(null);

  // On mount, open first section by default
  useEffect(() => {
    setOpenId(sections[0].id);
  }, []);

  const toggleSection = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className={darkMode ? "resume-container dark" : "resume-container light"}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1000,
          padding: "0.5rem 1rem",
          background: darkMode ? "#222" : "#eee",
          color: darkMode ? "white" : "black",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
          fontWeight: "bold",
        }}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <aside className="sidebar">
        <nav>
          <ul>
            {sections.map(({ id, title }) => (
              <li key={id}>
                <button
                  className={openId === id ? "active" : ""}
                  onClick={() => toggleSection(id)}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main>
        <h1 className="page-title">Shubham (Sam) Singla - Resume</h1>
        {sections.map(({ id, title, text }) => (
          <section key={id} id={id} className="resume-section">
            <motion.h2
              onClick={() => toggleSection(id)}
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ cursor: "pointer" }}
            >
              {title}
            </motion.h2>

            <AnimatePresence>
              {openId === id && (
                <motion.div
                  className="section-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <SplitText
                    text={text.trim()}
                    className="animated-text"
                    splitType="lines"
                    delay={80}
                    duration={0.5}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    textAlign="left"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        ))}
      </main>

      <style>{`
        /* Container */
        .resume-container {
          display: flex;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          padding: 2rem 1rem;
        }
        .resume-container.dark {
          --bg-color: #121212;
          --text-color: #f0f0f0;
          --accent-color: #0077cc;
          --sidebar-bg: #1e1e1e;
          --btn-bg: #0077cc;
          --btn-text: white;
          --btn-hover-bg: #005fa3;
        }
        .resume-container.light {
          --bg-color: #f9f9f9;
          --text-color: #222;
          --accent-color: #004080;
          --sidebar-bg: #eaeaea;
          --btn-bg: #004080;
          --btn-text: white;
          --btn-hover-bg: #003366;
        }

        main {
          flex: 1;
          max-width: 800px;
          margin-left: 1.5rem;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 900;
          margin-bottom: 2rem;
          text-align: center;
        }

        /* Sidebar */
        .sidebar {
          width: 220px;
          background-color: var(--sidebar-bg);
          border-radius: 8px;
          padding: 1rem;
          position: sticky;
          top: 1rem;
          height: fit-content;
          align-self: flex-start;
          user-select: none;
        }
        .sidebar ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .sidebar li + li {
          margin-top: 1rem;
        }
        .sidebar button {
          width: 100%;
          background: none;
          border: none;
          font-size: 1.1rem;
          color: var(--text-color);
          padding: 0.5rem 1rem;
          text-align: left;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.25s ease;
        }
        .sidebar button:hover {
          background-color: var(--btn-hover-bg);
          color: var(--btn-text);
        }
        .sidebar button.active {
          background-color: var(--btn-bg);
          color: var(--btn-text);
          font-weight: bold;
          box-shadow: 0 0 8px var(--btn-bg);
        }

        /* Sections */
        .resume-section {
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          user-select: none;
          border-bottom: 2px solid var(--accent-color);
          padding-bottom: 0.25rem;
        }
        .section-title:hover {
          color: var(--accent-color);
        }
        .section-content {
          font-size: 1.1rem;
          line-height: 1.5;
          white-space: pre-wrap;
          user-select: text;
          overflow-wrap: break-word;
          padding-left: 1rem;
          border-left: 3px solid var(--accent-color);
        }

        /* Animated text */
        .animated-text {
          display: block;
          width: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .resume-container {
            flex-direction: column;
            padding: 1rem;
          }
          main {
            margin-left: 0;
          }
          .sidebar {
            width: 100%;
            position: relative;
            top: auto;
            display: flex;
            overflow-x: auto;
            border-radius: 8px 8px 0 0;
            margin-bottom: 1rem;
          }
          .sidebar ul {
            display: flex;
            gap: 1rem;
          }
          .sidebar li + li {
            margin-top: 0;
          }
          .sidebar button {
            flex-shrink: 0;
            padding: 0.5rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
