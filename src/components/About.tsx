import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Lightbulb, Heart } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <ParticleBackground type="particles" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/10 to-black z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative group">
                {/* Animated background rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-600/30 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main image container */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-lg bg-gradient-to-br from-cyan-400/10 to-purple-600/10">
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '0.9s' }}></div>
                  </div>
                  
                  {/* Image with enhanced effects */}
                <img 
                  src="/WhatsApp Image 2025-07-18 at 10.10.45 PM.jpeg"
                  alt="Lakshita Verma"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-600/5 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-0 transition-opacity duration-500" />
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/20 group-hover:to-purple-600/20 transition-all duration-500 blur-xl"></div>
              </div>
              
              {/* Enhanced caption */}
              <motion.p 
                className="text-center text-white/80 mt-6 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Lakshita Verma - CSE-AI Student
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Story</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed text-lg">
                Hi, I'm Lakshita Verma — a passionate Computer Science and AI student, currently exploring the world of tech, creativity, and innovation. I enjoy building meaningful digital experiences through smart automation and real-world projects I've worked on during my internship.
              </p>
              
              <p className="text-white/90 leading-relaxed text-lg mt-4">
                When I'm not coding, you'll find me sketching, exploring new ideas, or learning something exciting. I'm not just learning tech — I'm shaping it with heart and purpose.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center"
              >
                <Code className="text-cyan-400 mx-auto mb-2" size={32} />
                <h4 className="text-white font-semibold">Developer</h4>
                <p className="text-white/70 text-sm">Building the future</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/20 to-red-500/20 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-center"
              >
                <Lightbulb className="text-purple-400 mx-auto mb-2" size={32} />
                <h4 className="text-white font-semibold">Innovator</h4>
                <p className="text-white/70 text-sm">Creative solutions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;