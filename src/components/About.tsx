import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Code, Coffee, Sparkles, Brain } from 'lucide-react';
import AnimatedAvatar from './AnimatedAvatar';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="text-cyan-400" size={24} />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code',
    },
    {
      icon: <Brain className="text-purple-400" size={24} />,
      title: 'Problem Solver',
      description: 'Analytical thinking and creative solutions',
    },
    {
      icon: <Heart className="text-red-400" size={24} />,
      title: 'User Experience',
      description: 'Creating delightful user interactions',
    },
    {
      icon: <Coffee className="text-amber-400" size={24} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              style={{ textShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full shadow-lg" 
               style={{ boxShadow: '0 5px 15px rgba(6, 182, 212, 0.5)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            <AnimatedAvatar />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-2xl"
              style={{ 
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(6, 182, 212, 0.1)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-yellow-400" size={24} />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                I'm a passionate CSE-AI student who loves creating beautiful and functional digital experiences. 
                With a keen eye for design and a strong foundation in programming, I strive to build applications 
                that not only look great but also solve real-world problems.
              </p>
              <p className="text-white/80 leading-relaxed">
                Currently exploring the fascinating world of Artificial Intelligence while honing my skills 
                in web development and design. Every project is an opportunity to learn something new and 
                push the boundaries of what's possible.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl p-4 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h4 className="text-white font-semibold">{highlight.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto hover:scale-105 transition-all duration-300 shadow-2xl"
               style={{ 
                 boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(6, 182, 212, 0.1)'
               }}>
            <h3 className="text-2xl font-bold text-white mb-4">Philosophy</h3>
            <p className="text-white/80 leading-relaxed text-lg">
              "Technology is best when it brings people together and solves meaningful problems. 
              I believe in creating digital experiences that are not just functional, but also 
              beautiful, accessible, and impactful."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;