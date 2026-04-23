import React from 'react';
import { motion } from 'framer-motion';
import { aboutText } from '../data/personalInfo';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const About = () => {
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
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="About Me"
          subtitle="Get to know more about my journey and experience"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <Card className="h-full">
              <div className="space-y-6">
                <p className="text-dark-300 leading-relaxed whitespace-pre-line">
                  {aboutText}
                </p>
                
                {/* Key Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-dark-400 text-sm">Real-world project experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-dark-400 text-sm">Full-stack development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-dark-400 text-sm">Client communication</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-dark-400 text-sm">Cloud deployment</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Visual/Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card>
              <h3 className="text-2xl font-bold gradient-text mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                  <div className="text-dark-500 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">3</div>
                  <div className="text-dark-500 text-sm">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">2</div>
                  <div className="text-dark-500 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
                  <div className="text-dark-500 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold gradient-text mb-4">What I'm Currently Working On</h3>
              <p className="text-dark-400">
                Currently expanding my skills in advanced React patterns, exploring microservices architecture, 
                and working on improving system scalability. I'm also diving deeper into cloud technologies 
                and modern DevOps practices to enhance deployment workflows.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
