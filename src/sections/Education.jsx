import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/personalInfo';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-10, 10, -10],
      opacity: 1,
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Premium animated background gradients */}
      <div className="absolute inset-0 bg-gradient-animated opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader 
          title="Education"
          subtitle="My academic background and foundational knowledge"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8"
              >
                <Card className="glass-card-premium group relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple-500/5 via-accent-pink-500/5 to-accent-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8">
                    {/* Header with Icon */}
                    <div className="flex items-center justify-center mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 rounded-full blur-xl opacity-50 animate-pulse" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 p-1 flex items-center justify-center">
                          <div className="w-full h-full rounded-full bg-dark-50 dark:bg-dark-100 flex items-center justify-center">
                            <GraduationCap className="w-8 h-8 text-accent-purple-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Degree and University */}
                    <div className="text-center mb-6">
                      <h3 className="text-3xl font-bold gradient-text mb-3">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-accent-purple-400 mb-4">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-lg font-medium">{edu.university}</span>
                      </div>
                      
                      {/* Year and Status */}
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-200/50 backdrop-blur-sm border border-accent-pink-500/20">
                          <Calendar className="w-4 h-4 text-accent-pink-400" />
                          <span className="text-sm font-medium text-text-secondary">{edu.graduationYear}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-200/50 backdrop-blur-sm border border-accent-emerald-500/20">
                          <Award className="w-4 h-4 text-accent-emerald-400" />
                          <span className="text-sm font-medium text-text-secondary">Graduated</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-center mb-8">
                      <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
                        {edu.description}
                      </p>
                    </div>
                    
                    {/* Achievements */}
                    {edu.achievements && (
                      <div className="text-center mb-8">
                        <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider flex items-center justify-center gap-2 mb-4">
                          <Award className="w-4 h-4" />
                          Achievements
                        </h4>
                        <div className="flex flex-wrap justify-center gap-3">
                          {edu.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-emerald-500/20 to-accent-purple-500/20 backdrop-blur-sm border border-accent-emerald-500/30 group-hover:border-accent-emerald-400/40 transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                            >
                              <span className="text-sm font-bold gradient-text">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Key Subjects */}
                    <div className="text-center">
                      <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider flex items-center justify-center gap-2 mb-4">
                        <BookOpen className="w-4 h-4" />
                        Core Subjects
                      </h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {['Software Engineering', 'Databases', 'Algorithms', 'Networking', 'Web Development'].map((subject, idx) => (
                          <motion.div
                            key={idx}
                            className="px-3 py-2 rounded-lg bg-surface-200/50 backdrop-blur-sm border border-accent-purple-500/20 group-hover:border-accent-purple-400/40 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-medium text-text-secondary">{subject}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8 w-20 h-20 bg-gradient-to-br from-accent-purple-500/20 to-accent-pink-500/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-accent-emerald-500/20 to-accent-pink-500/20 rounded-full filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Highlight */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="text-center glass-card-premium">
            <motion.div
              variants={floatingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-accent-purple-500/20 to-accent-pink-500/20 backdrop-blur-sm border border-accent-purple-500/30">
                <Award className="w-8 h-8 text-accent-purple-400" />
              </div>
            </motion.div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Academic Excellence
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Strong foundation in computer science principles with focus on practical software development 
              and modern technologies. Continuous learning and application of theoretical knowledge to real-world projects.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
