import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: personalInfo.linkedin,
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email"
    },
    {
      icon: Phone,
      href: `tel:${personalInfo.phone}`,
      label: "Phone"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-50 to-dark-100" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-primary-600/10 rounded-full filter blur-2xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Brand/About */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-bold text-white">Wutyi Aung</h3>
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  Full Stack Developer building scalable web applications with modern technologies. 
                  Passionate about creating efficient solutions and exceptional user experiences.
                </p>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <nav className="space-y-2">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#skills", label: "Skills" },
                    { href: "#projects", label: "Projects" },
                    { href: "#experience", label: "Experience" },
                    { href: "#contact", label: "Contact" }
                  ].map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      className="block text-dark-400 hover:text-primary-400 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Connect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="flex gap-3 mb-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
                <p className="text-dark-400 text-sm">
                  Let's build something amazing together!
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                className="text-dark-500 text-sm flex items-center gap-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                © {currentYear} Wutyi Aung. All rights reserved.
                <Code className="w-3 h-3 text-primary-400" />
                Built with React & Tailwind CSS
              </motion.p>

              <motion.div
                className="flex items-center gap-6 text-dark-500 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span>{personalInfo.email}</span>
                <span>•</span>
                <span>{personalInfo.phone}</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
