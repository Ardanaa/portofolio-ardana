import { motion } from 'framer-motion';
import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  speed?: number;
  className?: string;
  vertical?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left', 
  speed = 20, 
  className = '',
  vertical = false 
}) => {
  const isReverse = direction === 'right' || direction === 'down';
  
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${vertical ? 'flex-col h-full' : 'flex-row w-full'} ${className}`}>
      <motion.div
        className={`flex shrink-0 ${vertical ? 'flex-col min-h-full' : 'min-w-full items-center'}`}
        initial={vertical ? { y: isReverse ? '-100%' : 0 } : { x: isReverse ? '-100%' : 0 }}
        animate={vertical ? { y: isReverse ? 0 : '-100%' } : { x: isReverse ? 0 : '-100%' }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
      <motion.div
        className={`flex shrink-0 ${vertical ? 'flex-col min-h-full' : 'min-w-full items-center'}`}
        initial={vertical ? { y: isReverse ? '-100%' : 0 } : { x: isReverse ? '-100%' : 0 }}
        animate={vertical ? { y: isReverse ? 0 : '-100%' } : { x: isReverse ? 0 : '-100%' }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default Marquee;
