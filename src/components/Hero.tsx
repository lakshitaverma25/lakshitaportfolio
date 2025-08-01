import React from 'react';
import { motion } from 'framer-motion';
import { Download, Brain, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, glowAnimation } from '../utils/animations';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground type="fire" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 z-10" />
      
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-red-400 bg-clip-text text-transparent"
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
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            "Crafting Digital Dreams into Reality"
          </motion.p>
          
          <motion.div
            className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-lg p-6 mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Brain className="text-yellow-400" size={24} />
              <Zap className="text-cyan-400" size={24} />
            </div>
            <p className="text-white/90 text-lg">
              Thoda rukna padega bhai, AI ko thoda dimaag lagaane do! 🧠⚙️
            </p>
          </motion.div>
          
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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