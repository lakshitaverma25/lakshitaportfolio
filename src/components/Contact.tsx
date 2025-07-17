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
      {/* Background with smooth edges */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black" />
        <ParticleBackground type="fireflies" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg" 
                  style={{ filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.3))' }}>
              Connect!
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        {/* Background Image positioned right below the heading */}
        <div className="absolute left-0 right-0 z-10" style={{ top: '200px' }}>
          <div 
            className="w-full h-[700px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
            }}
          >
            {/* Smooth gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
            {/* Smooth edges with gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent via-transparent to-black/80" />
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[700px]">
          <div className="relative w-full max-w-7xl mx-auto z-30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Connect Options */}
              <motion.div
                variants={fadeInLeft}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 space-y-6">
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
                        className={`p-4 bg-gradient-to-r ${option.color} rounded-2xl text-white font-semibold flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-lg`}
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
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-30"
              >
                <form 
                  onSubmit={handleSubmit} 
                  className="relative p-8 space-y-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
                    <p className="text-white/70">I'll get back to you as soon as possible</p>
                  </div>

                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 text-white placeholder-white/60 border border-white/20 rounded-2xl transition-all duration-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 text-white placeholder-white/60 border border-white/20 rounded-2xl transition-all duration-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  
                  {/* Subject Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 text-white placeholder-white/60 border border-white/20 rounded-2xl transition-all duration-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-4 text-white placeholder-white/60 border border-white/20 rounded-2xl transition-all duration-300 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 resize-none"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 text-white"
                    style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                      boxShadow: '0 4px 20px rgba(236, 72, 153, 0.3)'
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 8px 30px rgba(236, 72, 153, 0.5)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={20} />
                    Send
                  </motion.button>
                </form>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;