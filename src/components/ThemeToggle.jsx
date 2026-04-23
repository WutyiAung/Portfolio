import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Code, Mail, Phone } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isLight } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-surface-200/50 backdrop-blur-sm border border-white/20 hover:border-accent-purple-400/40 transition-all duration-300 group"
      whileHover={{ scale: 1.05, rotate: isDark ? 180 : 0 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500/20 to-accent-pink-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon container */}
      <div className="relative z-10">
        {isDark ? (
          // Sun icon for light mode
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-5 h-5 relative">
              {/* Sun rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(0deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(45deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(90deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(135deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(180deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(225deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(270deg) translateY(-8px)' }} />
                <div className="w-1 h-3 bg-accent-amber-400 rounded-full absolute" style={{ transform: 'rotate(315deg) translateY(-8px)' }} />
              </div>
              {/* Sun center */}
              <div className="w-3 h-3 bg-accent-amber-400 rounded-full mx-auto" />
            </div>
          </motion.div>
        ) : (
          // Moon icon for dark mode
          <motion.div
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-5 h-5 relative">
              {/* Moon crescent */}
              <div className="w-4 h-4 bg-accent-purple-400 rounded-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-3 bg-surface-200/50 rounded-full" style={{ transform: 'translate(25%, -25%)' }} />
              </div>
              {/* Stars */}
              <div className="absolute top-0 right-0 w-1 h-1 bg-accent-purple-300 rounded-full" style={{ transform: 'translate(4px, 0px)' }} />
              <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-accent-purple-300 rounded-full" />
              <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-accent-purple-300 rounded-full" />
            </div>
          </motion.div>
        )}
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="px-2 py-1 bg-surface-300 text-text-primary text-xs rounded-md whitespace-nowrap">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
