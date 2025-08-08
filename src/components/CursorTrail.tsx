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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
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
            {/* Triangle sparkle */}
            <div className="relative w-full h-full">
              <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-orange-400" />
              <div className="absolute inset-0 bg-white/40 blur-sm" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;