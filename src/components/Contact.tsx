import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

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

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshita-verma-82b5a8319',
      icon: <Linkedin size={24} />,
      color: 'hover:text-blue-400',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/lakshitaverma25',
      icon: <Github size={24} />,
      color: 'hover:text-gray-400',
    },
    {
      name: 'Email',
      url: 'mailto:vermalakshita63@gmail.com',
      icon: <Mail size={24} />,
      color: 'hover:text-red-400',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lakshita25_lk/',
      icon: <Instagram size={24} />,
      color: 'hover:text-pink-400',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/70 to-gray-900/80" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-2 text-left space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl">Connect <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    style={{ textShadow: '0 5px 15px rgba(168, 85, 247, 0.4)' }}>with Me</span></span>
            </h2>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white/80 ${link.color} transition-all duration-300 hover:scale-105 hover:bg-white/10 shadow-xl`}
                  whileHover={{ 
                    x: 10,
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ 
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 lg:col-start-4 w-full max-w-md ml-auto"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-black/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 space-y-4 shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ 
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 15px 30px rgba(6, 182, 212, 0.1)'
              }}
            >
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300 hover:scale-105 focus:scale-105 shadow-lg"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300 hover:scale-105 focus:scale-105 shadow-lg"
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300 hover:scale-105 focus:scale-105 shadow-lg"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none hover:scale-105 focus:scale-105 shadow-lg"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 15px 30px rgba(168, 85, 247, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3)'
                }}
              >
                <Send size={18} />
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;