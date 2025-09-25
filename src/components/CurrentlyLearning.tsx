import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Figma, Code, Brain } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const CurrentlyLearning: React.FC = () => {
  const learningItems = [
    {
      title: 'Prompt Engineering',
      description: 'Mastering the art of AI interaction and optimization',
      progress: 75,
      icon: <Brain className="text-purple-400" size={32} />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Figma (Advanced)',
      description: 'Creating sophisticated UI/UX designs and prototypes',
      progress: 60,
      icon: <Figma className="text-red-400" size={32} />,
      color: 'from-red-500 to-rose-500',
    },
    {
      title: 'Python Full Stack',
      description: 'Building complete web applications with Python',
      progress: 80,
      icon: <Code className="text-cyan-400" size={32} />,
      color: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="learning" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/40 to-gray-900/60" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Currently Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 text-lg">
            Continuously expanding my knowledge horizon
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learningItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 group hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">Progress</span>
                  <span className="text-white font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="text-cyan-400" size={24} />
              <h3 className="text-2xl font-bold text-white">Learning Philosophy</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              "The beautiful thing about learning is that no one can take it away from you." I believe in continuous growth and staying curious about new technologies and methodologies.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Let's </span>
            <span 
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 30px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.4)',
                filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.6))'
              }}
            >
              Connect!
            </span>
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;