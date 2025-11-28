import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';

const projects = [
  {
    title: "Nodewave",
    period: "Aug 2025 - Present",
    description: "Developing a website for internal R&D processes, and a Chat AI & Dashboard for client companies, ensuring seamless integration from backend to frontend.",
    association: "Associated with Nodewave",
    link: null,
    tech: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "ICM (Interactive Content Management)",
    period: "Feb 2024 - Apr 2025",
    description: "An internal tool for managing Kompas.id article content—from creation to publication—streamlining editorial workflows with various functionalities.",
    association: "Associated with Harian Kompas",
    link: null,
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  },
  {
    title: "Pemilu 2024 Information Center",
    period: "Jan 2024 - Feb 2024",
    description: "A centralized platform for the 2024 General Election, providing comprehensive information on candidates, parties, and voting procedures to educate and inform the public.",
    association: "Associated with Harian Kompas",
    link: "https://www.kompas.id/pemilu-2024",
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  },
  {
    title: "News Audio Feature",
    period: "May 2023 - Sep 2024",
    description: "Text-to-speech integration for news articles, enhancing accessibility and user engagement on the main news platform.",
    association: "Associated with Harian Kompas",
    link: null,
    tech: ["Nuxt", "Vue.js", "Tailwind CSS"]
  }
];

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 snap-start flex flex-col justify-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 md:mb-16 text-gray-900 dark:text-white tracking-tighter">
            SELECTED WORKS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const isLink = !!project.link;
              const Component = isLink ? motion.a : motion.div;
              
              return (
                <Component
                  href={isLink ? project.link! : undefined}
                  target={isLink ? "_blank" : undefined}
                  rel={isLink ? "noopener noreferrer" : undefined}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`group relative flex flex-col p-8 bg-white dark:bg-dark border border-gray-200 dark:border-gray-800 rounded-2xl transition-all duration-300 ${
                    isLink 
                      ? "hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer" 
                      : "hover:border-gray-300 dark:hover:border-gray-700 cursor-default"
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-xs font-mono font-medium text-gray-500 dark:text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      {project.period}
                    </span>
                    {isLink && (
                      <ArrowUpRight className="w-6 h-6 text-gray-300 dark:text-gray-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 ${isLink ? "group-hover:text-primary" : ""} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 mt-auto pt-6 border-t border-gray-100 dark:border-gray-800 group-hover:border-primary/10 transition-colors">
                    <div className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                      <Briefcase className="w-3 h-3 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    {project.association}
                  </div>
                </Component>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
