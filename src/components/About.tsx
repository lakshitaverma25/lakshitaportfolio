import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Lightbulb, Heart } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <ParticleBackground type="particles" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-900/80 z-10" />
      
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
                {/* Seamless background glow that merges with portfolio */}
                <div className="absolute -inset-20 bg-gradient-radial from-cyan-400/20 via-cyan-400/10 via-blue-400/5 to-transparent blur-3xl opacity-60"></div>
                <div className="absolute -inset-16 bg-gradient-radial from-cyan-300/15 via-blue-300/8 to-transparent blur-2xl opacity-40"></div>
                
                {/* Subtle floating sparkles that blend naturally */}
                <div className="absolute inset-0">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${15 + (i % 2) * 30}%`,
                        animationDelay: `${i * 0.8}s`,
                        animationDuration: '4s',
                      }}
                    />
                  ))}
                </div>
                
                {/* Main image container */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-cyan-400/30 backdrop-blur-sm bg-gradient-to-br from-cyan-400/5 to-blue-400/5 shadow-xl shadow-cyan-400/20">
                  {/* Image with enhanced effects */}
                  <img 
                    src="/WhatsApp Image 2025-07-18 at 10.10.45 PM.jpeg"
                    alt="Lakshita Verma"
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
                  />
                </div>
                
                {/* Subtle hover enhancement that blends with background */}
                <div className="absolute -inset-12 rounded-full bg-gradient-radial from-cyan-400/0 to-transparent group-hover:from-cyan-400/15 transition-all duration-700 blur-2xl"></div>
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