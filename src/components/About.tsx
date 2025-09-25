import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Code, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <User size={120} className="text-gray-600 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional web experiences. 
              With a keen eye for design and a strong foundation in modern web technologies, I strive 
              to build applications that not only look great but also provide exceptional user experiences.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or enjoying a good cup of coffee while brainstorming the next big idea.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Code className="text-blue-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Clean Code</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="text-red-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">User Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="text-amber-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Coffee Lover</span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="text-green-500" size={24} />
                <span className="text-gray-700 dark:text-gray-300">Team Player</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;