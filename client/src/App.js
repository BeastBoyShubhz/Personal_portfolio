import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Resume from "./components/Resume";

function Home() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1>Welcome to My Portfolio</h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "1.25rem" }}
      >
        Explore my Resume and Projects
      </motion.p>
      <Link
        to="/resume"
        style={{
          marginTop: "2rem",
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0077cc",
          color: "white",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        View My Resume
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem 2rem",
          background: "#0077cc",
          color: "white",
          fontWeight: "bold",
          justifyContent: "center",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/resume" style={{ color: "white", textDecoration: "none" }}>
          Resume
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
