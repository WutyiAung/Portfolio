import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import Button from '../components/Button';
import ThemeToggle from '../components/ThemeToggle';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-20, 20, -20],
      opacity: 1,
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-mesh">
      {/* Premium animated background gradients */}
      <div className="absolute inset-0 bg-gradient-animated" />
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-accent-purple-500/30 to-accent-pink-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-accent-emerald-500/30 to-accent-amber-500/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.3, 0.5, 0.3],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-accent-purple-400/20 to-transparent rounded-full filter blur-2xl"
        variants={floatingVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-accent-pink-400/20 to-transparent rounded-full filter blur-2xl"
        variants={floatingVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Theme Toggle */}
      <motion.div
        className="absolute top-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ThemeToggle />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto text-center z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8 mt-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 p-1">
              {/* User can replace this with their photo */}
              <div className="w-full h-full rounded-full bg-dark-50 dark:bg-dark-100 flex items-center justify-center overflow-hidden">
                {/* Add your photo to src/assets/ folder and replace with: */}
                <img src="/src/assets/weee.png" alt="Profile" className="w-full h-full object-cover" />
                {/* <span className="text-4xl md:text-5xl font-bold gradient-text-primary">WA</span> */}
              </div>
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-accent-emerald-500 rounded-full border-2 border-dark-50 dark:border-dark-100 animate-pulse" />
          </div>
        </motion.div>
        {/* Premium greeting badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-accent-purple-500/10 backdrop-blur-sm border border-accent-purple-500/20">
            <span className="gradient-text-primary text-sm font-semibold">👋 Hello, I'm</span>
          </div>
        </motion.div>

        {/* Premium name display */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text-primary"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Enhanced title with animation */}
        <motion.div 
          className="mb-8"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-secondary mb-4">
            {personalInfo.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 rounded-full mx-auto" />
        </motion.div>

        {/* Premium tagline */}
        <motion.p 
          className="text-body text-xl md:text-2xl text-text-tertiary mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Enhanced location */}
        <motion.div 
          className="flex items-center justify-center gap-3 text-text-muted mb-16"
          variants={itemVariants}
        >
          <div className="p-2 rounded-lg bg-surface-200/50 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-accent-purple-400" />
          </div>
          <span className="text-sm font-medium">{personalInfo.location}</span>
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          variants={itemVariants}
        >
          <Button href="#projects" className="group">
            <span>View Projects</span>
          </Button>
          <Button variant="secondary" href="#contact">
            Contact Me
          </Button>
        </motion.div>

        {/* Enhanced social links */}
        <motion.div 
          className="flex items-center justify-center gap-6 mb-8"
          variants={itemVariants}
        >
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-accent-purple-500/20 rounded-full blur-lg group-hover:bg-accent-purple-500/40 transition-colors duration-300" />
            <div className="relative p-3 rounded-xl bg-surface-200/50 backdrop-blur-sm border border-accent-purple-500/20 group-hover:border-accent-purple-400/40 transition-all duration-300">
              <Code className="w-6 h-6 text-accent-purple-400" />
            </div>
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-accent-emerald-500/20 rounded-full blur-lg group-hover:bg-accent-emerald-500/40 transition-colors duration-300" />
            <div className="relative p-3 rounded-xl bg-surface-200/50 backdrop-blur-sm border border-accent-emerald-500/20 group-hover:border-accent-emerald-400/40 transition-all duration-300">
              <Code className="w-6 h-6 text-accent-emerald-400" />
            </div>
          </motion.a>
          <motion.a
            href={`mailto:${personalInfo.email}`}
            className="group relative"
            whileHover={{ scale: 1.15, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-accent-pink-500/20 rounded-full blur-lg group-hover:bg-accent-pink-500/40 transition-colors duration-300" />
            <div className="relative p-3 rounded-xl bg-surface-200/50 backdrop-blur-sm border border-accent-pink-500/20 group-hover:border-accent-pink-400/40 transition-all duration-300">
              <Mail className="w-6 h-6 text-accent-pink-400" />
            </div>
          </motion.a>
          <motion.a
            href={`tel:${personalInfo.phone}`}
            className="group relative"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-accent-emerald-500/20 rounded-full blur-lg group-hover:bg-accent-emerald-500/40 transition-colors duration-300" />
            <div className="relative p-3 rounded-xl bg-surface-200/50 backdrop-blur-sm border border-accent-emerald-500/20 group-hover:border-accent-emerald-400/40 transition-all duration-300">
              <Phone className="w-6 h-6 text-accent-emerald-400" />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
