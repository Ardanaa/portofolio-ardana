import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-white dark:bg-dark snap-start flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 text-gray-900 dark:text-white tracking-tighter uppercase">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                I am a Front End Engineer with over 2 years of experience, currently building interactive web solutions at <strong className="text-gray-900 dark:text-white">Nodewave</strong>.
              </p>
              <p>
                Previously, I contributed to <strong className="text-gray-900 dark:text-white">Harian Kompas (Kompas.id)</strong> for over 2 years, where I developed key features for the 2024 Election coverage and streamlined editorial workflows using internal tools.
              </p>
              <p>
                I specialize in <strong className="text-gray-900 dark:text-white">Vue.js</strong> and <strong className="text-gray-900 dark:text-white">React</strong>, with a strong focus on Design Systems, Unit Testing, and Web Performance.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {['Vue.js', 'React', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Jest', 'Vite', 'Pinia', 'Redux'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
