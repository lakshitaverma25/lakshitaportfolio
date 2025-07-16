import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const Footer: React.FC = () => {
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
      color: 'hover:text-red-400',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/lakshita_lk',
      icon: <MessageCircle size={24} />,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <footer className="py-12 bg-black/50 backdrop-blur-lg border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-cyan-400">Lakshita</span>
              <span className="text-purple-400">Verma</span>
            </h3>
            <p className="text-white/70">CSE-AI Student | Tech Explorer</p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-black/40 backdrop-blur-lg border border-white/20 rounded-full text-white/80 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 flex items-center justify-center gap-2">
              Made with <Heart className="text-red-400" size={16} /> by Lakshita Verma
            </p>
            <p className="text-white/40 mt-2 text-sm">
              © 2025 Lakshita Verma. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;