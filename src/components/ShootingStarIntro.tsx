import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShootingStarIntroProps {
  onComplete: () => void;
}

const ShootingStarIntro: React.FC<ShootingStarIntroProps> = ({ onComplete }) => {
  const [shootingStarProgress, setShootingStarProgress] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);
  const [writtenLetters, setWrittenLetters] = useState(0);
  
  const name = "LAKSHITA VERMA";
  const letters = name.split('');

  useEffect(() => {
    // Start sparkles immediately
    const timer1 = setTimeout(() => {
      setShowSparkles(true);
    }, 200);

    // Shooting star animation that writes the name
    const shootingStarAnimation = () => {
      const duration = 3000; // 3 seconds for the shooting star
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setShootingStarProgress(progress);
        
        // Write letters as shooting star progresses
        const lettersToShow = Math.floor(progress * letters.length);
        setWrittenLetters(lettersToShow);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Complete the intro after shooting star finishes
          setTimeout(() => {
            onComplete();
          }, 1500);
        }
      };
      
      requestAnimationFrame(animate);
    };

    const timer2 = setTimeout(shootingStarAnimation, 500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [letters.length, onComplete]);

  // Calculate shooting star position
  const shootingStarX = -200 + (shootingStarProgress * (window.innerWidth + 400));
  const shootingStarY = 200 - (shootingStarProgress * 300);
  // Generate random sparkles
  const sparkles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 0.8 + Math.random() * 1.5,
  }));

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Enhanced Shooting Star */}
      <motion.div
        className="absolute w-4 h-4 rounded-full"
        style={{
          left: shootingStarX,
          top: shootingStarY,
          background: 'radial-gradient(circle, #ffffff 0%, #06b6d4 30%, #8b5cf6 60%, transparent 100%)',
          boxShadow: `
            0 0 20px #ffffff,
            0 0 40px #06b6d4,
            0 0 60px #8b5cf6,
            0 0 80px #8b5cf6
          `,
          opacity: shootingStarProgress > 0 ? 1 : 0,
        }}
      >
        {/* Enhanced Multi-layer Trail */}
        <div className="absolute -left-32 top-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white to-cyan-400 opacity-90 transform -translate-y-1/2" />
        <div className="absolute -left-48 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-purple-400/80 opacity-70 transform -translate-y-1/2" />
        <div className="absolute -left-64 top-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-cyan-300/60 to-purple-300/60 opacity-50 transform -translate-y-1/2" />
        <div className="absolute -left-80 top-1/2 w-80 h-0.5 bg-gradient-to-r from-transparent via-cyan-200/40 to-purple-200/40 opacity-30 transform -translate-y-1/2" />
        
        {/* Core bright center */}
        <div className="absolute inset-1 rounded-full bg-white opacity-80" />
        
        {/* Pulsing outer glow */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-40"
        />
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
            className="absolute w-1.5 h-1.5 bg-white rounded-full"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              boxShadow: '0 0 15px #ffffff, 0 0 25px #06b6d4, 0 0 35px #8b5cf6',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Name Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="text-6xl md:text-8xl font-bold tracking-wider">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: index < writtenLetters ? 1 : 0.1,
                y: index < writtenLetters ? 0 : 30,
                scale: index < writtenLetters ? 1 : 0.8,
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut",
              }}
              className={`inline-block ${
                letter === ' ' ? 'w-4' : ''
              } ${
                index < writtenLetters 
                  ? 'bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent'
                  : 'text-gray-700'
              }`}
              style={{
                textShadow: index < writtenLetters 
                  ? '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(6, 182, 212, 0.6), 0 0 90px rgba(168, 85, 247, 0.4)' 
                  : 'none',
                filter: index < writtenLetters 
                  ? 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))' 
                  : 'none',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        {/* Subtitle appears after name is written */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: writtenLetters >= letters.length ? 1 : 0, y: writtenLetters >= letters.length ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-cyan-300 font-light tracking-wide"
        >
          CSE-AI Student | Tech Explorer
        </motion.div>

        {/* Magical particles around completed name */}
        {writtenLetters >= letters.length && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: [0, (Math.random() - 0.5) * 300],
                  y: [0, (Math.random() - 0.5) * 300],
                }}
                transition={{ 
                  duration: 2.5,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute w-2 h-2 bg-gradient-to-r from-white to-cyan-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  boxShadow: '0 0 20px currentColor, 0 0 40px #06b6d4',
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
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
              style={{
                boxShadow: '0 0 10px #06b6d4',
              }}
            />
          ))}
        </div>
        <p className="text-white/60 text-sm mt-2 text-center">Loading Portfolio...</p>
      </motion.div>
    </div>
  );
};

export default ShootingStarIntro;