import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import PixelCharacter from '../ui/PixelCharacter';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-dark flex flex-col justify-center overflow-hidden pt-20 snap-start">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-8 mb-12 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[2px] w-12 bg-primary" />
            <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              Muhammad Ardana
            </h2>
          </div>
          
          <h1 className="text-[12vw] leading-[0.85] font-black text-gray-900 dark:text-white tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              FRONT END
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-primary"
            >
              DEVELOPER
            </motion.span>
          </h1>
        </motion.div>
      </div>

      {/* Mobile-only Centered Character */}
      <div className="flex-grow flex items-center justify-center md:hidden z-10 w-full">
        <PixelCharacter />
      </div>

      <div className="container mx-auto px-8 mt-auto flex justify-between items-end pb-12 relative z-10">
        <p className="max-w-md text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium hidden md:block">
          Crafting digital experiences with code and passion.
          <br />
          <span className="text-primary">Based in Indonesia.</span>
        </p>
        
        {/* Mobile description placed here or above? Production screenshot shows it at bottom left on desktop. 
            On mobile production screenshot, it's at the bottom too. 
            So I will keep it here but maybe adjust visibility/styling if needed. 
        */}
        <p className="max-w-md text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium md:hidden">
          Crafting digital experiences with code and passion.
          <br />
          <span className="text-primary">Based in Indonesia.</span>
        </p>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-sm font-medium uppercase tracking-widest text-gray-500"
        >
          Scroll
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
