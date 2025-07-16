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
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-black z-10" />
      
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
          <p className="text-white/70 mt-6 text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                >
                  <Mail className="text-white" size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                I'm always excited to discuss new opportunities, collaborate on projects, or just have a conversation about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80 p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                  <Mail className="text-cyan-400" size={20} />
                  <span>vermalakshita63@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 p-3 bg-black/20 rounded-lg backdrop-blur-sm">
                  <MessageCircle className="text-purple-400" size={20} />
                  <span>Open to collaborations and opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Glassmorphism Contact Form */}
            <form 
              onSubmit={handleSubmit} 
              className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl"
              style={{ backdropFilter: 'blur(20px)' }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative group">
                  <User className="absolute left-3 top-3 text-white/40 group-focus-within:text-cyan-400 transition-colors" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-black/40"
                  />
                </div>
                
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 text-white/40 group-focus-within:text-cyan-400 transition-colors" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-black/40"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <FileText className="absolute left-3 top-3 text-white/40 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 hover:bg-black/40"
                />
              </div>
              
              <div className="relative group">
                <MessageCircle className="absolute left-3 top-3 text-white/40 group-focus-within:text-cyan-400 transition-colors" size={20} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none hover:bg-black/40"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 hover:shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(236, 72, 153, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)'
                }}
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