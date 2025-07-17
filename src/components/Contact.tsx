import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const connectOptions = [
    {
      name: 'Gmail',
      url: 'mailto:vermalakshita63@gmail.com',
      icon: <Mail size={24} />,
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshita-verma-82b5a8319',
      icon: <Linkedin size={24} />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/lakshitaverma25',
      icon: <Github size={24} />,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lakshita25_lk/',
      icon: <Instagram size={24} />,
      color: 'from-pink-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <ParticleBackground type="fireflies" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Connect with me</h3>
              <p className="text-white/70">Choose your preferred way to get in touch</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {connectOptions.map((option, index) => (
                <motion.a
                  key={option.name}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 bg-gradient-to-r ${option.color} rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {option.icon}
                  {option.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                <p className="text-white/70">I'll get back to you as soon as possible</p>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-4 bg-black/40 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;