import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/personalInfo';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Code, Mail, Phone, MapPin, Briefcase, Calendar, Award, Target } from 'lucide-react';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Experience"
          subtitle="My professional journey and achievements"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-600" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <Card variant="premium" glow={true} className="group hover-lift">
                {/* Header with gradient background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-purple-500/20 to-accent-pink-500/20 rounded-2xl" />
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-xl bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 text-white">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <Badge variant="gradient" glow={true}>
                            Current Role
                          </Badge>
                        </div>
                        
                        <h3 className="text-display text-2xl font-bold text-text-primary mb-2 gradient-text">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-text-secondary mb-4">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-200/50 backdrop-blur-sm border border-accent-purple-500/20">
                          <Calendar className="w-4 h-4 text-accent-purple-400" />
                          <span className="text-sm font-medium text-text-secondary">{exp.period}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-200/50 backdrop-blur-sm border border-accent-emerald-500/20">
                          <MapPin className="w-4 h-4 text-accent-emerald-400" />
                          <span className="text-sm font-medium text-text-secondary">Onsite</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills/Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Technologies & Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "Vue.js", "React", "Node.js", "AWS", "Docker", "Apache2"].map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="gradient" 
                        glow={true}
                        className="tech-badge-gradient"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Responsibilities
                  </h4>
                  <div className="space-y-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="relative">
                          <div className="w-3 h-3 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 rounded-full mt-1" />
                          <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-accent-purple-500 to-accent-pink-500 rounded-full animate-pulse opacity-50" />
                        </div>
                        <div className="flex-1">
                          <p className="text-text-tertiary leading-relaxed group-hover:text-text-secondary transition-colors duration-300">
                            {resp}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievement highlight */}
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-accent-purple-500/10 to-accent-pink-500/10 border border-accent-purple-500/20">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent-purple-400" />
                    <div>
                      <h5 className="font-semibold text-text-primary text-sm">Key Achievement</h5>
                      <p className="text-text-tertiary text-sm mt-1">
                        Successfully deployed multiple production applications with scalable architecture
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Growth Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Continuous Growth
            </h3>
            <p className="text-dark-400 max-w-2xl mx-auto">
              Every project has been an opportunity to learn and grow. From frontend development 
              to backend architecture and deployment, I'm constantly expanding my skill set to deliver 
              better solutions.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
