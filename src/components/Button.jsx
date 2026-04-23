import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '',
  disabled = false,
  icon = null,
  ...props 
}) => {
  const getButtonClasses = () => {
    const baseClasses = "relative overflow-hidden transition-all duration-300 font-semibold";
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} btn-primary`;
      case 'secondary':
        return `${baseClasses} btn-secondary`;
      case 'ghost':
        return `${baseClasses} btn-ghost`;
      default:
        return `${baseClasses} btn-primary`;
    }
  };

  const Component = href ? 'a' : 'button';

  const motionProps = disabled 
    ? {} 
    : {
        whileHover: { scale: 1.05, y: -2 },
        whileTap: { scale: 0.98 },
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          mass: 0.8
        }
      };

  return (
    <motion.div {...motionProps}>
      <Component
        href={href}
        onClick={onClick}
        disabled={disabled}
        className={`${getButtonClasses()} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${variant === 'primary' ? 'group' : ''}`}
        {...props}
      >
        {/* Shimmer effect for primary buttons */}
        {variant === 'primary' && !disabled && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
        )}
        
        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
          {children}
        </span>

        {/* Glow effect on hover */}
        {variant === 'primary' && !disabled && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 blur-lg opacity-30" />
          </div>
        )}
      </Component>
    </motion.div>
  );
};

export default Button;
