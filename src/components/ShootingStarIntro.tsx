import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShootingStarIntroProps {
  onComplete: () => void;
}

const ShootingStarIntro: React.FC<ShootingStarIntroProps> = ({ onComplete }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  
  const name = "LAKSHITA VERMA";
  const letters = name.split('');

  useEffect(() => {
    // Type each letter with a delay
    const typeWriter = () => {
      if (currentLetterIndex < letters.length) {
        setTimeout(() => {
          setCurrentLetterIndex(prev => prev + 1);
        }, 150); // 150ms delay between each letter
      } else {
        // Show subtitle after name is complete
        setTimeout(() => {
          setShowSubtitle(true);
        }, 500);
        
        // Complete intro after everything is shown
        setTimeout(() => {
          onComplete();
        }, 2500);
      }
    };

    typeWriter();
  }, [currentLetterIndex, letters.length, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center overflow-hidden">
      {/* Professional Name Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="text-6xl md:text-8xl font-bold tracking-wider mb-6">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: index < currentLetterIndex ? 1 : 0.2,
                y: index < currentLetterIndex ? 0 : 30,
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut",
              }}
              className={`inline-block ${
                letter === ' ' ? 'w-4' : ''
              } ${
                index < currentLetterIndex 
                  ? 'bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent'
                  : 'text-gray-700'
              }`}
            >
              {letter}
            </motion.span>
          ))}
          
          {/* Typing cursor */}
          {currentLetterIndex < letters.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-16 md:h-20 bg-cyan-400 ml-2"
            />
          )}
        </div>
        
        {/* Professional subtitle */}
        <AnimatePresence>
          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl text-cyan-300 font-light tracking-wide"
            >
              CSE-AI Student | Tech Explorer
            </motion.div>
          )}
        </AnimatePresence>

        {/* Professional loading indicator */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <div className="w-48 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              />
            </div>
            <p className="text-white/60 text-sm mt-3">Loading Portfolio...</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ShootingStarIntro;