import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-dark snap-start flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 text-gray-900 dark:text-white tracking-tighter uppercase">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Based in Bekasi, Indonesia. Open for opportunities.
          </p>
          
          <div className="flex flex-col items-center gap-4 mb-12">
            <a href="mailto:ardana733@gmail.com" className="text-2xl font-bold text-primary hover:underline">
              ardana733@gmail.com
            </a>
            <a href="tel:+6285156788613" className="text-lg text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
              +62 851 5678 8613
            </a>
          </div>

          <div className="flex justify-center gap-8">
            {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
              <a 
                key={index}
                href="#" 
                className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          
          <footer className="mt-20 text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
