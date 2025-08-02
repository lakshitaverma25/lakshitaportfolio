import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShootingStarIntroProps {
  onComplete: () => void;
}

const ShootingStarIntro: React.FC<ShootingStarIntroProps> = ({ onComplete }) => {
  const [showName, setShowName] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [currentLetter, setCurrentLetter] = useState(0);
  
  const name = "LAKSHITA VERMA";
  const letters = name.split('');

  useEffect(() => {
    // Start the shooting star animation
    const timer1 = setTimeout(() => {
      setShowName(true);
      setShowSparkles(true);
    }, 500);

    // Start typing letters one by one
    const timer2 = setTimeout(() => {
      const letterInterval = setInterval(() => {
        setCurrentLetter(prev => {
          if (prev >= letters.length - 1) {
            clearInterval(letterInterval);
            // Complete the intro after all letters are shown
            setTimeout(() => {
              onComplete();
            }, 2000);
            return prev;
          }
          return prev + 1;
        });
      }, 150);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [letters.length, onComplete]);

  // Generate random sparkles
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Shooting Star Trail */}
      <motion.div
        initial={{ x: -200, y: 100, opacity: 0 }}
        animate={{ x: window.innerWidth + 200, y: -100, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
        style={{
          boxShadow: '0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 60px #06b6d4',
        }}
      >
        {/* Trail effect */}
        <div className="absolute -left-20 top-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-purple-400 opacity-80" />
        <div className="absolute -left-40 top-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/60 to-purple-300/60 opacity-60" />
        <div className="absolute -left-60 top-0 w-60 h-0.5 bg-gradient-to-r from-transparent via-cyan-200/40 to-purple-200/40 opacity-40" />
      </motion.div>

      {/* Sparkles */}
      <AnimatePresence>
        {showSparkles && sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0], 
              rotate: 360,
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
            }}
            transition={{ 
              duration: sparkle.duration, 
              delay: sparkle.delay,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              boxShadow: '0 0 10px #ffffff, 0 0 20px #ffffff',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Name Animation */}
      <AnimatePresence>
        {showName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <div className="text-6xl md:text-8xl font-bold tracking-wider">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.5 }}
                  animate={{ 
                    opacity: index <= currentLetter ? 1 : 0,
                    y: index <= currentLetter ? 0 : 50,
                    scale: index <= currentLetter ? 1 : 0.5,
                  }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className={`inline-block ${
                    letter === ' ' ? 'w-4' : ''
                  } ${
                    index <= currentLetter 
                      ? 'bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                      : 'text-gray-600'
                  }`}
                  style={{
                    textShadow: index <= currentLetter 
                      ? '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(168, 85, 247, 0.6)' 
                      : 'none',
                    filter: index <= currentLetter 
                      ? 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))' 
                      : 'none',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            {/* Subtitle with delay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl text-cyan-300 font-light tracking-wide"
            >
              CSE-AI Student | Tech Explorer
            </motion.div>

            {/* Magical particles around name */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }, (_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 200],
                    y: [0, (Math.random() - 0.5) * 200],
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 2 + i * 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                  className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    boxShadow: '0 0 15px currentColor',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-cyan-400 rounded-full"
            />
          ))}
        </div>
        <p className="text-white/60 text-sm mt-2 text-center">Loading Portfolio...</p>
      </motion.div>
    </div>
  );
};

export default ShootingStarIntro;