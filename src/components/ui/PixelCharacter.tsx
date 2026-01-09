import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixelCharacter: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [isWaving, setIsWaving] = useState(false);

  const handleClick = () => {
    setShowChat((prev) => !prev);
    setIsWaving(true);
    setTimeout(() => setIsWaving(false), 500);
  };

  return (
    <div className="relative inline-block mt-8 md:mt-0 select-none">
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap z-20"
          >
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-white p-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] relative">
              <p className="font-['VT323'] text-2xl text-gray-900 dark:text-white leading-none">
                Hello, I'm Ardana!
              </p>
              {/* Pixel Triangle for Chat Bubble Tail */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-r-2 border-b-2 border-gray-900 dark:border-white transform rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isWaving ? {
          rotate: [0, -10, 10, -10, 0],
          y: 0,
          transition: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }
        } : { 
          y: [0, -4, 0],
          rotate: 0,
          transition: { 
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        }}
        onClick={handleClick}
        className="cursor-pointer relative z-10 origin-bottom"
      >
        <img 
          src="/hero-sprite.png" 
          alt="Pixel Character" 
          className="w-50 h-50 object-contain pixelated"
          style={{ imageRendering: 'pixelated' }}
        />
        
        {/* Click Indicator */}
        {!showChat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full animate-ping"
          />
        )}
      </motion.div>
    </div>
  );
};

export default PixelCharacter;
