import { motion } from 'framer-motion';
import { User, Briefcase, Mail, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 md:py-6 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 text-gray-900 dark:text-white"
    >
      <div 
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img 
          src="/favicon.png" 
          alt="Ardana Logo" 
          className="w-10 h-10 pixelated"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>
      <ul className="flex space-x-6 md:space-x-8 text-sm font-medium uppercase tracking-wider items-center">
        <li 
          onClick={() => scrollToSection('about')}
          className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
          aria-label="About"
        >
          <User className="w-5 h-5 md:hidden" />
          <span className="hidden md:block hover:underline underline-offset-4">About</span>
        </li>
        <li 
          onClick={() => scrollToSection('experience')}
          className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
          aria-label="Experience"
        >
          <Briefcase className="w-5 h-5 md:hidden" />
          <span className="hidden md:block hover:underline underline-offset-4">Experience</span>
        </li>
        <li 
          onClick={() => scrollToSection('projects')}
          className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
          aria-label="Work"
        >
          <Code className="w-5 h-5 md:hidden" />
          <span className="hidden md:block hover:underline underline-offset-4">Work</span>
        </li>
        <li 
          onClick={() => scrollToSection('contact')}
          className="hover:text-primary transition-colors cursor-pointer flex items-center gap-2"
          aria-label="Contact"
        >
          <Mail className="w-5 h-5 md:hidden" />
          <span className="hidden md:block hover:underline underline-offset-4">Contact</span>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
