import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedMemeText: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Thoda ruk ja bhai… AI abhi dimaag laga raha hai 🧠⚙️";
  
  useEffect(() => {
    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80); // Typing speed

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-8 px-4"
    >
      <motion.h2
        className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 leading-relaxed"
        style={{
          fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        <span className="inline-block">
          {displayedText}
          <motion.span
            className={`inline-block w-0.5 h-6 md:h-7 lg:h-8 bg-cyan-400 ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
            animate={{
              opacity: showCursor ? 1 : 0,
            }}
            transition={{ duration: 0.1 }}
          />
        </span>
      </motion.h2>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 blur-xl -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default AnimatedMemeText;