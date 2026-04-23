import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  children, 
  className = '',
  variant = 'default',
  glow = false,
  ...props 
}) => {
  const getBadgeClasses = () => {
    const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium";
    
    switch (variant) {
      case 'gradient':
        return `${baseClasses} tech-badge-gradient`;
      case 'minimal':
        return `${baseClasses} inline-flex items-center px-3 py-1 rounded-full text-xs bg-surface-200/50 text-text-secondary border border-white/10 backdrop-blur-sm`;
      default:
        return `${baseClasses} tech-badge`;
    }
  };

  return (
    <motion.span
      className={`${getBadgeClasses()} ${className} ${glow ? 'shadow-glow' : ''}`}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          mass: 0.5
        }
      }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
      
      {/* Badge content */}
      <span className="relative z-10">{children}</span>
      
      {/* Hover glow */}
      {glow && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 blur-md opacity-30" />
        </div>
      )}
    </motion.span>
  );
};

export default Badge;
