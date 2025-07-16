import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageCircle, Send } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
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
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-green-900/10 to-black z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-white/70 mt-6 text-lg">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                >
                  <Mail className="text-white" size={24} />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              </div>
              
              <p className="text-white/90 leading-relaxed text-lg mb-6">
                I'm always excited to discuss new opportunities, collaborate on projects, or just have a conversation about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="text-cyan-400" size={20} />
                  <span>vermalakshita63@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
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
            <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3 text-white/50" size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-white/50" size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                  />
                </div>
                
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-white/50" size={20} />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
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