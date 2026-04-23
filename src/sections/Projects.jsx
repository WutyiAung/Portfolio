import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/personalInfo';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { Code, GitBranch, User } from 'lucide-react';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Featured Projects"
          subtitle="Real-world applications I've built and deployed"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-dark-400">
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary-400">
                    <GitBranch className="w-5 h-5" />
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {project.description.map((desc, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-dark-300 text-sm leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <Button 
                    href={project.github}
                    variant="secondary"
                    className="flex-1"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    href={project.liveDemo}
                    className="flex-1"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>

                {/* Hover effect decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="inline-block">
            <p className="text-dark-300 mb-4">
              Interested in seeing more of my work?
            </p>
            <Button href="#contact">
              Get In Touch
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
