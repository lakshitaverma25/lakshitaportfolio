import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Settings, Monitor } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-cyan-400" size={32} />,
      skills: ['C', 'C++', 'Python'],
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Frontend',
      icon: <Monitor className="text-purple-400" size={32} />,
      skills: ['HTML', 'CSS'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Tools',
      icon: <Palette className="text-red-400" size={32} />,
      skills: ['Canva', 'Figma'],
      color: 'from-red-500/20 to-rose-500/20',
    },
    {
      title: 'Platforms',
      icon: <Settings className="text-green-400" size={32} />,
      skills: ['Linux'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden perspective-1000">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-transparent to-cyan-900/10 transform-gpu translate-z-10" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20 transform-gpu">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 transform-gpu"
          style={{ transform: 'translateZ(30px)' }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent transform-gpu hover:scale-105 transition-transform duration-300"
              style={{ textShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}>
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full transform-gpu shadow-lg" 
               style={{ boxShadow: '0 5px 15px rgba(6, 182, 212, 0.5)' }} />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 transform-gpu"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                rotateX: -5
              }}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center group hover:shadow-2xl transition-all duration-300 transform-gpu`}
              style={{ 
                transform: `translateZ(${20 + index * 10}px)`,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(6, 182, 212, 0.1)'
              }}
            >
              <div className="mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 transform-gpu">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="space-y-2 transform-gpu">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05, rotateX: 5 }}
                    className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg px-4 py-2 text-white/90 hover:bg-white/10 transition-all duration-300 transform-gpu shadow-lg"
                    style={{ transform: `translateZ(${10 + skillIndex * 5}px)` }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center transform-gpu"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto transform-gpu hover:scale-105 transition-all duration-300 shadow-2xl"
               style={{ 
                 transform: 'translateZ(30px)',
                 boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(6, 182, 212, 0.1)'
               }}>
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-white/80 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and tools. Each project is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;