import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Send, FileText } from 'lucide-react';
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
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <ParticleBackground type="fireflies" />
      
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-5">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-sm"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-black/60 z-10" />
      
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

        <div className="flex items-center justify-center min-h-[600px]">
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Main Container */}
            <div className="relative flex items-center justify-center">
              
              {/* Left Side - Gradient Bubbles */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 hidden lg:block">
                {/* Large Purple-Pink Bubble */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 opacity-80 blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #8b5cf6 100%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Medium Orange-Pink Bubble */}
                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-20 left-32 w-60 h-60 rounded-full opacity-70"
                  style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #f59e0b 100%)',
                    filter: 'blur(1px)'
                  }}
                />
                
                {/* Small Pink Bubble */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-10 left-20 w-32 h-32 rounded-full opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
                    filter: 'blur(0.5px)'
                  }}
                />
              </div>

              {/* Contact Form - Center */}
              <motion.div
                variants={fadeInRight}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-30 w-full max-w-lg mx-auto"
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