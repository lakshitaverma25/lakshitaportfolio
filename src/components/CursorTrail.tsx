import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const CursorTrail: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Update triangle cursor position
      const cursor = document.body;
      if (cursor) {
        cursor.style.setProperty('--cursor-x', `${e.clientX}px`);
        cursor.style.setProperty('--cursor-y', `${e.clientY}px`);
      }
      
      // Add new sparkle
      const newSparkle: Sparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setSparkles(prev => [...prev, newSparkle]);
    };

    // Clean up old sparkles
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setSparkles(prev => prev.filter(sparkle => now - sparkle.timestamp < 1000));
    }, 100);

    // Add CSS custom properties for cursor position
    document.body.style.setProperty('--cursor-x', '0px');
    document.body.style.setProperty('--cursor-y', '0px');

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ 
              opacity: 1, 
              scale: 0,
              x: sparkle.x - 4,
              y: sparkle.y - 4,
            }}
            animate={{ 
              opacity: 0, 
              scale: [0, 1, 0],
              rotate: 360,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute w-2 h-2 pointer-events-none"
          >
            {/* Shapeless sparkle */}
            <div className="w-1 h-1 bg-orange-400 rounded-full opacity-80" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;