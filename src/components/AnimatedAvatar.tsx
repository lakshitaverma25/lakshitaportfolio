import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 h-80 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar Container */}
      <motion.div
        className="relative w-full h-full"
        animate={{
          y: isHovered ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Main Avatar Body */}
        <div className="relative z-10 w-full h-full flex flex-col items-center">
          {/* Head */}
          <motion.div
            className="relative w-20 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full mb-2"
            animate={{
              rotate: isHovered ? [0, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
          >
            {/* Hair */}
            <div className="absolute -top-2 -left-2 w-24 h-20 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full" />
            <div className="absolute -top-1 left-2 w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-800 rounded-full" />
            
            {/* Eyes */}
            <motion.div
              className="absolute top-8 left-4 w-2 h-2 bg-black rounded-full"
              animate={{
                scaleY: isHovered ? [1, 0.1, 1] : 1,
              }}
              transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            />
            <motion.div
              className="absolute top-8 right-4 w-2 h-2 bg-black rounded-full"
              animate={{
                scaleY: isHovered ? [1, 0.1, 1] : 1,
              }}
              transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 2 }}
            />
            
            {/* Mouth */}
            <motion.div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-black rounded-full"
              animate={{
                scaleX: isHovered ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Body */}
          <motion.div
            className="w-16 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-t-full relative"
            animate={{
              scaleY: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Arms */}
            <motion.div
              className="absolute -left-6 top-4 w-12 h-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full origin-right"
              animate={{
                rotate: isHovered ? [0, 20, -10, 0] : 0,
              }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
            />
            <motion.div
              className="absolute -right-6 top-4 w-12 h-4 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full origin-left"
              animate={{
                rotate: isHovered ? [0, -20, 10, 0] : 0,
              }}
              transition={{ duration: 1, repeat: isHovered ? Infinity : 0, delay: 0.2 }}
            />
          </motion.div>
          
          {/* Legs */}
          <div className="flex gap-2 mt-1">
            <motion.div
              className="w-6 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"
              animate={{
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
            />
            <motion.div
              className="w-6 h-16 bg-gradient-to-b from-blue-600 to-blue-800 rounded-full"
              animate={{
                rotate: isHovered ? [0, -5, 5, 0] : 0,
              }}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, delay: 0.4 }}
            />
          </div>
          
          {/* Feet */}
          <div className="flex gap-2 mt-1">
            <div className="w-8 h-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full" />
            <div className="w-8 h-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full" />
          </div>
        </div>
        
        {/* Floating Hearts */}
        {isHovered && (
          <>
            <motion.div
              className="absolute top-10 -right-8 text-pink-400 text-xl"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -20 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.div>
            <motion.div
              className="absolute top-16 -left-8 text-purple-400 text-lg"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -15 }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute top-20 right-4 text-cyan-400 text-sm"
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: -10 }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              💫
            </motion.div>
          </>
        )}
      </motion.div>
      
      {/* Speech Bubble */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-800 text-sm font-medium shadow-lg"
        >
          Hi! Let's connect! 👋
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/90" />
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedAvatar;