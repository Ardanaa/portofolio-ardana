import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-8 py-4 md:py-6 bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 text-gray-900 dark:text-white"
    >
      <div className="text-xl font-bold tracking-widest uppercase">
        Ardana
      </div>
      <ul className="flex space-x-8 text-sm font-medium uppercase tracking-wider">
        <li className="hover:underline underline-offset-4 cursor-pointer">Work</li>
        <li className="hover:underline underline-offset-4 cursor-pointer">About</li>
        <li className="hover:underline underline-offset-4 cursor-pointer">Contact</li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
