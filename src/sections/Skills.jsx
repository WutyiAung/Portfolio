import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/personalInfo';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { Code, Mail, Phone, MapPin } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend", 
      icon: Mail,
      skills: skills.backend,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DevOps",
      icon: Phone,
      skills: skills.devops,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database",
      icon: MapPin,
      skills: skills.database,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader 
          title="Technical Skills"
          subtitle="Technologies I work with to build modern applications"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full group hover:border-primary-500/50 transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Badge className="w-full justify-center">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative element */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300 pointer-events-none`} />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Always Learning
            </h3>
            <p className="text-dark-400 max-w-2xl mx-auto">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced React patterns, system design, and cloud architecture.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
