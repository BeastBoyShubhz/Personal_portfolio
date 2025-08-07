// client/src/App.js
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="app">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👋 Hi, I'm Shubham Singla
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Cybersecurity Analyst | Developer | Tech Explorer
      </motion.p>

      <motion.a
        href="#projects"
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </div>
  );
}

export default App;
