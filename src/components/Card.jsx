import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  variant = 'default',
  glow = false,
  ...props 
}) => {
  const getCardClasses = () => {
    const baseClasses = "relative overflow-hidden transition-all duration-500";
    
    switch (variant) {
      case 'premium':
        return `${baseClasses} glass-card-premium p-8`;
      case 'glass':
        return `${baseClasses} glass-card p-6`;
      case 'minimal':
        return `${baseClasses} bg-surface-100/30 backdrop-blur-md border border-white/10 rounded-2xl p-6`;
      default:
        return `${baseClasses} glass-card p-6`;
    }
  };

  const motionProps = hover 
    ? {
        whileHover: { 
          y: -8,
          scale: 1.02,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            mass: 1
          }
        },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        },
        initial: { opacity: 0, y: 20 }
      }
    : {
        whileInView: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        },
        initial: { opacity: 0, y: 20 }
      };

  return (
    <motion.div
      className={`${getCardClasses()} ${className} ${glow ? 'hover:shadow-glow-lg' : ''}`}
      {...motionProps}
      {...props}
    >
      {/* Gradient overlay for premium cards */}
      {variant === 'premium' && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-500/5 via-transparent to-accent-pink-500/5 pointer-events-none" />
      )}
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-inherit bg-gradient-to-br from-accent-purple-500/10 to-accent-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover gradient effect */}
      {hover && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-500/10 to-accent-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-inherit" />
      )}
    </motion.div>
  );
};

export default Card;
