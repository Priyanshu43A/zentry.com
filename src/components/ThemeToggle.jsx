// ThemeToggle.jsx
import React from 'react';
import { IoMdSunny , IoMdMoon } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdSunny color="#FFA500" size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdMoon color="#4A4A4A" size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
