import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Projects: React.FC = () => {
  const projects = [
    {
      id: '1',
      title: 'Startup Idea Evaluator',
      description: 'A collaborative team project that evaluates startup ideas using AI algorithms and market analysis.',
      stack: ['Python', 'AI/ML', 'Team Project'],
      githubLink: '#',
      liveDemo: '#',
    },
    {
      id: '2',
      title: 'Fake News Detector',
      description: 'Built with Streamlit to detect fake news using natural language processing and machine learning.',
      stack: ['Python', 'Streamlit', 'NLP', 'ML'],
      githubLink: '#',
    },
    {
      id: '3',
      title: 'Gmail Automation',
      description: 'Python-based automation tool for managing Gmail operations and email workflows.',
      stack: ['Python', 'Gmail API', 'Automation'],
      githubLink: '#',
    },
    {
      id: '4',
      title: 'SMS Sender',
      description: 'Python application for sending SMS messages with customizable templates and scheduling.',
      stack: ['Python', 'SMS API', 'Automation'],
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <ParticleBackground type="thunderstorm" />
      
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 text-lg">
            Transforming ideas into reality through code
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-6 group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-purple-400/30"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-yellow-400" size={20} />
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.githubLink}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  Code
                </motion.a>
                
                {project.liveDemo && (
                  <motion.a
                    href={project.liveDemo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
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
            <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
            <p className="text-white/80 leading-relaxed">
              I'm constantly working on new projects and learning new technologies. Stay tuned for more exciting developments!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;