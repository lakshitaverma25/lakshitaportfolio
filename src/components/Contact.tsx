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
    <section id="contact" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Image - Team Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-black/90 z-10" />
      
      {/* Additional blend overlay for seamless integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Connect with Me and Social Links */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-left space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-2xl md:text-3xl">Connect <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">with Me</span></span>
            </h2>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white/80 ${link.color} transition-all duration-300 hover:scale-105 hover:bg-white/10`}
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right side - Form (spans 2 columns) */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="lg:col-span-2 w-full max-w-lg ml-auto"
          >
            <form 
              onSubmit={handleSubmit} 
              className="bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4"
            >
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-purple-400 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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