import React from 'react';
import { motion } from 'framer-motion';
import { Download, Brain, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import AnimatedMemeText from './AnimatedMemeText';
import { fadeInUp, glowAnimation } from '../utils/animations';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ParticleBackground type="fire" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black/40 to-gray-900/60" />
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-purple-400/20 to-red-400/20 rounded-full blur-xl animate-float-reverse" />
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-red-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            style={{
              textShadow: '0 10px 30px rgba(6, 182, 212, 0.3), 0 20px 60px rgba(168, 85, 247, 0.2)',
            }}
            {...fadeInUp}
          >
            Lakshita Verma
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl text-white/90 mb-4 font-light"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            CSE-AI Student | Tech Explorer
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium"
            style={{ 
              textShadow: '0 5px 15px rgba(6, 182, 212, 0.4)'
            }}
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            "Crafting Digital Dreams into Reality"
          </motion.p>
          
          <motion.div
            className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto hover:scale-105 transition-all duration-300 shadow-2xl"
            style={{ 
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(6, 182, 212, 0.1)'
            }}
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <AnimatedMemeText />
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4), 0 10px 20px rgba(168, 85, 247, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 15px 30px rgba(6, 182, 212, 0.3), 0 5px 15px rgba(168, 85, 247, 0.2)'
              }}
              {...glowAnimation}
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;